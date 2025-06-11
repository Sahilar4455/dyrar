<?php
// Close connection if it exists
if (isset($conn)) {
    $conn->close();
}
?>
<?php
session_start();

// Database connection - using PDO
require_once 'db/connection.php'; 

// Admin credentials
$admin_username = 'admin';
$admin_password = 'deyar@123'; // Hashed in production

// Login handling
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    if ($username === $admin_username && $password === $admin_password) {
        $_SESSION['admin_logged_in'] = true;
        header('Location: admin.php');
        exit();
    } else {
        $login_error = "Invalid username or password";
    }
}

// Logout handling
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit();
}

// Check if logged in
$logged_in = isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;

// Date filtering
$where_clause = '';
$params = [];
if ($logged_in && isset($_GET['filter_date']) && !empty($_GET['filter_date'])) {
    $where_clause = " WHERE DATE(created_at) = :filter_date";
    $params[':filter_date'] = $_GET['filter_date'];
}

// Get leads data
$leads = [];
if ($logged_in) {
    try {
        $sql = "SELECT * FROM leads" . $where_clause . " ORDER BY created_at DESC";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
}

// Export to Excel
if ($logged_in && isset($_GET['export'])) {
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=leads_' . date('Y-m-d') . '.csv');
    
    $output = fopen('php://output', 'w');
    
    // Header row
    fputcsv($output, array(
        'ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Country Code',
        'Interested In', 'Property Name', 'Created At', 'Acquisition Timeline',
        'Investment Purpose', 'Location', 'Budget'
    ));
    
    // Data rows
    foreach ($leads as $row) {
        fputcsv($output, $row);
    }
    
    fclose($output);
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leads Admin</title>
    <style>
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    min-height: 100vh;
    position: relative;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
}

/* Login Form */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.login-form {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

.login-form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #2c3e50;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
}

.form-group input {
    width: 100%;
    padding: 12px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    transition: border-color 0.3s;
}

.form-group input:focus {
    border-color: #3498db;
    outline: none;
}

.btn {
    display: inline-block;
    background: #3498db;
    color: #fff;
    border: none;
    padding: 12px 20px;
    cursor: pointer;
    border-radius: 4px;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    transition: all 0.3s;
}

.btn:hover {
    background: #2980b9;
    transform: translateY(-1px);
}

.btn:active {
    transform: translateY(0);
}

.btn-block {
    display: block;
    width: 100%;
}

.error {
    color: #e74c3c;
    margin-bottom: 15px;
    text-align: center;
    font-size: clamp(0.8rem, 1vw, 0.9rem);
}

/* Dashboard */
.header {
    background: #2c3e50;
    color: #fff;
    padding: 15px 0;
    margin-bottom: 30px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: bold;
}

.logout-btn {
    color: #fff;
    text-decoration: none;
    background: #e74c3c;
    padding: 8px 15px;
    border-radius: 4px;
    transition: all 0.3s;
    font-size: clamp(0.8rem, 1vw, 0.9rem);
}

.logout-btn:hover {
    background: #c0392b;
    transform: translateY(-1px);
}

.sidebar {
    width: 250px;
    background: #34495e;
    color: #fff;
    position: fixed;
    height: 100vh;
    padding: 20px 0;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    overflow-y: auto;
}

.sidebar.active {
    transform: translateX(0);
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
}

.sidebar-menu {
    list-style: none;
}

.sidebar-menu li {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s;
}

.sidebar-menu li a {
    color: #fff;
    text-decoration: none;
    display: block;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
}

.sidebar-menu li:hover {
    background: rgba(255, 255, 255, 0.1);
}

.main-content {
    margin-left: 0;
    transition: all 0.3s ease-in-out;
    padding: 20px;
    width: 100%;
    position: relative;
}

.main-content.active {
    transform: translateX(250px);
    width: calc(100% - 250px);
}

.menu-toggle {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    margin-right: 15px;
    transition: transform 0.3s;
    z-index: 1001;
    padding: 5px;
}

.menu-toggle.active {
    transform: rotate(90deg);
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.dashboard-title {
    font-size: clamp(1.3rem, 2vw, 1.8rem);
    color: #2c3e50;
}

.filter-form {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
}

.filter-form input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: clamp(0.8rem, 1vw, 0.9rem);
    min-width: 150px;
}

.leads-table-container {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.leads-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    min-width: 600px;
}

.leads-table th, 
.leads-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-size: clamp(0.8rem, 1vw, 0.9rem);
}

.leads-table th {
    background: #2c3e50;
    color: #fff;
    position: sticky;
    top: 0;
}

.leads-table tr:hover {
    background: #f5f5f5;
}

.no-leads {
    text-align: center;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: clamp(0.9rem, 1.2vw, 1.1rem);
}

/* Close button for sidebar */
.sidebar-close {
    display: none;
    position: absolute;
    right: 15px;
    top: 15px;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
}

/* Overlay for mobile */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.overlay.active {
    opacity: 1;
    visibility: visible;
}

/* Enhanced Responsiveness */
@media (max-width: 480px) {
    .login-form {
        padding: 20px;
    }
    
    .form-group input {
        padding: 10px 8px;
    }
    
    .btn {
        padding: 10px 15px;
    }
    
    .filter-form {
        width: 100%;
    }
    
    .filter-form input {
        width: 100%;
        min-width: unset;
    }
    
    .leads-table th, 
    .leads-table td {
        padding: 8px 10px;
        font-size: 0.8rem;
    }
    
    .header-content {
        padding: 0 10px;
    }
}

@media (max-width: 768px) {
    .sidebar {
        width: 280px;
        transform: translateX(-280px);
    }
    
    .main-content.active {
        transform: translateX(280px);
        width: 100%;
    }
    
    .sidebar-close {
        display: block;
    }
    
    .header-content {
        flex-direction: row;
        text-align: left;
    }
    
    .menu-toggle {
        margin: 0 15px 0 0;
    }
    
    .dashboard-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .filter-form {
        flex-direction: row;
        width: 100%;
    }
}

@media (min-width: 769px) and (max-width: 992px) {
    .sidebar {
        width: 220px;
        transform: translateX(0);
    }
    
    .main-content {
        margin-left: 220px;
        transform: none;
        width: calc(100% - 220px);
    }
    
    .sidebar-close {
        display: none;
    }
    
    .overlay {
        display: none;
    }
}

@media (min-width: 769px) {
    .sidebar {
        transform: translateX(0);
    }
    
    .main-content {
        margin-left: 250px;
        width: calc(100% - 250px);
        transform: none;
    }
    
    .menu-toggle {
        display: none;
    }
    
    .sidebar-close {
        display: none;
    }
}

@media (min-width: 993px) and (max-width: 1200px) {
    .container {
        padding: 20px 30px;
    }
}

@media (min-width: 1201px) {
    .container {
        padding: 20px 40px;
    }
}

/* Print styles */
@media print {
    .sidebar, .menu-toggle, .logout-btn, .filter-form, .sidebar-close, .overlay {
        display: none !important;
    }
    
    .main-content {
        margin-left: 0 !important;
        padding: 10px !important;
        width: 100% !important;
        transform: none !important;
    }
    
    .leads-table {
        box-shadow: none;
    }
    
    .header {
        position: static;
    }
}
</style>
</head>
<body>
    <?php if (!$logged_in): ?>
    <!-- Login Form -->
    <div class="login-container">
        <form class="login-form" method="POST">
            <h2>Admin Login</h2>
            <?php if (isset($login_error)): ?>
                <div class="error"><?php echo $login_error; ?></div>
            <?php endif; ?>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" name="login" class="btn btn-block">Login</button>
        </form>
    </div>
    <?php else: ?>
    <!-- Dashboard -->
    <div class="sidebar" id="sidebar">
        <ul class="sidebar-menu">
            <li><a href="admin.php">Dashboard</a></li>
            <li><a href="admin.php?export=1">Export to Excel</a></li>
            <li><a href="admin.php?logout=1">Logout</a></li>
        </ul>
    </div>
    
    <div class="main-content" id="main-content">
        <header class="header">
            <div class="container header-content">
                <button class="menu-toggle" id="menu-toggle">☰</button>
                <div class="logo">Leads Admin</div>
                <a href="admin.php?logout=1" class="logout-btn">Logout</a>
            </div>
        </header>
        
        <div class="container">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Leads</h1>
                <form class="filter-form" method="GET">
                    <input type="date" name="filter_date" value="<?php echo isset($_GET['filter_date']) ? htmlspecialchars($_GET['filter_date']) : ''; ?>">
                    <button type="submit" class="btn">Filter</button>
                    <?php if (isset($_GET['filter_date'])): ?>
                        <a href="admin.php" class="btn">Clear</a>
                    <?php endif; ?>
                </form>
            </div>
            
            <?php if (!empty($leads)): ?>
                <div class="leads-table-container">
                    <table class="leads-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Interested In</th>
                                <th>Property</th>
                                <th>Timeline</th>
                                <th>Purpose</th>
                                <th>Location</th>
                                <th>Budget</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($leads as $lead): ?>
                                <tr>
                                    <td><?php echo htmlspecialchars($lead['id']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['first_name'] . ' ' . $lead['last_name']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['email']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['country_code'] . ' ' . $lead['phone']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['interested_in']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['property_name']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['acquisition_timeline']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['investment_purpose']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['location']); ?></td>
                                    <td><?php echo htmlspecialchars($lead['budget']); ?></td>
                                    <td><?php echo date('M j, Y g:i a', strtotime($lead['created_at'])); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="no-leads">
                    <p>No leads found<?php echo isset($_GET['filter_date']) ? ' for the selected date' : ''; ?>.</p>
                </div>
            <?php endif; ?>
        </div>
    </div>
    
    <script>
    // Toggle sidebar on mobile
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Add close button to sidebar
    const closeButton = document.createElement('button');
    closeButton.className = 'sidebar-close';
    closeButton.innerHTML = '&times;';
    sidebar.insertBefore(closeButton, sidebar.firstChild);
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    
    closeButton.addEventListener('click', function() {
        sidebar.classList.remove('active');
        mainContent.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        mainContent.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(event.target) && 
            !menuToggle.contains(event.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
    
    // Adjust on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
</script>
    <?php endif; ?>
</body>
</html>
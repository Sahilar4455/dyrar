<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'db/connection.php';

$first_name     = $_POST['first-name'] ?? '';
$last_name      = $_POST['last-name'] ?? '';
$email          = $_POST['Email'] ?? '';
$phone_number   = $_POST['phone-number'] ?? '';
$country_code   = $_POST['phone-number-country-code'] ?? '';
$interested_in  = $_POST['Interested_In_Home'] ?? '';
$property_name  = $_POST['property_name'] ?? '';

// Validation
if (empty($first_name) || empty($last_name) || empty($email) || empty($phone_number) || empty($interested_in)) {
    die('<p style="color:red; font-family:sans-serif;">Please fill in all required fields.</p>');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('<p style="color:red; font-family:sans-serif;">Please enter a valid email address.</p>');
}

try {
    $stmt = $pdo->prepare("
        INSERT INTO leads 
            (first_name, last_name, email, phone, country_code, interested_in, property_name, created_at)
        VALUES 
            (:first_name, :last_name, :email, :phone, :country_code, :interested_in, :property_name, NOW())
    ");

    $stmt->execute([
        ':first_name'     => htmlspecialchars($first_name),
        ':last_name'      => htmlspecialchars($last_name),
        ':email'          => htmlspecialchars($email),
        ':phone'          => htmlspecialchars($phone_number),
        ':country_code'   => htmlspecialchars($country_code),
        ':interested_in'  => htmlspecialchars($interested_in),
        ':property_name'  => htmlspecialchars($property_name)
    ]);

    // HTML Thank You Page
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Thank You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80') no-repeat center center fixed;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: white;
        text-align: center;
        flex-direction: column;
    ">
        <div style="
            background-color: rgba(0, 0, 0, 0.7);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(255,255,255,0.3);
            width: 90%;
            max-width: 600px;
        ">
            <h1 style="font-size: 2.5em; margin-bottom: 20px;">Thank You, <?php echo htmlspecialchars($first_name); ?>!</h1>
            <p style="font-size: 1.2em; margin-bottom: 30px;">
                We’ve received your enquiry. Our team will get in touch with you shortly.
            </p>
            <a href="index.php" style="
                padding: 12px 25px;
                background-color: #00ffd5;
                color: #000;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                transition: background 0.3s ease;
            " onmouseover="this.style.backgroundColor='#00c1a2'" onmouseout="this.style.backgroundColor='#00ffd5'">
                Back to Home
            </a>
        </div>

        <!-- Inline media queries -->
        <style>
            @media (max-width: 768px) {
                h1 {
                    font-size: 2em !important;
                }
                p {
                    font-size: 1em !important;
                }
            }

            @media (max-width: 480px) {
                div {
                    padding: 25px !important;
                }
            }
        </style>
    </body>
    </html>
    <?php

} catch (PDOException $e) {
    die('<p style="color:red; font-family:sans-serif;">Database error: ' . $e->getMessage() . '</p>');
}
?>

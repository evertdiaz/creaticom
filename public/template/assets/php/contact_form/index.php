<?php
if(isset($_POST)) {
    $ver = floatval(phpversion());


    $personal = HTMLSPECIALCHARS($_POST['name']);
    $subject = HTMLSPECIALCHARS($_POST['subject']);
    $msg = HTMLSPECIALCHARS($_POST['message']);
    $FromEmail = HTMLSPECIALCHARS($_POST['email']);
    
    $headers = '';
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .="From: $From <$FromEmail>\n";
    $headers .="Reply-To: <$FromEmail>\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .="Return-Path: <$FromEmail> \n";
    $headers .="X-Sender: <$FromEmail>\n";
    $headers .="X-Mailer: PHP-$ver \n";
    $headers .="X-Priority: 3\n"; //1 UrgentMessage, 3 Normal    

    $message = '<html> 
       <head> 
          <title>Message</title> 
       </head>
       <body>
          <p><strong>Full name:</strong> ' . $personal . '</p>
          <p><strong>E-mail:</strong> ' . $FromEmail . '</p>
          <p><strong>Message:</strong> ' . $msg . '</p>
       </body>
       </html>';
    if (mail('support@studio-themes.com', $subject, $message, $headers)){
        echo 'success';}
    else{
        echo 'fail';}
}
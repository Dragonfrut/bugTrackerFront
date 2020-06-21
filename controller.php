<?php
session_start();

function login(){
    $email = $_POST['email'];
    $password = $_POST['password'];

    //login form action url
    $url="https://marksbugtracker.herokuapp.com/auth/login";
    $postBody = "email=".$email."&password=".$password;


    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_REFERER, $_SERVER['REQUEST_URI']);

    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postBody);
    $result = curl_exec($ch);

    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpcode==200){
        $result = json_decode($result);
        $_SESSION['token'] = $result->token;
        header("Location: /index.php");
    } else {
        $_SESSION['error'] = "login failed";
        header("Location: /login.php");
    }
}

function addBug(){
    echo('add bug');
}

$action = isset($_POST['action'])?$_POST['action']:false;
if (!$action){
    die('Missing action');
}
if ($action=='login'){
    login();
} else if ($action=='addBug'){
    addBug();
} else {
    die('Invalid action');
}


?>

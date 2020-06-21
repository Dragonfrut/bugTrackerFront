<?php
function checkLogin(){
    if(!array_key_exists('token', $_SESSION)){
        header("Location: /login.php");
        die;
    }
}
?>

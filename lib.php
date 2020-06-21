<?php
function checkLogin(){
    if(!array_key_exists('token', $_SESSION)){
        header("Location: /login.php");
        die;
    }
}


function severityDropdown(){
    return " 
        <option value='1'> Mild </option>
        <option value='2'> Medium </option>
    ";
}


?>

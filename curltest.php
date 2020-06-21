<?php

$username = 'erik@northqualicum.com';
$password = 'Passw0rd!';

//login form action url
$url="https://marksbugtracker.herokuapp.com/auth/login";
$postBody = "email=".$username."&password=".$password;


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_REFERER, $_SERVER['REQUEST_URI']);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postBody);
$result = curl_exec($ch);

$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo 'HTTP code: ' . $httpcode.'<br />';

$result = json_decode($result);
echo '<pre>';
print_r($result);
echo '<pre>';
echo 'token:'.$result['token'];

<?php

$recepient = "contact@altitude-ssp.com";
$sitename = "Altitude";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
// $phone = trim($_POST["phone"]);
$msg = trim($_POST["msg"]);
$message = "Name: $name \nEmail: $email \nText: $msg";

$pagetitle = "New message from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json");
require "db.php";

$name    = $_POST['name'] ?? '';
$phone   = $_POST['phone'] ?? '';
$course  = $_POST['course'] ?? '';
$branch  = $_POST['branch'] ?? '';
$message = $_POST['message'] ?? '';

if ($name == "" || $phone == "" || $course == "" || $branch == "") {
    echo json_encode([
        "status" => "error",
        "message" => "Required fields missing"
    ]);
    exit;
}

$sql = "INSERT INTO enquiry_form (name, phone, course, branch, message)
        VALUES (?, ?, ?, ?, ?)";

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "sssss", $name, $phone, $course, $branch, $message);

if (mysqli_stmt_execute($stmt)) {
    echo json_encode([
        "status" => "success",
        "message" => "Enquiry saved"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Database error"
    ]);
}
?>

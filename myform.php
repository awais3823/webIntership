<?php
$servername="localhost";
$username="root";
$password="";
$dbname="weapp";
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
    die("connection failed". mysqli_connect_error());
}
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $fullname=$_POST["name"];
    $mobileNumber=$_POST["mobile"];
    $dateOfBirth=$_POST["birth"];
    $gender=$_POST["gender"];
    $email=$_POST["email"];
    $occupation=$_POST["occupation"];
    $id=$_POST["id"];
    $idnum=$_POST["idnu"];
    $issueDate=$_POST["issue"];
    $issueState=$_POST["issuestate"];
    $issueAuthority=$_POST["issueauthority"];
    $expiryDate=$_POST["expiry"];
    $sql="INSERT INTO users(full_name,date_of_birth,email,mobile_number,gender,occupation,id_type,id_number,issue_authority,issue_date,issue_state, expiry_date)
    VALUES ('$fullname','$dateOfBirth','$email','$mobileNumber','$gender', '$occupation', '$id', '$idnum', '$issueAuthority', '$issueDate', '$issueState', '$expiryDate')";
}
if(mysqli_query($conn,$sql)){
    echo "New record is created successfully";
    }
    else{
        echo "Error: ". $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);


?>
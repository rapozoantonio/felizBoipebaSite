<?php

if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "llassety@gmail.com";
    $email_subject = "Your email subject line";
    
	$error="";
     
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $message = $_POST['message']; // not required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
  if(strlen($message) < 2) {
    $error_message .= 'The Message you entered does not appear to be valid.<br />';
  }
  
  if(strlen($error_message) > 0) {
	$valid="false"; 
	$msg=$error_message; 
	$return_json = '{"valid":"' . $valid . '","msg":"' . $msg . '"}';
	echo $return_json;
	
  } else {
    send_mail($email_to, $email_subject, $first_name, $last_name, $email_from, $telephone, $message);
	$valid="true"; 
	$msg="Message was send succesfully"; 
	$return_json = '{"valid":"' . $valid . '","msg":"' . $msg . '"}';
	echo $return_json;
  }

} 


function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
}
     
function send_mail($email_to, $email_subject, $first_name, $last_name, $email_from, $telephone, $message){
    $email_message = "Form details below.\n\n";
      
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

     
	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers); 
}




?>
 
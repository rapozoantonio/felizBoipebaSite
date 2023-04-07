<?php


do_send($_POST);
		
function do_send($data){

if(isset($data['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "llassety@gmail.com";
    $email_subject = "Your email subject line";
    
	$error="";
    $chekindate = $data['chekindate']; // required
    $chekoutdate = $data['chekoutdate']; // required
    $accommodation = $data['accommodation']; // not required
    $first_name = $data['first_name']; // required
    $last_name = $data['last_name']; // required
    $email_from = $data['email']; // required
    $telephone = $data['telephone']; // not required
    $zip = $data['zip']; // not required
    $address = $data['address']; // not required
    $message = $data['message']; // not required
     
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
  if(strlen($chekindate) < 1) {
    $error_message .= 'The check-in date you entered does not appear to be valid.<br />';
  }
  if(strlen($chekoutdate) < 1) {
    $error_message .= 'The check-out date you entered does not appear to be valid.<br />';
  }
	
  	$ac_er=false;	
  
	$acc="";
	foreach ($accommodation as $k=>$v){
		if (!empty($v)) $acc.=$v."\n"; 
		if ($v<>'0') $ac_er=true;
	}
	
	if ($ac_er==false)  $error_message .= 'Please select at least one accomodation.<br />';
  
  if(strlen($error_message) > 0) {
	$valid="false"; 
	$msg=$error_message; 
	$return_json = '{"valid":"' . $valid . '","msg":"' . $msg . '"}';
	echo $return_json;
	
  } else {
    send_mail($email_to, $email_subject, $first_name, $last_name, $email_from, $chekindate, $chekoutdate, $telephone, $zip, $address, $acc,  $message);
	$valid="true"; 
	$msg="Message was send succesfully"; 
	$return_json = '{"valid":"' . $valid . '","msg":"' . $msg . '"}';
	echo $return_json;
  }

} 
} 

function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
}
     
function send_mail($email_to, $email_subject, $first_name, $last_name, $email_from, $chekindate, $chekoutdate,  $telephone, $zip, $address, $accommodation,  $message){
    $email_message = "Form details below.\n\n";
      
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Zip: ".clean_string($zip)."\n";
    $email_message .= "Address: ".clean_string($address)."\n";
    $email_message .= "chekindate: ".clean_string($chekindate)."\n";
    $email_message .= "chekoutdate: ".clean_string($chekoutdate)."\n";
	$email_message .= "Message: ".clean_string($message)."\n";
    $email_message .= "Accommodation: ".clean_string($accommodation)."\n";
    

     
	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers); 
}




?>
 
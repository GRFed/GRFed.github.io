<?php
    $to = "asgrfed@gmail.com";
    $email = $_POST['email'];

    $err = "";
    if (trim ($_POST['name']) == "" && trim ($_POST['email']) == "" && trim ($_POST['message']) == "" )
        $err = "Заполните все";
    else if (trim ($_POST['name']) == "")
        $err = "Имя не указано";
    else if (!((strpos($email, ".") > 0) && (strpos($email, "@") > 0)))
        $err = "Неправильный e-mail";
    else if (trim ($_POST['message']) == "")
        $err = "Имя не указано";

    if ($err != "") {
        echo $err;
        exit;
    }

    $msg = "Сообщение отправил(а) <b>".$_POST['name']."</b>.<br><b>Текст сообщения:</b><br>".$_POST['message'];

    $subject = "=?utf-8?B?".base64_encode("Заявка с сайта")."?=";

    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $sucess = mail ($to, $subject, $msg, $headers);
    echo $success;
        
        
?>
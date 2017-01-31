<?php
header('Content-Type: text/html; charset = utf-8');
  // извлечь из HTTP-запроса значения переданных параметров
  // и сохранить их в локальных переменных
  $nom = $_POST['nom'];
  $ser = $_POST['ser'];
  $name = $_POST['name'];
  $famil = $_POST['famil'];
  $otch = $_POST['otch'];
  $regad = $_POST['regad'];
  $fakt = $_POST['fakt'];
  $tel = $_POST['tel'];
  $elpost = $_POST['elpost'];
  $inn = $_POST['inn'];
  $job = $_POST['job'];
  $adorg = $_POST['adorg'];
  $sovm = $_POST['sovm'];
  $stag = $_POST['stag'];
  $ocen = $_POST['ocen'];
  $vidan = $_POST['vidan'];
  $chisl = $_POST['chisl'];
  $mes = $_POST['mes'];
  $god = $_POST['god'];
  $code = $_POST['code'];


  // проверить, что пользователь ввел все необходимые данные:
  
  if($nom==''||$ser==''||$famil==''||$name=='' )
  {
    // если данных не хватает, то вывести сообщение об ошибке
    echo '<h1><p align = center><img src="i.gif" alt="">
                                Извините:
                                <img src="i.gif" alt=""></p></h1>';
    echo '<p>Вы должны ввести свою фамилию и ответить на все вопросы</p>';
  }
    else
    {
      
      // показать страницу для загрузки анкеты

    

      echo '<h1 align="center"><img src="" alt="" />
                               Поздравляем!
                               <img src="i.gif" alt="" /></h1>';
      

      // вывести ссылки на сценарии, которые создают сертификаты
      echo '<p>Пожалуйста, щелкните здесь, чтобы загрузить заявление
           в виде файла Microsoft Word.</p>';
      echo '<form action="rtf.php" method="post">';
      echo '<center>
              <input type="image" src="button2.png" border="0">
            </center>';
        
                 
      echo '<input type="hidden" name="famil" value="'.$famil.'">';    
      echo '<input type="hidden" name="otch" value="'.$otch.'">';
      echo '<input type="hidden" name="name" value="'.$name.'">';
         echo '<input type="hidden" name="ser" value="'.$ser.'">';
         echo '<input type="hidden" name="nom" value="'.$nom.'">';
         echo '<input type="hidden" name="regad" value="'.$regad.'">';
         echo '<input type="hidden" name="fakt" value="'.$fakt.'">';
         echo '<input type="hidden" name="tel" value="'.$tel.'">';
         echo '<input type="hidden" name="elpost" value="'.$elpost.'">';
         echo '<input type="hidden" name="inn" value="'.$inn.'">';
         echo '<input type="hidden" name="job" value="'.$job.'">';
         echo '<input type="hidden" name="adorg" value="'.$adorg.'">';
         echo '<input type="hidden" name="sovm" value="'.$sovm.'">';
         echo '<input type="hidden" name="stag" value="'.$stag.'">';
         echo '<input type="hidden" name="ocen" value="'.$ocen.'">';
        echo '<input type="hidden" name="vidan" value="'.$vidan.'">';
        echo '<input type="hidden" name="chisl" value="'.$chisl.'">';
        echo '<input type="hidden" name="mes" value="'.$mes.'">';
        echo '<input type="hidden" name="god" value="'.$god.'">';
        echo '<input type="hidden" name="code" value="'.$code.'">';
      echo '</form>';

     
     }
  

  echo '<p>Пожалуйста, щелкните здесь, чтобы загрузить свою анкету
           в виде файла Microsoft Word.</p>';
      echo '<form action="rtf2.php" method="post">';
      echo '<center>
              <input type="image" src="button.png" border="0">
            </center>';
        
      echo '<input type="hidden" name="famil" value="'.$famil.'">';    
      echo '<input type="hidden" name="otch" value="'.$otch.'">';
      echo '<input type="hidden" name="name" value="'.$name.'">';
         echo '<input type="hidden" name="ser" value="'.$ser.'">';
         echo '<input type="hidden" name="nom" value="'.$nom.'">';
         echo '<input type="hidden" name="regad" value="'.$regad.'">';
         echo '<input type="hidden" name="fakt" value="'.$fakt.'">';
         echo '<input type="hidden" name="tel" value="'.$tel.'">';
         echo '<input type="hidden" name="elpost" value="'.$elpost.'">';
         echo '<input type="hidden" name="inn" value="'.$inn.'">';
         echo '<input type="hidden" name="job" value="'.$job.'">';
         echo '<input type="hidden" name="adorg" value="'.$adorg.'">';
         echo '<input type="hidden" name="sovm" value="'.$sovm.'">';
         echo '<input type="hidden" name="stag" value="'.$stag.'">';
         echo '<input type="hidden" name="ocen" value="'.$ocen.'">';
        echo '<input type="hidden" name="vidan" value="'.$vidan.'">';
        echo '<input type="hidden" name="chisl" value="'.$chisl.'">';
        echo '<input type="hidden" name="mes" value="'.$mes.'">';
        echo '<input type="hidden" name="god" value="'.$god.'">';
        echo '<input type="hidden" name="code" value="'.$code.'">';
      echo '</form>';


?>
<?php

?>

<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title> Заказать дипломную работу </title>
    
    <link rel="stylesheet" href="css/zakaz.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="css/main.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="css/mpage.css" type="text/css" charset="utf-8">
   
    
    
        <meta name="description" content="Для размещения описания!">
        <meta name="keywords" content="Ключевые слова для SEO">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="img/short.ico" rel="shortcut icon" type="image/x-icon">
        <link rel="stylesheet" href="css/font-awesome.min.css">
    </head>
    <body>
       
        <div id="wrapper">
        <div id="content">
       
                    <header>
                    <div id="logo">
                        <a href="/index.php" title="На главную">
                            <img src="img/logo.png" title="Student's Market" alt="SiteName.com">
                                <span>Market</span>
                        </a>
                    </div>
                    
                        
                        
                        
                    <div id="about">
                        <a href="/price.php" title="Уточнить цены">Цены</a>
                        <a href="/zakaz.php" title="Оставить заявку">Подать заявку</a>                        
                    </div>
                    
                    <div id="reg_auth">
                        <a href="" title="Войти">
                            <div class="btn">
                                Войти
                            </div>
                        </a>
                        <a href="" title="Зарегистрироваться">
                            <div class="btn">
                                Регистрация
                            </div>
                        </a>
                       </div>
                      </header>
            
            
            
            
                      <nav>
                          <div id="menubars"><i class="fa fa-bars" aria-hidden="true"></i></div>
                          <div id="hideMenu">
                              <a href="/.kurs.php">Курсовые</a>
                              <a href="/.diploma.php">Дипломные</a>
                              <a href="/doc.php">Рефераты</a>                              
                              <a href="">Способы оплаты</a>
                          </div>
                          <div id="search">
                                <span>Поиск</span>
                                <i class="fa fa-search" aria-hidden="true"></i>
                          </div>
                          
                          <div id="mobileMenu">
                              <a href="/.kurs.php">Курсовые</a><br>
                              <a href="/.diploma.php">Дипломные</a><br>
                              <a href="/doc.php">Рефераты</a><br>
                              <a href="">Оплата</a>                              
                              <hr>
                              <a href="">Регистрация</a>
                              <a href="">Войти</a>
                          </div>
                                                                                            
                      </nav>            
           
                                      
                    <div id="main">                       
                                                  
                                                                                       
                        <div id="news">
                            <h2 class="heading">Дипломная работа</h2>
                            <div style="clear: both"><br></div>
                            
                           
                            <div class="block">
                                <p>Фресковая живопись</p>
                                <form>
                                    
                                    <iframe src="/doc/diploma/diploma.pdf" width=600 height=500></iframe> 
                                    
                                    
                                </form>
                                
                                
                            </div>
                               
                               
                                <div id="bolv"><a href="" title=""></a>
                            </div>
                            
                        </div>
                        
                    </div>
            
                   
                    <aside>
                        <div id="ads">
                            <h2 class="heading">Реклама</h2>
                            <div style="clear: both"><br></div>
                            
                              <!-- реклама -->                            
                            <?php
                                for ($i = 0; $i < 3; $i++)
                                    echo '
                            
                            <div class="ads">
                                <img src="http://designadv.ru/i/designadv.ru/adv_design/2584dcccfa92030b05d7dee34d05885c.jpg" alt="test" title="test">
                                <em>Размещение рекламы</em>
                                <span>8-900-000-0000</span>
                            </div>
                            <div style="clear: both"><br></div>
                                         ';
                            ?>
                            <a href="" title="Узнать больше">
                                <div class="btn">
                                Узнать больше
                                </div>
                                </a>
                        </div>
                        <div id="exclusive">
                            <h2 class="heading">Сотрудничество</h2>
                            <div style="clear: both"><br></div>
                            <img src="http://unitrans-rail.com/wp-content/gallery/sample/clients_docs.jpg">
                            
                        </div>
                    </aside>
                    <div style="clear: both"><br></div>
            
        </div>
        
           
        <footer>
            <div id="sitename">
                <span>S.market</span>
            </div>
            <div id="clear"></div>
            <div id="footer_menu">
                <a href="" title="Уточнить детали">Реклама</a>
                <a href="" title="Поддержка">Поддержать проект</a>
                <a href="" title="Написать письмо">Обратная связь</a>
            </div>
            <div id="rights">
                <a href="">Все права защищены &copy; <?=date ('Y')?></a>
            </div>
            <div id="social">
                <a href="http://vk.com" title="VK"><i class="fa fa-vk" aria-hidden="true"></i></a>
                <a href="" title="FaceBook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="http://youtube.com" title="YouTube"><i class="fa fa-youtube-square" aria-hidden="true"></i></a> 
            </div>
        </footer>
        
        </div>
        
        
        <!-- jQuery -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script>
            $('#menubars').click (function () {
                if ($('#mobileMenu').is(':visible'))
                    $('#mobileMenu').hide ();
                else
                    $('#mobileMenu').show ();
            });
       
        $(document).scroll (function () {
            if ($(document).width () > 785) {
            if ($(document).scrollTop () > $('header').height () +10)                
                $('nav').addClass ('fixed');
            else
                $('nav').removeClass ('fixed');
                }
        });
            
        window.onresize = function (event) {
            $('#mobileMenu').hide ();
        };
         </script>
        
        
        
        
</body>
    
</html>

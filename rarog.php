/*
============================================================================
 Набор Рарог Фреймворка <https://github.com/TheSkiF4er/Rarog-Framework-Kit/>
----------------------------------------------------------------------------
 Автор: SkiF4er <rarog@skif4er.ru>.
----------------------------------------------------------------------------
 Авторские права (c) 2022 SkiF4er. Данный код защищен авторскими правами.
============================================================================
 Лицензия: Creative Commons Attribution-ShareAlike 4 Всемирная.
============================================================================
 Файл: rarog.php
----------------------------------------------------------------------------
 Внешнее подключение: https://skif4er.ru/osp/rarogphp
============================================================================
*/
<?
session_start();

function AntiFakeAppeals ($p1 = '0,0,0', $p2 = '3.5') {
 $time=microtime(1);
 if (!isset($_SESSION["arr_time"])) $_SESSION["arr_time"]=array($p1);
 $min_time=min($_SESSION["arr_time"]);
 if ($time-$min_time < $p2) die("Вы слишком часто обращаетесь к страничкам сайта!");
 $min_index=array_search($min_time,$_SESSION["arr_time"]);
 $_SESSION["arr_time"][$min_index]=$time;
};

function Truncation ($p1, $p2) {
 $str = substr($p1, 0, $p2-2);
 $words = explode(" ", $p1);
 array_splice($words,-1);
 $last = array_pop($words);
 for ($i=1; $i<strlen($last); $i++) {
  if (preg_match('/\W$/',substr($last,-1,1))) $last = substr($last,0,strlen($last)-1);
  else break;
 }
 return implode(" ", $words).' '.$last.'...';
};

?>

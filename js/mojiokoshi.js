var counter;
var time_start;
var limit = 13;
var timer;
var inputs = [];
var problems = [];
var color = "#000000"
var methodIndex=0;
var countIndex=0;

counterOder = [9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,];
console.log(counterOder.length);

window.onload = function(){
   //groupNum = document.getElementById('group').value;
   initialize_task();

   $('#userInput').keypress(function (e){
      if(e.which == 13){
         $('#end').click();
         return false;
      }
   } );
}


function start(){            //startボタンが押された
   document.getElementById('start').style.display = "none";
   var date_obj1 = new Date();
   time_start = date_obj1.getTime();
   orderChange();
   //繰り返し
	timer = setInterval(orderChange,5000);
}

function orderChange()
{
   //カウンター変化
   counter = counterOder[countIndex];
   countIndex++;
   //残り回数
   limit = limit - 1;

   // 生成する文字列の長さ
   var l = 5;

   // 生成する文字列に含める文字セット
   var c = "abcdefghijklmnopqrstuvwxyz";

   var cl = c.length;
   var r = "";
   for(var i=0; i<l; i++){
     r += c[Math.floor(Math.random()*cl)];
   }
   document.getElementById('alphabet').innerHTML = r; 
   //console.log("カウンタ:"+counter);
   color = "#000000";

   if(counter == 0){
         color = "#FF0000";
         problems.push(r);
         console.log(problems);
         document.getElementById('count').innerHTML = "あなたの番";
         document.getElementById('count').style.color = color;
         document.getElementById('count').style.fontSize = "3em";
   }else{
      document.getElementById('count').innerHTML = "あと"+counter+"回";
      document.getElementById('count').style.color = color;
      document.getElementById('count').style.fontSize = "4em";
   }

   if(limit <= 0){
      clearInterval(timer);
      document.getElementById('submit').style.display = "block";
      //document.getElementById('end').style.display = "none";
   }
}


function enter_data(){
   //ボタンを押した時間を配列に挿入しconsoleに出力する
   var input = $('#userInput').val();
   inputs.push(input);
   console.log(inputs);
   $('#userInput').val('');
}


function check(){
   window.location.href = "http://www.u.tsukuba.ac.jp/~s1620622/stress_test/definitions.html"
}

function GetTimeString(time){
   var milli_sec = time % 1000;
   time = (time - milli_sec) / 1000;
   var sec = time % 60;
   time = (time - sec) / 60;
   var min = time % 60;
   var hou = (time - min) / 60;

   // 文字列として連結
   return hou  + ":" +
      ((min < 10) ? "0" : "") + min + ":" +
      ((sec < 10) ? "0" : "") + sec + "." +
      ((milli_sec < 100) ? "0" : "") + ((milli_sec < 10) ? "0" : "") + milli_sec;
}

function initialize_task()
{
   limit = 20;
   counter = "x";
   color = "#000000"
   countIndex = 0;
   document.getElementById('count').style.color = color;
   document.getElementById('submit').style.display = "none";
   document.getElementById('end').style.display = "block";
   document.getElementById('start').style.display = "block";
   document.getElementById('count').innerHTML = "あと"+counter+"回";
   document.getElementById('alphabet').innerHTML = "ここにアルファベットが表示されます。"
   
}
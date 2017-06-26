var groupNum;
var counter;
var time_start;
var limit = 20;
var timer;
var inputs = [];
var problems = [];
var color = "#000000"

window.onload = function(){
   //groupNum = document.getElementById('group').value;
   groupNum = 5;
   counter = groupNum;
	document.getElementById('count').innerHTML = "あと"+counter+"回";
	document.getElementById('submit').style.display = "none";
   console.log("counter = " + counter);
   console.log("groupNum = " + groupNum);

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
   //繰り返し
	timer = setInterval(function(){
      //カウンター変化
      counter = counter - 1;
      //残り回数
      limit = limit - 1;

      // 生成する文字列の長さ
      var l = 5;

      // 生成する文字列に含める文字セット
      var c = "abcdefghijklmnopqrstuvwxyz0123456789";

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
      }
      if(counter < 0){
         counter = groupNum;
      }
      document.getElementById('count').innerHTML = "あと"+counter+"回";
      document.getElementById('count').style.color = color;

      if(limit < 0){
         clearInterval(timer);
         document.getElementById('submit').style.display = "block";
         document.getElementById('end').style.display = "none";
      }
   },3000);
}


function enter_data(){
   //ボタンを押した時間を配列に挿入しconsoleに出力する
   var input = $('#userInput').val();
   inputs.push(input);
   console.log(inputs);
   $('#userInput').val('');
}


function check(){
   var input_data;
   
   input_data = inputs.join(',')
   // カウント0から送信までの差分ミリ秒
   var date_obj2 = new Date();
   var time = date_obj2.getTime() - time_start;
   document.getElementById('time').value = GetTimeString(time);
   document.getElementById('result').value = input_data;

   //document.getElementById('time').value = "23.3232";
   //document.getElementById('result').value = "kumai";

   var flag = 0;

   if(document.tipe.result.value==""){
      flag = 1;
   }else if(document.tipe.result.value.match(/</)!=null){
      flag = 2;
   }else if(document.tipe.result.value.match(/>/)!=null){
      flag = 2;
   }

   if(flag == 1){
      window.alert("未入力です");
      return false;
   }else if(flag == 2){
      window.alert("不正な入力があります");
      return false;
   }else{
      return true;
   }
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


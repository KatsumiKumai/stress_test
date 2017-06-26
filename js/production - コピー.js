var scale      = new Array();
var def        = new Array();
var NUM_SCALES = 6;
var counter;
var time_start;
var limit = 20;
var timer;
var inputs = [5][];
var problems = [5][];
var color = "#000000"
var method = new Array();
var methodIndex=0;
var countIndex=0;

//テスト順序
var testOrder = [0,1,2,3,4];
// テスト順をランダムにする
for (i = 0; i < 10; i++)
{
   testOrder.sort(randOrd);
}

//手法一覧
method[0] = "Random";
method[1] = "Farthest";
method[2] = "Balanced";
method[3] = "Concentrated";
method[4] = "Hybrid";

//カウンター変化一覧
counterOder[0] = [5,4,3,2,1,0,5,6,7,8,5,4,3,2,1,0,5,4,3,2,1,0,5,6,7,8,5,4,3,2,1,0,5,4,3,2,1,0,5,6,7,8,5,4,3,2,1,0];
counterOder[1] = [1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0];
counterOder[2] = [2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0];
counterOder[3] = [3,3,3,3,0,3,3,3,3,0,3,3,3,3,0,3,3,3,3,0,3,3,3,3,0,3,3,3,3,0,3,3,3,3,0,3,3,3,3,0];
counterOder[4] = [4,4,4,4,0,4,4,4,4,0,4,4,4,4,0,4,4,4,4,0,4,4,4,4,0,4,4,4,4,0,4,4,4,4,0,4,4,4,4,0];


scale[0]  = "知的・知覚的要求"; 
def[0]    = "どの程度の知的・知覚的活動（考える、決める、計算する、記憶する、見るなど）を必要とするか。課題はやさしいか難しいか、単純か複雑か、正確さが求められるか大ざっぱでよいか";

scale[1]  = "身体的要求"; 
def[1]    = "どの程度の身体的活動（押す、引く、回す、制御する、動き回るなど）を必要とするか。作業はラクかキツイか、ゆっくりできるかキビキビやらなければならないか、休み休みできるか働きづめか";

scale[2]  = "タイムプレッシャー"; 
def[2]    = "仕事のペースや課題が発生する頻度のために感じる時間的切迫感はどの程度か。ペースはゆっくりとして余裕があるものか、それとも速くて余裕のないものか";

scale[3]  = "作業成績"; 
def[3]    = "作業指示者（またはあなた自身）によって設定された課題の目標をどの程度達成できたと考えるか。目標の達成に関して自分の作業成績にどの程度満足しているか";

scale[4]  = "努力"; 
def[4]    = "作業成績のレベルを達成・維持するために、精神的・身体的にどの程度いっしょうけんめいに作業しなければならないか";

scale[5]  = "フラストレーション"; 
def[5]    = "作業中に、不安感、落胆、いらいら、ストレス、悩みなどをどの程度感じるか。あるいは逆に、安心感、満足感、充足感、楽しさ、リラックスをどの程度感じるか";

// ペア一覧
var pair  = new Array();
pair = [ 
         [0,1],[0,4],[1,2],[1,3],[1,5],
         [2,0],[2,4],[2,5],[3,0],[3,2],
         [3,5],[4,1],[4,3],[5,0],[5,4]
      ];


// 結果一覧
var results_rating = new Array();
var results_tally  = new Array();
var results_weight = new Array();
var results_overall;

var pair_num = 0;
for (var i = 0; i < NUM_SCALES; i++)
	results_tally[i] = 0;

//　ランダムにする
function randOrd()
{
	return (Math.round(Math.random())-0.5); 
}

// 提示順をランダムにする
for (i = 0; i < 100; i++)
{
	pair.sort(randOrd);
}

// ボタンのセットを作成
function setPairLabels()
{

	var pair1 = scale[pair[pair_num][0]];
	var pair2 = scale[pair[pair_num][1]];

	document.getElementById('pair1').value = pair1;
	document.getElementById('pair2').value = pair2;

	document.getElementById('pair1_def').innerHTML = def[pair[pair_num][0]];
	document.getElementById('pair2_def').innerHTML = def[pair[pair_num][1]];
}

// 上のボタンを押したとき
function buttonPair1()
{
	results_tally[pair[pair_num][0]]++;	
	nextPair();
	return true;
}

// 下のボタンを押したとき
function buttonPair2()
{
	results_tally[pair[pair_num][1]]++;	
	nextPair();
	return true;
}

function nextPair()
{
	pair_num++;
	if (pair_num >= 15)
	{
		document.getElementById('part2').style.display = 'none'; 
		document.getElementById('part3').style.display = 'block';
      console.log(results_tally);
	}
	else
	{
		setPairLabels();
	}
}

function start()
{  //startボタンが押された
   document.getElementById('start').style.display = "none";
   var date_obj1 = new Date();
   time_start = date_obj1.getTime();
   //繰り返し
	timer = setInterval(function(){
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
      }

      document.getElementById('count').innerHTML = "あと"+counter+"回";
      document.getElementById('count').style.color = color;

      if(limit <= 0){
         clearInterval(timer);
         document.getElementById('submit').style.display = "block";
         document.getElementById('end').style.display = "none";
      }
   },3000);
}


function enter_data()
{
   //ボタンを押した時間を配列に挿入しconsoleに出力する
   //時間も挿入する
   var input = $('#userInput').val();
   inputs[0].push(input);
   console.log(inputs);
   $('#userInput').val('');
}


function initialize_task()
{
   limit = 40;
   counter = "x";
   countIndex = 0;
   document.getElementById('submit').style.display = "none";
   document.getElementById('end').style.display = "block";
   document.getElementById('start').style.display = "block";
	document.getElementById('count').innerHTML = "あと"+counter+"回";
}

function check()
{
   goPart4();
}

function goPart2()
{
   document.getElementById('part1').style.display = 'none'; 
   document.getElementById('part2').style.display = 'block'; 
   return true;
}

function goPart4()
{
   document.getElementById('part3').style.display = 'none'; 
   document.getElementById('part4').style.display = 'block'; 
   return true;
}

function backPart3()
{
   document.getElementById('part4').style.display = 'none'; 
   document.getElementById('part3').style.display = 'block';
   initialize_task(); 
   return true;
}

window.onload = function()
{
	setPairLabels();
	initialize_task();
	$('#userInput').keypress(function (e){
      if(e.which == 13){
         $('#end').click();
         return false;
      }
   } );
}


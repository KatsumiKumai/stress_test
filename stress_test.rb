Schema:

Seed(
	id int:auto_increment;
)key(id);

Tipe_Data(
	id int:auto_increment;
  input1 text;
  input2 text;
  input3 text;
  input4 text;
  input5 text;
  input6 text;
	input1_time text;
	input2_time text;
	input3_time text;
	input4_time text;
	input5_time text;
	input6_time text;
	problem1 text;
	problem2 text;
	problem3 text;
	problem4 text;
	problem5 text;
	problem6 text;
	problem1_time text;
	problem2_time text;
	problem3_time text;
	problem4_time text;
	problem5_time text;
	problem6_time text;
	rating1 text;
	rating2 text;
	rating3 text;
	rating4 text;
	rating5 text;
	rating6 text;
	tally text;
)key(id);


!Question(
	_open_fact_id int;
);


Rules:

    Seed();   
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
    Seed();   
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
    Seed();   
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();
	Seed();


	Tipe_Data(input1,input2,input3,input4,input5,input6,
			input1_time,input2_time,input3_time,input4_time,input5_time,input6_time,
			problem1,problem2,problem3,problem4,problem5,problem6, 
			problem1_time,problem2_time,problem3_time,problem4_time,problem5_time,problem6_time,
			rating1,rating2,rating3,rating4,rating5,rating6,
			tally)/open <- Seed();
	
	!Question(_open_fact_id) <- ?Tipe_Data(_fact_id:_open_fact_id);

Views:

!Question(_open_fact_id){
	<datalist id="scalelist">
		<option value="0"></option>
		<option value="5"></option>
		<option value="10"></option>
		<option value="15"></option>
		<option value="20"></option>
		<option value="25"></option>
		<option value="30"></option>
		<option value="35"></option>
		<option value="40"></option>
		<option value="45"></option>
		<option value="50"></option>
		<option value="55"></option>
		<option value="60"></option>
		<option value="65"></option>
		<option value="70"></option>
		<option value="75"></option>
		<option value="80"></option>
		<option value="85"></option>
		<option value="90"></option>
		<option value="95"></option>
		<option value="100"></option>
	</datalist>

	<div id="part1">
		<h4>"これから、対になった評価項目を見て頂きます。"<br/>"2つの項目のうち、あなたが先ほど行ったタスクの作業負荷・負担に、より重要な関わりを示していると思う項目を選んでください。"</h4>
	  <h2 style="color: red;"><strong>"これ以降はリロードや戻るボタンを押さないでください。最初からタスクをやり直すことになります。"</strong></h2>
	  <input class="next" id="next" type="button" value="次へ" onClick="goPart2();"/>
	</div>


	  <div id="part2" style="display:none">
		  <h4>"あなたが実験で行った作業についてお聞きします。"<br/>"下に示す2つの項目のうち、作業負荷・負担に関わりが深いと思うものをマウスでクリックして下さい。"
		  </h4>
		  <br/>
		  <br/>
		  <table  width="800">
		    <tr>
		      <td><input class="pair" id="pair1" type="button" value="" onClick="buttonPair1();"/> </td>
		      <td class="def"><div id="pair1_def"></div></td>
		    </tr>
		    <tr>
		      <td align="center"> or </td>
		      <td></td>
		    </tr>
		    <tr>
		      <td><input class="pair" id="pair2" type="button"  value="" onClick="buttonPair2();"/></td>
		      <td class="def"><div id="pair2_def"></div></td>
		    </tr>
		  </table>
		</div>

		<div id="part3" style="display:none">
			<div id="top">
				<div class="text-content">
					<h1>"文字入力課題：本番"</h1>

					<h3><strong style="color:red;">"あなたの番"</strong>"となった時に表示されたアルファベットを入力欄に入力して送信してください。(Enterキーでも送信可)"<br/>"本番課題は３分間行います。アルファベットは５秒ごとに変化します。順番は何回か回ってくることがあります。"<br/>"スタートする前に入力モードが半角英数字であることを確認してください。"</h3>
				</div>
			</div>

			<div id="main">
				<div id="contents">
					<div style="text-align: center;">
			      		<p><span id = 'alphabet' style="font-size:4em; ">"ここにアルファベットが表示されます。"</span></p>
					</div>
				</div>

				<div id="mojiokoshi">
				<input type="button" value="スタート" id="start" class="btn" onclick="start();"/>
					<p><span id = 'count' style="font-size:4em; "></span></p>

					<form>
						<p>
							"入力"<br/>
							<textarea id="userInput" name="uesrInput" rows="4" cols="40" style="ime-mode: disabled;"></textarea>
						</p>
						<input type="hidden" id="result" name="result" value="" />

						<input type="button" id="end" name="end" class="btn" onclick="enter_data();" value="送信"/>
						<p>
							<input type="button" id ="submit" class="btn" onclick="return check();" value="終了" />
						</p>
					</form>	
				</div>
			</div>
		</div>


		<div id="part4" style="display:none">
			<p><span id = 'prog'>"これはテストです。"</span></p>
			<table border="1" width="800">
				<tr>
					<td width="25%"><strong>"知的・知覚的要求"</strong></td>
					<td width="75%">
						"どの程度の知的・知覚的活動（考える、決める、計算する、記憶する、見るなど）を必要としましたか。課題はやさしかったですか難しかったですか、単純でしたか複雑でしたか、正確さが求められましたか大ざっぱでよかったですか"
					</td>
				</tr>
				<tr>
					<td colspan="2">
					<p>
						<label>"小さい"<input type="range" id="scale1" name="scale1" value="50" max="100" style="width: 80%;" list="scalelist"/>"大きい"</label>
					</p>
					</td>
				</tr>	

				<tr>
					<td width="25%"><strong>"身体的要求"</strong></td>
					<td width="75%">
						"どの程度の身体的活動（押す、引く、回す、制御する、動き回るなど）を必要としましたか。作業はラクでしたかキツかったですか、ゆっくりできましたかキビキビやらなければなりませんでしたか、休み休みできましたか働きづめでしたか"
					</td>
				</tr>
				<tr>
					<td colspan="2">
					<p>
						<label>"小さい"<input type="range" id="scale2" name="scale2" value="50" max="100" style="width: 80%;" list="scalelist"/>"大きい"</label>
					</p>
					</td>
				</tr>	

				<tr>
					<td width="25%"><strong>"タイムプレッシャー"</strong></td>
					<td width="75%">
						"作業のペースや課題が発生する頻度のために感じる時間的切迫感はどの程度でしたか。ペースはゆっくりとして余裕があるものでしたか、それとも速くて余裕のないものでしたか"
					</td>
				</tr>
				<tr>
					<td colspan="2">
					<p>
						<label>"弱い"<input type="range" id="scale3" name="scale3" value="50" max="100" style="width: 80%;" list="scalelist"/>"強い"</label>
					</p>
					</td>
				</tr>	

				<tr>
					<td width="25%"><strong>"作業成績"</strong></td>
					<td width="75%">
						"作業指示者（またはあなた自身）によって設定された課題の目標をどの程度達成できたと思いますか。目標の達成に関して自分の作業成績にどの程度満足していますか。"<span style="color:red;">"（これまでと評価の方向が逆転しています。注意して評価してください。）"</span>
					</td>
				</tr>
				<tr>
					<td colspan="2">
					<p>
						<label>"良い"<input type="range" id="scale4" name="scale4" value="50" max="100" style="width: 80%;" list="scalelist"/>"悪い"</label>
					</p>
					</td>
				</tr>	

				<tr>
					<td width="25%"><strong>"努力"</strong></td>
					<td width="75%">
						"作業成績のレベルを達成・維持するために、精神的・身体的にどの程度いっしょうけんめいに作業しなければなりませんでしたか"
					</td>
				</tr>
				<tr>
					<td colspan="2">
					<p>
						<label>"少ない"<input type="range" id="scale5" name="scale5" value="50" max="100" style="width: 80%;" list="scalelist"/>"多い"</label>
					</p>
					</td>
				</tr>	

				<tr>
					<td width="25%"><strong>"フラストレーション"</strong></td>
					<td width="75%">
						"作業中に、不安感、落胆、いらいら、ストレス、悩みなどをどの程度感じましたか。あるいは逆に、安心感、満足感、充足感、楽しさ、リラックスをどの程度感じましたか"
					</td>
				</tr>
				<tr>
					<td colspan="2">
					<p>
						<label>"低い"<input type="range" id="scale6" name="scale6" value="50" max="100" style="width: 80%;" list="scalelist"/>"高い"</label>
					</p>
					</td>
				</tr>	

			</table>
			<input class="next" id="next" type="button" value="次へ" onClick="backPart3();"/>
		</div>

		<div id="part5" style="display:none">
			<h3>"キーワードが表示されるまでお待ちください"</h3>
		</div>

		<form name="tipe" id="tipe" fact=Tipe_Data(
			input1,input2,input3,input4,input5,input6,
			input1_time,input2_time,input3_time,input4_time,input5_time,input6_time,
			problem1,problem2,problem3,problem4,problem5,problem6, 
			problem1_time,problem2_time,problem3_time,problem4_time,problem5_time,problem6_time,
			rating1,rating2,rating3,rating4,rating5,rating6,
			tally,_open_fact_id) move=!Thanks()>
			<input type="hidden" id="input1" name="input1" value="" />
			<input type="hidden" id="input2" name="input2" value="" />
			<input type="hidden" id="input3" name="input3" value="" />
			<input type="hidden" id="input4" name="input4" value="" />
			<input type="hidden" id="input5" name="input5" value="" />
			<input type="hidden" id="input6" name="input6" value="" />

			<input type="hidden" id="input1_time" name="input1_time" value="" />
			<input type="hidden" id="input2_time" name="input2_time" value="" />
			<input type="hidden" id="input3_time" name="input3_time" value="" />
			<input type="hidden" id="input4_time" name="input4_time" value="" />
			<input type="hidden" id="input5_time" name="input5_time" value="" />
			<input type="hidden" id="input6_time" name="input6_time" value="" />

			<input type="hidden" id="problem1" name="problem1" value="" />
			<input type="hidden" id="problem2" name="problem2" value="" />
			<input type="hidden" id="problem3" name="problem3" value="" />
			<input type="hidden" id="problem4" name="problem4" value="" />
			<input type="hidden" id="problem5" name="problem5" value="" />
			<input type="hidden" id="problem6" name="problem6" value="" />

			<input type="hidden" id="problem1_time" name="problem1_time" value="" />
			<input type="hidden" id="problem2_time" name="problem2_time" value="" />
			<input type="hidden" id="problem3_time" name="problem3_time" value="" />
			<input type="hidden" id="problem4_time" name="problem4_time" value="" />
			<input type="hidden" id="problem5_time" name="problem5_time" value="" />
			<input type="hidden" id="problem6_time" name="problem6_time" value="" />

			<input type="hidden" id="rating1" name="rating1" value="" />
			<input type="hidden" id="rating2" name="rating2" value="" />
			<input type="hidden" id="rating3" name="rating3" value="" />
			<input type="hidden" id="rating4" name="rating4" value="" />
			<input type="hidden" id="rating5" name="rating5" value="" />
			<input type="hidden" id="rating6" name="rating6" value="" />

			<input type="hidden" id="tally" name="tally" value="" />
		</form>		


		<script src="http://crowd4u.org/js/jquery-1.11.1.min.js"></script>
		<script src="http://www.u.tsukuba.ac.jp/~s1620622/stress_test/js/production.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" href="http://www.u.tsukuba.ac.jp/~s1620622/stress_test/css/production.css" type="text/css" />

}


!Thanks(){
	<p>"ありがとうございました。次のキーワードをYahoo!クラウドソーシングのタスクで入力して下さい。"</p><br/>
	<p>"キーワード：「クラウドフォーユー」"</p>
}
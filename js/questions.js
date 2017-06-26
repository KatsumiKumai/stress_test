function check(){
   var flag,flag2,flag3,flag4,flag5,flag6 = 0;

   if(document.questions.q1.length>1) { // 選択肢が複数ある場合
      flag2 = 1;
      var i;

      for(i = 0; i < document.questions.q1.length; i ++){
         if(document.questions.q1[i].checked){
            flag2 = 0; break;
         }
      }
   }

   if(document.questions.q2.length>1) { // 選択肢が複数ある場合
      flag3 = 1;
      var i;

      for(i = 0; i < document.questions.q2.length; i ++){
         if(document.questions.q2[i].checked){
            flag3 = 0; break;
         }
      }
   }

   if(document.questions.q3.length>1) { // 選択肢が複数ある場合
      flag4 = 1;
      var i;

      for(i = 0; i < document.questions.q3.length; i ++){
         if(document.questions.q3[i].checked){
            flag4 = 0; break;
         }
      }
   }

   if(document.questions.q4.length>1) { // 選択肢が複数ある場合
      flag5 = 1;
      var i;

      for(i = 0; i < document.questions.q4.length; i ++){
         if(document.questions.q4[i].checked){
            flag5 = 0; break;
         }
      }
   }

   if(document.questions.q5.length>1) { // 選択肢が複数ある場合
      flag6 = 1;
      var i;

      for(i = 0; i < document.questions.q5.length; i ++){
         if(document.questions.q5[i].checked){
            flag6 = 0; break;
         }
      }
   }

   if(document.questions.reason.value==""){
      flag = 1;
   }else if(document.tipe.result.value.match(/</)!=null){
      flag = 2;
   }else if(document.tipe.result.value.match(/>/)!=null){
      flag = 2;
   }

   if(flag2 == 1 || flag3 == 1 || flag4 == 1 || flag5 == 1 || flag6 == 1 || flag == 1){
      window.alert("未入力です");
      return false;
   }else if(flag==2){
      window.alert("不正な入力です");
      return false;
   }else{
      return true;
   }
}
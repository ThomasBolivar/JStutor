let a = 2;
let b = 4;
function calculate(a,b){
    return a + b;
}
alert(a + " + " + b + "=" + calculate(a,b));
let sum = calculate;
alert(sum(34,33));
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Agreed?." );
  }
  
  function showCancel() {
    alert( "You just cancle it" );
  }
  

  ask("Are you agree?", showOk, showCancel);

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Are you Here?",
    function(){ alert("You agreed.");},
    function(){  alert("You just cancle it");}

  );
  function ask(question,yes,no){
    if(confirm(question))yes()
    else(no)
  };
  ask("Hello?");
  ask(
    "Are you agree?",
      ()=>alert("You agreed"),
      ()=>alert("Canceled")
  )
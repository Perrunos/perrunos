document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('loading').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}
console.log("test")

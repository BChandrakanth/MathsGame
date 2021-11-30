var Score;
var timeRemain;
var action;
let playing = false;
var ans;
document.getElementById("startReset").onclick = function(){
if(playing == true){
    location.reload();
}
else{
   playing=true;
    Score=0;
    document.getElementById("scorevalue").innerHTML=Score;
    document.getElementById("timeremain").style.display="block";
    timeRemain=60;
    document.getElementById("time").innerHTML=timeRemain;
    hide("gameover");
    document.getElementById("startReset").innerHTML="Reset Game";
    startcount();
    generator();
}
for(i=1; i<5; i++){
document.getElementById("box"+i).onclick=function(){
if(playing==true){
    if(this.innerHTML==ans){
        Score++;
        document.getElementById("scorevalue").innerHTML=Score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        },1000);
        generator();
    }
    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);
    }
}
}
}
function startcount(){
    action=setInterval(function(){
        timeRemain-=1;
        document.getElementById("time").innerHTML=timeRemain;
        if(timeRemain==0){
            stopcount();
            document.getElementById("gameover").style.display="block";
            document.getElementById("yourscore").innerHTML=Score;
            document.getElementById("timeremain").style.display="none";
            hide("wrong");
            hide("correct");
            playing=false;
            document.getElementById("startReset").innerHTML="StartGame";
        }
    },1000);
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}
function stopcount() {
    clearInterval(action);
}
function generator(){
    var x=1+Math.round(9 * Math.random());
    var y=1+Math.round(9 * Math.random());
    ans=x*y;
    document.getElementById("gamebox").innerHTML=x + " X " + y;
    var correctbox=1+Math.round(3 * Math.random());
    document.getElementById("box"+correctbox).innerHTML=ans;
    for( i=1; i<5; i++){
        if(i!=correctbox){
            var wrong;
            wrong=(1+Math.round(9 * Math.random()))*(1+Math.round(9 * Math.random()));
            if(wrong==ans){
                 wrong+=1;
            }
            document.getElementById("box"+i).innerHTML=wrong;
        }
    }
}
}
function clock(){

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;



}
setInterval(clock,1000);



function Makediv(){

    var container=document.createElement('div');
    container.className="leftfirstdiv";
    container.id="dynamic-block";

    document.getElementById('leftseconddiv').appendChild(container);


    var invalue=document.getElementById("wakeuptimeselector");
    // var invalue=document.getElementById("lunchtimeselector");
    // var invalue=document.getElementById("naptimeselector");


    var value=invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Wake up time :" + value;
    // document.getElementById("dynamic-block").innerHTML="Lunch time :" + value;
    // document.getElementById("dynamic-block").innerHTML="Nap time :" + value;



}





function settime(){
    var a=document.getElementById('wakeuptimeselector').value;
    var b=document.getElementById('lunchtimeselector').value;
    var c=document.getElementById('naptimeselector').value;



    var hourr=new Date().getHours();

    if(a== hourr){
        document.getElementById('changetext').innerHTML="Good Morning!";
        document.getElementById('bottommainimg').style.backgroundImage="url(./images/wakeup-image.png)";
    }
    else if (b== hourr){
        document.getElementById('changetext').innerHTML="Good Afternoon!";
        document.getElementById('bottommainimg').style.backgroundImage="url(./images/lunch-image.png";
    }
    else if (c== hourr){
        document.getElementById('changetext').innerHTML="Good Night!";
        document.getElementById('bottommainimg').style.backgroundImage="url(./images/goodnight-image.png";
    }
    else{
        document.getElementById('changetext').innerText="Hello!"
        document.getElementById('bottommainimg').style.backgroundImage="url(./images/default-image.jpg";
    }


    Makediv();

}

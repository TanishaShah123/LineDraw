var canvas=document.getElementById("myCanvas");
var draw2d=canvas.getContext("2d");
var mouseevent="";
var colour="black"
var penwidth=5;
var lastXpos,lastYpos=""


canvas.addEventListener("mousedown",mousedownF);
function mousedownF(eventdetails){
     colour=document.getElementById("colourinput").value;
    mouseevent="mousedown";
}

canvas.addEventListener("mouseleave",mouseleaveF);
function mouseleaveF(eventdetails){
mouseevent="mouseleave";
}

canvas.addEventListener("mouseup",mouseupF);
function mouseupF(eventdetails){
mouseevent="mouseup";
}

canvas.addEventListener("mousemove",mousemoveF);
function mousemoveF(eventdetails){
var currentXpos=eventdetails.clientX-canvas.offsetLeft;
var currentYpos=eventdetails.clientY-canvas.offsetTop;
if(mouseevent="mousedown"){
    draw2d.beginPath();
    draw2d.strokeStyle=colour;
    draw2d.lineWidth=penwidth;
    draw2d.moveTo(lastXpos,lastYpos);
    draw2d.lineTo(currentXpos,currentYpos);
    draw2d.stroke();
}
lastXpos=currentXpos;
lastYpos=currentYpos;
}

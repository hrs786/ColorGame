//clr gm
var sqs=document.getElementsByClassName("qw");
var q=document.getElementById("mc");

var jbc=document.getElementsByClassName("jumbotron");
var colorName=document.getElementsByClassName("rgb")[0];
var stateChange=document.getElementById("new");

var btns=document.querySelectorAll("div button");
var btn1=btns[1];
var btn2=btns[2];



//core----------------------------------------------------------------------------------------------------------------------------
y=6;
var colors=gencol(y);
var color=colors[Math.floor(Math.random()*y)];
colorName.textContent=color;

for (var i=0;i<y;i++){
	//assign color to boxes
	sqs[i].style.backgroundColor=colors[i];

	//change all boxes to true color and print correct with option of play again
	sqs[i].addEventListener("click",function(){
		if (this.style.backgroundColor===color){
			q.textContent="Correct";
			jbc[0].style.backgroundColor=color;
			for (var j=0;j<y;j++){
				sqs[j].style.backgroundColor=color;
			};
			stateChange.textContent="Play Again?";
			
		}
		//hide the incorrect with showing incorrect
		else {
			q.textContent="inCorrect";
			this.style.backgroundColor="black";
		}
	})
}

//New colors
stateChange.addEventListener("click",function(){
	colors=gencol(y);

	color=colors[Math.floor(Math.random()*y)];

	jbc[0].style.backgroundColor="#623DF5";

	for (var i=0;i<y;i++){
	sqs[i].style.backgroundColor=colors[i];
	}

	//q.textContent="";
	colorName.textContent=color;
	stateChange.textContent="New Colors";
	q.textContent="";
})

//------------------------------------------------------------------------------------------------------------
//generate random colors
	function gencol(x){
		var arr=[];
		for (p=0;p<x;p++){
			var a1=Math.floor(Math.random()*256);
			var a2=Math.floor(Math.random()*256);
			var a3=Math.floor(Math.random()*256);
			var a0="rgb("+a1+", "+a2+", "+a3+")";
			if (arr.indexOf(a0)>0){
				p-=1;
			}
			else{
				arr.push(a0);
			}
		}
		return(arr);
	}

//-------------------------------------------------------------------------------------------------------------

//highlight selected option
btn1.addEventListener("click",function(){
	btn2.classList.remove("selected");
	btn1.classList.add("selected");
	//easy
	y=3;
	colors=gencol(y);
	color=colors[Math.floor(Math.random()*y)];
	colorName.textContent=color;
	for (var i=0;i<y;i++){
	//assign color to boxes
	sqs[i].style.backgroundColor=colors[i];
	}
	for (var i=3;i<6;i++){
	//assign color to boxes
	sqs[i].style.backgroundColor="black";
	}
})

btn2.addEventListener("click",function(){
	btn1.classList.remove("selected");
	btn2.classList.add("selected");
	//hard
	y=6;
	colors=gencol(y);
	color=colors[Math.floor(Math.random()*y)];
	colorName.textContent=color;
	for (var i=0;i<y;i++){
	//assign color to boxes
	sqs[i].style.backgroundColor=colors[i];
	}
})


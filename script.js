//your JS code here. If required.
let textInput = document.getElementById('text');
let delayInput = document.getElementById('delay');
let btn = document.getElementById('btn');
let display = document.getElementById('output');

btn.addEventListener("click",function(){
	setTimeout(function(){
		display.innerHTML = textInput.value;
	}, delayInput.value);
});
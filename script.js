//your JS code here. If required.
let inputs = document.getElementsByTagName("input")[0];
let id = document.getElementById("colorSelect");

let color = id.value;

inputs.addEventListener("click", (color) =>{
		id.remove(color);
})

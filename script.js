//your JS code here. If required.


// let inputs = document.getElementsByTagName("input")[0];
// let id = document.getElementById("colorSelect");

// let color.option.innerText =;

// inputs.addEventListener("click", (color) =>{
// 		id.option.remove(color);
// })

function deleteElement() {
     let selectElement=document.getElementById("colorSelect");
	let selectedValue=selectElement.value;
	let childrenList=selectElement.children;

	for(let i=0;i<childrenList;i++)
		{
			if(selectedValue===childrenList[i].value)
			{
				childrenList[i].remove();
			}
		}
}

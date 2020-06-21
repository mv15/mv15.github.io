// adding items

var btn = document.getElementById('add');

btn.addEventListener("click", function(event) {
	var item = document.getElementById("item").value;
	document.getElementById("item").value = "";
	// console.log(item);

	if(item !== "")
	{
		var node = document.createElement("LABEL");
		node.innerHTML = "<input type='checkbox'><li>" + item + "<span class='list'><i class='fa fa-trash'></i></span></li>";
		// console.log(node);

		var ul = document.getElementById("listitem");
		node.classList.add("container");
		ul.appendChild(node); 
		number();

		// handling deletion of the item

		deletion();
	}
	else
		alert("Please enter some value");
});

// handling deletion of the item

deletion();

function deletion()
{
	var li = document.getElementsByClassName('list');
	// console.log(li);

	for(var i = 0; i < li.length; i++)
	{
		li[i].addEventListener("click", function(event){
			// console.log("deletion");
			this.parentNode.parentNode.remove();
			number();
		});
	}
}

// Handling number of items in the list

function number() {
	var num = document.querySelector('#number span');
	var li = document.getElementsByClassName('list');
	num.innerText = li.length;
}
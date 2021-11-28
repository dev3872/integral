let element1 = document.getElementById("course");
const courses = ["BCA","MCA","BTech","BSC","BA"];
for(let index = 0; index < courses.length; index++){
	let divs = document.createElement("div");
	let pdivs = document.createElement("p");
	let node = document.createTextNode(courses[index]);
	pdivs.appendChild(node);
	divs.appendChild(pdivs);
	element1.appendChild(pdivs);
}
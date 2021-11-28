const hod_ca={
	"Name":"Dr Mohammad Faisal",
	"Email":"headca@iul.ac.in"
	};
const faculty_ca=[
{
	"Name":"Dr. Md. Faizan Farooqui",
	"Email":"ffarooqui@iul.ac.in",
	"Area Of Expertise":"Web technology"
},{
	"Name":"Mr. Md. kalamuddin Ahmad",
	"Email":"mohdkalam@iul.ac.in",
	"Area Of Expertise":"Parallel Computing"
}
]
let divs = document.createElement("div");



const element = document.getElementById("faculty");
for(const key in hod_ca){
		let pdivs = document.createElement("p");
		let node = document.createTextNode(`${key}: ${hod_ca[key]}`);
		pdivs.appendChild(node);
		divs.appendChild(pdivs);	
}
element.appendChild(divs);
for(let index = 0; index < 2; index++){
	let divs = document.createElement("div");
	for(const key in faculty_ca[index]){
		let pdivs = document.createElement("p");
		let node = document.createTextNode(`${key}: ${faculty_ca[index][key]}`);
		pdivs.appendChild(node);
		divs.appendChild(pdivs);	
	}
	element.appendChild(divs);
}



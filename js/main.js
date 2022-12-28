
let data=[
		{
			"Id":"1",
			"Name":"Preethi",
			"Job":"Front-end-developer | javascript | html | css",
			"backgroundImage":"url(image/hero-bg.jpg)",
			"image":"image/team-2.jpg",
			"followers":"1,25,247 followers",
			"button":"follow"
		},
		{
			"Id":"2",
			"Name":"Alex",
			"Job":"Front-end-developer",
			"backgroundImage":"url(image/hero-bg.jpg)",
			"image":"image/team-1.jpg",
			"followers":"12,25,247 followers",
			"button":"follow"
		},
		{
			"Id":"3",
			"Name":"Virat",
			"Job":"Front-end-developer",
			"backgroundImage":"url(image/hero-bg.jpg)",
			"image":"image/team-3.jpg",
			"followers":"95,247 followers",
			"button":"follow"
		},
		{
			"Id":"4",
			"Name":"Preethi",
			"Job":"Front-end-developer",
			"backgroundImage":"url(image/hero-bg.jpg)",
			"image":"image/team-4.jpg",
			"followers":"2,25,247 followers",
			"button":"follow"
		},
		

]


let recommendsEle = document.getElementById("recommends");

data.forEach(function(object,i){

let peopleEle =document.createElement("div");
let peopleinsideEle =document.createElement("div");
let backImageEle =document.createElement("div");
let imageEle = document.createElement("img");
let peopleContentEle = document.createElement("div");
let nameEle = document.createElement("h5");
let paraEle = document.createElement("p");
let followersEle = document.createElement("p");
let buttonEle = document.createElement("button");


		peopleContentEle.setAttribute("class", "peoplecontent");
		peopleEle.setAttribute("class", "people col-lg-4");
		peopleinsideEle.setAttribute("class", "peopleinside")
		backImageEle.setAttribute("class","backgroundimage");
		paraEle.setAttribute("class", "job");
		followersEle.setAttribute("class","followers");

backImageEle.style.backgroundImage = object.backgroundImage;
imageEle.src = object.image;
nameEle.innerText = object.Name;
paraEle.innerText = object.Job;
followersEle.innerText = object.followers;
buttonEle.innerText = object.button;

recommendsEle.appendChild(peopleEle);
peopleEle.appendChild(peopleinsideEle);
backImageEle.appendChild(imageEle);
peopleContentEle.append(nameEle,paraEle,followersEle,buttonEle);
peopleinsideEle.append(backImageEle,peopleContentEle);

});

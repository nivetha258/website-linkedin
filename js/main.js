
let data=[
		{
			"id":0.5246454112,
			"firstname":"Nivetha",
			"lastname":"Rajendran",
			"fullname":function ()
							{
							return this.firstname + " " + this.lastname;
							},
			"email":"nivetharajendran1994@gmail.com",
			"phoneNo":9489564712,
			"gender":"Female",
			"DateOfBirth":"25-05-1994",
			"picture":"image/girl.png",
			"password":"123",
			//"backgroundImage":url("../image/Background.png")
		},
		{
			"id":0.2116555212121,
			"firstname":"Nadhi",
			"lastname":"Raj",
			"fullname":function ()
							{
							return this.firstname + " " + this.lastname;
							},
			"email":"nadhiraj@gmail.com",
			"phoneNo":7489564252,
			"gender":"Female",
			"DateOfBirth":"25-05-2022",
			"picture":"image/girl.png",
			"password":"123654",
			//"backgroundImage":url("../image/Background.png")
		},
		{
			"id":0.6555212122121,
			"firstname":"Harry",
			"lastname":"Raj",
			"fullname":function ()
							{
							return this.firstname + " " + this.lastname;
							},
			"email":"nadhiraj@gmail.com",
			"phoneNo":7489564252,
			"gender":"Male",
			"DateOfBirth":"25-05-2022",
			"picture":"image/profile.png",
			"password":"1254",
			//"backgroundImage":url("../image/Background.png")
		},

]  


											/*--------------login section--------------*/
document.getElementById("signup-section").style.display="none";
document.getElementById("main-page").style.display="none";
let userid,currentUser,action;
let emailEle = document.getElementById("login-email");
let loginPwdEle = document.getElementById("login-pwd");
document.getElementById("login-btn").onclick = loginCheck;
function loginCheck(){
	let y=1;	
	for(x of data){
		if((emailEle.value==x.email) && (loginPwdEle.value== x.password)) 
		{
			userid=x.id;			
			action = mainpage();
			y=0;
			loginPwdEle.value="";
		}
	}
	if(y){
		alert ("Enter correct email and password or if new user create account")
	}
}

//display signup section --------------

	document.getElementById("signup-btn").onclick = signup;
	function signup(){
		document.getElementById("login-section").style.display="none";
		document.getElementById("signup-section").style.display="block";
		
	}
// signup details section-----------
	const obj={};
	let submitEle=document.getElementById("signup-submit");

	submitEle.addEventListener("click",function(){
//1.create id
	
	obj.id=Math.random();
	userid=obj.id;

//2.names----------
	obj.firstname = document.getElementById("firstname").value;

	obj.lastname = document.getElementById("lastname").value;
	obj.fullname = function (){
		return obj.firstname + " " + obj.lastname;
		}
//3.email-------------

	obj.email = document.getElementById("email").value;
	
//4.phone.no--------
	obj.phoneNo = "";
	let phNo=document.getElementById("phone-no").value;
	if(phNo.length==10 || phNo.length==12 )
	{
		if(!isNaN(phNo))
		{
			phNo=parseInt(phNo);
			obj.phoneNo = phNo
			}
		else
		{	alert ("enter a phone number as number");
			return
		}
	}
	else 
		{
			alert("enter 10 digits or 12 digits phone number")
			return
		}

//5.gender-------
	if(document.getElementById("female").checked)
	{
		obj.gender="Female";
		obj.picture="image/girl.png";
	}	
	else if(document.getElementById("male").checked)
	{
		obj.gender="Male";
		obj.picture="image/profile.png";
	}
	else{ obj["gender"]=""}
	
//6.Dob--------

	obj.DateOfBirth=document.getElementById("dob").value;
	
//7.password---------
	obj["password"]= "";
	if(document.getElementById("signup-pwd").value !== document.getElementById("signup-confirm-pwd").value )
			{	
				alert ("password and confirm password should be same")
					return
			}
	else{
		obj["password"]= document.getElementById("signup-pwd").value
	}	
//8.backgroundImage-----

	//obj["backgroundImage"]="url("../image/Background.png")";
//validation--------
		for(p in obj){			
			if(typeof(obj[p])!="function")
			{
				if(typeof(obj[p])!="number")
				{
					{obj[p]=obj[p].trim();}
				}
				if (obj[p]=="")
					{
						alert ("enter " + p )
						return
					}
			}
		}
			
	data.push(obj);
	
	document.getElementById("firstname").value="";
	document.getElementById("lastname").value="";
	document.getElementById("email").value="";
	document.getElementById("phone-no").value="";
	document.getElementById("female").value="";
	document.getElementById("male").value="";
	document.getElementById("dob").value="";
	document.getElementById("signup-pwd").value="";
	document.getElementById("signup-confirm-pwd").value="";
	
	action = mainpage();
})

//signout--------------------------------


let signoutEle=document.getElementById("signout").addEventListener("click",function(){
	document.getElementsByTagName("main")[0].style.display="none";
	document.getElementById("login-section").style.display="block";
	document.getElementById("signup-section").style.display="none";
	document.getElementById("enter-section").style.display="block";
	document.getElementById("profile").innerText="";
	document.getElementById("recommends").innerText="";
})





// main-page--------------------

function mainpage(){
	document.getElementById("main-page").style.display="block";
	document.getElementById("enter-section").style.display="none";
	for(x of data)
	{
		if(x.id == userid)
		{
			currentUser=x;
		}
	}

		//profile-section-----

	let profileEle=document.getElementById("profile");
	let profileBgEle=document.createElement("div");
	let profileImgEle = document.createElement("img");
	let profileDetailEle = document.createElement("div");
	let profileNameEle = document.createElement("h4");
	let profileEmailEle = document.createElement("p");
	let profileDobEle = document.createElement("p");


	profileImgEle.style.position="relative";
	
	profileImgEle.src = currentUser.picture;
	profileNameEle.innerText = currentUser.fullname();
	profileEmailEle.innerText = currentUser.email;
	profileDobEle.innerText = currentUser.DateOfBirth;

	profileBgEle.appendChild(profileImgEle);
	profileDetailEle.append(profileNameEle,profileEmailEle,profileDobEle);
	profileEle.append(profileBgEle,profileDetailEle);




			//-----recommends-section-----

		let recommendsEle = document.getElementById("recommends");

		for(object of data)
		{
			if(object.id!=currentUser.id)
			{
				let peopleEle =document.createElement("div");
				let peopleinsideEle =document.createElement("div");
				let backImageEle =document.createElement("div");
				let imageEle = document.createElement("img");
				let peopleContentEle = document.createElement("div");
				let nameEle = document.createElement("h5");
				let paraEle = document.createElement("p");
				let buttonEle = document.createElement("button");


						peopleContentEle.setAttribute("class", "peoplecontent");
						peopleEle.setAttribute("class", "people col-lg-4");
						peopleinsideEle.setAttribute("class", "peopleinside")
						backImageEle.setAttribute("class","backgroundimage");
						paraEle.setAttribute("class", "job");

				//backImageEle.style.backgroundImage = object.backgroundImage;
				imageEle.src = object.picture;
				nameEle.innerText = object.fullname();
				paraEle.innerText = object.gender;
				//.innerText = object.email;
				buttonEle.innerText = "follow";

				recommendsEle.appendChild(peopleEle);
				peopleEle.appendChild(peopleinsideEle);
				backImageEle.appendChild(imageEle);
				peopleContentEle.append(nameEle,paraEle,buttonEle);
				peopleinsideEle.append(backImageEle,peopleContentEle);
			}
		}
}

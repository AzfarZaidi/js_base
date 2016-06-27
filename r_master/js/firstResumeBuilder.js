/*
This is empty on purpose! Your code to build the resume will go here.
 */

var email = "harlock@ghostship.com";

var newEmail = email.replace("ghostship", "spacepirate");

console.log(email);
console.log(newEmail);

// var awesomeThoughts = "I am Harlock and I am awesome!";

// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// $("#main").append(funThoughts);

var bio = {
	"name" : "Saw",
	"contacts" : {
		"mobile" : "999-999-999",
		"github" : "@dean",
		"stackoverflow" : "@dean",
	},
	"age" : 22,
	"skills" : [ "awesomeness", "saving the universe", "coding" ],
	"picutre" : "https://pmcvariety.files.wordpress.com/2013/08/venice_harlock_space_pirate.jpg",
	"welcome" : "Howya doin'?"
};

// $("#main").append(bio.name);

bio.city = "Mountain View";
bio.email = "saw@synw.com";

// var workObject = {
// 	"position" : "Coder",
// 	"employer" : "Spaceship",
// 	"years" : "5",
// 	"city" : "SOL98"
// };

var work = {};
work.position = "Coder";
work.employer = "Spaceship";
work.years = 0.8;
work.city = "SOL98";

var education = {
	"school" : [
		{
			"name" : "MIT",
			"city" : "Boston, MA",
			"degree" : "BA",
			"attended years" : ["CompSi", "Electrical Engineering"]
		},
		{
			"name" : "Oxford",
			"city" : "Cambridge, US",
			"degree" : "Masters",
			"major" : ["Finance", "Philosophy"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Syntax",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
}

// var education = {};
// education["name"] = "Dex";
// education["years"] = "2016 - 2018";
// education["city"] = "Boston, MA";

$("#main").append(work["position"]);
$("#main").append(education.name)

// $("#main").append(bio.city);

bio["vehicle"] = "Flying-car";

var name = "Phantom";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Last name caps

// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase;

// 	return name[0] + " " + name[1];
// }

// $("#main").append(internationalizeButton);
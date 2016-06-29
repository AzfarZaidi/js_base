var bio = {
	"name" : "Phantom",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "999-999-999",
		"github" : "@rickamura",
		"twitter" : "@rickamura",
		"email" : "rick@rkmr.com",
		"location" : "New York"
	},
	"skills" : [ "awesomeness", "saving the universe", "coding", "maths" ],
	"picutre" : "http://chrisbringhurst.com/wp-content/uploads/2015/09/Icon_0001s_0004_Rick-and-Morty-Small-440x380.png",
	"welcome" : "Howya doin'?"
}

var education = {
	"schools" : [
		{
			"name" : "MIT",
			"city" : "Boston, MA",
			"degree" : "BA",
			"attended years" : "2012 - 2014",
			"major" : ["CompSi", "Electrical Engineering"]
		},
		{
			"name" : "Oxford",
			"city" : "Cambridge, US",
			"degree" : "Masters",
			"attended years" : "2011 - 2012",
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

var work = {
	"jobs" : [
		{
			"employer" : "NASA",
			"title" : "Astronaut",
			"dates" : "January, 2016 - Future",
			"description" : "Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."
		},
		{
			"employer" : "Google",
			"title" : "Electrical Engineer",
			"dates" : "January, 2014 - January, 2016",
			"description" : "Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Spaceship",
			"dates": "2016",
			"description": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.",
			"images": [
				"https://cdn2.vox-cdn.com/thumbor/ZZvbt9rKm0n1aRSTSMaKsyM1nBQ=/1020x0/cdn0.vox-cdn.com/uploads/chorus_asset/file/2847410/2-spaceship.1402634711.jpg"
			]
		}
	]
}

// var name = bio.name;
// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = bio.role;
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").append(formattedName);
// $("#header").append(formattedRole);

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

var bioPic = bio.picutre;
var formattedPic = HTMLbioPic.replace("%data%", bioPic);

$("#header").append(formattedPic);

var welcomeMsg = bio.welcome;
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);

$("#header").append(formattedwelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);

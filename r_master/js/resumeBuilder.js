var bio = {
	"name" : "Phantom",
	"role" : "Software Engineer",
	"contacts" : [{
		"mobile" : "999-999-999",
		"github" : "@rickamura",
		"twitter" : "@rickamura",
		"email" : "rick@rkmr.com",
		"location" : "New York"
	}],
	"skills" : [ "awesomeness", "saving the universe", "coding", "maths" ],
	"picutre" : "http://static1.comicvine.com/uploads/scale_super/6/66303/4469093-screen+shot+2015-03-25+at+5.13.24+pm+copy.jpg",
	"welcomeMsg" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
};

var education = {
	"schools" : [
		{
			"name" : "MIT",
			"location" : "Boston, Massachusetts",
			"degree" : "BA",
			"dates" : "2012 - 2014",
			"majors" : "Electrical Engineering"
		},
		{
			"name" : "Oxford",
			"location" : "Chicago, Illinois",
			"degree" : "Masters",
			"dates" : "2011 - 2012",
			"majors" : "Computer Science"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "NASA",
			"title" : "Astronaut",
			"dates" : "January, 2016 - Future",
			"location" : "Seattle, Washington",
			"description" : "Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."
		},
		{
			"employer" : "Google",
			"title" : "Electrical Engineer",
			"dates" : "January, 2014 - January, 2016",
			"location" : "Houston, Texas",
			"description" : "Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor."
		}
	]
};

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
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.picutre);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedwelcomeMsg);
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
    	var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    	$("#skills").append(formattedSkills);
    };

    for (contact in bio.contacts) {
    	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
    	var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
    	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
    	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
    	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter);
    	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter);
    };
};

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedName + formattedDegree + formattedDates, formattedLocation, formattedMajor);
  }
};

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
};

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
};

bio.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);

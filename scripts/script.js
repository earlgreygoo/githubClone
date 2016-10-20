




var inputNode = document.querySelector("input")
var profileContainer = document.querySelector(".profileContainer")
var repoContainer = document.querySelector(".repolist")


var handleprofiledata = function(apiResponse) {
	var outputString = ""
    
    outputString += "<img src =" + apiResponse.avatar_url  + ">"
    outputString += "<h1>" + apiResponse.name + "</h1>"
    outputString += "<h2>" + apiResponse.login + "</h2>"
    outputString += "<p>" + apiResponse.bio + "</p>"
    outputString += "<button type='button'>Follow</button>"
    profileContainer.innerHTML = outputString
}



var handlerepoinfo = function(apiResponse) {
	var outputString = ""
	for(var i = 0; i < apiResponse.length; i ++ ) {
		var ar = apiResponse[i]
		var repostring = "<li class = repo>"
		
		repostring += '<a href="' + ar.html_url + '" class = reponame>' + ar.name + "</a>"
		repostring += "</li>"
		outputString += repostring
	}
	repoContainer.innerHTML = outputString
	
}


var search = function(event){
	if(event.keyCode === 13){
		var searchTerm = event.target.value
		searchuser(searchTerm)
		event.target.value = ""
	}

}

inputNode.addEventListener('keydown', search)



var searchuser = function(searchTerm) {
try {
	var repoUrl = 'https://api.github.com/users/' + searchTerm + '/repos?access_token=' + access_token
	var profileUrl = 'https://api.github.com/users/' + searchTerm + '?access_token=' + access_token
}
catch (error) {
	var repoUrl = 'https://api.github.com/users/' + searchTerm + '/repos'
	var profileUrl = 'https://api.github.com/users/' + searchTerm 
}

	
	
   var promise = $.getJSON(profileUrl)
   promise.then(handleprofiledata)

   var promise1 = $.getJSON(repoUrl)
	promise1.then(handlerepoinfo)
}

searchuser("earlgreygoo")


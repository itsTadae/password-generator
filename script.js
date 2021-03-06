//generate random password function

function generate() {

    //set password length
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create a loop to choose password
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    
    //add password to textbox/display
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length of password to 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function() {

    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//function for copy to clipboard

function copyClipboard() {
    
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard.");

}


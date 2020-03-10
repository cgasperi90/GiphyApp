//here we will make an array for topics
var topicsArray = ["NFL", "Miami Dolphins", "New England Patriots", "New York Jets", "Buffalo Bills", "Pittsburgh Steelers",
"Cleveland Browns", "Cincinnati Bengals", "Baltimore Ravens", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars",
"Tennessee Titans", "Denver Broncos", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers"];


function displayGifs() {
    
}



//here wwe will create a function that appends a button for every item in the array

function renderButtons() {
    //this will delete any content inside the buttons-div
    $("#buttons-div").empty();
    
    for (var i = 0; i < topicsArray.length; i++) {
        var makeButton = $("<button>");
        makeButton.addClass("team");
        makeButton.attr("data-name", topicsArray[i]);
        makeButton.text(topicsArray[i]);$("#buttons-div").append(makeButton);
    }
}

//now we have to make an on click function so that the buttons get made.
$("#search-button").on("click", function(event) {

    event.preventDefault();

    var team = $("#team-search").val().trim();
    topicsArray.push(team);

    //we are calling our renderButtons function so the buttons
    //made after the on click function is completed.
    renderButtons();


});

//we have to call the render buttons function again so that
//the initial buttons will show up.
renderButtons();


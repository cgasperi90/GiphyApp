//here we will make an array for topics
var topicsArray = ["NFL", "Miami Dolphins", "New England Patriots", "New York Jets", "Buffalo Bills", "Pittsburgh Steelers",
"Cleveland Browns", "Cincinnati Bengals", "Baltimore Ravens", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars",
"Tennessee Titans", "Denver Broncos", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers"];


function displayGifs() {
    var gifs = $(this).attr("data-team");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HcBYw6HHGvc41ozxbH4tFwkNY1sKqG1m&q=" + gifs + "&limit=10&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       console.log(response);
        //create a div to hold the gifs
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");

            var teamImage = $("<img>");
            teamImage.attr("src", results[i].images.fixed_height.url);
            teamImage.attr("data-animate", results[i].images.fixed_height.url);
            teamImage.addClass("gif");
            teamImage.attr("data-still", results[i].images.fixed_height_still.url);

            gifDiv.append(teamImage);

            var rating = results[i].rating;
            var p = $("<h5>").text("Rating: " + rating.toUpperCase());
            gifDiv.append(p);

            var title = results[i].title;
            var pTwo = $("<h5>").text("Title: " + title);
            gifDiv.append(pTwo);

            $("#gifs-go-here").prepend(gifDiv)
        }


    })
}



//here wwe will create a function that appends a button for every item in the array

function renderButtons() {
    //this will delete any content inside the buttons-div
    $("#buttons-div").empty();
    
    for (var i = 0; i < topicsArray.length; i++) {
        var makeButton = $("<button>");
        makeButton.addClass("team");
        makeButton.attr("data-team", topicsArray[i]);
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

$(document).on("click", ".gif", function() { 
    var gifImage = $(this).attr("src")
    var gifStill = $(this).attr("data-still");
    var gifAnimate = $(this).attr("data-animate");

    if (gifImage === gifStill) {
        $(this).attr("src", gifAnimate);
    } else {
        $(this).attr("src", gifStill);
    }

});



//making a listener for all buttons previously made on the page.
$(document).on("click", ".team", displayGifs);

//we have to call the render buttons function again so that
//the initial buttons will show up.
renderButtons();




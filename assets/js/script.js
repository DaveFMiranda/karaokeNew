// stores the user input
var searchInput = document.getElementById("search");

// adds event listener to search button
document.querySelector("form.search-bar").addEventListener("submit", function(e){
   e.preventDefault();
   console.log(searchInput.value);
   //sets variables up to add user input to the YT search query
   const searchTerms = searchInput.value.replace(' ', '_');   
   const YouTubeAPIKey = "AIzaSyBHj9EPuptQC5RJjuRdyrT3jmI82emkqlo";
   const YTSearchBaseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet";
   const YTapiURL = YTSearchBaseURL + '&q=' + searchTerms + '&maxresults=10&type=video&key=' + YouTubeAPIKey;
   console.log (YTapiURL);
  //sends the query to YT
   fetch(YTapiURL)
   .then (response => response.json())
   .then (data => {
       console.log(data);
       let song = data.items[0].id.videoId;
       let song2 = data.items[1].id.videoId;
       console.log(song);
       console.log(song2);
       // arrays for holding returned video IDs and links to incorporate them
       IDArray = [];
       linkArray = [];
       //adds search results to ID array
       for (i=0; i<data.items.length; i++) {
        IDArray.push(data.items[i].id.videoId)
        console.log(IDArray);
       }
       //turns ID array items into links
       for (i=0; i<IDArray.length; i++) {
        linkArray.push('youtube.com/watch?v=' + IDArray[i]);
        console.log(linkArray);
      
// these loops need to be fixed so that it's adding all of the links to the linkarray. Also, need to add line breaks between results. finally,
// need to make them links.  Store them in a new array?
        // adds the text of the link array items to the html
        for (i=0; i<linkArray.length; i++) {
            resultsDiv = document.getElementById('results');
            linksDiv = document.createElement('a');
            linkText = linkArray[i];
            linkTextNode = document.createTextNode(linkText);
            linksDiv.appendChild(linkTextNode);
            resultsDiv.appendChild(linksDiv);
    
           }

       }
    })

     // Create a box to display the links
     // drop the links into the box
     //Clicking the link activates the player function...


// THIS IS THE YOUTUBE VIDEO PLAYER API SECTION
    //Take the array of clickable links and add event listeners to them using a for loop


        // the function inside the event listener should trigger the video player

            // this needs to send the link to the video player API and return a video

            // also needs to create a box in which to play the video
// THIS IS THE END OF THE YOUTUBE VIDEO PLAYER API SECTION


// THIS IS THE LYRICS API SECTION
    //clicking the search button triggers the return of the lyrics
    // also creates a box in which to display the lyrics

// THIS IS THE END OF THE LYRICS API SECTION


   
   .catch(error => console.error(error));
})
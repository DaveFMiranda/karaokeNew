var searchInput = document.getElementById("search");


document.querySelector("form.search-bar").addEventListener("submit", function(e){
   e.preventDefault();
   console.log(searchInput.value);
   const searchTerms = searchInput.value.replace(' ', '_');   
   const YouTubeAPIKey = "AIzaSyBHj9EPuptQC5RJjuRdyrT3jmI82emkqlo";
   const YTSearchBaseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet";
   const YTapiURL = YTSearchBaseURL + '&q=' + searchTerms + '&maxresults=10&type=video&key=' + YouTubeAPIKey;
   console.log (YTapiURL);
   fetch(YTapiURL)
   .then (response => response.json())
   .then (data => {
       console.log(data);
   })
   .catch(error => console.error(error));


   
})


   // Use this key in your application by passing it with key=API_KEY parameter.
/*   

fetch(YTapiURL)
    .then (response => response.json())
    .then (data => {
        console.log(data);
    })
    .catch(error => console.error(error));
}) */


/*<script src="https://apis.google.com/js/api.js"></script>
<script>
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyBHj9EPuptQC5RJjuRdyrT3jmI82emkqlo");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 10,
      "q": searchinput.value"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
</script>
<button onclick="authenticate().then(loadClient)">authorize and load</button>
<button onclick="execute()">execute</button>

*/

    
/* Clicking the search button should:
1) triggers YT data API
2) returns list of links
3) triggers lyrics API
4) stores lyrics API
5) triggers dynamic creation of JS search results box */




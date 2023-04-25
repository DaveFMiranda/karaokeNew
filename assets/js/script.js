var input = document.getElementById("input");
var search = document.getElementById("searchButton");
var requestURL = "https://api.lyrics.ovh/v1/artist/title";


function searchClick() {
   
    // calls the YT data API
    // GET https://www.googleapis.com/youtube/v3/search

    console.log(input.value);

    /* 1) triggers YT data API
    2) returns list of links
    3) triggers lyrics API
    4) stores lyrics API
    5) triggers dynamic creation of JS search results box */
}

search.addEventListener('click', searchClick);

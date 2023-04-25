var searchInput = document.getElementById("search");

document.querySelector("form.search-bar").addEventListener("submit", function(e){
   e.preventDefault();
    console.log(searchInput.value);
});
   
    




// calls the YT data API
// GET https://www.googleapis.com/youtube/v3/search

    

/* 1) triggers YT data API
2) returns list of links
3) triggers lyrics API
4) stores lyrics API
5) triggers dynamic creation of JS search results box */




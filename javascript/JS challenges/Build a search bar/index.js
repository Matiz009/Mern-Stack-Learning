document
    .getElementById("searchInput")
    .addEventListener("keyup", function(event) {
        //keyup is when you release the key
        let searchQuery = event.target.value.toLowerCase(); //toLowerCase is to make the search case insensitive
        let allNamesDOMCollection = document.getElementsByClassName("name");

        for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
            const name = allNamesDOMCollection[counter].textContent.toLowerCase();

            if (name.includes(searchQuery)) {
                //this function is used to check if the search query is in the name
                allNamesDOMCollection[counter].style.display = "block";
            } else {
                allNamesDOMCollection[counter].style.display = "none";
            }
        }
    });
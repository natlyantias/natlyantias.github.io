//Possibly remove

document.addEventListener('DOMContentLoaded', function(){
  fetch('https://natlyantias.github.io/getAll')
  .then(response => response.json())
  .then(data => console.log(data));
});

function redirectToReview() {
  window.location.href = "reviewindex.html";
}

document.getElementById("review-button").addEventListener("click", redirectToReview);



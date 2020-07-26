function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { //up
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
});
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
var tags = [  
  "artificial intelligence",
      "Artificial Intelligence A to Z:Learn How to Build an AI",
      "Artificial Intelligence:Reinforcement Learning in Python",
      "TensorFlow 2.0 : Deep Learning and Artificial Intelligence",
      "Web Development",
      "web design",
      "The Web Developer Bootcamp",
      "Angular - The Complete Guide (2020 Edition)",
      "The Complete JavaScript Course 2020: Build Real Projects!",
      "The Complete Web Developer Course 2.0",
      "The Complete 2020 Web Development Bootcamp",
      "Blockchain and Bitcoin Fundamentals",
      "blockchain",
      "Blockchain A-Z: Learn How To Build Your First Blockchain",
      "Ethereum and Solidity: The Complete Developer's Guide",
      "Become a Blockchain Developer with Ethereum and Solidity",
      "softskills",
      "Soft Skills: The 11 Essential Career Soft Skills",
      "Boost Your Career Success by Developing Your Soft Skills",
      "Soft Skills: The Complete Guide to Become a Respected Leader",
      "datascience",
      "The Data Science Course 2020: Complete Data Science Bootcamp",
      "Data Science A-Z: Real-Life Data Science Exercises Included",
      "Machine Learning A-Z: Hands-On Python & R In Data Science"
    ]; 
autocomplete(document.getElementById("search-bar"), tags);


var search = document.getElementById("search-bar");
search.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
        event.preventDefault();
        var searchvalue=document.getElementById("search-bar").value;
        window.location=("search.html"+"#"+searchvalue);
        window.location.reload();
   }
});
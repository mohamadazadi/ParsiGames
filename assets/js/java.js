
// function toggleMe() {
//     var myImages = document.getElementById("myToggle");
//     var change = myImages.querySelectorAll("coming");
//     for (var i = 0; i < change.length; i++) {
//         change[i].onclick = function () {
//             this.classList.add("activeme");
//         };
//     }
// }
// function toggleMe() {
//     var myImages = document.getElementById("myToggle");
//     var change = myImages.querySelectorAll(".coming");
//     for (var i = 0; i < change.length; i++) {
//         change[i].onclick = function () {
//             this.classList.add("activeme");


//         };

//     }
// }

function toggleMe() {
  var myImages = document.getElementById("myToggle");
  var change = myImages.querySelectorAll(".coming");

  for (var i = 0; i < change.length; i++) {
    change[i].onclick = function () {

      for (var j = 0; j < change.length; j++) {
        if (change[j] != this) {
          change[j].classList.remove("activeme");
        }
      }
      this.classList.add("activeme");
      this.style.transition = "all 0.5s"
    };
  }
}

function burgerMenu() {
  var btn = document.getElementById("myBurger");
  var menu = document.getElementById("show");
  btn.onclick = function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
}
function activeClass() {
  var showitems = document.getElementById("show");
  var items = showitems.querySelectorAll(".myitems");

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click",function () {
      var child = this.querySelector(".hiddenme");
      child.classList.toggle("activemenu");

      for (var j = 0; j < items.length; j++) {
        var otherChild = items[j].querySelector(".hiddenme");
        if (otherChild !== child) {
          otherChild.classList.remove("activemenu");
          child.style.transition = "all 0.5s";
        }
      }
    });
  }
}


function activeMazeMenu() {
  var showmazemenu = document.getElementById("showmazemenu");
  var mazemenu = document.getElementById("mymazemenu");
  showmazemenu.addEventListener("click",function () {
    if(mazemenu.style.display === "block"){
    mazemenu.style.display = "none";}
    else{
      mazemenu.style.display = "block"
    }
  })
  ;
}

// function activeClass() {
//   var showitems = document.getElementById("show");
//   var items = showitems.querySelectorAll(".myitems");

//   for (var i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", function () {
//       var child = this.querySelector(".hiddenme");
//       child.classList.toggle("activemenu");

//       for (var j = 0; j < items.length; j++) {
//         var otherChild = items[j].querySelector(".hiddenme");
//         if (otherChild !== child) {
//           otherChild.classList.remove("activemenu");
//         }
//       }
//     });
//   }
// }

// function activeMazeMenu() {
//   var showmazemenu = document.getElementById("showmazemenu");
//   var mazemenu = document.getElementById("mymazemenu");
//   showmazemenu.addEventListener("click", function () {
//     mazemenu.style.display = mazemenu.style.display === "block" ? "none" : "block";
//   });
// }




// function activeClass() {
//     var showitems = document.getElementById("show");
//     var items = showitems.querySelectorAll(".hide-items");
//     for (var i = 0; i < items.length; i++) {
//         items[i].onclick = function () {
//             for (var j = 0; j < items.length; j++) {
//                 if (items[j] != this) {
//                     items[j].classList.remove("active");
//                 }
//             }
//             this.classList.toggle("active");
//         }
//     }
// }


// function activeClass() {
//     var shoitems = document.getElementById("show");
//     var items = shoitems.querySelectorAll(".hide-items");

//     for (var i = 0; i < items.length; i++) {
//         items[i].onclick = function () {

//             for (var j = 0; j < items.length; j++) {
//                 if (items[j] != this) {
//                     items[j].classList.remove("active");
//                 }
//             }
//             this.classList.add("active");
//             this.style.transition = "all 0.5s"
//         };
//     }
// }






// function burgerMenu() {
//     var btn = document.getElementById("myBurger");
//     var items = document.querySelectorAll(".dropdown");
//     btn.onclick = function () {
//         if (items.style.display === "block") { items.style.display = "none"; }
//         else { items.style.display = "block"; }
//     }
// }

// function toggleMe() {
//     var myImages = document.getElementById("myToggle"); var change = myImages.querySelectorAll(".coming");

//     for (var i = 0; i < change.length; i++) {
//         change[i].onclick = function () {
//             if (this.classList.contains("activeme")) {
//                 this.classList.remove("activeme");
//             } else {
//                 this.classList.add("activeme");
//             }
//         };
//     }
// }
// function toggleMe() {
//     var myImages = document.getElementById("myToggle");
//     var comingImages = myImages.querySelectorAll(".coming");
//     comingImages.forEach(function (image) { image.classList.add("activeme"); });
// }

// $('.coming').click(function () {
//     var $this = $(this);
//     $this.closest(function(){

//         $('.coming').toggleClass('activeme');
//     });
// });
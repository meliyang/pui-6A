
// // Counter for items
// var counterDisplayElem = document.getElementById("counter-display"), count = 1;
// var counterMinusElem = document.getElementById("counter-minus");
// var counterPlusElem = document.getElementById("counter-plus");



// counterPlusElem.onclick = function() {
//     count++;
//     counterDisplayElem.innerHTML = count;
// } ;

// counterMinusElem.onclick = function() {
//     count--;
//     counterDisplayElem.innerHTML = count;
// };



function Cookie(name, count, frequency) {
  this.name = "cookie";
  this.count = count;
  this.frequency = frequency;
  this.image = "img/cookie.png";
  this.image_alt = "chocolate chip cookie";

}



function remove() {
  var element = document.getElementById("cookie-1"); // TODO: remove current item, currently hard coded to delet cookie-1
  element.remove();
}

var q = document.getElementById('quantity');
var frq = document.getElementById('frequency');

console.log(q);
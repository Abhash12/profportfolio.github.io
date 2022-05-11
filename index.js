let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let sec = document.querySelector('.sec');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    sec.classList.toggle('active');
}
var text = 'Abhash Kumar Singh';
var curr = 0;

var Write = function write(){
    var elem = document.getElementById('name');

    elem.textContent = elem.textContent + text.charAt(curr);
    curr++;

    if (curr < text.length)
    window.setTimeout(write, 150);
};

Write();

function showAlert()
{
    let myText = "video will be available soon."
    alert(myText);
}
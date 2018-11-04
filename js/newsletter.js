function borderBottom() {
    var b = document.getElementsByClassName("newsletter-input")[0];
    b.style.borderBottom = "1px solid #E91E63";
};
document.getElementsByClassName("newsletter-input")[0].onclick = function () {
    borderBottom();
};
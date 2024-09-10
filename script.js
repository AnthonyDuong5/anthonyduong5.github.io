console.log("Nothing here!");
let clicks = 0;
function buttonCounter() {
    ++clicks;
    alert("Button click count: " + clicks);
}
function noCopy() {
    document.getElementById("webpage").remove();
    alert("Are you copying my webpage?");
}
function boldDescription() {
    document.getElementById("description").style.fontWeight = "bold";
}
function resetDescription() {
    document.getElementById("description").style.fontWeight = "normal";
}
console.log("Nothing here!");
let clicks = 0;
document.getElementById('button').addEventListener('click', function() {
    ++clicks;
    alert('Button click count: ' + clicks);
});
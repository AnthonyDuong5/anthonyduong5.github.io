let clicks = 0;
function buttonCounter() {
    document.getElementById("button").textContent = `Button (Clicks: ${++clicks})`;
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
const element = document.querySelector(".animate");
let x = 0;
let direction = 1;
function animate() {
    if (window.innerWidth - 400 > 0) {
        x += direction * 2;
        if (x > window.innerWidth - 400 || x < 0) {
        direction *= -1;
        }
        element.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(animate);
    }
}
function handleResize() {
    x = Math.min(x, window.innerWidth - 400);
}
window.addEventListener("resize", handleResize);
animate();
console.log("Secret area found!");
const smallAlienInvader = `
\x1b[31m
  /\\_/\\
 ( o o )
  \\_^_/
  --|--
   / \\
\x1b[0m
`;
console.log(smallAlienInvader);
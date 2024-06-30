// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const currentPosition = parseInt(dodger.style.left);

    if (currentPosition > 0) {
    dodger.style.left = currentPosition - 1 + "px";
  }
}

function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}
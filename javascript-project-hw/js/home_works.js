const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[a-zA-Z0-9._-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "Почта корректна!"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "Почта некорректна!"
        gmailResult.style.color = "red"
    }
}
///////////////////////////////////////////////
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

function moveRight(position) {
  if (position <= parentBlock.clientWidth - childBlock.clientWidth) {
    childBlock.style.left = `${position}px`;
    setTimeout(() => {
      moveRight(position + 1);
    }, 10); 
  }
}

moveRight(0);
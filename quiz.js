// function checkAnswer() {
// let yourAnswer = document.querySelector('input[name="painter"]:checked');
// if (yourAnswer) {
//     if (yourAnswer.value === "Picasso") {
//         document.getElementById('showmsg').innerText = " you r right";
//     } 
//     else {
//         document.getElementByid("showmsg").innerText = " Try againg!"
//     }
//     else {
//         document.getElementByid("showmsg").innerText = " Try againg!"
//     }
// }
// }
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="painter"]:checked').value;
        const showResult = document.getElementById('showmsg');
        if (selectedAnswer === "Picasso") {
            showResult.textContent = 'you are right';
        } else {
            showResult.textContent = 'Try Again!';
        } 
    }
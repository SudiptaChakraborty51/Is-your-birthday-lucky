const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const errorMessage = document.querySelector('.error');
const outputMessage = document.querySelector('.output');
const emotionGif = document.querySelector('.emotion');

checkButton.addEventListener('click', function checkDOBLucky() {
    outputMessage.innerText = "Loading...";
    emotionGif.style.display="none";
    if (dateOfBirth.value != "" && luckyNumber.value != "") {
        errorMessage.style.display = "none";
        outputMessage.style.display = "block";
        var dob = dateOfBirth.value;
        dob = dob.replaceAll("-", "");
        let sumOfDigits = 0;
        for (let i = 0; i < dob.length; i++) {
            sumOfDigits = sumOfDigits + Number(dob.charAt(i));
        }
        if (sumOfDigits % luckyNumber.value == 0) {
            setTimeout(() => {
                outputMessage.innerText = "Your Birthday is LUCKY :)";
                emotionGif.style.display="block";
                emotionGif.innerHTML="<img src='/images/happy-gif.gif'>";
            },2000);
        } else {
            setTimeout(() => {
                outputMessage.innerText = "Your Birthday is NOT LUCKY :(";
                emotionGif.style.display="block";
                emotionGif.innerHTML="<img src='/images/sad-gif.gif'>";
            },2000);
        }
    } else {
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter both Date of Birth and Lucky Number!";
    }
});
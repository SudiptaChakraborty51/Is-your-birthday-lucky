const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const errorMessage = document.querySelector('.error');
const outputMessage = document.querySelector('.output');

checkButton.addEventListener('click', function checkDOBLucky() {
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
            outputMessage.innerText = "Your Birthday is LUCKY 😇";
        } else {
            outputMessage.innerText = "Your Birthday is NOT LUCKY 😔";
        }
    } else {
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter both Date of Birth and Lucky Number!";
    }
});
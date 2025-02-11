const birthdate = document.querySelector("#birthdate");
const ageBtn = document.querySelector("#calculate-btn");

ageBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(birthdate.value);
    const birthdateValue = new Date(birthdate.value);
    // const errorshow = document.querySelector("#error");
    const resultshow = document.querySelector("#result");

    // errorshow.textContent = " ";
    resultshow.textContent = " ";
    console.log(birthdateValue);

    if(!birthdate.value || birthdate > new Date()){
        resultshow.textContent = "please select a valid birthdate (not in a future )";
        resultshow.style.color = "rgb(169, 249, 8)";
            return;
    }

    const today = new Date();
    let years = today.getFullYear() - birthdateValue.getFullYear();
    let month = today.getMonth() - birthdateValue.getMonth();
    let days = today.getDate() - birthdateValue.getDate();

   
    console.log( years, month, days );

if (days < 0) {
    month--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}

if (month < 0) {
    years--;
    month += 12;
}

resultshow.textContent = `You are ${years} years, ${month} months, and ${days} days old.`;
resultshow.style.color = "white"
});











   
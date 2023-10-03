document.getElementById("btn-withdraw").addEventListener("click", () => {
    const inputField = document.getElementById("withdraw-field");
    const text = inputField.value;

    const textList = document.getElementById("withdrowList");
    const count = textList.childElementCount;
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    const H = document.createElement('h4');
    H.innerHTML = `${count + 1}➡️ Deposit Amount: ${text}.00 TK ⌚ Time→ ${formattedDate}`;
    textList.appendChild(H);
    inputField.value = "";
});

    

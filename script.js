const nextBtn = document.getElementById("next");



nextBtn.addEventListener("click", function() {
    const nameInput = document.getElementById("name-input").value;
    const emailInput = document.getElementById("email-input").value;
    const passwordInput = document.getElementById("tel-input").value;

    if (nameInput.trim() === "") {
        alert("Please enter your name");
    } else if (emailInput.trim() === "") {
        alert("Please enter your email");
    } else if (passwordInput.trim() === "") {
        alert("Please enter your password");
    } else {
        window.location.href = "step2.html";
    }
});

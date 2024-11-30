function myfunction() {
    let a = document.getElementById("email").value;
    if (a === "") {
        let alert = document.getElementById("for-email-alert").innerHTML = "*Enter your email";
    }
    else {
        alert("Your email : " + a + "\n" + "Email submitted successfully");
    }
}
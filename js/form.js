function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === '' || email === '') {
        document.getElementById('error').innerText = "All fields are required!";
        return false;
    } else {
        alert("Form Submitted Successfully!");
        return true;
    }
}

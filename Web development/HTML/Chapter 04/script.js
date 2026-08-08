const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value.trim();

    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
        alert("Name must contain at least 3 characters.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return;
    }

    if (address.length < 10) {
        alert("Please enter a complete address.");
        return;
    }

    alert("🎉 Travel Form Submitted Successfully!");

    console.log({
        Name: name,
        Phone: phone,
        Email: email,
        Gender: gender,
        Address: address
    });

    form.reset();
});

form.addEventListener("reset", function () {
    setTimeout(() => {
        alert("Form has been reset.");
    }, 100);
});
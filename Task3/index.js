document.addEventListener("DOMContentLoaded", function() {
    // Toggle Navigation Menu for Mobile View
    const navToggle = document.querySelector(".smallsize > ul > li > a");
    const dropdownMenu = document.querySelector(".smallsize > ul > li > ul");
    
    navToggle.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Simple Form Validation Example
    const contactForm = document.querySelector("#contact-form");
    
    if(contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const email = document.querySelector("#email").value;
            const phone = document.querySelector("#phone").value;
            
            if (!validateEmail(email) || !validatePhone(phone)) {
                event.preventDefault();
                alert("Please enter a valid email and phone number.");
            }
        });
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }
});

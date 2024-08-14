document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/'){
        const background = document.getElementById('background');
        const images = [
            './images/cow.jpg',
            './images/montserrat.jpg',
            './images/larches.jpg',
            './images/rimwall.jpg',
            './images/bird.jpg',
            './images/tent_ridge.jpg', 
            './images/cloud.jpg',
        ];
        let i = 0;

        function changeBackgroundImage() {
            background.style.backgroundImage = `url('${images[i]}')`;
            i = (i + 1) % images.length;
        }
        setInterval(changeBackgroundImage, 5000); // change image every 5 seconds
        changeBackgroundImage();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/education.html'){
        var accordion = document.getElementsByClassName("accordion");
        for (var i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/contact.html'){

        (function(){
            emailjs.init("QFNjbR8RyyiAuG9U3");
        })();
        
        function validateForm() {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let isValid = true;
        
            document.getElementById("name-error").textContent = "";
            document.getElementById("email-error").textContent = "";
            document.getElementById("message-error").textContent = "";
        
            if (name === "") {
                document.getElementById("name-error").textContent = "Name is required.";
                isValid = false;
            }
            if (email === "") {
                document.getElementById("email-error").textContent = "Email is required.";
                isValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                document.getElementById("email-error").textContent = "Enter a valid email address.";
                isValid = false;
            }
            if (message === "") {
                document.getElementById("message-error").textContent = "Message is required.";
                isValid = false;
            }
            return isValid;
        }

        const modal = document.getElementById('popup-modal');
        const closeButton = document.querySelector('.close-button');

        function showModal() {
            modal.style.display = 'block';
        }
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });


        function sendEmail(event) {
            event.preventDefault();
            if (validateForm()) {
                emailjs.send("service_g6q3ldr", "template_8b3m8wc", {
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    message: document.getElementById("message").value,
                })
                .then(function(response) {
                    console.log("Message sent!", response.status, response.text);
                    document.getElementById("contact-form").reset();
                    showModal();
                }, function(error) {
                    console.log("Failed to send.", error);
                });
            }
        }
        document.getElementById('contact-form').addEventListener('submit', sendEmail);
    }
});

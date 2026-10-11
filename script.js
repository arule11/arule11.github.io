document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/'){
        const background = document.getElementById('background');
        const images = [
            './images/cow.jpg',
            './images/montserrat.jpg',
            './images/larches.jpg',
            './images/rimwall.jpg',
            './images/farm.jpg',
            './images/bird.jpg',
            './images/tent_ridge.jpg', 
            './images/cloud.jpg',
        ];
        let i = 0;
        let first = true;

        const bg1 = document.createElement("div");
        const bg2 = document.createElement("div");

        bg1.className = "background-layer";
        bg2.className = "background-layer";

        background.appendChild(bg1);
        background.appendChild(bg2);

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        bg1.style.backgroundImage = `url('${images[0]}')`;
        bg1.classList.add("active");
        i = 1;

        function changeBackgroundImage() {
            const nextLayer = first ? bg2 : bg1;
            const currentLayer = first ? bg1 : bg2;

            const img = new Image();
            img.src = images[i];

            img.onload = function () {
                nextLayer.style.backgroundImage = `url('${images[i]}')`;
                nextLayer.classList.add("active");
                currentLayer.classList.remove("active");

                first = !first;
                i = (i + 1) % images.length;
            };
        }
        setInterval(changeBackgroundImage, 4000);
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

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/contact.html")) {
        emailjs.init("Pt3m20vHZsEDW2ULr");

        const form = document.getElementById("contact-form");
        const modal = document.getElementById("popup-modal");
        const closeButton = document.querySelector(".close-button");
        const button = form.querySelector('button[type="submit"]');

        function validateForm() {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            let isValid = true;

            document.getElementById("name-error").textContent = "";
            document.getElementById("email-error").textContent = "";
            document.getElementById("message-error").textContent = "";

            if (!name) {
                document.getElementById("name-error").textContent = "Name is required.";
                isValid = false;
            }

            if (!email) {
                document.getElementById("email-error").textContent = "Email is required.";
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById("email-error").textContent = "Enter a valid email address.";
                isValid = false;
            }

            if (!message) {
                document.getElementById("message-error").textContent = "Message is required.";
                isValid = false;
            }
            return isValid;
        }

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

        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            if (!validateForm()) return;

            button.disabled = true;
            button.textContent = "Sending...";

            try {
                await emailjs.send("service_3tyx699", "template_ktks4x5", {
                    name: document.getElementById("name").value.trim(),
                    email: document.getElementById("email").value.trim(),
                    message: document.getElementById("message").value.trim()
                });

                console.log("Message sent!");
                form.reset();
                showModal();
            } catch (error) {
                console.error("Failed to send message:", error);
                alert("Your message could not be sent. Please try again.");
            } finally {
                button.disabled = false;
                button.innerHTML = 'Send Message <i class="fas fa-envelope"></i>';
            }
        });
    }
});

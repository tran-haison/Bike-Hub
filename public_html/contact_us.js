function validateForm() { 
    const form = document.querySelector('.contact-us-form');

    // Add event listener when submitting form
    // Prevent submitting and showing error if invalidated
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);

    if (!form.checkValidity()) {
        return;
    }

    // Get the input
    let fullname = document.getElementById("fullname-input").value;
    let email = document.getElementById("email-input").value;
    let subject = document.getElementById("subject-input").value;
    let message = document.getElementById("message-input").value;

    // Do something with the input form
    console.log(fullname, email, subject, message);
}
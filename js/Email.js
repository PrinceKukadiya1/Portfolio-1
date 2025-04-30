function sendEmail(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    emailjs.send("service_lg8cys4", "template_4ibaaue", templateParams)
        .then((response) => {
            alert("Your message was sent successfully!");
            console.log(response);

            // Clear form fields
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#subject").value = "";
            document.querySelector("#message").value = "";
        })
        .catch((error) => {
            alert("Failed to send the message. Please try again.");
            console.error("Email sending error:", error);
        });
}




// function sendEmail(){
//     const templateParams = {
//         name : document.querySelector("#name").value,
//         email : document.querySelector("#email").value,
//         subject : document.querySelector("#subject").value,
//         message : document.querySelector("#message").value
//     };
// }

// emailjs.sent("service_lg8cys4" , "template_1ikvqt8" , templateParams).then(
//     res => {
//         document.getElementById("name").value = " ";
//         document.getElementById("email").value = " ";
//         document.getElementById("subject").value = " ";
//         document.getElementById("message").value = " ";
//         console.log(res);
//         alert("Your Message Sent Successfully")
        
//     }
// ).catch((res) => console.log(err));
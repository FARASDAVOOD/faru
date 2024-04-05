function sendMail(){
    var params ={
        name:document.getElementById("name").value.trim(),
        email:document.getElementById("email").value.trim() ,
        message:document.getElementById("message").value.trim(),
    };
const serviceID="service_ga8wktc";
const templateID="template_8zhkh99";


if (params.name === '' || params.email === '' || params.message === '') {
    alert('Please fill out all fields.');
    return;
}


let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(params.email)) {
                    document.getElementById('emailError').style.display = 'inline';
                    return;
                    
                } else {
                    document.getElementById('emailError').style.display = 'none';
                }
                

emailjs.send(serviceID,templateID,params)
.then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message sent successfully");

     })

.catch((err)=>{
    console.log(err)
alert('Oops! Something went wrong, please try again later.');
});
}



// (function(){
//     emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

//     document.getElementById('contactForm').addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Fetch form values
//         let formData = {
//             name: document.getElementById('name').value.trim(),
//             email: document.getElementById('email').value.trim(),
//             message: document.getElementById('message').value.trim()
//         };

//         // Validate form data
//         if (formData.name === '' || formData.email === '' || formData.message === '') {
//             alert('Please fill out all fields.');
//             return;
//         }

//         // Send email using EmailJS
//         emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
//             .then(function(response) {
//                 console.log("Email sent successfully!", response);
//                 alert('Your message has been sent successfully!');
//                 document.getElementById('contactForm').reset();
//             }, function(error) {
//                 console.error("Email could not be sent:", error);
//                 alert('Oops! Something went wrong, please try again later.');
//             });
//     });
// })();

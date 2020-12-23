function sendMail(contactForm) { 

emailjs.send("service_5b8i6v4","template_yu5z5no", 

    {   "from_name":contactForm.name.value, 
        "from_email":contactForm.email.value, 
        "project_request":contactForm.message.value 
    }) 

 .then( 
        function(response) { console.log("succes", response) },
        function(error) { console.log("failed", error); 
}); 

}

function submitEmail() {
    alert("Your message has been sent, Thank You.");
};
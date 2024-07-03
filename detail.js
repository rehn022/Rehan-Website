function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "connectrehanregi@gmail.com",
        Password : "",
        To : 'rehanregip@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}

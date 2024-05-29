function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "emkafali@gmail.com",
        Password : "10EC0DCA33FC9D00E31BAE9C9D7E5E68F2FD",
        To : 'prodbynomoney@gmail.com',
        From : "emkafali@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
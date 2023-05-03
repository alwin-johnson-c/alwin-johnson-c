/*$(document).ready(function(){
    $('#submit-form').validate({
        rules:{
            name:{
               required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:4,

            },
            message:{
                required:true

            },
            
},messages:{
    name:{
        required:"enter name",
       

    }
  
   
}
});
 $('#form>input').keyup(function(){
    var empty=false;
    $('#form>input').each(function(){
        if($(this).val()==""){
            empty=true;
        }
    });

if(empty){
    $('#submit').attr ('disabled','disabled');
}else{
    $('#submit').removeAttr('disabled');
}
});




})*/


//my validation//
/*
$("#submit-form").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email:true
        },
        subject:{
            minlength: 2
        }
    },
    messages: {
        name:{
        required: "Required name",
        minlength:"atleast 2"
        },
        email:"Required name",
        subject:"please enter"
        },
       
      },
    submitHandler: function(form) {
      form.submit();
    }
})*/
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var mobileError = document.getElementById('number-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name=document.getElementById('contact-name').value.trim();  

    if (name.length==0) {
        nameError.innerHTML='Name is Required';
        nameError.style.color='red'
        return false;
    }

    if (!name.match(/^[A-Za-z ]*$/)){
        nameError.innerHTML='Write a FullName';
        nameError.style.color='red'
        return false;
    }

    if (name.length<3){
        nameError.innerHTML='enter minimum 3 charactors';
        nameError.style.color='red'
        return false;
    }
    
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value.trim();
    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        return false;
    }
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    return true;
}

function validateMessage() {
    var message =document.getElementById('contact-message').value.trim();
    var Required=15;
    var left=Required - message.length;
    
    if(message.length==0 || message.length<10){
        messageError.innerHTML ='more character Required';
        messageError.style.color='red'
        return false;
    }
    messageError.innerHTML='Message is valid';
    messageError.style.color='green'
    return true;    
    
}

function validateMobile(){
	var phone = document.getElementById("contact-number").value.trim();
	if (phone.length == 0) {
		numberError.innerHTML = 'phone number is Required';
		numberError.style.color = 'red'
		document.getElementById("contact-number").style.borderColor = "red"
		document.getElementById("contact-number").style.color = "red"
		return false;
	}
	if (phone.length !=10) {
		numberError.innerHTML = "Enter Valid phonenumber"
		numberError.style.color = "red"
		document.getElementById("contact-number").style.borderColor = "red"
		document.getElementById("contact-number").style.color = "red"
		return false

	}
	if (!phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
		subjectError.innerHTML = "Phonenumber must be digits"
		subjectError.style.color("red")
		document.getElementById("contact-subject").style.borderColor = "red"
		document.getElementById("contact-subject").style.color = "red"


		return false;
    }
    subjectError.innerHTML = ""
	document.getElementById("contact-number").style.borderColor = "green"
	document.getElementById("contact-number").style.color = "green"
	return true;
}
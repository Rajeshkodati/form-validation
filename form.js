

function firstNameValidation(){
    var firstname =document.getElementById("username").value;
    const firstNameCharactersOnlyRegEx = /^[A-Z]+$/i;

    if(!firstname){
        document.getElementById("user").innerHTML ="Enter First Name";
        return false;
    } else if(!firstNameCharactersOnlyRegEx.test(firstname)){
        document.getElementById("user").innerHTML ="Enter Only Characters";
        return false;
    } else if((firstname.length<4) || (firstname.length>15)){
        document.getElementById("user").innerHTML ="Character should be 4 to 15 length";
        return false;
    } 
    else{
        document.getElementById("user").innerHTML ='';
    }
    return true;
}     
    
function lastNameValidation(){
    var lastname =document.getElementById("lastname").value;
    const lastNameNameCharactersOnlyRegEx = /^[A-Z]+$/i;

    if(!lastname){
        document.getElementById("last").innerHTML ="Enter Last Name";
        return false;
    } else if(!lastNameNameCharactersOnlyRegEx.test(lastname)){
        document.getElementById("last").innerHTML ="Enter Only Characters";
        return false;
    } else if((lastname.length<4) || (lastname.length>15)){
        document.getElementById("last").innerHTML ="Character should be 4 to 15 length";
        return false;
    } 
    else{
        document.getElementById("last").innerHTML ='';
    } 
    return true;
}
function passwordValidation(){
    var password =document.getElementById("password").value;
    if(!password){
        document.getElementById("pass").innerHTML ="Enter Password";
        return  false;
    }
   else if((password.length<4) || (password.length>15)){
        document.getElementById("pass").innerHTML ="Length shuold be 4 to 15 characters";
        return  false;
    
        }
    else if(password != cpassword){
        document.getElementById("cpass").innerHTML = "Password MissMatch";
        return false;
    }
    else{
        document.getElementById("pass").innerHTML ='';
    }
    return true;
}
function ConfirmValidation(){
    var cpassword =document.getElementById("cpassword").value;
    if(!cpassword){
        document.getElementById("cpass").innerHTML ="Enter Confirm Password";
        return  false;
    }
    else{
        document.getElementById("cpass").innerHTML =" ";
    }
    return true;
}
function mobileValidation(){
    let mobile =document.getElementById("mobile").value;
    const mobileRegulerExp = "^[0-9]*$";
    if(!mobile){
        document.getElementById("Mobilenumber").innerHTML ="Enter Mobile Number";
        return  false;
    }
   else if(!mobileRegulerExp.IsMatch(mobile)){
        document.getElementById("Mobilenumber").innerHTML ="Enter only 10 Digits";
        return  false;
    }
    else{
        document.getElementById("Mobilenumber").innerHTML =" ";
    }
    return true;
}
function emailValidation(){
    var email =document.getElementById("email").value;
    if(!email){
        document.getElementById("emaile").innerHTML ="Enter Email address";
        return  false;
    }
    else{
        document.getElementById("emaile").innerHTML =" ";
    }
    return true;
}    
function onValidation(){
    let isValidForm = true;
    isValidForm  = firstNameValidation();
    isValidForm  = lastNameValidation();
    isValidForm  = passwordValidation();
    isValidForm  = ConfirmValidation();
    isValidForm  = mobileValidation();
    isValidForm  = emailValidation();    
    if(isValidForm === true) {
        alert("All Fields Enter");
      }
   
}
function onResetValidation(){
    document.getElementById("user").innerHTML ='';
    document.getElementById("last").innerHTML ='';
    document.getElementById("pass").innerHTML ='';
    document.getElementById("cpass").innerHTML =" ";
    document.getElementById("Mobilenumber").innerHTML =" ";
    document.getElementById("emaile").innerHTML =" ";
}
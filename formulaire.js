
let x = new Date ();
document.getElementById('x').innerHTML = 'Bounjour Mr/Mme la date est ' + x.toLocaleDateString();
function validateForm(){ 
    //pour la vérification du nom
    var x=document.getElementById("nom").value;
    var y=document.getElementById("n");
    var letters = /^[A-Za-z-]+$/;
    if(x.length<2 || x==letters) {
        y.innerHTML="Erreur" ;
    y.style.color="red";
      }
      else{
          y.innerHTML="Valider" ;
          y.style.color="green";
      }
    //pour la vérification prénom
    var x=document.getElementById("prenom").value;
    var y=document.getElementById("Pr");
    var letters = /^[A-Za-z]+$/;
if(x.length<3 || x==letters) {
      y.innerHTML="Erreur" ;
      y.style.color="red";
    }
    else{
        y.innerHTML="Valider" ;
        y.style.color="green";
    }
    //pour la vérification du code posstal
    var x=document.getElementById("code p").value;
    var y=document.getElementById("c");
    var letters = /^[A-Za-z]+$/;
if(x.length < 5 || x==letters) {
      y.innerHTML="Erreur" ;
      y.style.color="red";
    }
    else{
        y.innerHTML="Valider" ;
        y.style.color="green";
    }
    //pour la verification d'E-mail
       var email = document.getElementById("mail").value;
      var y = document.getElementById('m');
      if (email== "" || email.indexOf("@", 0) < 0 || email.indexOf(".", 0) < 0)                                   
    { 
        y.innerHTML="L'e-mail est non valider"; 
        y.style.color="red";
        email.focus(); 
         
    }else{
        y.innerHTML="valider";  
        y.style.color="green";
        email.focus();   
    } 
    //pour la vérification du mot de passe
    var x=document.getElementById("p1").value;
    var y=document.getElementById("p");
    
   if(x.length < 6 || x=="") {
      y.innerHTML="Erreur" ;
      y.style.color="red";
    
    }
    else{
        
        y.innerHTML="Valider" ;
        y.style.color="green";

    }
    //Pour vérifier l'exactitude de la confirmation du mot de passe
    var a=document.getElementById("p1").value;
    var b=document.getElementById("p2").value;
    var y=document.getElementById("PP");
   if (a!=b || a=="") {
         y.innerHTML="Erreur" ;
         y.style.color="red";
    }
    else{
        y.innerHTML="Valider" ;
        y.style.color="green";
    }

    //pour la vérification d'age
    var x=document.getElementById("D").value;
    var y=document.getElementById("d");
    var age = new Date().getFullYear()- new Date(x).getUTCFullYear();

    if (age < 18 || age == "") {
        y.innerText="votre age doit etre plus grande que 17 ans" ;
        y.style.color="red";
    }
    else {
        y.innerText="Valider";
        y.style.color="green";
    }
   }

let x= new Date ();
document.getElementById('x').innerHTML = 'Bounjour Mr/Mme la date est ' + x.toLocaleDateString();

function validateForm(){ 
    //pour la vérification du nom
    var name=document.getElementById("nom").value;
    var E=document.getElementById("n");
    var letters = /^[A-Za-z-]+$/;
    if(name.length<2 || name==letters) {
        E.innerHTML="Erreur" ;
        E.style.color="red";
    }
    else{
        E.innerHTML="Valider" ;
        E.style.color="green";
    }
    //pour la vérification prénom
    var pré=document.getElementById("prenom").value;
    var E=document.getElementById("Pr");
    var letters = /^[A-Za-z]+$/;
    if(pré.length<3 || pré==letters) {
        E.innerHTML="Erreur" ;
        E.style.color="red";
    }
    else{
        E.innerHTML="Valider" ;
        E.style.color="green";
    }
    //pour la vérification du code posstal
    var code=document.getElementById("code p").value;
    var E=document.getElementById("c");
    var letters = /^[A-Za-z]+$/;
    if(code.length < 5 || code==letters) {
        E.innerHTML="Erreur" ;
        E.style.color="red";
    }
    else{
        E.innerHTML="Valider" ;
        E.style.color="green";
    }
    //por la vérification de pays
    var p=document.getElementById("pays").value;
    var E=document.getElementById("choix");
    if(p>1 || p=="Please select...") {
        E.innerHTML="Erreur" ;
        E.style.color="red";
      }
    else{
        E.innerHTML="Valider" ;
        E.style.color="green";
    }
    //pour la vérification du genre
    var g=document.querySelector('input[name ="genre"]:checked');
    var E=document.getElementById("g");
    if(g!=null) {
        E.innerHTML="Valider" ;
        E.style.color="green";
    }
    else{
        E.innerHTML="Erreur" ;
        E.style.color="red";
    }
     //pour la vérification des préférences de contact 
     var contact=document.querySelector('input[name ="pré"]:checked');
     var E=document.getElementById("pc");
     if(contact!=null) {
         E.innerHTML="Valider" ;
         E.style.color="green";
     }
     else{
         E.innerHTML="Erreur" ;
         E.style.color="red";
     }
    //pour la verification d'E-mail
    var x=document.getElementById("mail").value;
    var E=document.getElementById("m");
    var Email = new RegExp('^[0-9a-z._-]+[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    if(!Email.test(x)){
        E.innerText="Erreur"; 
        E.style.color="red"
    }
    else{
        E.innerText=" Valider";
        E.style.color="green";    
    }
    //pour la vérification du mot de passe
    var x=document.getElementById("p1").value;
    var E=document.getElementById("p");
    if(x.length < 6 || x=="") {
        E.innerHTML="Erreur" ;
        E.style.color="red";
    }
    else{  
        E.innerHTML="Valider" ;
        E.style.color="green";
     }
    //Pour vérifier l'exactitude de la confirmation du mot de passe
    var a=document.getElementById("p1").value;
    var b=document.getElementById("p2").value;
    var E=document.getElementById("pp");
    if (b!=a || b==""){ 
        E.innerHTML="Erreur" ;
        E.style.color="red";
    }
    else{
        E.innerHTML="Valider" ;
        E.style.color="green";
    }
    //pour la vérification d'age
    var date = document.getElementById("D").value;
    var E=document.getElementById("d");
    var age = new Date().getFullYear()-new Date(date).getUTCFullYear();
     if(age < 18|| x == ""){ 
        E.innerText="Erreur";
        E.style.color="red";
        alert(vous n)
    }
    else{  
        E.innerText="Valider";
        E.style.color="green";
    }
   }


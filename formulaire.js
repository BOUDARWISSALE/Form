
let x = new Date ();
document.getElementById('x').innerHTML = 'Bounjour Mr/Mme la date est ' + x.toLocaleDateString();
function validateForm(){
let myform = document.getElementById('myform');
myform.addEventListener('submit', function(e) {
    let myInput = document.getElementById('nom');
    let myRegex = /^[a-zA-Z-\]+$;
    
    if(myInput.ariaValueMax.trim()=="") {
        let myError = document.getElementById('erreur')
        myError.innerHTML = "le champs nom est requis.";
        myError.style.color = 'red';
        e.preventDefault();
    }else if (myRegex.test(myInput.value) == false){
        let myError == document.getElementById('erreur');
        myError.innerHTML = "le nom doit comporter des lettres"
        myError.style.color = 'red';
        e.preventDefault();
    }
}
}

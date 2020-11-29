let tel ;
let afterTel;

function Henkan() {
    tel = document.getElementById('tel').value;
    afterTel = tel.replaceAll('-','');
    console.log(afterTel);
    
}




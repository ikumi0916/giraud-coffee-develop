let tel ;
let afterTel;

    function Henkan() {
        tel = document.getElementById('tel').value;
        afterTel = tel.replace(/[^0-9]/g,'');
        console.log(afterTel);
    }
let tel ;
let afterTel;

    function Henkan() {
        tel = document.getElementById('tel').value;
        afterTel = tel.replace(/[^0-9０-９]/g,'');
        console.log(afterTel);
    }
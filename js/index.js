let tel ;
let afterTel;

    function Henkan() {
        tel = document.getElementById('tel').value;
        afterTel = tel.replace(/[^0-9]/g,'');
        console.log(afterTel);
    }
    // ボタン押下時に直接呼び出す関数
    function btnClickEve(){
        // 指定したテキストボックスの値を取得
        let str = document.getElementById('tel').value;
        // 関数を呼び出して値を整形
        str = toHanKaku(str);
        // ログ出力
        console.log(str);
    }
    // 数字以外を取り除き、全角を半角変換する
    function toHanKaku(str) {
        // returnの入れ子のなっていて分かりにくいけど、[数字以外を削除（数字以外は空replace）]に対して全角のreplaceをしている
        return str.replace(/[^0-9０-９]/g,'').replace(/[０-９]/g, function(s){
            // バイト文字で半角変換
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        })
    };

(function($, window) {
  $(function() {
    // この中に処理を書きます

    //1.jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみましょう。
    $('h2').remove();

  //2.#indexにtext()メソッドとhtml()メソッド(ともにパラメータ無し)を実行して、その違いについて比べてみましょう。
  //答え→textはウィンドウが出ている間ページの中身が表示されない。htmlはウィンドウが出ていてもページの中身が表示されている。
    /*var title = $('h1').text();
      alert(title);
    });*/
    var title = $('h1').html();
    alert(title);
    });

  //3.子要素を追加するappendというメソッドについて調べ、ul#indexの最後に<li>メソッド</li>を追加してみましょう。
     $('#index').append('<li>appendで追加した項目</li>');


  //4.ul#indexの子要素<li>それぞれ文字列の長さをalertしてみましょう。
     $('#index').find('li').each(function() {
       alert($(this).text().length);
     });

  //5.4.でalertではなく、各文字列の最後にその長さを追加してみましょう。例：jQueryのはじめ方[11文字]
    $('#index').find('li').each(function() {
    var thisValueLength = ($(this).text().length);
    $(this).append("[");
    $(this).append(thisValueLength);
    $(this).append("]");
    });
})(jQuery, window);

$(document).ready(() => {
  $('body').flowtype({
   // minimum : 500,
   maximum : 1000,
   minFont : 16,
   maxFont : 24,
   // fontRatio : 45,
  });

  $('span').popover({
    container: 'body'
  });

  let translateBlock = $('#translate');
  translateBlock.hide();


  $(".sentence").click(function() {
    let element = $(this);
    if (element.hasClass('selected')) {
      translateBlock.hide();
      $(".sentence.selected").removeClass('selected');
      return;
    }

    let translate = this.attributes.translate.value;
    if (!translate) return;

    translateBlock.text(translate);
    translateBlock.show();
    $(".sentence.selected").removeClass('selected');
    $(this).addClass('selected');
  });

  translateBlock.click(() => {
    translateBlock.hide();
    $(".sentence.selected").removeClass('selected');
  })

});


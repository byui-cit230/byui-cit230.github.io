let $headerItems = $('header .header-item');

$headerItems.click((event) => {
  let active = 'active';
  $headerItems.removeClass(active);
  $(event.target).addClass(active);
});
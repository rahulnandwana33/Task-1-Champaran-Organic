function changeIcon(elem){
  var plusIcon = elem.childNodes[1]
  var minusIcon = elem.childNodes[3]
  plusIcon.classList.toggle("disable")
  minusIcon.classList.toggle("disable")
  document.getElementById("label-"+elem.id).click()
}
document.getElementById("label-1").click()
$(window).scroll(function(e){ 
  var $el = $('.fixedElement'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 530 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 530 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'}); 
  } 
});
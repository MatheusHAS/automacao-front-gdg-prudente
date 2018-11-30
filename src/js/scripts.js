'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.pkm-list__item svg').forEach(function(i,ind) {
    i.addEventListener('click',function() {
      alert(i.getAttribute('data-pkm'));
    })
  })
  document.querySelectorAll('.gdgpp__nav li a').forEach(function(i,ind) {
    i.addEventListener('click',function() {
      alert(i.getAttribute('data-palestra'));
    })
  })
})
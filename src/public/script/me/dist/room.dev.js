"use strict";

document.querySelectorAll('.header__items ul li')[2].classList.add('active-item');
loadData();

function loadData() {
  $.ajax({
    url: '/me/device',
    method: 'GET',
    success: function success(data) {
      renderData(data);
    }
  });
}

function renderData(data) {
  var list = document.getElementById('devices');
  data.forEach(function (item) {
    var tr = document.createElement('tr');
    tr.innerHTML = "\n        <th>".concat(item.name, "</th>\n        <th>").concat(item.price, "</th>\n        <th>").concat(item.indemnify, "</th>\n        <th>").concat(item.description, "</th>    \n        ");
    list.appendChild(tr);
  });
}
"use strict";

document.querySelectorAll('.header__items ul li')[1].classList.add('active-item');
loadData();

function loadData() {
  $.ajax({
    url: '/me/getMyInfor',
    method: 'GET',
    success: function success(data) {
      console.log(data);
      renderData(data);
    }
  });
}

function renderData(data) {
  var list = document.querySelector('#customers');
  data.forEach(function (item) {
    var tr = document.createElement('tr');
    tr.innerHTML = "\n        <td>".concat(item.name, "</td>\n        <td>").concat(item.sex, "</td>\n        <td>").concat(item.identity, "</td>\n        <td>").concat(item.roomnumber, "</td>\n        <td>").concat(item.phone, "</td>\n        <td>").concat(item.startday, "</td>\n        <td>").concat(item.leaveday, "</td>\n        <td>").concat(item.note, "</td>\n            ");
    list.appendChild(tr);
  });
}
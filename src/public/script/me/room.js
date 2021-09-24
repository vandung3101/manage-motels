document.querySelectorAll('.header__items ul li')[2].classList.add('active-item')

loadData()
function loadData(){
    $.ajax({
        url: '/me/device',
        method: 'GET',
        success: function(data){
            renderData(data)
        }
    })
}

function renderData(data){
    let list = document.getElementById('devices')
    data.forEach(function(item){
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${item.name}</th>
        <th>${item.price}</th>
        <th>${item.indemnify}</th>
        <th>${item.description}</th>    
        `
        list.appendChild(tr)
    })
}
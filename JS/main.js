const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//abre barra de navegacao
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

//fecha a barra de navegacao
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})

//abilita thema
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})


//ordem aleatoria
Orders.forEach(order =>{
  const tr = document.createElement('tr');
  tr.innerHTML = `
        <td class       td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Decline' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Detalhes</td>
                    `;
  document.querySelector('table tbody').appendChild(tr);
})

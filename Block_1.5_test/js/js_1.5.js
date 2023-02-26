let ul_wrapper = document.querySelector('.hide-sector_section-b');
let button = document.querySelector('.theme-button');


button.onclick = function() {
   ul_wrapper.classList.toggle("hide-sector");
   console.log(ul_wrapper.classList[1]=="hide-sector" ? button.textContent="Показать все" : button.textContent="Скрыть" );
 };






 


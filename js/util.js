
document.addEventListener('DOMContentLoaded', function () {
     const collapseButton = document.querySelector('[data-collapse-toggle="navbar"]');
     const navbar = document.getElementById('navbar');

     // Toggle del navbar al hacer clic en el botón
     collapseButton.addEventListener('click', function () {
         navbar.classList.toggle('hidden');
     });

     // Cerrar el navbar si se hace clic fuera de él
     document.addEventListener('click', function (event) {
         if (!collapseButton.contains(event.target) && !navbar.contains(event.target)) {
             navbar.classList.add('hidden');
         }
     });
     const dropdownButton = document.getElementById('dropdownButton');
     const menu = document.getElementById('menu1');

     dropdownButton.addEventListener('click', function () {
         // Alternar la clase 'hidden' para mostrar/ocultar el menú
         menu.classList.toggle('hidden');
     });

     // Cerrar el menú si se hace clic fuera de él
     document.addEventListener('click', function (event) {
         if (!dropdownButton.contains(event.target) && !menu.contains(event.target)) {
             menu.classList.add('hidden');
         }
     });

 });

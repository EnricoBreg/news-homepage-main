// Script per aprire e chiudere il menu
/* ------------------------
 ELEMENTI DI INTERESSE DEL DOM
------------------------ */
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const mobileMenuModal = document.querySelector("#mobile-menu-modal");
const mobileMenu = document.querySelector("#mobile-menu");

console.log(closeMenuBtn);
/* ------------------------
 FUNZIONI
------------------------ */

// Funzione per aprire il menu su mobile
function openMenu() {
  // 1. rendo visibile il modale
  mobileMenuModal.classList.remove("display-none");
  // 2. trovo di quanto devo muovere il menu
  const mobileModalWidth = mobileMenuModal.getBoundingClientRect().width;
  // 3. muovo il menu
  mobileMenu.style.transform = `translateX(-${mobileModalWidth}px)`;
}

// Funzione per chiudere il menu su mobile
function closeMenu() {
  // 1. trovo di quanto muovere il menu
  const mobileModalWidth = mobileMenuModal.getBoundingClientRect().width;
  // 2. sposto il menu
  mobileMenu.style.transform = `translateX(${mobileModalWidth}px)`;
  // 3. rimuovo il modale
  mobileMenuModal.classList.add("display-none");
}

/* ------------------------
 EVENTI 
------------------------ */

// Evento per aprire il menu
openMenuBtn.addEventListener("click", openMenu);

// Evento per chiudere il menu
closeMenuBtn.addEventListener("click", closeMenu);

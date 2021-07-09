
const clickMenu = () => {
  const menu = document.getElementById("navegacion-lista");

  const clase = "navLinks-abierto";
  const estaAbierto = menu.classList.value.includes(clase);

  if (estaAbierto) {
    menu.classList.remove(clase);
  } else {
    menu.classList.add(clase);
  }
};
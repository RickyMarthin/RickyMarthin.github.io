let cambiarPagina = () => {
   let seleccion = document.getElementById("paginas").value;
   if (seleccion) {
      window.location.href = seleccion;
   }
}
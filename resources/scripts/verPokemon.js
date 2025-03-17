document.getElementById("pokemonForm").addEventListener("submit", function(event) {
   event.preventDefault();
   let nombre = document.getElementById("poke-name").value;
   let imagen = document.getElementById("poke-img").files[0];
   if (nombre.trim()) {
      console.log("Has elegido a " + nombre + "!");
      document.getElementById("post-poke-name").textContent = nombre;      
   } else {
      console.log("ELIGE UN POKEMON");
   }

   if(imagen) {
      let preview = document.getElementById("mostrarPokemon");
      let reader = new FileReader();
      reader.onload = function(e) {         
         preview.src = e.target.result;
         preview.style.display = "block";
      };
      reader.readAsDataURL(imagen);
   }
});
const gameInfo = {
   pokemon: "La historia del mundo Pokémon trata de todos los eventos sucedidos desde la creación del universo hasta la actualidad.",
   starcraft: "Cómo muchos otros juegos del estilo, StarCraft está empaquetado con una serie de misiones de combate pre-hechas...",
   warcraft: "El Universo Warcraft es el lore creado por Blizzard tomando como referencia la información publicada en diversos medios oficiales...",
   halo: "El universo de Halo se sitúa aproximadamente 500 años en el futuro, con la humanidad en guerra contra una alianza alienígena...",
   warhammer: "It is the 41st Millennium. For more than a hundred centuries the Emperor of Mankind has sat immobile on the Golden Throne of Earth..." 
};

document.querySelectorAll(".loadInfo").forEach(button => {
   button.addEventListener("click", function() {
      let gameId = this.id;
      let infoId = gameId + "Info";
      let infoCell = document.getElementById(infoId);

      if (infoCell.innerHTML === "") {
         infoCell.innerHTML = gameInfo[gameId] || "Informacion no disponible";         
         button.value = "Less Info";
         button.classList.add("active");
      } else {
         infoCell.innerHTML = "";
         button.value = "More-Info";
         button.classList.remove("active");
      }
   })
});

function previewImage(event) {
   const preview = document.getElementById("preview");
   const file = event.target.files[0];

   if (file) {
       const reader = new FileReader();
       reader.onload = function (e) {
           preview.src = e.target.result;
       };
       reader.readAsDataURL(file);
   } else {
       preview.src = "resources/imgs/foto.png"; // Imagen por defecto
   }
}

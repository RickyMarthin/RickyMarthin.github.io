document.getElementById("imagen-blog").addEventListener("change", function(event){
   const imagenPreview = document.getElementById("imagen-preview");
   const archivo = event.target.files[0];

   if (archivo) {
      const reader = new FileReader();
      reader.onload = function(e) {
         imagenPreview.src = e.target.result;
         imagenPreview.style.display = "block";
      };
      reader.readAsDataURL(archivo);
   }
});
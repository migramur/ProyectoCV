function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode-body");

   var elementTopBar = document.getElementById("topBar");
   elementTopBar.classList.toggle("dark-mode-topBar");

   var elementBlueSquare = document.getElementById("blueSquare");
   elementBlueSquare.classList.toggle("dark-mode-blueSquare");

   var elementTopBarNameMessiAnchor = document.getElementById("topBarNameMessiAnchor");
   elementTopBarNameMessiAnchor.classList.toggle("dark-mode-topBarNameMessiAnchor")

   var elementTopBarNameJugadorAnchor = document.getElementById("topBarNameJugadorAnchor");
   elementTopBarNameJugadorAnchor.classList.toggle("dark-mode-topBarNameJugadorAnchor");

   var elementTopBarDash = document.getElementById("topBarDash");
   elementTopBarDash.classList.toggle("dark-mode-topBarDash");

   var elementTopBarNav = document.getElementById("topBarNav");
   elementTopBarNav.classList.toggle("dark-mode-topBarNav");

   var elementhoverAnchor = document.getElementById("hoverAnchor");
   elementhoverAnchor.classList.toggle("dark-mode-hoverAnchor");

   var elementActiveAnchor = document.getElementById("activeAnchor");
   elementActiveAnchor.classList.toggle("dark-mode-activeAnchor");
   
   var elementMainCard = document.getElementById("mainCard");
   elementMainCard.classList.toggle("dark-mode-mainCard");
   
   var elementMainCardFullName = document.getElementById("mainCardFullName");
   elementMainCardFullName.classList.toggle("dark-mode-mainCardFullName");
   
   var elementMainCardBlueLine = document.getElementById("mainCardBlueLine");
   elementMainCardBlueLine.classList.toggle("dark-mode-mainCardBlueLine");
  
   var elementMainCardOccupation = document.getElementById("mainCardOccupation");
   elementMainCardOccupation.classList.toggle("dark-mode-mainCardOccupation");

   var elementMainCardBottomSpace = document.getElementById("mainCardBottomSpace");
   elementMainCardBottomSpace.classList.toggle("dark-mode-mainCardBottomSpace");
    
   var elementMainText = document.getElementById("mainText");
   elementMainText.classList.toggle("dark-mode-mainText");

   var elementMainTextLeftAnchor = document.getElementById("mainTextLeftAnchor");
   elementMainTextLeftAnchor.classList.toggle("dark-mode-mainTextLeftAnchor");

   var elementMainTextRightAnchor = document.getElementById("mainTextRightAnchor");
   elementMainTextRightAnchor.classList.toggle("dark-mode-mainTextRightAnchor");

   var elementFooter = document.getElementById("footer");
   elementFooter.classList.toggle("dark-mode-footer");

   var elementContactContainer1 = document.getElementById("contactContainer1");
   elementContactContainer1.classList.toggle("dark-mode-contactContainer");

   var elementContactContainer2 = document.getElementById("contactContainer2");
   elementContactContainer2.classList.toggle("dark-mode-contactContainer");

   var elementContactText = document.getElementById("contactText");
   elementContactText.classList.toggle("dark-mode-contactText")

}

function changeImage() {
  if (document.getElementById("dark-mode-button").src == "https://cdn.discordapp.com/attachments/976718154111778846/1072292068963123220/Imagen2.png"){
      document.getElementById("dark-mode-button").src = "https://cdn.discordapp.com/attachments/976718154111778846/1072292981438152785/Imagen3.png";
  } else {
      document.getElementById("dark-mode-button").src = "https://cdn.discordapp.com/attachments/976718154111778846/1072292068963123220/Imagen2.png";
  }
}


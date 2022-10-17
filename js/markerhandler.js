var elementsArray = [];

AFRAME.registerComponent("markerhandler", {
  init: async function () {
    var compounds = await this.getCompounds();

    this.el.addEventListener("markerFound", () => {
      
    });

    this.el.addEventListener("markerLost", () => {
      
    });
  },


  tick: function () {
    
  },
  // Calcular la distancia entre la posición de dos marcadores
  getDistance: function (elA, elB) {
    
  },  
  getCompound: function () {
    
  },
  showCompound: function (compound) {
    // Ocultar elementos
    elementsArray.map(item => {
      var el = document.querySelector(`#${item.element_name}-${item.barcode_value}`);
      el.setAttribute("visible", false);
    });
    // Mostrar compuesto
    var compound = document.querySelector(`#${compound.name}-${compound.value}`);
    compound.setAttribute("visible", true);
  },
  getCompounds: function () {
    // Nota: utiliza el servidor de ngrok para obtener los valores JSON
    return fetch("js/compoundList.json")
      .then(res => res.json())
      .then(data => data);
  },
});

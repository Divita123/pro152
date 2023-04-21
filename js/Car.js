AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    clickCounter: { type: "number", default: 0 }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    position = { x: 15, y: 9, z: 50 };
    rotation = { x: 0, y: 100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },
  update: function() {
    window.addEventListener("click", e => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter === 1) {
        const rotation = { x: 0, y: 50, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 2) {
        const rotation = { x: 0, y: 100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 3) {
        const rotation = { x: 0, y: 150, z: 0 };
        this.el.setAttribute("rotation", rotation);
       } 
    });
  }
});
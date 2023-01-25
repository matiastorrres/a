$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "yellow",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
        initial: [0.2, -0.1],
        wheelZoom: false,
        noSelect: true,
        decel: 1,
      },
      "tags"
    )
  ) {
    // something went wrong hide the canvas container,
    $("#myCanvasContainer");
  }
});

/* typewriter */
const $typewriter1 = document.getElementById("typewriter-1");

const typewriter1 = (text = "", tiempo = 200, etiqueta = "") => {
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "";
  let i = 0;
  let j = text.length;
  let escribir = setInterval(function () {
    if (i === arrayCaracteres.length) {
      //agregar el boton de contacto
      return;
    } else {
      etiqueta.innerHTML += arrayCaracteres[i];
      i++;
    }
  }, tiempo);
};

typewriter1(
  "Constancia👨‍💻, Enfoque🎯 y Trabajo duro💪 son las claves para cumplir nuestros objetivos.  ",
  100,
  $typewriter1
);

/*mouse efect*/

// var dots = [],
//   mouse = {
//     x: 0,
//     y: 0,
//   },
//   limit = 60; // left limit

// var Dot = function () {
//   this.x = 0;
//   this.y = 0;
//   this.node = (function () {
//     var n = document.createElement("div");
//     n.className = "trail";
//     document.body.appendChild(n);
//     return n;
//   })();
// };

// Dot.prototype.draw = function () {
//   this.node.style.left = this.x + "px";
//   this.node.style.top = this.y + "px";
// };

// for (var i = 0; i < 12; i++) {
//   var d = new Dot();
//   dots.push(d);
// }

// function draw() {
//   var x = mouse.x,
//     y = mouse.y;

//   if (x < limit) {
//     x = limit;
//   }

//   dots.forEach(function (dot, index, dots) {
//     var nextDot = dots[index + 1] || dots[0];

//     dot.x = x;
//     dot.y = y;
//     dot.draw();
//     x += (nextDot.x - dot.x) * 0.6;
//     y += (nextDot.y - dot.y) * 0.6;
//   });
// }

// addEventListener("mousemove", function (event) {
//   mouse.x = event.pageX;
//   mouse.y = event.pageY;
// });

// function animate() {
//   draw();
//   requestAnimationFrame(animate);
// }

// animate();

/*loader*/
window.addEventListener("load", () => {
  document.getElementById("loader").classList.toggle("loader2");
});

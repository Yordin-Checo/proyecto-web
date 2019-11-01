function Evaluar() {
  var Total = 0;
  var evaluar = document.getElementById("p1");
  var resultado = evaluar.options[evaluar.selectedIndex].value;

  if (resultado == 1) {
    Total = Total + 1;
  }
  evaluar = document.getElementById("p2");
  resultado = evaluar.options[evaluar.selectedIndex].value;
  if (resultado == 3) {
    Total = Total + 1;
  }
  evaluar = document.getElementById("p3");
  resultado = evaluar.options[evaluar.selectedIndex].value;

  if (resultado == 3) {
    Total = Total + 1;
  }
  evaluar = document.getElementById("p4");
  resultado = evaluar.options[evaluar.selectedIndex].value;

  if (resultado == 1) {
    Total = Total + 1;
  }
  evaluar = document.getElementById("p5");
  resultado = evaluar.options[evaluar.selectedIndex].value;

  if (resultado == 2) {
    Total = Total + 1;
  }
  evaluar = document.getElementById("p6");
  resultado = evaluar.options[evaluar.selectedIndex].value;

  if (resultado == 4) {
    Total = Total + 1;
  }
  if (Total == 0) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Intente de nuevo a fallado en todas!"
    });
  } else {
    return Swal.fire("Has logrado", "Un total de: " + Total, "success");
  }
}

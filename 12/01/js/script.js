window.onload = () => {
  let svgForm = document.querySelector("form");
  let drawButton = document.querySelector(".btn");
  let widthInput = document.querySelector("#exampleInputNumber1");
  let heightInput = document.querySelector("#exampleInputNumber2");
  let figureSelect = document.querySelector("#exampleCheck1");
  let figureContainer = document.querySelector(".figure-container");

  svgForm.oninput = () => {
    if (widthInput.value !== "" && heightInput.value !== "") {
      drawButton.removeAttribute("disabled");
    }
  };

  drawButton.onclick = (e) => {
    e.preventDefault();
    if (figureSelect.checked) {
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", widthInput.value * 2);
      svg.setAttribute("height", heightInput.value * 2);
      let elipse = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "ellipse"
      );
      elipse.setAttribute("cx", widthInput.value);
      elipse.setAttribute("cy", heightInput.value);
      elipse.setAttribute("rx", widthInput.value/2);
      elipse.setAttribute("ry", heightInput.value/2);
      svg.appendChild(elipse);
      figureContainer.appendChild(svg);
    } else {
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", widthInput.value);
      svg.setAttribute("height", heightInput.value);
      let rectangle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rectangle.setAttribute("x", "0");
      rectangle.setAttribute("y", "0");
      rectangle.setAttribute("width", widthInput.value);
      rectangle.setAttribute("height", heightInput.value);
      svg.appendChild(rectangle);
      figureContainer.appendChild(svg);
    }
  };
};

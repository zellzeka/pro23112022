window.onload = () => {
  let customRadus = document.querySelector("#exampleInputNumber1");
  let drawButton = document.querySelector(".btn");
  let circleContainer = document.querySelector(".figure-container");

  drawButton.onclick = (e) => {
    e.preventDefault();
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", customRadus.value * 2);
    svg.setAttribute("height", customRadus.value * 2);
    let circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", customRadus.value);
    circle.setAttribute("cy", customRadus.value);
    circle.setAttribute("r", customRadus.value);
    svg.appendChild(circle);
    circleContainer.appendChild(svg);

    circle.onclick = () => {
      svg.remove();
    };
  };
};

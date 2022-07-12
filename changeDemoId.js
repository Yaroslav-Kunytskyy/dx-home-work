const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML =
  'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

function setDemoInnerHtml(html) {
  return () =>
    document.getElementById("demo").innerHTML =
      'The first paragraph (index 0) inside "main" is: ' + html;
}

const paragraphs = document.querySelectorAll("p")

const firstButton = document.getElementById("first-value-button")
const secondButton = document.getElementById("second-value-button")

firstButton.onclick = setDemoInnerHtml(paragraphs[0].innerHTML)
secondButton.onclick = setDemoInnerHtml(paragraphs[1].innerHTML)

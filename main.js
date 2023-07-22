const containerEl = document.querySelector(".container")

const careers = ["Web Developer", "Software Engineer", "Frelancer", "Frontend Dev", "UI UX Designer"]

let careerIndex = 0;

let characterIndex = 0

updateText();
function updateText() {
  characterIndex++
  containerEl.innerHTML = `<h1>I am a Web ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
  if(characterIndex == careers[careerIndex].length){
    careerIndex++
    characterIndex = 0
  }
  
  if(careerIndex === careers.length){
    careerIndex = 0
  }
  setTimeout(updateText, 400);
}


const input = document.getElementById('userInput');

const image = document.querySelectorAll('img');
var i;
input.addEventListener("keyup", () => {
  for(i = 0; i < image.length; i++){
    const userInput = input.value.toUpperCase();
    const alt = image[i].getAttribute('alt').toUpperCase();
      if (alt.indexOf(userInput) > -1) {
        image[i].style.display = '';
      } else {
        image[i].style.display = 'none';
      }
    }
})

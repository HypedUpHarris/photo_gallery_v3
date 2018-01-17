/*const search = document.querySelector('#searchBox');
const photos = document.querySelectorAll('.photo');
const img = document.querySelectorAll('img');
const alt = document.querySelectorAll('img[alt]');
const userSearch = search.value;

search.addEventListener('keyup', () => {
  for(i=0; photos.length; i++) {
    if(alt == userSearch) {
      img.style.visibility = 'visible';
    } else {
      img.style.visibility = 'hidden';
    }
  }
});
*/
/*const input = document.getElementById('userInput');

const search = () => {
  const ul = document.getElementsByClassName('photos');
  const li = document.getElementsByTagName('li');
  const filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    let imageTitle = li['data-title'];
    if (imageTitle.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

input.addEventListener('keyup', search);
*/
const input = document.getElementById('userInput');
const userInput = input.value.toUpperCase();
const li = document.getElementsByTagName('li');
const image = document.querySelectorAll('img[alt]');
const titleSearch = () => {

  for(let i = 0; i < li.length; i++){

      if (image[i].textContent.toUpperCase().indexOf(userInput) > -1) {
        image[i].style.display = '';
        console.log(li[i].style.display);
      } else {
        image[i].style.display = 'none';
        console.log(li[i].style.display);
      }
    }
}
input.addEventListener("keyup", titleSearch);
// for (let i = 0; i < li.length; i++){
//   if (userInput == image){
//     li[i].style.display = '';
//   } else {
//     li[i].style.display = 'none';
//   }
// }

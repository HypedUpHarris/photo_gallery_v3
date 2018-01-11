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
const input = document.getElementById('userInput');

const search = () => {
  const ul = document.getElementsByClassName('photos');
  const li = ul.getElementsByTagName('li');
  const filter = input.value.toUpperCase();

  for (i = 0; i <li.length; i ++) {
    let imageTitle = i.getAttribute('data-title');
    if (imageTitle.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

input.addEventListener('keyup', search);

const search = document.querySelector('#searchBox');
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

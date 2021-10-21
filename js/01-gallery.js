import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');

const imgMarkUp = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkUp);

function renderGallery(items) {
  return items
    .map(item => {
      return `<div class="gallery__item">
            <a class="gallery__link" href=" ">
                <img
                    class="gallery__image"
                    src=" "
                    data-source=" "
                    alt=" "
                />
             </a>
        </div>`;
    })
    .join(' ');
}
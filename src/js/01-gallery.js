import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
renderGallery();

function renderGallery() {
  const galleryContent = galleryItems
    .map(e => {
      return `<li> <a class="gallery__item" href="${e.original}"> <img class="gallery__image" src="${e.preview}" alt="${e.description}"> </a> </li>`;
    })
    .join('');
  gallery.innerHTML = galleryContent;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

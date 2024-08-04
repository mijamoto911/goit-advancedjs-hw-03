import { createGalleryCard } from './js/render-functions';
import { searchPhotos } from './js/pixabay-api';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormElement = document.querySelector('.js-search-form');
const galleryElements = document.querySelector('.js-gallery');
const loaderElement = document.querySelector('.js-loader');
let lightbox;

const onSearchSubmit = event => {
  event.preventDefault();

  const searchValue = event.target.elements.user_query.value.trim();

  event.target.elements.user_query.value = '';

  if (searchValue === '') {
    iziToast.error({
      message: 'Please fill in this place',
      position: 'topRight',
    });

    return;
  }

  loaderElement.classList.remove('is-hidden');

  galleryElements.innerHTML = '';

  searchPhotos(searchValue)
    .finally(() => {
      loaderElement.classList.add('is-hidden');
    })
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      const galleryCards = hits
        .map(imgInfo => createGalleryCard(imgInfo))
        .join('');
      galleryElements.innerHTML = galleryCards;

      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery-link', {
          captionsData: 'alt',
          captionDelay: 250,
        });
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
      });
    });
};

searchFormElement.addEventListener('submit', onSearchSubmit);

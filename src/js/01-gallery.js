import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
// Additional styles import

import "simplelightbox/dist/simple-lightbox.min.css";

const picture = document.querySelector(".gallery")

createGallery();

function createGallery() {  
    const items = galleryItems.map(item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`).join("");
    picture.insertAdjacentHTML("beforeend", items);
}

let showLightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250, captionPosition: "bottom"});

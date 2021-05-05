import { animals } from './animalDict';

export function createAnimalCard(container, animal) {
  const fragment = document.createDocumentFragment();

  const img = document.createElement('img');
  img.alt = animals[animal].title;
  img.src = animals[animal].img;
  img.classList.add('sixth-screen__tooltip-image');

  const h3 = document.createElement('h3');
  h3.textContent = animals[animal].title;
  h3.classList.add('sixth-screen__tooltip-title', 'map-mode--title');

  const p = document.createElement('p');
  p.textContent = animals[animal].text;
  p.classList.add('sixth-screen__tooltip-text', 'map-mode--text');

  const a = document.createElement('a');
  a.href = animals[animal].href;
  a.textContent = 'Watch now ->';
  a.classList.add('sixth-screen__tooltip-lnk', 'map-mode--link');

  fragment.appendChild(img);
  fragment.appendChild(h3);
  fragment.appendChild(p);
  fragment.appendChild(a);
  container.appendChild(fragment);
}

/* 
    Trying out the Custom Elements v1 API part of Web Components. More info:
        - https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements
        - https://github.com/w3c/webcomponents/
        - https://caniuse.com/#feat=custom-elementsv1

    NOT included - there is a Webcomponent polyfill [https://github.com/webcomponents/custom-elements]

    And sorry for the sass mess. First time using Sass.
 */

import './components/reviews-box.js';
import './components/review.js';

window.addEventListener('load', async () => {
    const body = document.body;
    const fragment = document.createDocumentFragment();
    const reviewBox = document.createElement('review-box');

    reviewBox.html;
    body.append(reviewBox);
    const reviewResults = document.getElementsByClassName('reviews-results-wrapper')[0];

    const reviewsData = await fetchReviews();

    reviewsData.forEach(review => {
        const el = document.createElement('review-result');

        el.reviewResult = review;

        fragment.append(el);
    })

    reviewResults.append(fragment);
})

async function fetchReviews() {
    return fetch('./resources/data/reviews.json')
        .then(res => res.json())
        .then(data => data)
}
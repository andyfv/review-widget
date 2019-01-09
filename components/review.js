class Review extends HTMLElement {

    set reviewResult(review) {
        this.innerHTML = `
            <div class="review">
                <div class="review-stars-wrapper">
                    <div class="review-stars">
                        <img class="review-stars-bar" src="./resources//images/stars-bar-white-new.svg" alt="review stars">
                        <div class="review-stars-green" 
                            style="width: calc((0.2 * 160px) * ${review.starRating})">
                        </div>
                    </div>
                </div> 

                <div class="review-name">
                    <h6>${review.fullName}</h6>
                </div>

                <div class="review-location">
                    <p>Location: ${review.location || 'Not specified'}</p>
                </div>

                <div class="review-title">
                    <h3>${review.reviewTitle}</h3>
                </div>

                <div class="review-body">
                    <p>
                        ${review.reviewBody}
                    </p>
                </div>
            </div>
        `;
    }

}

customElements.define('review-result', Review);
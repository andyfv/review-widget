class ReviewBox extends HTMLElement {
     get html() {
         this.innerHTML = `
            <div class="reviews-box">
                <div class="reviews-filter">
                    <p class="reviews-filter-text">
                        Show: 
                    </p>
                    <ul class="reviews-filter-options">
                        <li class="filter-all">
                            All
                        </li>
                        <li class=" filter star">
                        </li>
                        <li class=" filter star">
                        </li>
                        <li class=" filter star">
                        </li>
                        <li class=" filter star">
                        </li>
                        <li class=" filter star">
                        </li>
                    </ul>
                </div>
                <div class="reviews-results">
                    <div class="reviews-results-wrapper">
                    </div>
                </div>
            </div>
         `
    };
}

customElements.define('review-box', ReviewBox);
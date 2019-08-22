import { LitElement, html, css } from "lit-element";
import "embla-carousel";

class SlideCard extends LitElement {
  constructor() {
    super();
  }

  firstUpdated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });

    const emblaNode = this.shadowRoot.querySelector(".embla");
    const options = { loop: true };
    const embla = EmblaCarousel(emblaNode, options);
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .image {
        background-color: white;
        background-image: url("/assets/images/pinkflower.jpg");
        background-size: cover;
        background-position: center;
      }

      .embla {
        overflow: hidden;
      }
      .card {
        border-radius: var(--border-radius);
        box-shadow: 0px 0px 10px 0px rgb(142, 142, 142);
        --scale: 25;
        width: calc(1rem * var(--scale));
        height: calc(1.3rem * var(--scale));
        display: flex;
        direction: ltr;
      }

      .embla__container {
        display: flex;
        flex-grow: 1;
      }

      .embla__slide {
        position: relative; /* Needed if loop: true */
        flex: 0 0 100%; /* Choose any width */
      }
    `;
  }

  render() {
    return html`
      <div class="embla card">
        <div class="embla__container">
          <div class="embla__slide image"></div>
          <div class="embla__slide image"></div>
          <div class="embla__slide image"></div>
        </div>
      </div>
      <div class="image"></div>
    `;
  }
}

customElements.define("fs-slide-card", SlideCard);

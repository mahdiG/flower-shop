import { LitElement, html, css } from "lit-element";
import "embla-carousel";
import "./fs-slide-dots";

class SlideCard extends LitElement {
  constructor() {
    super();

    this.images = [
      "/src/assets/images/whiteflower.jpg",
      "/src/assets/images/pinkflower.jpg",
      "/src/assets/images/sunflower.jpg"
    ];

    this.selectedImage = 0;
  }

  static get properties() {
    return {
      images: {
        type: Array
      },
      selectedImage: {
        type: Number
      }
    };
  }

  firstUpdated(changedProperties) {
    const emblaNode = this.shadowRoot.querySelector(".embla");
    const options = { loop: true };
    var embla = EmblaCarousel(emblaNode, options);

    embla.on("select", () => {
      this.selectedImage = embla.selectedScrollSnap();
    });
  }

  selectedDotStyle(index) {
    if (this.selectedImage === index) {
      return "dot-selected";
    }
  }

  static get styles() {
    return css`
      :host {
        --scale: 25;
      }

      .card {
        position: relative;
        border-radius: var(--border-radius);
        box-shadow: 0px 0px 5px 0px rgb(142, 142, 142);
        width: calc(1vw * var(--scale));
        height: calc(1.3vw * var(--scale));
        display: flex;
        direction: ltr;
      }
      .image {
        background-color: white;
        background-size: cover;
        background-position: center;
      }

      .embla {
        overflow: hidden;
      }

      .embla__container {
        display: flex;
        flex-grow: 1;
      }

      .embla__slide {
        position: relative; /* Needed if loop: true */
        flex: 0 0 100%; /* Choose any width */
      }

      .dots {
        direction: rtl;
        position: absolute;
        bottom: 1rem;
        right: 1%;
        left: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .dot {
        width: 10px;
        height: 10px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 100%;
        margin-right: 5px;
      }
      .dot-selected {
        background-color: rgba(0, 0, 0);
      }
    `;
  }

  render() {
    return html`
      <div class="embla card">
        <div class="embla__container">
          ${this.images.map(image => {
            return html`
              <div
                class="embla__slide image"
                style="background-image: url(${image})"
              />
            `;
          })}
        </div>

        <fs-slide-dots
          .selectedDot="${this.selectedImage}"
          .dotsCount=${this.images.length}
        ></fs-slide-dots>
      </div>
    `;
  }
}

customElements.define("fs-slide-card", SlideCard);

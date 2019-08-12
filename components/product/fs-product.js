import { LitElement, html, css } from "lit-element";
import "../fs-vertical-line";

class Product extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .main-container {
        display: flex;
        height: calc(100vh - 4rem);
        /* align-items: center; */
      }
      .right-side {
        /* background-color: lightgreen; */
        flex-grow: 1;
        flex-basis: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing);
      }
      .left-side {
        flex-grow: 2;
        flex-basis: 1rem;
        padding: calc(var(--spacing) * 2);
      }

      .image {
        --scale: 25;
        width: calc(1rem * var(--scale));
        height: calc(1.3rem * var(--scale));
        background-color: white;
        background-image: url("/assets/images/pinkflower.jpg");
        background-size: cover;
        background-position: center;
        border-radius: var(--border-radius);
      }

      .vertical-line {
        height: 90%;
      }

      .product-description {
        width: 80%;
      }
    `;
  }

  render() {
    return html`
      <div class="main-container">
        <div class="right-side">
          <div class="image"></div>
        </div>
        <div class="vertical-line">
          <fs-vertical-line></fs-vertical-line>
        </div>
        <div class="left-side">
          <h2>گل بنفش</h2>
          <p class="product-description">
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
          </p>
          <p class="product-description">
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
          </p>
          <p class="product-description">
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
          </p>
          <p class="product-description">
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
            گل صورتی یکی از زیباترین گل‌هاست. گل صورتی یکی از زیباترین گل‌هاست.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("fs-product", Product);

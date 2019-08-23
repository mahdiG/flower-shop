import { LitElement, html, css } from "lit-element";
import "../fs-vertical-line";
import "./fs-slide-card";

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
        flex-direction: column;
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

      .vertical-line {
        height: 90%;
      }

      .product-description {
        width: 80%;
      }

      fs-slide-card {
        --scale: 85;
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        .main-container {
          flex-direction: row;
        }
        fs-slide-card {
          --scale: 25;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="main-container">
        <div class="right-side">
          <fs-slide-card></fs-slide-card>
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

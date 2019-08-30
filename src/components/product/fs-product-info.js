import { LitElement, html, css } from "lit-element";
import "../fs-vertical-line";
import "./fs-slide-card";
import "../fs-login-card";

class ProductInfo extends LitElement {
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
        flex-grow: 1.5;
        flex-basis: 1rem;
        padding: calc(var(--spacing) * 2);
        /* color: darkslategray; */
      }

      fs-slide-card {
        --scale: 85;
      }

      fs-vertical-line {
        --height: 90%;
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        .main-container {
          flex-direction: row;
          height: calc(100vh - 4rem);
        }
        .product-description {
          width: 80%;
        }
        fs-slide-card {
          --scale: 30;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="main-container">
        <fs-login-card></fs-login-card>
        <div class="right-side">
          <fs-slide-card></fs-slide-card>
        </div>
        <fs-vertical-line></fs-vertical-line>
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

customElements.define("fs-product-info", ProductInfo);

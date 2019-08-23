import { LitElement, html, css } from "lit-element";
import "./fs-product-info";
import "./fs-product-specs";

class Product extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <fs-product-info></fs-product-info>
        <fs-product-specs></fs-product-specs>
      </div>
    `;
  }
}

customElements.define("fs-product", Product);

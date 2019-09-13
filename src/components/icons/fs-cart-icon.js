import { LitElement, html, css } from "lit-element";
import "./cart-icon.js"
import "../fs-badge.js"

class CartIcon extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      inCartCount: {
        type: Number
      }
    };
  }

  
  render() {
    return html`
    <div class="container">
      <cart-icon class="icon"></cart-icon>
      <fs-badge class="badge" .count=${2}></fs-badge>
    </div>
    `;
  }
  static get styles() {
    return css`
    :host {
      cursor: pointer;
    }
      .container {
        position: relative;
      }
      .icon {
        width: 2rem;
      }
      fs-badge {
        --size: 1rem;
      }
      .badge {
        position: absolute;
        bottom: 5%;
        right: 5%;
      }
      
    `;
  }
}

customElements.define("fs-cart-icon", CartIcon);

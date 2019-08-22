import { LitElement, html, css } from "lit-element";

class SlideCard extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
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
    `;
  }

  render() {
    return html`
      <div class="image"></div>
    `;
  }
}

customElements.define("fs-slide-card", SlideCard);

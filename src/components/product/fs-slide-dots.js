import { LitElement, html, css } from "lit-element";
import "embla-carousel";

class SlideDots extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      selectedDot: Number,
      dotsCount: Number
    };
  }

  static get styles() {
    return css`
      .dots {
        direction: ltr;
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
        <div class="dots">
          ${[...Array(this.dotsCount).keys()].map((image, index) => {
            return html`
              <div
                class="dot ${this.selectedDot === index && "dot-selected"}"
              />
            `;
          })}
        </div>
      </div>
    `;
  }
}

customElements.define("fs-slide-dots", SlideDots);

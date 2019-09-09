import { LitElement, html, css } from "lit-element";

class AddToCart extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      count: {
        type: Number
      }
    };
  }

  increment() {
    let myEvent = new CustomEvent("increment", {
      detail: {
        value: this.count + 1
      }
    });
    this.dispatchEvent(myEvent);
  }
  decrement() {
    let myEvent = new CustomEvent("decrement", {
      detail: {
        value: this.count - 1
      }
    });
    this.dispatchEvent(myEvent);
  }

  render() {
    return html`
      <div class="buttons-container">
        <button
          class="button-decrement ${this.count === 0 ? "hidden" : null}"
          @click=${this.decrement}
        >
          -
        </button>
        <button class="button-increment" @click=${this.increment}>
          +
        </button>
      </div>
    `;
  }

  static get styles() {
    return css`
      .buttons-container {
        all: unset;
        direction: ltr;
        display: flex;
        align-items: center;
        background-color: inherit;
        width: 5rem;
        height: 2rem;
        cursor: pointer;
        border-radius: var(--border-radius);
        overflow: hidden;
      }

      .button-decrement,
      .button-increment {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-grow: 1;
        height: 100%;
        transition: all 500ms;
      }

      .button-decrement {
        position: relative;
        background-color: var(--red);
      }

      .button-increment {
        background-color: var(--green);
      }

      .hidden {
        width: 0;
        flex-grow: 0;
        opacity: 0;
        transition: all 500ms;
      }
    `;
  }
}

customElements.define("fs-add-to-cart", AddToCart);

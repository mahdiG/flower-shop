import { LitElement, html, css } from "lit-element";

class Input extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      label: {
        type: String
      },
      placeholder: {
        type: String
      },
      type: {
        type: String
      },
      value: {}
    };
  }

  static get styles() {
    return css`
      .label {
        font-size: small;
        color: darkslategray;
      }
      .input {
        width: 100%;
        outline: none;
        border: none;
        /* border: 1px solid darkslategray; */
        border-radius: var(--border-radius);
        padding: calc(var(--spacing) / 1.5);
        background-color: rgba(250, 250, 250, 0.8);
      }

      /* remove numberic input arrows */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
      }

      input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
      }
    `;
  }

  render() {
    return html`
      <style>
        .input {
          direction: ${this.type === "number" ? "ltr" : "rtl"};
        }
      </style>

      <label class="label">شماره تلفن</label>
      <input
        class="input"
        .type=${this.type}
        .placeholder=${this.placeholder}
      />
    `;
  }
}

customElements.define("fs-input", Input);

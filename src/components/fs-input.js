import { LitElement, html, css } from "lit-element";
import mobileValidator from "../utils/validators/mobileValidator";

class Input extends LitElement {
  constructor() {
    super();

    this.hasError = false;
    this.showError = false;
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
      value: {},
      // errorText: {
      //   type: String
      // },
      name: {
        type: String
      },
      showError: {
        type: Boolean
      },
      hasError: {
        type: Boolean
      }
    };
  }

  updateValue(event) {
    let myEvent = new CustomEvent("change", {
      detail: {
        value: event.target.value,
        name: this.name,
        hasError: this.hasError
      }
    });
    this.dispatchEvent(myEvent);
  }

  handleMobileInput(event) {
    this.limitValueLength(event);

    if (event.target.value.length === 11) {
      let isValid = mobileValidator(event.target.value);

      if (!isValid) {
        this.hasError = true;
        this.showError = true;
      } else {
        this.hasError = false;
        this.showError = false;
      }
    } else {
      this.hasError = true;
      this.showError = false;
    }

    this.updateValue(event);
  }

  limitValueLength(event) {
    let maxLength = 11;
    event.target.value = event.target.value.slice(0, maxLength);
  }

  renderMobileInput() {
    return html`
      <style>
        .input {
          direction: ltr;
        }
      </style>

      <div class="container">
        <label class="label">${this.label}</label>
        <input
          class="input"
          type="tel"
          placeholder="09103801020"
          @input=${this.handleMobileInput}
        />
        ${this.showError
          ? html`
              <small class="error-text">شماره تلفن‌همراه اشتباه است.</small>
            `
          : null}
      </div>
    `;
  }

  renderProperInput() {
    switch (this.type) {
      case "mobile":
        this.renderMobileInput();
        break;

      default:
        break;
    }
  }

  render() {
    return html`
      <!-- <style>
        .input {
          direction: ${this.type === "number" ? "ltr" : "rtl"};
        }
      </style>

      <label class="label">${this.label}</label>
      <input
        class="input"
        .type=${this.type}
        .placeholder=${this.placeholder}
        @input=${this.limitValueLength}
      /> -->

      ${this.renderMobileInput()}
    `;
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
      }
      .label {
        font-size: small;
        color: darkslategray;
      }
      .input {
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

      .error-text {
        color: #ff005d;
        font-size: 0.7rem;
        /* height: 0.7rem; */
      }
    `;
  }
}

customElements.define("fs-input", Input);

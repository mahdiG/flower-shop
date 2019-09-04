import { LitElement, html, css } from "lit-element";
import "../../fs-input";

class LoginStep extends LitElement {
  constructor() {
    super();

    this.isButtonDisabled = true;
    this.phoneNumber = null;
    this.errors = [];
  }

  static get properties() {
    return {
      isButtonDisabled: {
        type: Boolean
      },
      phoneNumber: {
        type: Number
      },
      errors: {
        type: Array
      }
    };
  }

  changeStep() {
    let myEvent = new CustomEvent("change-step", {
      detail: {
        nextStep: 1
      }
    });
    this.dispatchEvent(myEvent);
  }

  handleErrors(event) {
    let { value, name, hasError } = event.detail;
    let errors = this.errors.filter(error => error.name !== name);

    if (hasError) {
      errors = [
        ...errors,
        {
          name,
          value,
          hasError
        }
      ];
    }

    this.errors = errors;
  }

  checkForErrors() {
    if (!this.errors.length) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  handlePhoneNumber(event) {
    let newPhoneNumber = event.detail.value;
    this.phoneNumber = newPhoneNumber;
    this.handleErrors(event);
    this.checkForErrors();
  }

  render() {
    return html`
      <div class="info-container">
        <!-- Heading could be replaced by a photo. -->
        <h1 class="heading">ورود</h1>
        <p class="description">شماره تلفن خود را وارد کنید</p>
      </div>
      <fs-input
        class="input-phone"
        label="شماره تلفن"
        name="phoneNumber"
        placeholder="۰۹۱۷۳۸۱۱۴۲۰"
        type="mobile"
        .value=${this.phoneNumber}
        @change=${this.handlePhoneNumber}
      ></fs-input>
      <button
        class="button"
        ?disabled=${this.isButtonDisabled}
        @click="${() => this.changeStep()}"
      >
        ارسال کد
      </button>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: calc(var(--spacing) * 3);
      }
      .heading {
        margin: 0;
        color: darkslategray;
      }
      .description {
        margin: 0;
        color: darkslategray;
      }

      .input-phone {
        width: 50%;
      }

      .button {
        all: unset;
        margin-top: var(--spacing);
        padding: calc(var(--spacing) / 4) var(--spacing);
        background-color: rgba(250, 250, 250, 0.8);
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: small;
        text-align: center;
        color: darkslategray;
        width: max-content;
      }

      .button:disabled {
        cursor: not-allowed;
        color: lightgray;
      }
    `;
  }
}

customElements.define("fs-login-step", LoginStep);

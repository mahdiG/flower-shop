import { LitElement, html, css } from "lit-element";

class ConfirmationStep extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      phoneNumber: {
        type: Number
      }
    };
  }

  changeStep(step) {
    let myEvent = new CustomEvent("change-step", {
      detail: {
        nextStep: step
      }
    });
    this.dispatchEvent(myEvent);
  }

  render() {
    return html`
      <div class="info-container">
        <!-- Heading could be replaced by a photo. -->
        <h1 class="heading">همین شماره؟</h1>
        <h2 class="description">${this.phoneNumber}</h2>
      </div>

      <div class="buttons-container">
        <button class="button button-green" @click=${() => this.changeStep(2)}>
          درسته
        </button>
        <button class="button button-red" @click=${() => this.changeStep(0)}>
          اشتباهه
        </button>
      </div>
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
        margin-bottom: calc(var(--spacing) * 1);
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
        /* width: 50vw; */
      }

      .buttons-container {
        display: flex;
        justify-content: space-between;
        margin-top: var(--spacing);
      }

      .button {
        all: unset;
        padding: calc(var(--spacing) / 4) var(--spacing);
        background-color: rgba(250, 250, 250, 0.8);
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: small;
        text-align: center;
        color: darkslategray;
        width: 3rem;
      }

      .button-green {
        background-color: rgba(186, 255, 193, 1);
        margin-left: var(--spacing);
      }
      .button-red {
        background-color: rgba(255, 186, 212, 1);
      }
    `;
  }
}

customElements.define("fs-confirmation-step", ConfirmationStep);

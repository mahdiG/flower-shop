import { LitElement, html, css } from "lit-element";
import "../../fs-input";

class VerficationStep extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  changeStep(step) {
    let event = new Event("change-step", {
      detail: {
        nextStep: step
      }
    });
    this.dispatchEvent(event);
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
        margin-bottom: calc(var(--spacing) * 2);
      }
      .heading {
        margin: 0;
        color: darkslategray;
      }
      .description {
        margin: 0;
        color: darkslategray;
      }

      .change-number {
        font-size: small;
        cursor: pointer;
        color: gray;
      }

      .input-phone {
        /* width: 50vw; */
      }

      .buttons-container {
        display: flex;
        flex-direction: column;
        margin-top: calc(var(--spacing) * 2);
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
    `;
  }

  render() {
    return html`
      <div class="info-container">
        <!-- Heading could be replaced by a photo. -->
        <!-- <h1 class="heading">کد تایید</h1> -->
        <h2 class="description">یک کد برای شماره ۰۹۱۷۳۸۱۱۴۲۰ ارسال شد</h2>
        <p class="description change-number">اصلاح شماره تلفن؟</p>
        <!-- <h2 class="description">یک کد شما پیامک شد</h2> -->
      </div>

      <fs-input
        class="input-phone"
        label="شماره تلفن"
        placeholder="۰۹۱۷۳۸۱۱۴۲۰"
        type="number"
      ></fs-input>

      <div class="buttons-container">
        <p class="description change-number">ارسال دوباره کد</p>
      </div>
    `;
  }
}

customElements.define("fs-verfication-step", VerficationStep);

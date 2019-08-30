import { LitElement, html, css } from "lit-element";
import "../../fs-input";

class LoginStep extends LitElement {
  constructor() {
    super();
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
        /* width: 50vw; */
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
    `;
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
        placeholder="۰۹۱۷۳۸۱۱۴۲۰"
        type="number"
      ></fs-input>
      <button class="button">ارسال کد</button>
    `;
  }
}

customElements.define("fs-login-step", LoginStep);

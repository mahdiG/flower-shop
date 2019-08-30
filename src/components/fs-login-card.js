import { LitElement, html, css } from "lit-element";
import "./fs-input";

class LoginCard extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .modal-background {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        /* background-color: rgba(250, 250, 250, 0.9); */
        background: linear-gradient(
          315deg,
          rgba(168, 255, 225, 0.92),
          rgb(128, 0, 128, 0.92)
        );
      }

      .card {
        position: absolute;
        right: 30%;
        top: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--spacing);
        /* box-shadow: var(--box-shadow); */
        box-shadow: 0px 0px 10px 0px rgb(142, 142, 142, 1);
        border-radius: var(--border-radius);
        background-color: rgba(250, 250, 250, 0.8);
        width: 500px;
        height: 400px;
        z-index: 3;
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
      }
    `;
  }

  render() {
    return html`
      <div class="modal-background">
        <div class="card">
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
        </div>
      </div>
    `;
  }
}

customElements.define("fs-login-card", LoginCard);

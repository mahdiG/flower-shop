import { LitElement, html, css } from "lit-element";
import "./steps/fs-login-step";
import "./steps/fs-confirmation-step";
import "./steps/fs-verification-step";

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
    `;
  }

  render() {
    return html`
      <div class="modal-background">
        <div class="card">
          <!-- <fs-login-step></fs-login-step> -->
          <!-- <fs-confirmation-step></fs-confirmation-step> -->
          <fs-verfication-step></fs-verfication-step>
        </div>
      </div>
    `;
  }
}

customElements.define("fs-login-card", LoginCard);

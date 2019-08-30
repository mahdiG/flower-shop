import { LitElement, html, css } from "lit-element";
import "./fs-login-card";

class Login extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .modal-background {
        width: 100vw;
        height: 100vh;
        background-color: rgba(250, 250, 250, 0.6);
      }
    `;
  }

  render() {
    return html`
      <div class="modal-background">
        <fs-login-card></fs-login-card>
      </div>
    `;
  }
}

customElements.define("fs-login", Login);

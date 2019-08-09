import { LitElement, html, css } from "lit-element";
import "./fs-card";

class Home extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .home {
        margin: 1rem;
      }
    `;
  }

  render() {
    return html`
      <div class="home">
        <fs-card></fs-card>
      </div>
    `;
  }
}

customElements.define("fs-home", Home);

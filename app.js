import { LitElement, html, css } from "lit-element";
import router from "./router";
import "./src/components/fs-header";
import "./src/components/fs-home";
import "./src/components/product/fs-product";

class App extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    let outlet = this.shadowRoot.getElementById("outlet");
    console.log("outlet: ", outlet);

    router(outlet);
  }

  static get styles() {
    return css`
      :host {
        --spacing: 1rem;
        --border-radius: 2px;
      }
    `;
  }

  render() {
    return html`
      <fs-header></fs-header>
      <div id="outlet"></div>
    `;
  }
}

customElements.define("fs-app", App);

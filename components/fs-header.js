import { LitElement, html, css } from "lit-element";
import "./fs-search.js";

class Header extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        direction: rtl;
        height: 4rem;
        background-color: #fae3f1;
        opacity: 0.9;
      }
      .menu-icon {
        margin-right: 1rem;
      }
      .avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 2px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        margin-left: 1rem;
      }
    `;
  }

  render() {
    return html`
      <div class="header">
        <img class="menu-icon" src="/assets/icons/menu.svg" />
        <fs-search></fs-search>
        <div class="avatar">
          <img class="person-icon" src="/assets/icons/person.svg" />
        </div>
      </div>
    `;
  }
}

customElements.define("fs-header", Header);

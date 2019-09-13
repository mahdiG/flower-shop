import { LitElement, html, css } from "lit-element";
import { Router } from "@vaadin/router";
import "./icons/fs-menu-icon.js";
import "./fs-search.js";

class Header extends LitElement {
  constructor() {
    super();

    this.showBack = false;
  }

  static get properties() {
    return {
      showBack: {
        type: Boolean
      }
    };
  }

  firstUpdated() {
    console.log("header updated");

    window.addEventListener("vaadin-router-location-changed", event =>
      this.handleMenuState(event)
    );
  }

  handleMenuState(event) {
    let pathname = event.detail.location.pathname;
    if (pathname !== "/") {
      this.showBack = true;
    } else {
      this.showBack = false;
    }
  }

  handleMenuClick() {
    if (this.showBack) {
      Router.go("/home");
    }
  }

  render() {
    return html`
      <div class="header">
        <fs-menu-icon
          ?showBack=${this.showBack}
          @click=${this.handleMenuClick}
        ></fs-menu-icon>
        <fs-search></fs-search>
        <div class="avatar">
          <img class="person-icon" src="/assets/icons/person.svg" />
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .header {
        /* position: fixed; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        direction: rtl;
        height: 4rem;
        background-color: rgba(250, 250, 250, 0.3);
        /* box-shadow: 0px 0px 5px 0px rgb(142, 142, 142); */
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
}

customElements.define("fs-header", Header);

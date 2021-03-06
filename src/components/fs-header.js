import { LitElement, html, css } from "lit-element";
import { Router } from "@vaadin/router";
import "./icons/fs-menu-icon.js";
import "./icons/fs-cart-icon.js";
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

  navigateToCart() {
    Router.go("/cart");
  }

  render() {
    return html`
      <div class="header">
        <fs-menu-icon
          ?showBack=${this.showBack}
          @click=${this.handleMenuClick}
        ></fs-menu-icon>
        <fs-search></fs-search>
        <div class="left-icons">
          <fs-cart-icon @click="${this.navigateToCart}"></fs-cart-icon>
          <!-- <div class="avatar">
            <img class="person-icon" src="/src/assets/icons/person.svg" />
          </div> -->
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
        padding: 0 var(--spacing);
        box-shadow: 0px 0px 5px 0px rgb(142, 142, 142);
      }
      .left-icons {
        display: flex;
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
        margin-right: var(--spacing);
      }
    `;
  }
}

customElements.define("fs-header", Header);

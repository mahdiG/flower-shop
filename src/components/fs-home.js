import { LitElement, html, css } from "lit-element";
import { Router } from "@vaadin/router";
import "./fs-card";

class Home extends LitElement {
  constructor() {
    super();

    this.images = [
      {
        id: 1,
        name: "گل سفید",
        price: "۲۰۰۰۰",
        url: "/src/assets/images/whiteflower.jpg"
      },
      {
        id: 2,
        name: "گل صورتی",
        price: "۴۰۰۰۰",
        url: "/src/assets/images/pinkflower.jpg"
      },
      {
        id: 3,
        name:
          " شتخسی بشسیب شس یب شس یب شسی بش سی بش سیب ش سی ب شس یبشسیبگل آفتابگردووووووووووووووووووووووووووووووووووووووووون",
        price: "۱۲۰۰۰۰",
        url: "/src/assets/images/sunflower.jpg"
      },
      {
        id: 3,
        name: "گل سفید",
        price: "۲۰۰۰۰",
        url: "/src/assets/images/whiteflower.jpg"
      },
      {
        id: 3,
        name: "گل صورتی",
        price: "۴۰۰۰۰",
        url: "/src/assets/images/pinkflower.jpg"
      },
      {
        id: 3,
        name:
          " شتخسی بشسیب شس یب شس یب شسی بش سی بش سیب ش سی ب شس یبشسیبگل آفتابگردووووووووووووووووووووووووووووووووووووووووون",
        price: "۱۲۰۰۰۰",
        url: "/src/assets/images/sunflower.jpg"
      },
      {
        id: 3,
        name: "گل سفید",
        price: "۲۰۰۰۰",
        url: "/src/assets/images/whiteflower.jpg"
      },
      {
        id: 3,
        name: "گل صورتی",
        price: "۴۰۰۰۰",
        url: "/src/assets/images/pinkflower.jpg"
      },
      {
        id: 3,
        name:
          " شتخسی بشسیب شس یب شس یب شسی بش سی بش سیب ش سی ب شس یبشسیبگل آفتابگردووووووووووووووووووووووووووووووووووووووووون",
        price: "۱۲۰۰۰۰",
        url: "/src/assets/images/sunflower.jpg"
      }
    ];
  }

  static get properties() {
    return {
      images: {
        type: Array
      }
    };
  }

  navigateToProduct(id) {
    console.log("navigating");

    Router.go(`/product/${id}`);
  }

  static get styles() {
    return css`
      .home {
        margin: calc(var(--spacing) * 2);
      }
      .grid-item {
        cursor: pointer;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-row-gap: 3rem;
        justify-content: space-around;
      }

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        .grid-container {
          grid-template-columns: repeat(1, auto);
          justify-content: center;
        }
        fs-card {
          --scale: 85;
        }
      }

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        .grid-container {
          grid-template-columns: repeat(2, auto);
          justify-content: space-around;
        }
        fs-card {
          --scale: 40;
        }
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .grid-container {
          display: grid;
          grid-template-columns: repeat(5, auto);
          /* grid-row-gap: 3rem; */
        }

        fs-card {
          --scale: 17;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="grid-container home">
        ${this.images.map(image => {
          return html`
            <fs-card
              @click=${() => this.navigateToProduct(image.id)}
              class="grid-item"
              name=${image.name}
              price="${image.price}"
              url="${image.url}"
            ></fs-card>
          `;
        })}
      </div>
    `;
  }
}

customElements.define("fs-home", Home);

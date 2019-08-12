import { LitElement, html, css } from "lit-element";
import "./fs-card";

class Home extends LitElement {
  constructor() {
    super();

    this.images = [
      {
        name: "گل سفید",
        price: "۲۰۰۰۰",
        url: "/assets/images/whiteflower.jpg"
      },
      {
        name: "گل صورتی",
        price: "۴۰۰۰۰",
        url: "/assets/images/pinkflower.jpg"
      },
      {
        name:
          " شتخسی بشسیب شس یب شس یب شسی بش سی بش سیب ش سی ب شس یبشسیبگل آفتابگردووووووووووووووووووووووووووووووووووووووووون",
        price: "۱۲۰۰۰۰",
        url: "/assets/images/sunflower.jpg"
      },
      {
        name: "گل سفید",
        price: "۲۰۰۰۰",
        url: "/assets/images/whiteflower.jpg"
      },
      {
        name: "گل صورتی",
        price: "۴۰۰۰۰",
        url: "/assets/images/pinkflower.jpg"
      },
      {
        name:
          " شتخسی بشسیب شس یب شس یب شسی بش سی بش سیب ش سی ب شس یبشسیبگل آفتابگردووووووووووووووووووووووووووووووووووووووووون",
        price: "۱۲۰۰۰۰",
        url: "/assets/images/sunflower.jpg"
      },
      {
        name: "گل سفید",
        price: "۲۰۰۰۰",
        url: "/assets/images/whiteflower.jpg"
      },
      {
        name: "گل صورتی",
        price: "۴۰۰۰۰",
        url: "/assets/images/pinkflower.jpg"
      },
      {
        name:
          " شتخسی بشسیب شس یب شس یب شسی بش سی بش سیب ش سی ب شس یبشسیبگل آفتابگردووووووووووووووووووووووووووووووووووووووووون",
        price: "۱۲۰۰۰۰",
        url: "/assets/images/sunflower.jpg"
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

  static get styles() {
    return css`
      .home {
        margin: var(--spacing);
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
          --scale: 17;
        }
      }

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        .grid-container {
          grid-template-columns: repeat(2, auto);
          justify-content: space-around;
        }
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .grid-container {
          display: grid;
          grid-template-columns: repeat(5, auto);
          /* grid-row-gap: 3rem; */
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

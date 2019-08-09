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
        margin: 1rem;
      }
    `;
  }

  render() {
    return html`
      <div class="home">
        ${this.images.map(image => {
          return html`
            <fs-card
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

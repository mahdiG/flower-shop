import { LitElement, html, css } from "lit-element";
import "./fs-product-info";
import "./fs-product-specs";

class Product extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("this.location:", this.location.params.id);
  }

  // scrollToBottom() {
  //   window.scrollTo(0, document.body.scrollHeight);
  // }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        /* .scroller {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
        }

        .scroller section {
          height: 100vh;
          scroll-snap-align: start;
        }

        .first-section {
          height: calc(100vh - 4rem);
        } */
      }
    `;
  }

  render() {
    return html`
      <!-- <div class="container scroller">
        <fs-product-info class="section"></fs-product-info>
        <fs-product-specs class="section"></fs-product-specs>
      </div> -->

      <article class="scroller">
        <section class="first-section">
          <fs-product-info></fs-product-info>
        </section>
        <section>
          <fs-product-specs></fs-product-specs>
        </section>
      </article>
    `;
  }
}

customElements.define("fs-product", Product);

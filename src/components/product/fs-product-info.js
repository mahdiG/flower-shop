import { LitElement, html, css } from "lit-element";
import "../fs-vertical-line";
import "./fs-slide-card";
import "../login-card/fs-login-card";

class ProductInfo extends LitElement {
  constructor() {
    super();

    this.inEditMode = true;

    this.product = {
      name: "گل بنفش خوشگل",
      description: null
    };
  }

  static get properties() {
    return {
      inEditMode: {
        type: Boolean
      },
      product: {
        type: Object
      }
    };
  }

  handleNameEdit(event) {
    // CTRL + Z returns undefined
    if (event) {
      let text = event.originalTarget.innerText;
      this.product.name = text;
    }
  }

  handleDescriptionEdit(event) {
    // CTRL + Z returns undefined
    console.log("event: ", event);

    if (event) {
      let text = event.originalTarget.innerText;
      this.product.description = text;

      // let maxLength = 20;
      // if (text.length < maxLength) {
      //   this.product.description = text;
      //   console.log("desc: ", this.product.description);
      // } else {
      //   console.log("else");

      // }
    }
  }

  render() {
    return html`
      <div class="main-container">
        <!-- <fs-login-card></fs-login-card> -->
        <div class="right-side">
          <fs-slide-card></fs-slide-card>
        </div>
        <fs-vertical-line></fs-vertical-line>
        <div class="left-side">
          <h2
            id="product-name"
            data-placeholder="نام محصول را بنویسید"
            contenteditable="${this.inEditMode}"
            @input=${() => this.handleNameEdit(event)}
          >
            ${this.product.name || "نام محصول"}
          </h2>
          <p
            id="product-description"
            class="product-description"
            data-placeholder="توضیحات محصول بنویسید"
            contenteditable="${this.inEditMode}"
            @input=${() => this.handleDescriptionEdit(event)}
          >
            ${this.product.description || "توضیحات محصول"}
          </p>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .main-container {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
      }

      .right-side {
        /* background-color: lightgreen; */
        flex-grow: 1;
        flex-basis: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing);
      }
      .left-side {
        flex-grow: 1.5;
        flex-basis: 1rem;
        padding: calc(var(--spacing) * 2);
        /* color: darkslategray; */
      }

      fs-slide-card {
        --scale: 85;
      }

      fs-vertical-line {
        --height: 90%;
      }

      /* adds placeholder to editable content */
      [contentEditable="true"]:empty:not(:focus):before {
        content: attr(data-placeholder);
        color: grey;
        font-style: italic;
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        .main-container {
          flex-direction: row;
          height: calc(100vh - 4rem);
        }
        .product-description {
          width: 80%;
        }
        fs-slide-card {
          --scale: 30;
        }
      }
    `;
  }
}

customElements.define("fs-product-info", ProductInfo);

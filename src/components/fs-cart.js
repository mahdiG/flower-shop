import { LitElement, html, css } from "lit-element";
import "./fs-product-card";
import "./fs-vertical-line";
import "./fs-horizontal-line";

class Cart extends LitElement {
  constructor() {
    super();

    this.products = [
      {
        id: 1,
        likeCount: 600,
        isLiked: true,
        inCartCount: 5
      },
      {
        id: 2,
        likeCount: 100,
        isLiked: false,
        inCartCount: 10
      },
      {
        id: 3,
        likeCount: 20,
        isLiked: true,
        inCartCount: 1
      },
      {
        id: 4,
        likeCount: 20,
        isLiked: true,
        inCartCount: 1
      },
      {
        id: 5,
        likeCount: 20,
        isLiked: true,
        inCartCount: 1
      },
      {
        id: 6,
        likeCount: 20,
        isLiked: true,
        inCartCount: 1
      }
    ];
  }

  static get properties() {
    return {
      products: {
        type: Array
      }
    };
  }

  handleCartChange(event, id) {
    console.log("cart change: ", event.detail.value);
    console.log("id: ", id);

    let newValue = event.detail.value;

    let productIndex = this.products.findIndex(product => product.id === id);

    let newProduct = { ...this.products[productIndex] };
    let newProducts = [...this.products];

    newProducts[productIndex].inCartCount = newValue;

    this.products = [...newProducts];
  }

  render() {
    return html`
      <div class="main-container">
        <div class="right-side">
          ${this.products.map(product => {
            return html`
              <fs-product-card
                class="product-card"
                .isLiked=${product.isLiked}
                .likeCount=${product.likeCount}
                .inCartCount=${product.inCartCount}
                @cart-change=${event =>
                  this.handleCartChange(event, product.id)}
              ></fs-product-card>
            `;
          })}
        </div>

        <div>
          <fs-vertical-line class="vertical-line"></fs-vertical-line>
        </div>

        <div class="left-side">
          <div class="checkout-card">
            <div class="checkout-item">
              <span class="item-title">هزینه کل</span>
              <span>۲۵۰،۰۰۰</span>
            </div>

            <div class="checkout-item discount">
              <span class="item-title">تخفیف</span>
              <span class="discount-price">(۲۵٪) ۲۵۰،۰۰۰</span>
            </div>

            <div class="checkout-item final-price">
              <span class="item-title">هزینه نهایی</span>
              <span class="discount-price">۲۵۰،۰۰۰</span>
            </div>

            <div class="horizontal-line">
              <fs-horizontal-line></fs-horizontal-line>
            </div>

            <div class="checkout-item button-checkout-container">
              <button class="button-checkout">
                ادامه ثبت سفارش
              </button>
            </div>
          </div>
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
        flex-grow: 1.5;
        flex-basis: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* padding: var(--spacing) calc(var(--spacing) * 12); */
      }
      .left-side {
        flex-grow: 1;
        flex-basis: 1rem;
        padding: calc(var(--spacing) * 2);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: relative;
      }

      .product-card {
        margin-top: var(--spacing);
      }

      .checkout-card {
        width: 100%;
        position: sticky;
        top: calc(var(--spacing) * 5);
        background-color: rgba(250, 250, 250, 0.2);
        padding: var(--spacing);
        box-shadow: var(--box-shadow);
      }

      .checkout-item {
        display: flex;
        padding: calc(var(--spacing) / 2) var(--spacing);
      }
      .item-title {
        flex-grow: 1;
      }

      .discount {
        color: var(--gray);
      }

      .final-price {
        font-weight: bold;
      }

      fs-horizontal-line {
        --color: lightgray;
      }
      .horizontal-line {
        padding: calc(var(--spacing) / 2);
      }

      .vertical-line {
        position: fixed;
        /* height of header */
        top: 4rem;
      }
      fs-vertical-line {
        height: calc(100vh - 4rem);
      }

      .button-checkout-container {
        justify-content: center;
      }

      .button-checkout {
        all: unset;
        cursor: pointer;
        background-color: var(--green);
        padding: calc(var(--spacing) / 2) var(--spacing);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        width: 100%;
        text-align: center;
      }

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        .main-container {
          padding: var(--spacing);
        }
        .left-side {
          padding: 0;
          margin-top: var(--spacing);
        }

        .checkout-card {
          /* background-color: rgba(250, 250, 250, 0.6); */
        }

        .vertical-line {
          display: none;
        }
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .main-container {
          flex-direction: row;
          min-height: calc(100vh - 4rem);
          /* height: 100vh; */
        }

        fs-product-card {
          width: 65%;
        }

        .checkout-card {
          width: 70%;
        }
      }
    `;
  }
}

customElements.define("fs-cart", Cart);

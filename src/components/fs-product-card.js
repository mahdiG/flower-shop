import { LitElement, html, css } from "lit-element";
import "./fs-add-to-cart";
import "./fs-badge";

class ProductCard extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      likeCount: { type: Number },
      isLiked: { type: Boolean },
      inCartCount: { type: Number }
    };
  }

  toggleLike() {
    let myEvent = new CustomEvent("like", {
      detail: {
        value: !this.isLiked
      }
    });
    this.dispatchEvent(myEvent);
  }

  passCartChange(event) {
    let myEvent = new CustomEvent("cart-change", {
      detail: {
        value: event.detail.value
      }
    });
    this.dispatchEvent(myEvent);
  }

  render() {
    return html`
      <div class="card">
        <fs-badge class="badge" count=${this.inCartCount}></fs-badge>

        <div class="card-content">
          <h2 class="price">گل بنفش</h2>
          <!-- <p class="price">از فروشگاه رنگین‌کمان</p> -->
          <h3 class="price">۲۰۰،۰۰۰ تومان</h3>
          <p class="price-discount">
            ۳۰۰،۰۰۰ تومان
          </p>
          <div class="icons-container">
            <fs-add-to-cart
              .count=${this.inCartCount}
              @increment=${this.passCartChange}
              @decrement=${this.passCartChange}
            ></fs-add-to-cart>
            <div class="like">
              <div class="icon-container" @click=${this.toggleLike}>
                <div class="icon heart-icon">
                  <fs-like .isLiked=${this.isLiked}></fs-like>
                </div>
              </div>
              <p class="like-count">${this.likeCount}</p>
            </div>
            <div class="icon-container">
              <img class="icon share-icon" src="/src/assets/icons/share.svg" />
            </div>
          </div>
        </div>

        <div class="card-image"></div>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        --width: 35rem;
      }

      .badge {
        position: absolute;
        top: -5px;
        left: -5px;
      }
      .card {
        display: flex;
        background-color: rgba(250, 250, 250, 0.2);
        box-shadow: 0px 0px 5px 0px rgb(142, 142, 142, 0.1);
        border-radius: var(--border-radius);
        /* overflow: hidden; */
        position: relative;
        width: var(--width);
        height: calc(var(--width) / 1.9);
      }

      .card-content {
        flex-grow: 1;
        flex-basis: 1px;
        padding: calc(var(--spacing) * 2);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .card-image {
        flex-grow: 1.1;
        flex-basis: 1px;
        background-size: cover;
        background-position: center;
        background-image: url("/src/assets/images/pinkflower.jpg");
        background-color: whitesmoke;
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      .price {
        margin-bottom: 0;
      }
      .price-discount {
        text-decoration: line-through;
        color: var(--gray);
        margin-top: 0;
        font-size: small;
      }

      .icons-container {
        display: flex;
        align-items: center;
        margin-top: calc(var(--spacing) * 2);
      }
      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        cursor: pointer;
      }

      .like {
        display: flex;
        align-items: center;
        flex-grow: 1;
        margin-right: var(--spacing);
      }

      .heart-icon {
        display: flex;
        align-items: center;
      }

      .like-count {
        font-size: small;
      }

      .cart-button {
        background-color: rgba(250, 250, 250, 0.3);
        padding: calc(var(--spacing) / 2) var(--spacing);
        border-radius: var(--border-radius);
        cursor: pointer;
        width: 100px;
        display: flex;
        justify-content: center;
      }

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        .card {
          width: 100%;
        }
        .card-image {
          display: none;
        }
      }
    `;
  }
}

customElements.define("fs-product-card", ProductCard);

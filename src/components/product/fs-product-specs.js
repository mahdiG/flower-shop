import { LitElement, html, css } from "lit-element";
import "../fs-vertical-line";
import "./fs-like";

class ProductSpecs extends LitElement {
  constructor() {
    super();

    this.likeCount = 600;
    this.isLiked = false;
    this.isInCart = true;
  }

  static get properties() {
    return {
      likeCount: { type: Number },
      isLiked: { type: Boolean },
      isInCart: { type: Boolean }
    };
  }

  toggleLike(event) {
    // Prevents event triggering twice.
    event.preventDefault();

    console.log("like is currently: ", this.isLiked);

    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likeCount += 1;
    } else {
      this.likeCount -= 1;
    }
  }
  toggleCart() {
    this.isInCart = !this.isInCart;
  }

  static get styles() {
    return css`
      .main-container {
        display: flex;
        flex-direction: column;
        background-color: "purple";
        /* align-items: center; */
      }

      .right-side {
        /* background-color: lightgreen; */
        flex-grow: 1.5;
        flex-basis: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .left-side {
        flex-grow: 1;
        flex-basis: 1rem;
        padding: calc(var(--spacing) * 2);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .left-card {
        display: flex;
        width: 100%;
        background-color: rgba(250, 250, 250, 0.2);
        box-shadow: 0px 0px 5px 0px rgb(142, 142, 142, 0.1);
        border-radius: var(--border-radius);
        overflow: hidden;
      }

      .card-content {
        flex-grow: 1;
        padding: calc(var(--spacing) * 2);
        flex-basis: 1px;
      }
      .card-image {
        flex-grow: 1.1;
        background-size: cover;
        background-position: center;
        background-image: url("/assets/images/pinkflower.jpg");
        flex-basis: 1px;
      }

      .price {
        margin-bottom: 0;
      }
      .price-discount {
        text-decoration: line-through;
        color: gray;
        margin-top: 0;
        font-size: small;
      }

      .grid-container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        width: 85%;
        height: 80%;
      }

      .grid-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        margin-bottom: calc(var(--spacing) / 2);
        border-radius: var(--border-radius);
      }

      .spec-title:last-of-type,
      .spec-value:last-of-type {
        border-bottom: none;
      }

      .spec-title,
      .spec-value {
        background-color: rgba(250, 250, 250, 0.2);
      }
      .spec-title {
        /* border-left: 1px solid lightgray; */
        margin-left: calc(var(--spacing) / 2);
      }
      .spec-value {
        /* border-left: 1px solid lightgray; */
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

      fs-slide-card {
        --scale: 85;
      }
      fs-vertical-line {
        --height: 90%;
      }

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        .grid-container {
          height: unset;
        }
        .card-image {
          display: none;
        }
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        .main-container {
          flex-direction: row;
          /* height: calc(100vh - 4rem); */
          height: 100vh;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="main-container">
        <div class="right-side">
          <div class="grid-container">
            <div class="grid-item spec-title">asdfasdf</div>
            <div class="grid-item spec-value">qwerqwer</div>
            <div class="grid-item spec-title">
              شسیب شسی بش سیب شسی بش سیب ش سیب
            </div>
            <div class="grid-item spec-value">
              qwerqw erq
            </div>
            <div class="grid-item spec-title">
              شسیب شسی بش سیب شسی بش سیب ش سیب
            </div>
            <div class="grid-item spec-value">
              qwerqw erq wer qwe rq erq er qe rq werq werq er qew rqwer
            </div>
            <div class="grid-item spec-title">asdfasdf</div>
            <div class="grid-item spec-value">qwerqwer</div>
            <div class="grid-item spec-title">asdfasdf</div>
            <div class="grid-item spec-value">qwerqwer</div>
            <div class="grid-item spec-title">asdfasdf</div>
            <div class="grid-item spec-value">qwerqwer</div>
            <div class="grid-item spec-title">asdfasdf</div>
            <div class="grid-item spec-value">qwerqwer</div>
            <div class="grid-item spec-title">asdfasdf</div>
            <div class="grid-item spec-value">qwerqwer</div>
            <div class="grid-item spec-title">asdfasdf</div>
            <div class="grid-item spec-value">qwerqwer</div>
          </div>
        </div>
        <fs-vertical-line></fs-vertical-line>
        <div class="left-side">
          <div class="left-card">
            <div class="card-content">
              <h2 class="price">گل بنفش</h2>
              <p class="price">از فروشگاه رنگین‌کمان</p>
              <h3 class="price">۲۰۰،۰۰۰ تومان</h3>
              <p class="price-discount">
                ۳۰۰،۰۰۰ تومان
              </p>
              <div class="icons-container">
                <div class="cart-button" @click=${this.toggleCart}>
                  ${this.isInCart ? "افزودن به سبد" : "حذف از سبد"}
                </div>
                <div class="like">
                  <div class="icon-container" @click=${this.toggleLike}>
                    <div class="icon heart-icon">
                      <fs-like .isLiked=${this.isLiked}></fs-like>
                    </div>
                  </div>
                  <p class="like-count">${this.likeCount}</p>
                </div>
                <div class="icon-container">
                  <img class="icon share-icon" src="/assets/icons/share.svg" />
                </div>
              </div>
            </div>

            <div class="card-image" />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("fs-product-specs", ProductSpecs);

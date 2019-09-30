import { LitElement, html, css } from "lit-element";
import "../fs-vertical-line";
import "../fs-product-card";
import "./fs-like";

class ProductSpecs extends LitElement {
  constructor() {
    super();

    this.likeCount = 600;
    this.isLiked = false;
    this.inCartCount = 0;
  }

  static get properties() {
    return {
      likeCount: { type: Number },
      isLiked: { type: Boolean },
      inCartCount: { type: Boolean }
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
  handleCartChange(event) {
    console.log("cart change: ", event.detail.value);
    this.inCartCount = event.detail.value;
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
          <fs-product-card
            .isLiked=${this.isLiked}
            .likeCount=${this.likeCount}
            .inCartCount=${this.inCartCount}
            @cart-change=${this.handleCartChange}
          ></fs-product-card>
        </div>
      </div>
    `;
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
}

customElements.define("fs-product-specs", ProductSpecs);

import { LitElement, html, css } from "lit-element";

class Card extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    let imageUrl = css`"/assets/images/pinkflower.jpg"`;

    return css`
      .card {
        --scale: 15;
        width: calc(1rem * var(--scale));
        height: calc(1.3rem * var(--scale));
        border-radius: 2px;
        box-shadow: 0px 0px 10px 0px rgb(142, 142, 142);
        /* box-shadow: 0px 0px 10px 0px black; */

        display: flex;
        flex-direction: column-reverse;
        position: relative;
        overflow: hidden;

        background-image: url(${imageUrl});
        background-size: cover;
        background-position: center;
      }
      .card-bottom {
        height: 30%;
        overflow: hidden;
        position: relative;
      }

      .blurry-background {
        height: calc(1.3rem * var(--scale));
        width: 100%;
        flex-grow: 1;
        background-image: url(${imageUrl});
        background-size: cover;
        background-position: center;
        transform: translateY(-70%);
        filter: blur(4px);
      }

      .card-content {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        color: black;
        background-color: rgba(250, 250, 250, 0.3);
        filter: blur(0);
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="card-bottom">
          <div class="blurry-background"></div>
          <div class="card-content">
            <p class="name">گل سفید</p>
            <p class="price">۲۵،۰۰۰ تومان</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("fs-card", Card);

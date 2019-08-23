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
        background-image: url(${imageUrl});
        background-size: cover;
        background-position: center;
        border-radius: 2px;
        box-shadow: 0px 0px 10px 0px rgb(142, 142, 142);
        /* box-shadow: 0px 0px 10px 0px black; */

        display: flex;
        flex-direction: column-reverse;
        position: relative;
        overflow: hidden;
      }

      .card-content-background {
        height: 30%;
        width: 100%;
        flex-grow: 1;
        /* filter: blur(4px); */
        background-image: url(${imageUrl});
        background-size: cover;
        /* background-position: center -44.6%; */
        background-position: center bottom;
        position: absolute;
        right: 0;
      }

      .card-content {
        display: flex;
        flex-direction: column;
        height: 30%;
        color: black;
        background-color: rgba(250, 250, 250, 0.3);
        z-index: 2;
        filter: blur(0);
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="card-content-background"></div>
        <div class="card-content">
          <p class="name">گل سفید</p>
          <p class="price">۲۵،۰۰۰ تومان</p>
        </div>
      </div>
    `;
  }
}

customElements.define("fs-card", Card);

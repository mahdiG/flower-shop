import { LitElement, html, css } from "lit-element";

class Card extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      name: {
        type: String
      },
      price: {},
      url: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      :host {
        --scale: 15;
      }
      .card {
        width: calc(1rem * var(--scale));
        height: calc(1.3rem * var(--scale));
        border-radius: 2px;
        box-shadow: 0px 0px 10px 0px rgb(142, 142, 142);

        display: flex;
        flex-direction: column-reverse;
        position: relative;
        overflow: hidden;

        background-color: white;
        background-size: cover;
        background-position: center;
      }
      .card-bottom {
        height: 30%;
        overflow: hidden;
        position: relative;
      }

      .card-content {
        position: absolute;
        height: 100%;
        width: 100%;
        color: black;
        background-color: rgba(250, 250, 250, 0.6);

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        top: 100%;
        transition: top 500ms;
      }

      .card:hover .card-content {
        top: 0;
        transition: all 500ms;
      }

      .name,
      .price {
        margin: 0 1rem;
        /* word-break: break-all; */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `;
  }

  render() {
    return html`
      <div class="card" style="background-image: url(${this.url})">
        <div class="card-bottom">
          <div class="card-content">
            <p class="name">${this.name}</p>
            <p class="price">${this.price} تومان</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("fs-card", Card);

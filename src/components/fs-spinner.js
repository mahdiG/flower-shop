import { LitElement, html, css } from "lit-element";

class Spinner extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <span class="flower"></span>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        --size: 0.5rem;
        --spread: calc(var(--size) / 1.333333);
        --petal-size: calc(var(--size) / 4);
        --petal-color: #fd8;
        --core-color: #e96;
      }

      .container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        /* background-color: rgba(0, 0, 0, 0.1); */
        background-color: rgb(128, 0, 128, 0.3);
      }

      .flower:not(:required) {
        overflow: hidden;
        position: absolute;
        bottom: 8%;
        right: 8%;
        text-indent: -9999px;
        display: inline-block;
        width: var(--size);
        height: var(--size);
        background: var(--core-color);
        border-radius: 100%;
        box-shadow: white 0 0 15px 0,
          var(--petal-color) calc(var(--spread) * (-1))
            calc(var(--spread) * (-1)) 0 var(--petal-size),
          var(--petal-color) var(--spread) calc(var(--spread) * (-1)) 0
            var(--petal-size),
          var(--petal-color) var(--spread) var(--spread) 0 var(--petal-size),
          var(--petal-color) calc(var(--spread) * (-1)) var(--spread) 0
            var(--petal-size);
        animation: flower 5s infinite ease-in-out;
        transform-origin: 50% 50%;
      }

      @keyframes flower {
        0% {
          transform: rotate(0deg);
          box-shadow: white 0 0 15px 0,
            var(--petal-color) calc(var(--spread) * (-1))
              calc(var(--spread) * (-1)) 0 var(--petal-size),
            var(--petal-color) var(--spread) calc(var(--spread) * (-1)) 0
              var(--petal-size),
            var(--petal-color) var(--spread) var(--spread) 0 var(--petal-size),
            var(--petal-color) calc(var(--spread) * (-1)) var(--spread) 0
              var(--petal-size);
        }
        50% {
          transform: rotate(1080deg);
          box-shadow: white 0 0 15px 0,
            var(--petal-color) var(--spread) var(--spread) 0 var(--petal-size),
            var(--petal-color) calc(var(--spread) * (-1)) var(--spread) 0
              var(--petal-size),
            var(--petal-color) calc(var(--spread) * (-1))
              calc(var(--spread) * (-1)) 0 var(--petal-size),
            var(--petal-color) var(--spread) calc(var(--spread) * (-1)) 0
              var(--petal-size);
        }
      }
    `;
  }
}

customElements.define("fs-spinner", Spinner);

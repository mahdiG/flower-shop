import { LitElement, html, css } from "lit-element";

class VerticalLine extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        --color: gray;
        --height: 100%;
      }
      .container {
        height: 100%;
        display: flex;
        align-items: center;
      }
      .vertical-line {
        height: var(--height);
        width: 1px;
        background: #333;

        background: -webkit-linear-gradient(
          bottom,
          hsla(0, 0%, 0%, 0) 0%,
          var(--color) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
        background: -moz-linear-gradient(
          bottom,
          hsla(0, 0%, 0%, 0) 0%,
          var(--color) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
        /* background: linear-gradient(
          bottom,
          hsla(0, 0%, 0%, 0) 0%,
          var(--color) 50%,
          hsla(0, 0%, 0%, 0) 100%
        ); */
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="vertical-line"></div>
      </div>
    `;
  }
}

customElements.define("fs-vertical-line", VerticalLine);

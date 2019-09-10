import { LitElement, html, css } from "lit-element";

class HorizontalLine extends LitElement {
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
        --width: 100%;
      }
      .container {
        width: 100%;
        display: flex;
        align-items: center;
      }
      .line {
        width: var(--width);
        height: 1px;
        background: #333;

        background: -webkit-linear-gradient(
          left,
          hsla(0, 0%, 0%, 0) 0%,
          var(--color) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
        background: -moz-linear-gradient(
          left,
          hsla(0, 0%, 0%, 0) 0%,
          var(--color) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
        /* background: linear-gradient(
          left,
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
        <div class="line"></div>
      </div>
    `;
  }
}

customElements.define("fs-horizontal-line", HorizontalLine);

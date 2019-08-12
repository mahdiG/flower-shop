import { LitElement, html, css } from "lit-element";

class VerticalLine extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    let color = css`hsla(0, 0%, 0%, 0.75)`;

    return css`
      :host {
        /* --color: hsla(0, 0%, 0%, 0.75); */
        --color: gray;
      }
      .vertical-line {
        height: 100%;
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
      <div class="vertical-line"></div>
    `;
  }
}

customElements.define("fs-vertical-line", VerticalLine);

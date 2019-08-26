import { LitElement, html, css } from "lit-element";

class HeartIcon extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      fill: {type: String},
      stroke: {type: String},
    };
  }

  static get styles() {
    return css`
      .icon {
        display: flex;
      }
    `;
  }

  render() {
    return html`
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path
            fill=${this.fill || "none"}
            stroke=${this.stroke || "black"}
            stroke-width="1.5"
            id="svg"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
    `;
  }
}

customElements.define("fs-heart-icon", HeartIcon);

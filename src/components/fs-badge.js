import { LitElement, html, css } from "lit-element";

class Badge extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      count: {
        type: Number
      }
    };
  }

  render() {
    return html`
      <div class="badge ${this.count ? "badge-show" : null}">
        ${this.count}
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        --size: 1.5rem;
      }
      .badge {
        width: var(--size);
        height: var(--size);
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;
        vertical-align: middle;
        border-radius: 100%;
        background-color: var(--red);
        color: white;
        font-size: calc(var(--size) / 1.5);
        transform: scale(0);
        transition: transform 500ms;
      }

      .badge-show {
        transform: scale(1);
        transition: transform 500ms;
      }
    `;
  }
}

customElements.define("fs-badge", Badge);

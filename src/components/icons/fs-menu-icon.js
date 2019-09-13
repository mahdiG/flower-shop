import { LitElement, html, css } from "lit-element";

class MenuIcon extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      showBack: {
        type: Boolean
      }
    };
  }

  render() {
    return html`
      <div class="container back menu--3">
        <svg
          width="100%"
          height="100%"
          viewBox="25 25 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- <circle cx="50" cy="50" r="30" /> -->
          <path
            class="line--1 ${this.showBack ? "checked" : null}"
            d="M0 40h62c18 0 18-20-17 5L31 55"
          />
          <path class="line--2" d="M0 50h80" />
          <path
            class="line--3 ${this.showBack ? "checked" : null}"
            d="M0 60h62c18 0 18 20-17-5L31 45"
          />
        </svg>
      </div>
    `;
  }

  static get styles() {
    return css`
      svg {
        cursor: pointer;
        display: flex;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        cursor: pointer;
        /* make arrow face right */
        transform: rotate(180deg);
      }

      label {
        width: 100%;
      }

      input {
        display: none;
      }

      path {
        fill: none;
        stroke: black;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        --length: 24;
        --offset: -38;
        stroke-dasharray: var(--length) var(--total-length);
        stroke-dashoffset: var(--offset);
        transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      circle {
        fill: #fff3;
        opacity: 0;
      }

      label:hover circle {
        opacity: 1;
      }

      /* .back input:checked + svg .line--1,
      .back input:checked + svg .line--3 {
        --length: 8.602325267;
      }

      .menu--3 input:checked + svg .line--1,
      .menu--3 input:checked + svg .line--3 {
        --offset: -109.1770175568;
      } */

      .checked {
        --offset: -109.1770175568;
        --length: 8.602325267;
      }

      .menu--3 .line--1,
      .menu--3 .line--3 {
        --total-length: 126.38166809082031;
      }

      .menu--3 .line--2 {
        --total-length: 80;
      }

      .debug {
        display: none;
      }

      .line--debug {
        opacity: 0;
        stroke-dasharray: none;
      }

      @media screen and (min-width: 800px) {
        .debug {
          opacity: 0.8;
          display: block;
          position: absolute;
          z-index: 1;
          font-family: sans-serif;
          transform: rotate(-45deg);
          transform-origin: 0% 100%;
          background: #000;
          color: #fff;
          width: 150px;
          height: 100px;
          line-height: 150px;
          text-align: center;
          user-select: none;
        }
        .debug:hover {
          opacity: 1;
        }
        .debug.active {
          background: #fff;
          color: #000;
        }

        .debug.active + .grid path.line--debug {
          opacity: 0.2;
        }
      }
    `;
  }
}

customElements.define("fs-menu-icon", MenuIcon);

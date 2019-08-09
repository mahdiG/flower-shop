import { LitElement, html, css } from "lit-element";

class Search extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .search {
        display: flex;
        background-color: white;
        height: 2rem;
        width: 60vw;
        padding: 0 1rem;
        opacity: 0.8;
        border-radius: 2px;
      }
      .invisible-input {
        background-color: inherit;
        border: none;
        outline: none;
        flex-grow: 1;
      }
    `;
  }

  render() {
    return html`
      <div class="search">
        <input class="invisible-input" type="text" placeholder="جستجو کنید" />
        <img class="search-icon" src="/assets/icons/search.svg" />
      </div>
    `;
  }
}

customElements.define("fs-search", Search);

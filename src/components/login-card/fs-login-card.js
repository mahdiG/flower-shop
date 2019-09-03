import { LitElement, html, css } from "lit-element";
import "./steps/fs-login-step";
import "./steps/fs-confirmation-step";
import "./steps/fs-verification-step";

class LoginCard extends LitElement {
  constructor() {
    super();

    this.currentStep = 0;
  }

  static get properties() {
    return {
      currentStep: {
        type: Number
      }
    };
  }

  isStepActive(step) {
    if (step === this.currentStep) {
      return true;
    } else {
      return false;
    }
  }

  changeStep(event) {
    let nextStep = event.detail.nextStep;
    this.currentStep = nextStep;
  }

  static get styles() {
    return css`
      .modal-background {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        /* background-color: rgba(250, 250, 250, 0.9); */
        background: linear-gradient(
          315deg,
          rgba(168, 255, 225, 0.92),
          rgb(128, 0, 128, 0.92)
        );
      }

      .card {
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing);
        /* box-shadow: var(--box-shadow); */
        box-shadow: 0px 0px 10px 0px rgb(142, 142, 142, 1);
        border-radius: var(--border-radius);
        background-color: rgba(250, 250, 250, 0.8);
        width: calc(1.5 * 25vw);
        height: calc(1 * 25vw);
        z-index: 3;
      }

      .step {
        width: 100%;
        position: absolute;
        opacity: 0;
        transform: translateX(2000px);
        transition: opacity 500ms;
      }
      .step-active {
        opacity: 1;
        transform: translateX(0%);
        transition: opacity 500ms;
      }
    `;
  }

  render() {
    return html`
      <div class="modal-background">
        <div class="card">
          <fs-login-step
            class="step ${this.isStepActive(0) ? "step-active" : null}"
            @change-step="${event => this.changeStep(event)}"
          ></fs-login-step>
          <fs-confirmation-step
            class="step ${this.isStepActive(1) ? "step-active" : null}"
            @change-step=${this.changeStep}
          ></fs-confirmation-step>
          <fs-verfication-step
            class="step ${this.isStepActive(2) ? "step-active" : null}"
            @change-step=${this.changeStep}
          ></fs-verfication-step>
        </div>
      </div>
    `;
  }
}

customElements.define("fs-login-card", LoginCard);

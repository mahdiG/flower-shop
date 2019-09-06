import { LitElement, html, css } from "lit-element";
import "../../fs-input";
import "../../fs-spinner";

class VerficationStep extends LitElement {
  constructor() {
    super();

    this.isLoading = false;
    this.hasError = false;
    this.showCountdown = true;
    this.countdown = "02:00";
    this.enteredCode = null;
  }

  static get properties() {
    return {
      isLoading: {
        type: Boolean
      },
      enteredCode: {
        type: Number
      },
      hasError: {
        type: Boolean
      },
      showCountdown: {
        type: Boolean
      },
      countdown: {
        type: String
      },
      phoneNumber: {
        type: Number
      }
    };
  }

  firstUpdated() {
    // two minutes duration
    // let countdownDuration = 60 * 2;
    let countdownDuration = 2;
    this.startTimer(countdownDuration);
    console.log("this.phone");
  }

  startTimer(duration) {
    this.showCountdown = true;

    var start = Date.now(),
      diff,
      minutes,
      seconds;

    let timer = () => {
      // get the number of seconds that have elapsed since
      // startTimer() was called

      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = diff % 60 | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.countdown = `${minutes}:${seconds}`;

      if (diff <= 0) {
        // stop countdown

        this.showCountdown = false;
        clearInterval(interval);
      }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    var interval = setInterval(timer, 1000);
  }

  changeStep() {
    let myEvent = new CustomEvent("change-step", {
      detail: {
        nextStep: 0
      }
    });
    this.dispatchEvent(myEvent);
  }

  validateCode() {
    this.isLoading = true;
  }

  handleInput(event) {
    let enteredCode = event.detail.value;
    this.enteredCode = enteredCode;
    if (this.enteredCode.length === 5) {
      this.validateCode();
    }
  }

  resendCode() {
    let countdownDuration = 2;
    this.startTimer(countdownDuration);
    console.log("resending code");
  }

  renderCountdown() {
    return html`
      <p id="countdown" class="description change-number">
        ${this.countdown}
      </p>
    `;
  }

  render() {
    return html`
      <div class="info-container">
        <!-- Heading could be replaced by a photo. -->
        <!-- <h1 class="heading">کد تایید</h1> -->
        <h2 class="description">
          یک کد برای شماره ${this.phoneNumber} ارسال شد
        </h2>
        <p class="description change-number" @click=${this.changeStep}>
          اصلاح شماره تلفن؟
        </p>
      </div>

      <div>
        <fs-input
          class="input-verification"
          label="کد"
          type="number"
          name="verification"
          .maxLength=${5}
          @change=${this.handleInput}
        ></fs-input>
        ${this.hasError
          ? html`
              <small class="error-text">کد اشتباه است</small>
            `
          : null}
      </div>

      <div class="buttons-container">
        ${this.showCountdown
          ? this.renderCountdown()
          : html`
              <p
                id="countdown"
                class="description change-number"
                @click="${this.resendCode}"
              >
                ارسال دوباره کد
              </p>
            `}
      </div>

      ${this.isLoading
        ? html`
            <fs-spinner></fs-spinner>
          `
        : null}
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: calc(var(--spacing) * 2);
      }
      .heading {
        margin: 0;
        color: darkslategray;
      }
      .description {
        text-align: center;
        margin: 0;
        color: darkslategray;
      }

      .change-number {
        font-size: small;
        cursor: pointer;
        color: gray;
      }

      .input-verification {
        display: flex;
        justify-content: center;
        /* width: 20%; */
      }

      .buttons-container {
        display: flex;
        flex-direction: column;
        margin-top: var(--spacing);
      }

      .button {
        all: unset;
        padding: calc(var(--spacing) / 4) var(--spacing);
        background-color: rgba(250, 250, 250, 0.8);
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: small;
        text-align: center;
        color: darkslategray;
        width: 3rem;
      }

      .error-text {
        color: #ff005d;
        font-size: 0.7rem;
      }
    `;
  }
}

customElements.define("fs-verfication-step", VerficationStep);

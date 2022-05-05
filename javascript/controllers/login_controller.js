import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ["email", "password", "button"];

  get email() {
    return this.emailTarget.value
  }

  get password() {
    return this.passwordTarget.value
  }

  disabledButton() {
    this.buttonTarget.setAttribute("disabled", "");
  }

  submit() {
    const data = JSON.stringify({ email: this.email, password: this.password })
    console.log(data);

    this.disabledButton();
  }
}

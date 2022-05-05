import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ["slide"];

  initialize() {
    this.index = 0;
    this.showCurrentSlide();
  }

  next() {
    this.slideTargets.forEach((element, index) => {
      if (element.classList.contains('active')) {
        element.classList.toggle('active');
      } else {
        element.classList.toggle('active');
      }
    })
  }

  showCurrentSlide() {
    setInterval(() => {
      this.next();
    }, 8000)
  }
}

// src/controllers/slideshow_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
	static targets = [ "slide" ];

  initialize() {
	  this.showCurrentSlide();
  }

  next() {
	  if (this.index === this.slideTargets.length - 1) {
		  this.index = 0;
	  } else {
		  this.index++;
	  }
  }

  previous() {
	  if (this.index === 0) {
	  	this.index = this.slideTargets.length - 1
	  } else {
		  this.index--;
	  }
  }

  showCurrentSlide() {
	  this.slideTargets.forEach((el, i) => {
		  el.classList.toggle("slide--current", this.index == i);
	  });
  }
  
  get index() {
	  const index = parseInt(this.data.get("index"));
	  return index >= 0 ? index : 0;
  }
  
  set index(value) {
	  this.data.set("index", value);
	  this.showCurrentSlide();
  }
}
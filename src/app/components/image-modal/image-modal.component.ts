import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ns-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() imageSource: string;
  @Input() altText: string;

  modalId: string;
  modal: HTMLElement;
  img: HTMLElement;
  modalImg: HTMLElement;
  captionText: HTMLElement;
  xBtn: Element;

  constructor() { }

  ngOnInit(): void {
    this.getRefs();
  }

  getRefs() {
    this.modalId = this.altText + 'Modal';
    this.modal = document.getElementById(this.modalId);
    this.img = document.getElementById(this.altText);
    this.modalImg = document.getElementById(this.modalId + "Img");
    this.captionText = document.getElementById(this.modalId + "Caption");
    this.xBtn = document.getElementById(this.modalId + "Close");
    console.log(this.modalId +
      this.modal +
      this.img +
      this.modalImg +
      this.captionText +
      this.xBtn)
  }
  modalClick(): void {
    console.log("Clicked modal: " + this.modalId);
    console.log("Opened modal: " + this.modal);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    this.modal.style.display = "block";
    this.modalImg['src'] = this.imageSource;
    this.captionText.innerHTML = this.altText;
  }

  closeClick(): void {
    this.getRefs();

    console.log("Closed modal: " + this.modal);
    console.log(this.modalId +
      this.modal +
      this.img +
      this.modalImg +
      this.captionText +
      this.xBtn)
    this.modal.style.display = "none";
  }
}

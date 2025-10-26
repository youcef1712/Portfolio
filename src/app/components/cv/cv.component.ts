import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  // popup state
  isPopupOpen = false;

  // image zoom / drag state
  imageZoom = 1;           // 1 = normal, >1 = zoomed
  readonly zoomLevel = 1.35; // zoom toggle level (ajustable)
  offsetX = 0;
  offsetY = 0;
  startX = 0;
  startY = 0;
  isDragging = false;
  movedDuringDrag = false;

  // CSS transform string exposée au template
  get popupTransform() {
    return `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.imageZoom})`;
  }

  openPopup() {
    this.isPopupOpen = true;
    this.imageZoom = 1; // affiche d'abord sans zoom (popup centré)
    this.offsetX = 0;
    this.offsetY = 0;
    document.body.style.overflow = 'hidden';
  }

  // closePopup peut recevoir l'évènement pour stopPropagation si appelé depuis le X
  closePopup(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.isPopupOpen = false;
    this.imageZoom = 1;
    this.offsetX = 0;
    this.offsetY = 0;
    document.body.style.overflow = 'auto';
    // reset drag flags
    this.isDragging = false;
    this.movedDuringDrag = false;
  }

  // toggle zoom on image click (works inside popup)
  toggleImageZoom(event: MouseEvent) {
    // stopPropagation pour éviter que le parent ne traite le click
    event.stopPropagation();

    // si on vient juste de faire un drag (mouse up), ignorez ce click
    if (this.movedDuringDrag) {
      // small debounce: clear moved flag and don't toggle zoom now
      this.movedDuringDrag = false;
      return;
    }

    // toggle between 1 and zoomLevel
    this.imageZoom = this.imageZoom > 1 ? 1 : this.zoomLevel;

    // when we reset zoom to 1, also reset offsets so image recenters
    if (this.imageZoom === 1) {
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }

  // ----- drag handlers -----
  startDrag(e: MouseEvent) {
    // only allow dragging when popup open and zoomed > 1
    if (!this.isPopupOpen || this.imageZoom <= 1) return;
    this.isDragging = true;
    this.startX = e.clientX - this.offsetX;
    this.startY = e.clientY - this.offsetY;
    this.movedDuringDrag = false;
  }

  onDrag(e: MouseEvent) {
    if (!this.isDragging) return;
    const prevX = this.offsetX;
    const prevY = this.offsetY;

    this.offsetX = e.clientX - this.startX;
    this.offsetY = e.clientY - this.startY;

    // if moved at all mark movedDuringDrag true
    if (Math.abs(this.offsetX - prevX) > 1 || Math.abs(this.offsetY - prevY) > 1) {
      this.movedDuringDrag = true;
    }
  }

  stopDrag() {
    this.isDragging = false;
    // keep movedDuringDrag true until next click is ignored once (handled in toggleImageZoom)
  }

 @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    if (this.isPopupOpen) {
      this.closePopup();
    }
  }
  downloadImage(event: Event) {
    event.stopPropagation();
    const link = document.createElement('a');
    link.href = './files/CV.webp';
    link.download = 'CV_Youcef_Bendra.webp';
    link.click();
  }


}

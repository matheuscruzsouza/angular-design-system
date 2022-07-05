import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'ngx-image-editor',
  templateUrl: './ngx-image-editor.component.html',
  styleUrls: [ './ngx-image-editor.component.css' ]
})
export class NgxImageEditorComponent implements AfterViewInit {

  private loadedImage = false;
  private selectionTool = {
    relative: {start_x: null, start_y: null, end_x: null, end_y: null},
    absolute: {start_x: null, start_y: null, end_x: null, end_y: null},
    isSelecting: false
  }

  private image: HTMLImageElement;
  private photoPreview: HTMLImageElement;
  private selectionElement: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private actualImage: string;

  ngAfterViewInit(): void {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.photoPreview = document.getElementById('photo-preview') as HTMLImageElement;
    this.selectionElement = document.getElementById("selection-tool") as HTMLDivElement;
  }

  onReadFile(event) {

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (_event) => {

      this.actualImage = _event.target.result as string;

      this.image = document.createElement('img');

      this.image.src = this.actualImage;

      this.loadedImage = true;

      this.image.onload = () => {
        const {width, height} = this.image;
        this.canvas.width = width;
        this.canvas.height = height;

        this.ctx.clearRect(0, 0, width, height);

        this.ctx.drawImage(this.image, 0, 0);

        this.photoPreview.src = this.canvas.toDataURL();
      }
    }
  }

  onImageMouseDown(event) {
    if (this.loadedImage) {
      const {clientX, clientY, offsetX, offsetY} = event;

      this.selectionTool.absolute.start_x = clientX;
      this.selectionTool.absolute.start_y = clientY;

      this.selectionTool.relative.start_x = offsetX;
      this.selectionTool.relative.start_y = offsetY;

      this.selectionTool.isSelecting = true;
    }
  }

  onImageMouseMove(event) {
    if (this.loadedImage) {
      const {clientX, clientY} = event;

      if (this.selectionTool.isSelecting) {

        this.selectionTool.absolute.end_x = clientX;
        this.selectionTool.absolute.end_y = clientY;

        this.selectionElement.style.display = 'initial';

        const absolute = this.selectionTool.absolute;

        this.selectionElement.style.top = `${Math.min(absolute.start_y, absolute.end_y)}px`;
        this.selectionElement.style.left = `${Math.min(absolute.start_x, absolute.end_x)}px`;

        this.selectionElement.style.width = `${Math.max(absolute.end_x - absolute.start_x, absolute.start_x - absolute.end_x)}px`;
        this.selectionElement.style.height = `${Math.max(absolute.end_y - absolute.start_y, absolute.start_y - absolute.end_y)}px`;
      }
    }
  }

  onImageMouseUp(event) {
    this.selectionTool.isSelecting = false;

    this.selectionTool.relative.end_x = event.layerX;
    this.selectionTool.relative.end_y = event.layerY;

  }

  onCropImage() {
    const {width: imgWidth, height: imgHeight} = this.image;
    const {width: previewWidth, height: previewHeight} = this.photoPreview;

    const [widthFactor, heightFactor]  = [+(imgWidth / previewWidth), +(imgHeight / previewHeight)];

    const [selectionWidth, selectionHeight] = [
      this.selectionTool.absolute.end_x - this.selectionTool.absolute.start_x,
      this.selectionTool.absolute.end_y - this.selectionTool.absolute.start_y
    ];

    const [croppedWidth, croppedHeight] = [
      +(selectionWidth * widthFactor),
      +(selectionHeight * heightFactor)
    ];

    const [actualX, actualY] = [
      +(this.selectionTool.relative.start_x * widthFactor),
      +(this.selectionTool.relative.start_y * heightFactor)
    ];

    const croppedImage = this.ctx.getImageData(actualX, actualY, croppedWidth, croppedHeight);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.image.width = this.canvas.width = croppedImage.width;
    this.image.height = this.canvas.height = croppedImage.height;

    this.selectionElement.style.display = 'none';

    this.ctx.putImageData(croppedImage, 0, 0);

    this.photoPreview.src = this.canvas.toDataURL();
  }

  onSaveImage() {

    this.image.src = this.actualImage;

    this.image.onload = () => {
      const {width, height} = this.image;
      this.canvas.width = height;
      this.canvas.height = width;

      this.ctx.clearRect(0, 0, height, width);

      this.ctx.translate(0, width);

      this.ctx.rotate(-90 * Math.PI / 180);

      this.ctx.drawImage(this.image, 0, 0);

      this.photoPreview.src = this.canvas.toDataURL();
    }

  }

}

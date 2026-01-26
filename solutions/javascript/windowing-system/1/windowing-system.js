// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    const minWidth = 1;
    const minHeight = 1;

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.min(
      Math.max(size.width, minWidth),
      maxWidth
    );

    this.size.height = Math.min(
      Math.max(size.height, minHeight),
      maxHeight
    );
  }

  move(position) {
    const minX = 0;
    const minY = 0;

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.min(
      Math.max(position.x, minX),
      maxX
    );

    this.position.y = Math.min(
      Math.max(position.y, minY),
      maxY
    );
  }
}

export function changeWindow(programWindow) {
  programWindow.size.width = 400;
  programWindow.size.height = 300;

  programWindow.position.x = 100;
  programWindow.position.y = 150;
  
  return programWindow;
}
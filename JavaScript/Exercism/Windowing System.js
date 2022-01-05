// https://exercism.org/tracks/javascript/exercises/windowing-system

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}
Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize = function(newSize) {
        const minAllowedWidth = 1;
        const minAllowedHeight = 1;
        const maxAllowedWidth = this.screenSize.width - this.position.x;
        const maxAllowedHeight = this.screenSize.height - this.position.y;
        this.size.width = Math.min(maxAllowedWidth, Math.max(newSize.width, minAllowedWidth));
        this.size.height = Math.min(maxAllowedHeight, Math.max(newSize.height, minAllowedHeight));
    }

    move = function(newPos) {
        const minAllowedXY = 0;
        const maxAllowedX = this.screenSize.width - this.size.width;
        const maxAllowedY = this.screenSize.height - this.size.height;
        this.position.x = Math.min(maxAllowedX, Math.max(newPos.x, minAllowedXY));
        this.position.y = Math.min(maxAllowedY, Math.max(newPos.y, minAllowedXY));
    } 
}

export function changeWindow(existingProgramWindow) {
    const newSize = new Size(400, 300);
    const newPos = new Position(100, 150);
    existingProgramWindow.resize(newSize);
    existingProgramWindow.move(newPos);
    return existingProgramWindow;
}

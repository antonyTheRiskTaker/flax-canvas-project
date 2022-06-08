class DrawingStraightLine extends PaintFunction {
  constructor(ctxReal) {
    super();
    // this.ctxReal = ctxReal;
    // this.ctxDraft = ctxDraft;
    this.ctx = ctxReal;
    this.line = null;
    // (Line below) this is used instead of the draft-real canvas system in order to save straight lines on the canvas
    this.lines = []; 
    this.mouseDownPosition = null;
    this.mouseUpPosition = null;
    this.currentPosition = null;
  }

  onMouseDown(coord, e) {
    this.ctx.strokeStyle = drawColour;
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 5;

    this.mouseDownPosition = this.getMousePosition(coord);

    this.line = {
      start: this.mouseDownPosition,
      end: this.mouseDownPosition
    };

    this.lines.push(this.line);

    this.drawLines()
  }

  onDragging(coord, e) {
    this.currentPosition = this.getMousePosition(coord);

    this.line = {
      start: this.mouseDownPosition,
      end: this.currentPosition
    };

    this.lines.pop();
    this.lines.push(this.line);
    // this.ctx.clearRect(0, 0, canvasReal.width, canvasReal.height);
    // this.drawStraightLine(this.line);
    this.drawLines();
  }

  onMouseMove() {}

  onMouseUp(coord, e) {
    this.mouseUpPosition = this.getMousePosition(coord);
    console.log(this.mouseUpPosition);
  }

  onMouseLeave() {}

  onMouseEnter() {}

  drawStraightLine(line) {
    const {
      start,
      end
    } = line;
    this.ctx.beginPath();
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.stroke();
  }

  drawLines() {
    this.clearCanvas();
    this.lines.forEach(line => {
      this.drawStraightLine(line)
    });
  }

  getMousePosition(coord) {
    const position = {
      x: coord[0],
      y: coord[1] 
    };
    return position;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, canvasReal.width, canvasReal.height);
  }
}
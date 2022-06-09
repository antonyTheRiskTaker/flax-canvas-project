class DrawingStraightLine extends PaintFunction {
  constructor(ctxReal, ctxDraft) {
    super();
    this.ctxReal = ctxReal;
    this.ctxDraft = ctxDraft;
    this.line = undefined;
    this.lines = []; // An array of line objects
    this.mouseDownPosition = undefined;
    this.mouseUpPosition = undefined;
    this.currentPosition = undefined;
  }

  onMouseDown(coord, e) {
    this.ctxReal.strokeStyle = drawColour;
    this.ctxReal.lineCap = 'round';
    this.ctxReal.lineWidth = drawWidth;
    this.ctxDraft.strokeStyle = drawColour;
    this.ctxDraft.lineCap = 'round';
    this.ctxDraft.lineWidth = drawWidth;

    this.mouseDownPosition = this.getMousePosition(coord);

    this.line = {
      start: this.mouseDownPosition,
      end: this.mouseDownPosition
    };

    this.lines.push(this.line);

    this.drawLines(); // ctx default value = this.ctxDraft
  }

  onDragging(coord, e) {
    this.currentPosition = this.getMousePosition(coord);

    this.line = {
      start: this.mouseDownPosition,
      end: this.currentPosition
    };

    this.lines.pop();
    this.lines.push(this.line);

    this.drawLines();
  }

  onMouseMove() { }

  onMouseUp(coord, e) {
    this.drawLines(this.ctxReal);
    this.mouseUpPosition = this.getMousePosition(coord);
    console.log(this.mouseUpPosition);
  }

  onMouseLeave() { }

  onMouseEnter() { }

  drawStraightLine(line, ctx) {
    const {
      start,
      end
    } = line;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  drawLines(ctx = this.ctxDraft) {
    this.clearDraftCanvas();
    this.lines.forEach(line => {
      this.drawStraightLine(line, ctx)
    });
  }

  getMousePosition(coord) {
    const position = {
      x: coord[0],
      y: coord[1]
    };
    return position;
  }

  clearDraftCanvas() {
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
}
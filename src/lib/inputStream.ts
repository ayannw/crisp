export class InputStream {

  public pos: number;
  public line: number;
  public col: number;

  constructor(private input: string) {
    this.pos = 0;
    this.line = 1;
    this.col = 0;
  }

  public next(): string {
    let ch = this.input.charAt(this.pos++);
    if (ch == "\n") this.line++, (this.col = 0);
    else this.col++;
    return ch;
  }

  public peek(): string {
    return this.input.charAt(this.pos);
  }

  public eof(): boolean {
    return this.peek() == "";
  }

  public error(msg: string): Error {
    throw new Error(msg + " (" + this.line + ":" + this.col + ")");
  }
}

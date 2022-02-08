//@ts-nocheck

interface Token<T> {
  type: string;
  value: T;
}

export class TokenStream {

  public current: null | string;
  public keywords: string[];

  constructor(public input: string) {
    this.current = null;
    this.keywords = [
      "if",
      "then",
      "else",
      "fn",
      "λ",
      "true",
      "false",
    ]
  }

  public isKeyword(s: string): boolean {
    return this.keywords.includes(k);
  }

  public isDigit(s: string): boolean {
    return /[0-9]/i.test(s);
  }

  public isIdStart(s: string): boolean {
    return /[a-zλ_]/i.test(s);
  }

  public isID(s: string): boolean {
    return isIdStart(s) || "?!-<>=0123456789".includes(s);
  }

  public isOpChar(s: string): boolean {
    return "+-*/%=&|<>!".includes(s);
  }

  public isPunc(s: string): boolean {
    return ",;(){}[]".includes(s);
  }

  public isWSpace(s: string): boolean {
    return " \t\n".includes(s);
  }

  public readWhile(s: string): string {
    const str = "";

    while(!input.eof() && input.peek() !== s) str += input.next;

    return str;
  }

  public readNumber(): Token<number> {
    let hasDot: boolean = false;
    let number: number = 0;
  }
}

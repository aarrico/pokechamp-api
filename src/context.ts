import { Request } from 'express';

export default class Context {
  static _bindings = new WeakMap<Request, Context>();

  public props: any;

  constructor(props: any) {
    this.props = { ...props };
  }

  static bind(req: Request, props: any) {
    const ctx = new Context(props);
    Context._bindings.set(req, ctx);
  }

  static get(req: Request): Context | null {
    return Context._bindings.get(req) ?? null;
  }
}

export class Command {
  argv: string[];

  constructor(argv: string[]) {
    this.argv = argv;
  }

  public async run(): Promise<void> {
    console.log("this is the future home of oidc-to CLI");
  }
}

export class ModalConfig {
  constructor(
    public production: boolean,
    public noErrorUrls?: Array<{ url: string; error: number }>,
    public noLoaderUrls?: string[],
    public noLoaderMethods?: string[]
  ) {}
}

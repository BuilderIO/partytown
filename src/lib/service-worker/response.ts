export const response = (body: string, contentType: ContentType, cacheControl: CacheControl) =>
  new Response(body, {
    headers: {
      'content-type': contentType === ContentType.JSON ? 'application/json' : 'text/html',
      'Cache-Control':
        cacheControl === CacheControl.Immutable ? 'max-age=31556952,immutable' : 'no-store',
    },
  });

export const enum ContentType {
  HTML,
  JSON,
}

export const enum CacheControl {
  Immutable,
  NoStore,
}

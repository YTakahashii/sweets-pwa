export function getRefererPath(referer: string) {
  const path = referer.substr(window.location.origin.length);
  return path.length > 0 && path !== window.location.pathname ? path : null;
}

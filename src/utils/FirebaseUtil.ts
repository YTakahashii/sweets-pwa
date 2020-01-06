export function isFirebaseHosting() {
  return !!process.env.PUBLIC_URL.match('https://amahako-pwa-4bdff.web.app/');
}

import { isFirebaseHosting } from './FirebaseUtil';

export function getOfficialImageFileName(url: string) {
  return url.substring(39);
}

export function httpToHttps(url: string) {
  if (isFirebaseHosting()) {
    return `${process.env.REACT_APP_FIREBASE_STORAGE_URL}${getOfficialImageFileName(url)}?alt=media&token=${
      process.env.REACT_APP_FIREBASE_STORAGE_TOKEN
    }`;
  }
  return url;
}

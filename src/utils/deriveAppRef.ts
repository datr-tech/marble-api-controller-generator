import { appKeyword } from '@app-macg/config';

export const deriveAppRef = (serviceName) =>
  appKeyword + (serviceName !== 'proc' ? serviceName.charAt(0) : 'p2');

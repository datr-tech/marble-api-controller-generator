import { keywords } from '@app-macg/config';

export const getAppRef = ({ serviceName }) =>
  keywords.app + (serviceName !== 'proc' ? serviceName.charAt(0) : 'p2');

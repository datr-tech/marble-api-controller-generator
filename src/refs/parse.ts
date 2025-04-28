import { getAppRef } from './getAppRef';

export const parse = ({ serviceName }) => ({
  appRef: getAppRef({ serviceName }),
});

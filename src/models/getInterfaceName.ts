import { keywords } from '@app-macg/config';

export const getInterfaceName = ({ baseNameUcFirst }) =>
  keywords.interfacePrefix + baseNameUcFirst + keywords.model;

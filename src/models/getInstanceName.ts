import { keywords } from '@app-macg/config';

export const getInstanceName = ({ baseName }) => baseName + keywords.model;

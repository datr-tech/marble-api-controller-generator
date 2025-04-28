import { keywords } from '@app-macg/config';

export const getPrimaryKeyName = ({ baseName }) => baseName + keywords.id;

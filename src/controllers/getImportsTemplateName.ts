import { keywords } from '@app-macg/config';

export const getImportsTemplateName = () =>
  keywords.controllerLcase + keywords.imports + keywords.template;

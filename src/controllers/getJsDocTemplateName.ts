import { keywords } from '@app-macg/config';

export const getJsDocTemplateName = () =>
  keywords.controllerLcase + keywords.jsDoc + keywords.template;

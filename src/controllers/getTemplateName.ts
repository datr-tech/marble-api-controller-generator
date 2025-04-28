import { keywords } from '@app-macg/config';

export const getTemplateName = (methodName) =>
  keywords.controllerLcase + methodName + keywords.template;

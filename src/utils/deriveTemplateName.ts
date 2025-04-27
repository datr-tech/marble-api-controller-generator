import { controllerKeywordLcase, templateKeyword } from '@app-macg/config';

export const deriveTemplateName = (methodName) =>
  controllerKeywordLcase + methodName + templateKeyword;

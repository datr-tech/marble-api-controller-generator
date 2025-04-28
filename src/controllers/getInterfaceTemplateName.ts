import { keywords } from '@app-macg/config';

export const getInterfaceTemplateName = (methodName, suffix = '') => {
  let templateName =
    keywords.controllerLcase +
    keywords.interfaceUcFirst +
    (!suffix ? '' : suffix) +
    keywords.template;

  if (methodName == keywords.read && suffix == keywords.output) {
    templateName = templateName + keywords.read;
  }

  return templateName;
};

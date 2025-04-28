import { keywords } from '@app-macg/config';

export const getInterfaceTemplateName = (methodName, suffix = '', outputType = '') => {
  let templateName =
    keywords.controllerLcase +
    keywords.interfaceUcFirst +
    (!suffix ? '' : suffix) +
    (suffix == keywords.output && outputType !== '' ? outputType : '') +
    keywords.template;

  if (
    methodName == keywords.read &&
    suffix == keywords.output &&
    outputType == keywords.success
  ) {
    templateName = templateName + keywords.read;
  }

  return templateName;
};

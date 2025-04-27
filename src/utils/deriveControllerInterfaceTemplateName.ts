import {
  controllerKeywordLcase,
  interfaceKeyword,
  templateKeyword,
} from '@app-macg/config';

export const deriveControllerInterfaceTemplateName = (methodName, suffix) =>
  (templateName =
    controllerKeywordLcase +
    methodName +
    interfaceKeyword +
    (typeof suffix !== 'undefined' ? suffix : '') +
    templateKeyword);

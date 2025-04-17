export const deriveTemplateName = (methodName) => {
  const templateName = 'controller' + methodName + 'Template';

  return templateName;
};

export const deriveControllerName = (baseName, baseNameUpperFirst, methodName) => {
  const controllerName = baseName + 'Controller' + methodName + baseNameUpperFirst;

  return controllerName;
};

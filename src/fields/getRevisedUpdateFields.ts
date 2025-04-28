export const getRevisedUpdateFields = (modelInterfaceProps, modelPrimaryKeyName) =>
  Object.keys(modelInterfaceProps).reduce((acc, key) => {
    const valueObj = modelInterfaceProps[key];

    if (typeof valueObj['$ref'] !== 'undefined') {
      acc.push({
        controllerType: 'Types.ObjectId',
        interfaceType: 'Types.ObjectId',
        key,
        optionalInController: key !== modelPrimaryKeyName,
        optionalInInterface: key !== modelPrimaryKeyName,
      });
    } else if (typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: valueObj['type'],
        key,
        optionalInController: true,
        optionalInInterface: true,
      });
    }

    return acc;
  }, []);

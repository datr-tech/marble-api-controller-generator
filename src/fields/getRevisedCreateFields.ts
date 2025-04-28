export const getRevisedCreateFields = (modelInterfaceProps, modelPrimaryKeyName) =>
  Object.keys(modelInterfaceProps).reduce((acc, key) => {
    const valueObj = modelInterfaceProps[key];

    if (key !== modelPrimaryKeyName && typeof valueObj['$ref'] !== 'undefined') {
      acc.push({
        controllerType: 'Types.ObjectId',
        interfaceType: 'Types.ObjectId',
        key,
        optionalInController: false,
        optionalInInterface: false,
      });
    } else if (
      (key == 'adminStatusId' || key == 'description') &&
      typeof valueObj['type'] !== 'undefined'
    ) {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: `${valueObj['type']} | undefined`,
        key,
        optionalInController: true,
        optionalInInterface: false,
      });
    } else if (
      (key == 'createdAt' || key == 'updateAt') &&
      typeof valueObj['type'] !== 'undefined'
    ) {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: valueObj['type'],
        key,
        optionalInController: true,
        optionalInInterface: true,
      });
    } else if (key !== modelPrimaryKeyName && typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: valueObj['type'],
        key,
        optionalInController: false,
        optionalInInterface: false,
      });
    }

    return acc;
  }, []);

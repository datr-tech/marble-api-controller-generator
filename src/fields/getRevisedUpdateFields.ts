export const getRevisedUpdateFields = (modelInterfaceProps, modelPrimaryKeyName) =>
  Object.keys(modelInterfaceProps).reduce((acc, key) => {
    const valueObj = modelInterfaceProps[key];

    if (key == modelPrimaryKeyName && typeof valueObj['$ref'] !== 'undefined') {
      acc.push({
        controllerType: 'Types.ObjectId',
        interfaceType: 'Types.ObjectId',
        key,
        interfaceKey: key,
        optionalInController: false,
        optionalInInterface: false,
        notPrimaryKey: false,
      });
    } else if (key !== modelPrimaryKeyName && typeof valueObj['$ref'] !== 'undefined') {
      acc.push({
        controllerType: 'Types.ObjectId',
        interfaceType: 'Types.ObjectId',
        key: `payload.${key}`,
        interfaceKey: key,
        optionalInController: true,
        optionalInInterface: true,
        notPrimaryKey: true,
      });
    } else if (key !== modelPrimaryKeyName && typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: valueObj['type'],
        key: `payload.${key}`,
        interfaceKey: key,
        optionalInController: true,
        optionalInInterface: true,
        notPrimaryKey: true,
      });
    }

    return acc;
  }, []);

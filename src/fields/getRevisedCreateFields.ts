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
        notPrimaryKey: true,
      });
    } else if (key == 'adminStatusId' && typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: `${valueObj['type']} | undefined`,
        key,
        optionalInController: true,
        optionalInInterface: false,
        notPrimaryKey: true,
      });
    } else if (key == 'description' && typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: `${valueObj['type']} | undefined`,
        key,
        optionalInController: true,
        optionalInInterface: false,
        notPrimaryKey: true,
      });
    } else if (key == 'createdAt' && typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: valueObj['type'],
        key,
        optionalInController: true,
        optionalInInterface: true,
        notPrimaryKey: true,
      });
    } else if (key == 'updatedAt' && typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: valueObj['type'],
        key,
        optionalInController: true,
        optionalInInterface: true,
        notPrimaryKey: true,
      });
    } else if (key !== modelPrimaryKeyName && typeof valueObj['type'] !== 'undefined') {
      acc.push({
        controllerType: valueObj['type'],
        interfaceType: valueObj['type'],
        key,
        optionalInController: false,
        optionalInInterface: false,
        notPrimaryKey: true,
      });
    }

    return acc;
  }, []);

export const deriveCreateFieldsFromModelInterfaceProperties = (
  modelInterfaceProps,
  modelPrimaryKeyName,
) =>
  Object.keys(modelInterfaceProps).reduce((acc, key) => {
    const valueObj = modelInterfaceProps[key];

    if (key !== modelPrimaryKeyName && typeof valueObj['$ref'] !== 'undefined') {
      acc.push(`${key}: Types.ObjectId;`);
    } else if (
      (key == 'adminStatusId' || key === 'description') &&
      (key === typeof valueObj['type']) !== 'undefined'
    ) {
      acc.push(`${key}: ${valueObj['type']} | undefined`);
    } else if (
      (key == 'createdAt' || key === 'updateAt') &&
      (key === typeof valueObj['type']) !== 'undefined'
    ) {
      acc.push(`${key}?: ${valueObj['type']}`);
    } else if ((key === typeof valueObj['type']) !== 'undefined') {
      acc.push(`${key}: ${valueObj['type']}`);
    }

    return acc;
  }, []);

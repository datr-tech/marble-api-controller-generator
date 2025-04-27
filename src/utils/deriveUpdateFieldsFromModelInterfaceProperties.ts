export const deriveUpdateFieldsFromModelInterfaceProperties = (
  modelInterfaceProps,
  modelPrimaryKeyName,
) =>
  Object.keys(modelInterfaceProps).reduce((acc, key) => {
    const valueObj = modelInterfaceProps[key];

    if (key === modelPrimaryKeyName && typeof valueObj['$ref'] !== 'undefined') {
      acc.push(`${key}: Types.ObjectId;`);
    } else if (key !== modelPrimaryKeyName && typeof valueObj['$ref'] !== 'undefined') {
      acc.push(`${key}?: Types.ObjectId;`);
    } else if ((key === typeof valueObj['type']) !== 'undefined') {
      acc.push(`${key}?: ${valueObj['type']}`);
    }

    return acc;
  }, []);

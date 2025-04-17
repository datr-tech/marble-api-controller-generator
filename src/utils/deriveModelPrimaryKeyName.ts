export const deriveModelPrimaryKeyName = (baseName) => {
  const modelPrimaryKeyName = baseName + 'Id';

  return modelPrimaryKeyName;
};

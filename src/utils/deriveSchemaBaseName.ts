export const deriveSchemaBaseName = (schemaName) => {
  const baseNameComponents = schemaName.split('ValidationSchema');
  const baseNameWithModel = baseNameComponents[0];

  return baseNameWithModel.replace('Model', '');
};

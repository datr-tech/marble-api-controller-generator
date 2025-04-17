export const deriveSchemaBaseName = (schemaName) => {
  const baseNameComponents = schemaName.split('ValidationSchema');
  const baseNameWithModel = baseNameComponents[0];
  const baseName = baseNameWithModel.replace('Model', '');

  return baseName;
};

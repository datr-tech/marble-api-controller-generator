export const getBaseName = ({ schemaName }) => {
  const baseNameComponents = schemaName.split('ValidationSchema');
  const baseNameWithModel = baseNameComponents[0];

  return baseNameWithModel.replace('Model', '');
};

import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerInterfaceIndex = ({
  controllerInterfaceDefs,
  controllerInterfaceInputDefs,
  controllerInterfaceOutputDefs,
  controllerInterfaceOutputErrorDefs,
  controllerInterfaceOutputSuccessDefs,
}) => {
  const controllerInterfaceBaseNames = controllerInterfaceDefs.map(
    (controllerInterfaceDef) => ({
      controllerInterfaceName: controllerInterfaceDef.name,
    }),
  );
  const controllerInterfaceInputNames = controllerInterfaceInputDefs.map(
    (controllerInterfaceInputDef) => ({
      controllerInterfaceName: controllerInterfaceInputDef.name,
    }),
  );
  const controllerInterfaceOutputNames = controllerInterfaceOutputDefs.map(
    (controllerInterfaceOutputDef) => ({
      controllerInterfaceName: controllerInterfaceOutputDef.name,
    }),
  );

  const controllerInterfaceOutputErrorNames = controllerInterfaceOutputErrorDefs.map(
    (controllerInterfaceOutputErrorDef) => ({
      controllerInterfaceName: controllerInterfaceOutputErrorDef.name,
    }),
  );

  const controllerInterfaceOutputSuccessNames = controllerInterfaceOutputSuccessDefs.map(
    (controllerInterfaceOutputSuccessDef) => ({
      controllerInterfaceName: controllerInterfaceOutputSuccessDef.name,
    }),
  );

  const controllerInterfaceNames = controllerInterfaceBaseNames.concat(
    controllerInterfaceInputNames,
    controllerInterfaceOutputNames,
    controllerInterfaceOutputErrorNames,
    controllerInterfaceOutputSuccessNames,
  );

  const templateName = controllers.getInterfaceIndexTemplateName();
  const templateData = { controllerInterfaceNames };

  return {
    contents: fsTemplate.getContents(templateName, templateData),
  };
};

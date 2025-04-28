import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerInterfaceIndex = ({
  controllerInterfaceDefs,
  controllerInterfaceInputDefs,
  controllerInterfaceOutputDefs,
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

  const controllerInterfaceNames = controllerInterfaceBaseNames.concat(
    controllerInterfaceInputNames,
    controllerInterfaceOutputNames,
  );

  const templateName = controllers.getInterfaceIndexTemplateName();
  const templateData = { controllerInterfaceNames };

  return {
    contents: fsTemplate.getContents(templateName, templateData),
  };
};

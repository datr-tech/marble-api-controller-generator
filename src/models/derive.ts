import { getInstanceName } from './getInstanceName';
import { getInterfaceName } from './getInterfaceName';
import { getInterfacePath } from './getInterfacePath';
import { getName } from './getName';
import { getPrimaryKeyName } from './getPrimaryKeyName';

export const derive = ({ baseName, baseNameUcFirst, serviceName }) => {
  const modelInterfaceName = getInterfaceName({ baseNameUcFirst });

  return {
    modelInstanceName: getInstanceName({ baseName }),
    modelInterfaceName,
    modelInterfacePath: getInterfacePath({ serviceName, modelInterfaceName }),
    modelName: getName({ baseNameUcFirst }),
    modelPrimaryKeyName: getPrimaryKeyName({ baseName }),
  };
};

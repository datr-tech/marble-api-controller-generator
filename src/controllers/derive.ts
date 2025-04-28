import { getInterfaceName } from './getInterfaceName';
import { getName } from './getName';

export const derive = ({ baseName, baseNameUcFirst, methodName }) => ({
  controllerInterfaceName: getInterfaceName(baseNameUcFirst, methodName),
  controllerName: getName(baseName, baseNameUcFirst, methodName),
});

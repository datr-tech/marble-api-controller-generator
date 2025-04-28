import path from 'node:path';

export const getInterfacePath = ({ serviceName, modelInterfaceName }) =>
  path.resolve(
    '.',
    '../',
    `api-${serviceName}`,
    'src',
    'interfaces',
    'api',
    'models',
    `${modelInterfaceName}.ts`,
  );

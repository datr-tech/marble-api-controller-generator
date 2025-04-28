import { writeInterface } from './writeInterface';

export const writeInterfaces = (interfaceDefs, service) =>
  interfaceDefs.map((interfaceDef) => writeInterface(interfaceDef, service));

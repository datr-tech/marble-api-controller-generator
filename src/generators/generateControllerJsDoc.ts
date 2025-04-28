import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerJsDoc = ({ parsedSchema }) =>
  fsTemplate.getContents(controllers.getJsDocTemplateName(), parsedSchema);

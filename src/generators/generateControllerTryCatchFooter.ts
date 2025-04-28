import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerTryCatchFooter = ({ parsedSchema }) =>
  fsTemplate.getContents(controllers.getTryCatchFooterTemplateName(), parsedSchema);

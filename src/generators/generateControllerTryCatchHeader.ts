import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerTryCatchHeader = ({ parsedSchema }) =>
  fsTemplate.getContents(controllers.getTryCatchHeaderTemplateName(), parsedSchema);

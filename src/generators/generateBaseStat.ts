import { fileNames, keywords } from '@app-macg/config';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateBaseStat = () => ({
  contents: fsTemplate.getContents(fileNames.baseStatTemplate, {}),
  name: keywords.baseStat,
});

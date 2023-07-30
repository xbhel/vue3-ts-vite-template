export default {
  '*.md,package.json': 'prettier --write',
  '*.{js,jsx,ts,tsx,vue}': ['eslint --cache --fix', 'prettier --write'],
  '{!(package)*.json,.!(browserslist)*rc}': 'prettier --write--parser json',
};

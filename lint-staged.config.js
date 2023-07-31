export default {
  '*.{md,json}': 'prettier --write',
  '*.{js,jsx,ts,tsx,vue}': ['eslint --cache --fix', 'prettier --write'],
};

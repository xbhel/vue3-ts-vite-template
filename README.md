# vue3-ts-vite-template

👋 这是一个基于 [Vue3](https://vuejs.org/)、[TypeScript](https://www.typescriptlang.org/)、[Vite](https://vitejs.dev/) 的模板，并且对一些常用插件和库进行了集成，如下。

## 规范化插件

- [prettier](https://prettier.io/)：使用 prettier 统一代码格式。
- [eslint](https://eslint.org/docs/latest/)：使用 esLint 约束 Vue、TypeScript 、JavaScript 代码规范。
- [stylelint](https://stylelint.bootcss.com/)：使用 stylelint 约束 Less、CSS 代码规范。
- [commitizen](http://commitizen.github.io/cz-cli/) 和 [commitlint](https://commitlint.js.org/#/)：使用 commitizen 统一代码提交消息的格式，commitlint 约束提交消息的格式。
- [lint-staged](https://github.com/okonet/lint-staged)：使用 lint-staged 对暂存区的代码进行检查。
- [husky](https://typicode.github.io/husky/#/)：使用 husky 添加 [git hook](https://git-scm.com/docs/githooks)，对提交进行增强。husky 支持所有的 git hook，通过增加相应 hook，可以在提交（commit）或推送时检验提交信息、运行测试、对代码和文件等进行预设的检查，一旦检查不通过，就可以阻止当前的代码提交，避免了不规范的代码和 git 提交出现在项目。

> 👋 **[lint-staged](https://github.com/okonet/lint-staged)**
>
> 在前端工程化中为保证项目代码质量，会要求开发者在提交代码之前必须通过 ESLint、StyleLint 等工具进行检查。在项目初期代码文件少，全量跑一次 lint 的时间相对较短，但随着时间增长，项目体量越来越大，跑一次 lint 的时间也越来越长，但实际上我们并不需要每次跑全量的代码，那些存量代码在之前的提交就已经跑过 lint 了，我们只需对新增/修改的文件进行 lint 即可，这些代码就是开发者需要提交的代码，也就是暂存区的代码。
>
> lint-staged 工具用于在 git 提交代码前对暂存区的代码执行一系列的检查和规范化，将 lint-staged 配合 git hooks 使用时，可以在 git 提交前的 hook 中加入 lint-staged 命令，这样就能在提交代码之前对代码进行检查和格式化，确保通过之后才能提交代码。

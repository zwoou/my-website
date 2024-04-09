import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
    "no-unused-vars": "error",//"off"或者0- 关闭规则,"warn"或1- 打开规则作为警告（不影响退出代码）,"error"或者2- 将规则作为错误打开（退出代码将为 1）
    "no-undef": "error"
  }
}
];
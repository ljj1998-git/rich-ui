"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalConfig = void 0;
const vue_1 = require("vue");
function useGlobalConfig(key, defaultValue = undefined, block) {
    const config = (0, vue_1.getCurrentInstance)();
    console.log(config);
}
exports.useGlobalConfig = useGlobalConfig;

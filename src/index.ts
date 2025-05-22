// Reexport the native module. On web, it will be resolved to ExpoTtpEduModule.web.ts
// and on native platforms to ExpoTtpEduModule.ts
export { default } from './ExpoTtpEduModule';
export { default as ExpoTtpEduView } from './ExpoTtpEduView';
export * from  './ExpoTtpEdu.types';

// Reexport the native module. On web, it will be resolved to ExpoTtpEduModule.web.ts
// and on native platforms to ExpoTtpEduModule.ts
export { default } from './ExpoTtpEduModule';
export { showTapToPayEducation } from './ExpoTtpEduModule';
export * from './ExpoTtpEdu.types';

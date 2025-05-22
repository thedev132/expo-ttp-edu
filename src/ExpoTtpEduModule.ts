import { requireNativeModule } from 'expo-modules-core';
import { ExpoTtpEduModule, ExpoTtpEduOptions } from './ExpoTtpEdu.types';

export default requireNativeModule<ExpoTtpEduModule>('ExpoTtpEdu');

export function showTapToPayEducation(options?: ExpoTtpEduOptions): Promise<void> {
  return requireNativeModule<ExpoTtpEduModule>('ExpoTtpEdu').showTapToPayEducation(options);
}

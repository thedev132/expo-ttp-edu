import { NativeModule, requireNativeModule } from 'expo';

import { ExpoTtpEduModuleEvents } from './ExpoTtpEdu.types';

declare class ExpoTtpEduModule extends NativeModule<ExpoTtpEduModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoTtpEduModule>('ExpoTtpEdu');

import { registerWebModule, NativeModule } from 'expo';

import { ExpoTtpEduModuleEvents } from './ExpoTtpEdu.types';

class ExpoTtpEduModule extends NativeModule<ExpoTtpEduModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoTtpEduModule, 'ExpoTtpEduModule');

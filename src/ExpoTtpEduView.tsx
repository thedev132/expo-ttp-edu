import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoTtpEduViewProps } from './ExpoTtpEdu.types';

const NativeView: React.ComponentType<ExpoTtpEduViewProps> =
  requireNativeView('ExpoTtpEdu');

export default function ExpoTtpEduView(props: ExpoTtpEduViewProps) {
  return <NativeView {...props} />;
}

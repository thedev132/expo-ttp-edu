import * as React from 'react';

import { ExpoTtpEduViewProps } from './ExpoTtpEdu.types';

export default function ExpoTtpEduView(props: ExpoTtpEduViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

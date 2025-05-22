import type { StyleProp, ViewStyle } from 'react-native';

export type OnLoadEventPayload = {
  url: string;
};

export type ExpoTtpEduModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type ExpoTtpEduViewProps = {
  url: string;
  onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
  style?: StyleProp<ViewStyle>;
};

export interface ExpoTtpEduOptions {
  uiMode?: 'light' | 'dark';
}

export interface ExpoTtpEduModule {
  showTapToPayEducation(options?: ExpoTtpEduOptions): Promise<void>;
}

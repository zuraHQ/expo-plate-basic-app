import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

export const AppText = React.forwardRef<RNText, RNTextProps>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <RNText ref={ref} className={`font-normal ${className ?? ''}`} {...restProps} />
  );
});

AppText.displayName = 'AppText';
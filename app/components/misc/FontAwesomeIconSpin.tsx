import React from 'react';
import { FontAwesomeIcon, Props as FontAwesomeIconProps } from '@fortawesome/react-native-fontawesome';
import { animated, useSpring } from 'react-spring';

const FontAwesomeIconSpin = ({ ...fontAwesomeIconProps }: FontAwesomeIconProps) => {
  const props = useSpring(
    {
      from: { rotateZ: 0 },
      to: { rotateZ: 360 },
      loop: true,
      config: {
        friction: 0,
        tension: 1,
        damping: 0,
        delay: 0,
        bounce: 0,
        easing: (x) => {
          const c1 = 1.70158;
          const c3 = c1 + 1;

          // eslint-disable-next-line no-restricted-properties
          return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
        },
      },
    },
  );

  return (
    <animated.div style={{
      ...props,
      width: fontAwesomeIconProps.width,
      height: fontAwesomeIconProps.height,
    }}
    >
      <FontAwesomeIcon {...fontAwesomeIconProps} />
    </animated.div>
  );
};

export default FontAwesomeIconSpin;

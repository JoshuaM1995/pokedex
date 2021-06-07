import React from 'react';
import ProgressBarProps from './progress-bar.props';
import { StyledProgressBar, StyledProgressBarFill } from './progress-bar.style';

const ProgressBar = ({ value, style }: ProgressBarProps) => {
  return (
    <StyledProgressBar style={style}>
      <StyledProgressBarFill style={{ width: value }} />
    </StyledProgressBar>
  );
};

export default ProgressBar;

import styled from 'styled-components';
import { color } from '../../theme';

export const StyledProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
`;

export const StyledProgressBarFill = styled.span`
  display: block;
  height: 6px;
  background-color: ${color.progressBar.low};
  border-radius: 20px;
  transition: width 500ms ease-in-out;
`;

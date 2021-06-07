import { CSSProperties } from 'styled-components';

export default interface ProgressBarProps {
  /**
   * The stat value (50 = 50%)
   */
  value: number;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: CSSProperties;
}

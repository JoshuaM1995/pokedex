import { TextStyle } from 'react-native';
import { color, typography } from '../../theme';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
};

const BOLD: TextStyle = {
  ...BASE,
  fontWeight: 'bold',
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, ...BOLD } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: 'bold' } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondary information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,

  h1: { ...BASE, ...BOLD, fontSize: 36 },
  h2: { ...BASE, ...BOLD, fontSize: 32 },
  h3: { ...BASE, ...BOLD, fontSize: 28 },
  h4: { ...BASE, ...BOLD, fontSize: 24 },
  h5: { ...BASE, ...BOLD, fontSize: 20 },
  h6: { ...BASE, ...BOLD, fontSize: 16 },
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets

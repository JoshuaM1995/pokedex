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

const HEADER = {
  ...BASE,
  fontWeight: 'bold',
  marginTop: 20,
  marginLeft: 15,
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
  header: HEADER as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondary information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,

  h1: { ...HEADER, ...BOLD, fontSize: typography.sizes.h1 },
  h2: { ...HEADER, ...BOLD, fontSize: typography.sizes.h2 },
  h3: { ...HEADER, ...BOLD, fontSize: typography.sizes.h3 },
  h4: { ...HEADER, ...BOLD, fontSize: typography.sizes.h4 },
  h5: { ...HEADER, ...BOLD, fontSize: typography.sizes.h5 },
  h6: { ...HEADER, ...BOLD, fontSize: typography.sizes.h6 },
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets

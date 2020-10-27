import PropTypes from 'prop-types';

import COLORS from '.';

const SECONDARY_COLORS = {
  // brand colors
  primary: '#4c0000',
  primaryTint1: '#b20000',
  primaryTint2: null,
  primaryTint3: '#ff0000',
  secondary: '#ff8000',
  tertiary: null,

  // general colors
  success: null,
  successBackground: null,
  successBorder: null,
  info: null,
  infoBackground: null,
  infoBorder: null,
  error: null,
  errorBackground: null,
  errorBorder: null,
  default: null,
  defaultBackground: null,
  defaultBorder: null,
  accent: null,
  disabled: null,
  failure: null,
  hover: null,
  warning: null,

  // ui colors
  background: null,
  backgroundDark: null,
  border: null,
  divider: null,

  // form colors
  radioBorder: null,
  radioBorderSelected: null,

  // typography
  textMuted: null,
  textGhost: null,
  textDisabled: null,

  // overlay
  overlay: null,
  overlaySolid: null,

  black: COLORS.black,
  white: COLORS.white,
};

export const SECONDARY_COLORS_PROP_TYPES = PropTypes.oneOf(
  Object.values(SECONDARY_COLORS),
);

export default SECONDARY_COLORS;

/**
 * Trust Blue カラーパレット定義
 * 信頼感、安定感、誠実、落ち着き - 不動産業界向けプロフェッショナルなデザイン
 */

/**
 * カラーパレット定数
 */
export const COLORS = {
  // Primary: ネイビー - 信頼と安定を表現
  primary: {
    main: '#1e3a5f',
    light: '#2d5a87',
    dark: '#14283f',
    contrastText: '#ffffff',
  },

  // Secondary: ブルー - プロフェッショナルな印象
  secondary: {
    main: '#2d5a87',
    light: '#4a7ab0',
    dark: '#1e3d5c',
    contrastText: '#ffffff',
  },

  // Accent: スカイブルー - アクセントと強調
  accent: {
    main: '#4a90b8',
    light: '#72acd0',
    dark: '#357090',
    contrastText: '#ffffff',
  },

  // Background: ライトブルーと白 - 清潔感と開放感
  background: {
    default: '#f0f7ff',
    paper: '#ffffff',
    subtle: '#e8f4fc',
  },

  // Text: 濃紺とグレー - 読みやすさと落ち着き
  text: {
    primary: '#1e3a5f',
    secondary: '#333333',
    disabled: '#9e9e9e',
  },

  // Status Colors: セマンティックカラー
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#ffffff',
  },

  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#ffffff',
  },

  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#ffffff',
  },

  info: {
    main: '#4a90b8',
    light: '#72acd0',
    dark: '#357090',
    contrastText: '#ffffff',
  },

  // Divider
  divider: 'rgba(30, 58, 95, 0.12)',

  // Grey Scale
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
} as const;

/**
 * MUI PaletteOptions形式のパレット設定
 */
export const paletteOptions = {
  mode: 'light' as const,
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  background: COLORS.background,
  text: COLORS.text,
  success: COLORS.success,
  warning: COLORS.warning,
  error: COLORS.error,
  info: COLORS.info,
  divider: COLORS.divider,
  grey: COLORS.grey,
  // Action states
  action: {
    active: COLORS.primary.main,
    hover: 'rgba(30, 58, 95, 0.04)',
    selected: 'rgba(30, 58, 95, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(30, 58, 95, 0.12)',
  },
};

export type TrustBlueColors = typeof COLORS;

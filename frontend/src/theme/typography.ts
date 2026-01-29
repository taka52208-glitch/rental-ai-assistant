/**
 * Trust Blue タイポグラフィ設定
 * 日本語対応（Noto Sans JP）
 */

import type { ThemeOptions } from '@mui/material/styles';

type TypographyOptions = NonNullable<ThemeOptions['typography']>;

/**
 * フォントファミリー定義
 * Noto Sans JPを優先、フォールバックを設定
 */
export const FONT_FAMILY = {
  primary: [
    '"Noto Sans JP"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),

  mono: [
    '"Noto Sans Mono"',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ].join(','),
};

/**
 * フォントウェイト定義
 */
export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

/**
 * MUI TypographyOptions形式のタイポグラフィ設定
 */
export const typographyOptions: TypographyOptions = {
  fontFamily: FONT_FAMILY.primary,
  fontWeightLight: FONT_WEIGHTS.light,
  fontWeightRegular: FONT_WEIGHTS.regular,
  fontWeightMedium: FONT_WEIGHTS.medium,
  fontWeightBold: FONT_WEIGHTS.bold,

  // Display: 大見出し・ヒーローテキスト
  h1: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: '2.5rem',      // 40px
    lineHeight: 1.4,
    letterSpacing: '-0.01562em',
  },

  h2: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: '2rem',        // 32px
    lineHeight: 1.4,
    letterSpacing: '-0.00833em',
  },

  h3: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: '1.75rem',     // 28px
    lineHeight: 1.4,
    letterSpacing: '0em',
  },

  h4: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: '1.5rem',      // 24px
    lineHeight: 1.4,
    letterSpacing: '0.00735em',
  },

  h5: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: '1.25rem',     // 20px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },

  h6: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: '1.125rem',    // 18px
    lineHeight: 1.5,
    letterSpacing: '0.0075em',
  },

  // Subtitle: サブタイトル・補助見出し
  subtitle1: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: '1rem',        // 16px
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },

  subtitle2: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: '0.875rem',    // 14px
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },

  // Body: 本文テキスト
  body1: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.regular,
    fontSize: '1rem',        // 16px
    lineHeight: 1.75,        // 日本語に適した行間
    letterSpacing: '0.00938em',
  },

  body2: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.regular,
    fontSize: '0.875rem',    // 14px
    lineHeight: 1.6,
    letterSpacing: '0.01071em',
  },

  // Button: ボタンテキスト
  button: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: '0.875rem',    // 14px
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'none',   // 日本語では大文字変換しない
  },

  // Caption: キャプション・注釈
  caption: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.regular,
    fontSize: '0.75rem',     // 12px
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },

  // Overline: ラベル・カテゴリ表示
  overline: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: '0.75rem',     // 12px
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'none',   // 日本語では大文字変換しない
  },
};

/**
 * Google Fonts読み込み用のURL
 * index.htmlまたはCSSで読み込む
 */
export const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap';

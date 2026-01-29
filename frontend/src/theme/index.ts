/**
 * Trust Blue MUIテーマ
 * 信頼感、安定感、誠実、落ち着き - 不動産業界向けプロフェッショナルなデザイン
 *
 * MUI v6/v7対応
 */

import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { paletteOptions, COLORS } from './palette';
import { typographyOptions, FONT_FAMILY, GOOGLE_FONTS_URL } from './typography';
import { componentsOverrides } from './components';

/**
 * テーマオプション
 */
const themeOptions: ThemeOptions = {
  palette: paletteOptions,
  typography: typographyOptions,
  components: componentsOverrides,

  // Shape設定
  shape: {
    borderRadius: 8,
  },

  // Breakpoints設定（レスポンシブ対応）
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  // Spacing設定（8pxベース）
  spacing: 8,

  // z-index設定
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

/**
 * Trust Blue テーマインスタンス
 */
export const trustBlueTheme = createTheme(themeOptions);

/**
 * テーマ名
 */
export const THEME_NAME = 'Trust Blue';

/**
 * テーマの説明
 */
export const THEME_DESCRIPTION = '信頼感、安定感、誠実、落ち着き - 不動産業界向けプロフェッショナルなデザイン';

/**
 * エクスポート
 */
export {
  // パレット
  paletteOptions,
  COLORS,

  // タイポグラフィ
  typographyOptions,
  FONT_FAMILY,
  GOOGLE_FONTS_URL,

  // コンポーネント
  componentsOverrides,
};

// デフォルトエクスポート
export default trustBlueTheme;

/**
 * Trust Blue コンポーネントスタイルオーバーライド
 * MUI v6/v7対応
 */

import type { Components, Theme } from '@mui/material/styles';
import { COLORS } from './palette';

/**
 * コンポーネント共通のスタイル定数
 */
const BORDER_RADIUS = {
  small: 4,
  medium: 8,
  large: 12,
} as const;

const TRANSITIONS = {
  duration: '0.2s',
  easing: 'ease-in-out',
} as const;

/**
 * MUI ComponentsオーバーライドのcomponentsOverrides
 */
export const componentsOverrides: Components<Theme> = {
  // ========================================
  // Button
  // ========================================
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: BORDER_RADIUS.medium,
        textTransform: 'none',
        fontWeight: 500,
        padding: '8px 20px',
        transition: `all ${TRANSITIONS.duration} ${TRANSITIONS.easing}`,
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(30, 58, 95, 0.15)',
        },
      },
      contained: {
        boxShadow: '0 2px 8px rgba(30, 58, 95, 0.12)',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(30, 58, 95, 0.2)',
        },
      },
      containedPrimary: {
        background: `linear-gradient(135deg, ${COLORS.primary.main} 0%, ${COLORS.secondary.main} 100%)`,
        '&:hover': {
          background: `linear-gradient(135deg, ${COLORS.primary.dark} 0%, ${COLORS.secondary.dark} 100%)`,
        },
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
          backgroundColor: 'rgba(30, 58, 95, 0.04)',
        },
      },
      outlinedPrimary: {
        borderColor: COLORS.primary.main,
        '&:hover': {
          borderColor: COLORS.primary.dark,
        },
      },
      text: {
        '&:hover': {
          backgroundColor: 'rgba(30, 58, 95, 0.04)',
        },
      },
      sizeSmall: {
        padding: '6px 16px',
        fontSize: '0.8125rem',
      },
      sizeLarge: {
        padding: '12px 28px',
        fontSize: '1rem',
      },
    },
    defaultProps: {
      disableElevation: false,
    },
  },

  // ========================================
  // TextField / Input
  // ========================================
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: BORDER_RADIUS.medium,
          transition: `all ${TRANSITIONS.duration} ${TRANSITIONS.easing}`,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.secondary.main,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.primary.main,
            borderWidth: 2,
          },
        },
      },
    },
    defaultProps: {
      variant: 'outlined',
      size: 'medium',
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: BORDER_RADIUS.medium,
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS.secondary.main,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS.primary.main,
        },
      },
      notchedOutline: {
        borderColor: COLORS.grey[300],
        transition: `border-color ${TRANSITIONS.duration} ${TRANSITIONS.easing}`,
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        '&.Mui-focused': {
          color: COLORS.primary.main,
        },
      },
    },
  },

  // ========================================
  // Card
  // ========================================
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: BORDER_RADIUS.large,
        boxShadow: '0 2px 12px rgba(30, 58, 95, 0.08)',
        transition: `all ${TRANSITIONS.duration} ${TRANSITIONS.easing}`,
        '&:hover': {
          boxShadow: '0 4px 20px rgba(30, 58, 95, 0.12)',
        },
      },
    },
  },

  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: '20px 24px 12px',
      },
      title: {
        fontWeight: 600,
        color: COLORS.text.primary,
      },
      subheader: {
        color: COLORS.text.secondary,
      },
    },
  },

  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '16px 24px',
        '&:last-child': {
          paddingBottom: 24,
        },
      },
    },
  },

  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: '12px 24px 20px',
      },
    },
  },

  // ========================================
  // Paper
  // ========================================
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: BORDER_RADIUS.medium,
      },
      elevation1: {
        boxShadow: '0 2px 8px rgba(30, 58, 95, 0.08)',
      },
      elevation2: {
        boxShadow: '0 4px 12px rgba(30, 58, 95, 0.1)',
      },
      elevation3: {
        boxShadow: '0 6px 16px rgba(30, 58, 95, 0.12)',
      },
    },
  },

  // ========================================
  // AppBar
  // ========================================
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0 2px 8px rgba(30, 58, 95, 0.1)',
      },
      colorPrimary: {
        backgroundColor: COLORS.primary.main,
      },
    },
    defaultProps: {
      elevation: 0,
    },
  },

  // ========================================
  // Drawer
  // ========================================
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: COLORS.background.paper,
        borderRight: `1px solid ${COLORS.divider}`,
      },
    },
  },

  // ========================================
  // List
  // ========================================
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: BORDER_RADIUS.small,
        margin: '4px 8px',
        transition: `all ${TRANSITIONS.duration} ${TRANSITIONS.easing}`,
        '&:hover': {
          backgroundColor: COLORS.background.subtle,
        },
        '&.Mui-selected': {
          backgroundColor: `${COLORS.primary.main}14`,
          '&:hover': {
            backgroundColor: `${COLORS.primary.main}1f`,
          },
          '& .MuiListItemIcon-root': {
            color: COLORS.primary.main,
          },
          '& .MuiListItemText-primary': {
            color: COLORS.primary.main,
            fontWeight: 600,
          },
        },
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: COLORS.text.secondary,
        minWidth: 44,
      },
    },
  },

  // ========================================
  // Chip
  // ========================================
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: BORDER_RADIUS.small,
        fontWeight: 500,
      },
      colorPrimary: {
        backgroundColor: `${COLORS.primary.main}14`,
        color: COLORS.primary.main,
        '&:hover': {
          backgroundColor: `${COLORS.primary.main}24`,
        },
      },
      colorSecondary: {
        backgroundColor: `${COLORS.secondary.main}14`,
        color: COLORS.secondary.main,
        '&:hover': {
          backgroundColor: `${COLORS.secondary.main}24`,
        },
      },
      outlined: {
        borderWidth: 1.5,
      },
    },
  },

  // ========================================
  // Avatar
  // ========================================
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: COLORS.secondary.main,
        color: COLORS.secondary.contrastText,
        fontWeight: 500,
      },
    },
  },

  // ========================================
  // Dialog
  // ========================================
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: BORDER_RADIUS.large,
        boxShadow: '0 8px 32px rgba(30, 58, 95, 0.2)',
      },
    },
  },

  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        padding: '24px 24px 16px',
      },
    },
  },

  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '16px 24px',
      },
    },
  },

  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '16px 24px 24px',
      },
    },
  },

  // ========================================
  // Table
  // ========================================
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: COLORS.background.subtle,
        '& .MuiTableCell-root': {
          fontWeight: 600,
          color: COLORS.text.primary,
          borderBottom: `2px solid ${COLORS.divider}`,
        },
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${COLORS.divider}`,
        padding: '16px',
      },
    },
  },

  MuiTableRow: {
    styleOverrides: {
      root: {
        transition: `background-color ${TRANSITIONS.duration} ${TRANSITIONS.easing}`,
        '&:hover': {
          backgroundColor: COLORS.background.subtle,
        },
      },
    },
  },

  // ========================================
  // Tabs
  // ========================================
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: 3,
        borderRadius: '3px 3px 0 0',
        backgroundColor: COLORS.primary.main,
      },
    },
  },

  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        minWidth: 120,
        '&.Mui-selected': {
          color: COLORS.primary.main,
          fontWeight: 600,
        },
      },
    },
  },

  // ========================================
  // Tooltip
  // ========================================
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: COLORS.primary.dark,
        fontSize: '0.75rem',
        fontWeight: 400,
        padding: '8px 12px',
        borderRadius: BORDER_RADIUS.small,
      },
      arrow: {
        color: COLORS.primary.dark,
      },
    },
  },

  // ========================================
  // Alert
  // ========================================
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: BORDER_RADIUS.medium,
      },
      standardSuccess: {
        backgroundColor: `${COLORS.success.light}1a`,
        color: COLORS.success.dark,
      },
      standardError: {
        backgroundColor: `${COLORS.error.light}1a`,
        color: COLORS.error.dark,
      },
      standardWarning: {
        backgroundColor: `${COLORS.warning.light}1a`,
        color: COLORS.warning.dark,
      },
      standardInfo: {
        backgroundColor: `${COLORS.info.light}1a`,
        color: COLORS.info.dark,
      },
    },
  },

  // ========================================
  // Breadcrumbs
  // ========================================
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        '& .MuiLink-root': {
          color: COLORS.text.secondary,
          textDecoration: 'none',
          '&:hover': {
            color: COLORS.primary.main,
            textDecoration: 'underline',
          },
        },
      },
    },
  },

  // ========================================
  // Divider
  // ========================================
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: COLORS.divider,
      },
    },
  },

  // ========================================
  // Link
  // ========================================
  MuiLink: {
    styleOverrides: {
      root: {
        color: COLORS.primary.main,
        textDecoration: 'none',
        transition: `color ${TRANSITIONS.duration} ${TRANSITIONS.easing}`,
        '&:hover': {
          color: COLORS.secondary.main,
          textDecoration: 'underline',
        },
      },
    },
  },

  // ========================================
  // Skeleton
  // ========================================
  MuiSkeleton: {
    styleOverrides: {
      root: {
        backgroundColor: COLORS.grey[200],
      },
    },
  },

  // ========================================
  // CssBaseline
  // ========================================
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarColor: `${COLORS.grey[400]} ${COLORS.grey[200]}`,
        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },
        '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
          background: COLORS.grey[200],
          borderRadius: 4,
        },
        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
          background: COLORS.grey[400],
          borderRadius: 4,
          '&:hover': {
            background: COLORS.grey[500],
          },
        },
      },
    },
  },
};

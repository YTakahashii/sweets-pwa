export enum BreakPoint {
  XS = 375,
  SM = 416,
  MD = 768,
  LG = 960,
  XL = 1200,
}

export enum Color {
  PRIMARY_BLUE = '#3498DB',
  TRANSPARENT = 'transparent',
  BLACK = '#222',
  WHITE = '#fff',
  WHITE_GRAY = '#eee',
  GRAY = '#666',
}

// ベース 16px
export enum FontSize {
  INHERIT = 'inherit',
  X_SMALL = '0.75rem', // 12px
  SMALL = '0.87rem', // 14px
  MEDIUM = '1rem', // 16px
  LARGE = '1.125rem', // 18px
  X_LARGE = '1.25rem', // 20px
  TITLE = '1.5rem', // 24px
  TITLE_LARGE = '2.5rem', // 40px
  CONTROL_MEDIUM = '1rem', // 16px
  CONTROL_LARGE = '1.5rem', // 24px
}

export const Space = 8; // Spacingは8の倍数 * 0.5, 1 , 2, ...

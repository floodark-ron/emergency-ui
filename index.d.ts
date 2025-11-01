// Emergency UI Design System TypeScript Definitions
// Professional design system for emergency and crisis management interfaces

declare module '@floodark/emergency-ui' {
  // CSS Module declarations for Emergency UI classes
  
  // Button variants
  export const emergencyBtn: string;
  export const emergencyBtnPrimary: string;
  export const emergencyBtnSecondary: string;
  export const emergencyBtnCritical: string;
  export const emergencyBtnWarning: string;
  export const emergencyBtnSuccess: string;
  export const emergencyBtnGhost: string;
  export const emergencyBtnOutline: string;
  
  // Button sizes
  export const emergencyBtnXs: string;
  export const emergencyBtnSm: string;
  export const emergencyBtnMd: string;
  export const emergencyBtnLg: string;
  export const emergencyBtnXl: string;
  
  // Panel variants
  export const emergencyPanel: string;
  export const emergencyPanelCritical: string;
  export const emergencyPanelWarning: string;
  export const emergencyPanelSuccess: string;
  export const emergencyPanelCollapsible: string;
  export const emergencyPanelModal: string;
  
  // Panel sizes
  export const emergencyPanelSm: string;
  export const emergencyPanelMd: string;
  export const emergencyPanelLg: string;
  export const emergencyPanelXl: string;
  export const emergencyPanelFull: string;
  
  // Badge variants
  export const emergencyBadge: string;
  export const emergencyBadgeCritical: string;
  export const emergencyBadgeWarning: string;
  export const emergencyBadgeGood: string;
  export const emergencyBadgeInfo: string;
  export const emergencyBadgeOnline: string;
  export const emergencyBadgeOffline: string;
  export const emergencyBadgeLoading: string;
  
  // Form elements
  export const emergencyForm: string;
  export const emergencyFormGroup: string;
  export const emergencyLabel: string;
  export const emergencyInput: string;
  export const emergencySelect: string;
  export const emergencyCheckbox: string;
  export const emergencyRadio: string;
  
  // Utility classes
  export const emergencyTextPrimary: string;
  export const emergencyTextSecondary: string;
  export const emergencyTextMuted: string;
  export const emergencyTextUrgent: string;
  export const emergencyTextSafe: string;
  export const emergencyTextAttention: string;
  
  // Layout utilities
  export const emergencyFlex: string;
  export const emergencyFlexCol: string;
  export const emergencyFlexRow: string;
  export const emergencyJustifyBetween: string;
  export const emergencyJustifyCenter: string;
  export const emergencyItemsCenter: string;
  export const emergencyGap2: string;
  export const emergencyGap3: string;
  export const emergencyGap4: string;
  export const emergencyGap6: string;
  
  // Spacing utilities
  export const emergencyP2: string;
  export const emergencyP3: string;
  export const emergencyP4: string;
  export const emergencyP6: string;
  export const emergencyM2: string;
  export const emergencyM3: string;
  export const emergencyM4: string;
  export const emergencyM6: string;
  export const emergencyMt2: string;
  export const emergencyMt4: string;
  export const emergencyMb2: string;
  export const emergencyMb4: string;
  
  // Typography utilities
  export const emergencyTextXs: string;
  export const emergencyTextSm: string;
  export const emergencyTextBase: string;
  export const emergencyTextLg: string;
  export const emergencyTextXl: string;
  export const emergencyText2xl: string;
  export const emergencyText3xl: string;
  export const emergencyFontLight: string;
  export const emergencyFontNormal: string;
  export const emergencyFontMedium: string;
  export const emergencyFontSemibold: string;
  export const emergencyFontBold: string;
  
  // Background utilities
  export const emergencyBgPrimary: string;
  export const emergencyBgSecondary: string;
  export const emergencyBgTertiary: string;
  export const emergencyBgCriticalSubtle: string;
  export const emergencyBgWarningSubtle: string;
  export const emergencyBgSuccessSubtle: string;
  
  // Border utilities
  export const emergencyBorderPrimary: string;
  export const emergencyBorderSecondary: string;
  export const emergencyBorderT: string;
  export const emergencyRoundedSm: string;
  export const emergencyRoundedMd: string;
  export const emergencyRoundedLg: string;
  export const emergencyRoundedFull: string;
}

// CSS Custom Properties (Design Tokens)
declare global {
  interface CSSStyleDeclaration {
    // Emergency severity colors
    '--emergency-critical': string;
    '--emergency-warning': string;
    '--emergency-good': string;
    '--emergency-info': string;
    
    // Background colors
    '--emergency-bg-primary': string;
    '--emergency-bg-secondary': string;
    '--emergency-bg-tertiary': string;
    
    // Text colors
    '--emergency-text-primary': string;
    '--emergency-text-secondary': string;
    '--emergency-text-muted': string;
    
    // Spacing
    '--emergency-space-1': string;
    '--emergency-space-2': string;
    '--emergency-space-3': string;
    '--emergency-space-4': string;
    '--emergency-space-6': string;
    '--emergency-space-8': string;
    '--emergency-touch-target': string;
    
    // Typography
    '--emergency-font-primary': string;
    '--emergency-font-display': string;
    '--emergency-font-mono': string;
    '--emergency-text-xs': string;
    '--emergency-text-sm': string;
    '--emergency-text-base': string;
    '--emergency-text-lg': string;
    '--emergency-text-xl': string;
    
    // Shadows and effects
    '--emergency-shadow-sm': string;
    '--emergency-shadow-md': string;
    '--emergency-shadow-lg': string;
    '--emergency-shadow-xl': string;
    
    // Border radius
    '--emergency-radius-sm': string;
    '--emergency-radius-md': string;
    '--emergency-radius-lg': string;
    '--emergency-radius-full': string;
    
    // Animation
    '--emergency-duration-fast': string;
    '--emergency-duration-normal': string;
    '--emergency-duration-slow': string;
    '--emergency-ease-smooth': string;
    '--emergency-ease-bounce': string;
  }
}

export {};

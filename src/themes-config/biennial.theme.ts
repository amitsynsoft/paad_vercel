export const biennialTheme = {
  biennialLight: {
    extend: 'light',
    colors: {
      default: {
        foreground: '#000',
        DEFAULT: '#d4d4d8',
      },
      primary: {
        foreground: '#fff',
        DEFAULT: '#07aeed',
      },
      secondary: {
        foreground: '#fff',
        DEFAULT: '#d946ef',
      },
      background: '#ffffff',
      foreground: '#000000',
      focus: '#8B5CF6',
      overlay: '#000000',
    },
    radius: {
      DEFAULT: '0px',
    },
    layout: {
      radius: {
        small: '0px',
        medium: '0px',
        large: '0px',
      },
      disabledOpacity: '0.5',
    },
  },
  biennialDark: {
    extend: 'dark', // ye batata hai ki ye dark theme hai
    colors: {
      default: {
        foreground: '#fff',
        DEFAULT: '#d4d4d8',
      },
      primary: {
        foreground: '#fff',
        DEFAULT: '#07aeed',
      },
      secondary: {
        foreground: '#fff',
        DEFAULT: '#d946ef',
      },
      background: '#000000',
      foreground: '#ffffff',
      focus: '#8B5CF6',
      overlay: '#000000',
    },

    layout: {
      disabledOpacity: '0.5',
    },
  },
}

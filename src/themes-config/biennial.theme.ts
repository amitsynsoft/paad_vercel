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
        '100': '#dff4ff',
        DEFAULT: '#23b7ef',
      },
      secondary: {
        foreground: '#fff',
        DEFAULT: '#d946ef',
      },
      warning: {
        foreground: '#fff',
        DEFAULT: '#F7E228',
      },
      danger: {
        foreground: '#fff',
        DEFAULT: '#FF2E2E',
      },
      success: {
        foreground: '#fff',
        DEFAULT: '#8AE842',
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
      fontSize: {
        tiny: '0.9rem', // text-tiny
        small: '1rem', // text-small
        medium: '1.375rem', // text-medium
        large: '3.375rem', // text-large
      },
      lineHeight: {
        tiny: '1.25rem',
        small: '1.5rem',
        medium: '2rem',
        large: '3rem',
      },
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
        DEFAULT: '#23b7ef',
      },
      secondary: {
        foreground: '#fff',
        DEFAULT: '#d946ef',
      },
      warning: {
        foreground: '#fff',
        DEFAULT: '#F7E228',
      },
      danger: {
        foreground: '#fff',
        DEFAULT: '#FF2E2E',
      },
      success: {
        foreground: '#fff',
        DEFAULT: '#8AE842',
      },
      background: '#000000',
      foreground: '#ffffff',
      focus: '#8B5CF6',
      overlay: '#000000',
    },

    layout: {
      disabledOpacity: '0.5',
      fontSize: {
        tiny: '0.9rem', // text-tiny
        small: '1.50rem', // text-small
        medium: '1.375rem', // text-medium
        large: '3.375rem', // text-large
      },
      lineHeight: {
        tiny: '1.25rem',
        small: '1.5rem',
        medium: '2rem',
        large: '3rem',
      },
    },
  },
}

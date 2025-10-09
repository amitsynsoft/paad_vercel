export const abuDhabiTheme = {
  abudhabiLight: {
    colors: {
      default: {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#fbbf24',
        '500': '#f59e0b',
        '600': '#d97706',
        '700': '#b45309',
        '800': '#92400e',
        '900': '#78350f',
        foreground: '#000',
        DEFAULT: '#f59e0b',
      },
      primary: {
        '50': '#fff7ed',
        '100': '#ffedd5',
        '200': '#fed7aa',
        '300': '#fdba74',
        '400': '#fb923c',
        '500': '#f97316',
        '600': '#ea580c',
        '700': '#c2410c',
        '800': '#9a3412',
        '900': '#7c2d12',
        foreground: '#fff',
        DEFAULT: '#f97316',
      },
      secondary: {
        '50': '#fefce8',
        '100': '#fef9c3',
        '200': '#fef08a',
        '300': '#fde047',
        '400': '#facc15',
        '500': '#eab308',
        '600': '#ca8a04',
        '700': '#a16207',
        '800': '#854d0e',
        '900': '#713f12',
        foreground: '#000',
        DEFAULT: '#eab308',
      },
      background: '#ffffff',
      foreground: '#000000',
      focus: '#F97316',
      overlay: '#000000',
    },
    layout: {
      disabledOpacity: '0.5',
    },
  },
  abudhabiDark: {
    extend: 'dark', // ye batata hai ki ye dark theme hai
    colors: {
      default: {
        foreground: '#fff',
        DEFAULT: '#f59e0b',
      },
      primary: {
        foreground: '#fff',
        DEFAULT: '#f97316',
      },
      secondary: {
        foreground: '#fff',
        DEFAULT: '#eab308',
      },
      background: '#000000',
      foreground: '#ffffff',
      focus: '#F97316',
      overlay: '#000000',
    },
    layout: {
      disabledOpacity: '0.5',
    },
  },
}

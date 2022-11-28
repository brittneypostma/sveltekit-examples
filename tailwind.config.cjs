const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['class'],
  theme: {
    extend: {
      border: {
        1: "1px"
      },
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
        'display': ['Rubik Distressed', 'cursive'],
      }
    }
  },

  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

module.exports = config

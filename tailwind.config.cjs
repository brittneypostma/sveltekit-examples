const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      border: {
        1: "1px"
      },
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
        'display': ['Rubik Distressed', 'serif'],
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

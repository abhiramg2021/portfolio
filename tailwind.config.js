module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    screens: {
      md: "600px",
      lg: "1100px",
    },
    fontFamily: { yellowtail: ["Yellowtail", "cursive"] },
    colors: {
      white: "var(--white)",
      black: "var(--black)",
      gray: "var(--gray)",
      none: "var(--none)",
      highlight: "var(--pink)",
      beige: {
        800: "var(--beige-800)",
        600: "var(--beige-600)",
        400: "var(--beige-400)",
        200: "var(--beige-200)",
      },
    },
    fontSize: {
      xl: "var(--xl)",
      l: "var(--l)",
      m: "var(--m)",
      ms: "var(--ms)",
      s: "var(--s)",
      xs: "var(--xs)",
    },
  },
  variants: {},
  plugins: [],
};

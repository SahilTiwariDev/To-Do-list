/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pale-green": "#E9F5DB",
        "soft-green": "#CFE1B9",
        "sage-green": "#B5C99A",
        "moss-green": "#97A97C",
        "olive-green": "#87986A",
        "forest-green": "#718355",

        // #E9F5DB → pale-green
        // #CFE1B9 → soft-green
        // #B5C99A → sage-green
        // #97A97C → moss-green
        // #87986A → olive-green
        // #718355 → forest-green
      },
    },
  },
  plugins: [],
};

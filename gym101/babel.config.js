module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./app"],
      "alias": {
        "@i18n": "gym101/app/i18n.js",
      }
    }]
  ]
};

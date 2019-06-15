module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./app"],
      "alias": {
        "@i18n": "gym101/app/i18n.js",
        "@components": "gym101/app/components/index.js",
        "@static/*": "gym101/app/static/*",
        "@config": "gym101/app/config.js",
        
      }
    }]
  ]
};

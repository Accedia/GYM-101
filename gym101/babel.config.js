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
        "@store": "gym101/app/store.js",
        "@actions": "gym101/app/actions/index.js",
        "@firebaseML": "gym101/app/firebaseML.js",
        "@secrets": "gym101/app/secrets.js",
      }
    }]
  ]
};

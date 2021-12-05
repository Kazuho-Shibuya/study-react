module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/prop-types": "off",
        "no-undef": "error"
    }
};

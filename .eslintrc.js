module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "quotes": "error",
        "react/prop-types": "off",
        "no-undef": "error"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};

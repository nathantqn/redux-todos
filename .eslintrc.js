module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true,
            "classes": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    "rules": {
        "react/prefer-stateless-function": 0,
        "react/destructuring-assignment": 0,
        "arrow-body-style": 0,
        "jsx-a11y/html-has-lang": 0,
        "no-multi-assign": 0,
        "global-require": 0,
        "no-return-assign": 0,
        "react/no-access-state-in-setstate": 0,
        "camelcase": 0,
        "react/no-danger": 0,
        "import/no-extraneous-dependencies": 0,
        "no-debugger": 0,
        "no-alert": 0,
        "no-unused-vars": [
            1,
            {
                "argsIgnorePattern": "res|next|^err"
            }
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "all"
            }
        ],
        "no-unused-expressions": [
            2,
            {
                "allowTaggedTemplates": true
            }
        ],
        "no-param-reassign": 0,
        "no-console": 0,
        "import/prefer-default-export": 0,
        "import": 0,
        "func-names": 0,
        "space-before-function-paren": 0,
        "comma-dangle": 0,
        "max-len": 0,
        "import/extensions": 0,
        "no-underscore-dangle": 0,
        "consistent-return": 0,
        "react/display-name": 0,
        "react/no-array-index-key": 0,
        "react/react-in-jsx-scope": 0,
        "react/no-unescaped-entities": 0,
        "jsx-a11y/accessible-emoji": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "radix": 0,
        "no-shadow": [
            2,
            {
                "hoist": "all",
                "allow": [
                    "resolve",
                    "reject",
                    "done",
                    "next",
                    "err",
                    "error",
                    "loading"
                ]
            }
        ],
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100
            }
        ],
        "react/prop-types": "off",
        "no-script-url": "off",
        "arrow-parens": "off",
        "array-callback-return": "off",
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                "aspects": [
                    "invalidHref"
                ]
            }
        ]
    },
    "plugins": [
        "prettier",
    ]
}
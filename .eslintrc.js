module.exports = {
    "rules": {
        // Possible Errors
        "no-caller": 2,
        "no-control-regex": 2,
        "no-empty": 1,
        "no-invalid-regexp": 2,
        "no-regex-spaces": 2,
        "no-unsafe-negation": 1,
        "valid-jsdoc": 0,
        "valid-typeof": 2,
        // Best Practices
        "curly": 2,
        "eqeqeq": [2, "smart"],
        "guard-for-in": 0,
        "no-else-return": 1,
        "no-fallthrough": 2,
        "no-invalid-this": 1,
        "no-iterator": 2,
        "no-loop-func": 2,
        "no-multi-str": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-proto": 2,
        "no-redeclare": 1,
        "no-script-url": 2,
        "wrap-iife": [2, "outside"],
        // Strict Mode
        "strict": 2,
        // Variables
        "no-shadow-restricted-names": 2,
        "no-shadow": 1,
        "no-undef": 2,
        "no-unused-vars": [1, {"vars": "all", "args": "none"}],
        "no-use-before-define": 0,
        // Node.js and CommonJS
        "no-new-require": 2,
        // Stylistic Issues
        "block-spacing": 1,
        "brace-style": [1, "1tbs", { "allowSingleLine": true }],
        "camelcase": 1,
        "comma-dangle": 2,
        "comma-spacing": 1,
        "comma-style": [1, "last"],
        "computed-property-spacing": 1,
        "eol-last": 1,
        "func-call-spacing": 1,
        "indent": [1, 4],
        "key-spacing": [1, { "beforeColon": false, "afterColon": true }],
        "max-len": [1, 120],
        "new-cap": [0, {
            "capIsNewExceptions": [
                "$.Deferred",
                "$.Event",
                "CodeMirror.Pos",
                "Immutable.Map",
                "Immutable.List",
                "JSLINT"
            ]
        }],
        "new-parens": 2,
        "no-bitwise": 2,
        "no-new-object": 2,
        "no-trailing-spaces": 1,
        "semi-spacing": 1,
        "semi": 2
    },
    "globals": {
        "$": false,
        "brackets": false,
        "clearTimeout": false,
        "console": false,
        "define": false,
        "require": false,
        "setTimeout": false,
        "window": false,
        "ArrayBuffer": false,
        "Uint32Array": false,
        "WebSocket": false,
        "XMLHttpRequest": false
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script",
        "ecmaFeatures": {
            "arrowFunctions": true,
            "binaryLiterals": true,
            "blockBindings": true,
            "classes": true
        }
    }
};

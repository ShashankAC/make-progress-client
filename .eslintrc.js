// {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "standard-with-typescript",
//         "plugin:react/recommended"
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "project": "tsconfig.eslint.json",
//         "tsconfigRootDir": "client",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//         "react/jsx-uses-react": "off"
//     }
// }

module.exports = {
    parserOptions: {
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        }
    },
    rules: {
        "react/jsx-uses-react": "off"
    },
    plugins: [
        'react'
    ]
}

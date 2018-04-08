const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const cleanup = require('rollup-plugin-cleanup');

export default {
    input: 'production/main.js',
    output: {
        file: 'production/build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        json(),
        cleanup(),
        nodeResolve({
            main: true
        }),
        babel({
            presets: [
                [
                    "es2015",
                    {
                        "modules": false
                    }
                ]
            ],
            plugins: [
                "external-helpers"
            ]
        })
    ]

}
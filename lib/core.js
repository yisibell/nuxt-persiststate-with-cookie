'use strict';

var path = require('node:path');

const runModule = (moduleContainer, moduleOptions) => {
    const { nuxt } = moduleContainer;
    const finalModuleOptions = Object.assign({ enable: true }, nuxt.options.persiststate, moduleOptions);
    if (!finalModuleOptions.enable)
        return;
    moduleContainer.addPlugin({
        src: path.resolve(__dirname, './runtime/plugin.js'),
        fileName: 'nuxt-persiststate-with-cookie.js',
        options: finalModuleOptions,
    });
};

exports.runModule = runModule;

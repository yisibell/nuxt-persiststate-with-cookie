
<p align="center">
  <a href="https://www.npmjs.org/package/nuxt-persiststate-with-cookie">
    <img src="https://img.shields.io/npm/v/nuxt-persiststate-with-cookie.svg">
  </a>
  <a href="https://npmcharts.com/compare/nuxt-persiststate-with-cookie?minimal=true">
    <img src="https://img.shields.io/npm/dm/nuxt-persiststate-with-cookie.svg">
  </a>
  <br>
</p>


# nuxt-persiststate-with-cookie

A nuxt(2) module to persist vuex state with cookie.

# Installation

```bash
# yarn
$ yarn add --dev nuxt-persiststate-with-cookie

# npm
$ npm i -D nuxt-persiststate-with-cookie
```

# Usage

You can use the following methods to apply **nuxt-persiststate with cookie**.

1. Basic.

```js
// nuxt.config.js

module.exports = {
  // ...

  buildModules: [['nuxt-persiststate-with-cookie']],
}
```

2. With configuration parameters.

```js
// nuxt.config.js
module.exports = {
  // ...

  buildModules: [
    [
      'nuxt-persiststate-with-cookie',
      {
        key: 'my-custom_cookie_key',
        // ...
      },
    ],
  ],

  // Or
  persiststate: {
    // your config
  },
}
```

3. Apply to a third-party **nuxt module** via `requireModule` method.

```js
// ...
moduleObject.requireModule([
  'nuxt-persiststate-with-cookie',
  {
    // your config
  },
])
```

# Options

|   Key   |  Default value    |  Type  |      Description  |
| :------: | :----------: | :--------: |:---------: |
|      `enable`       |              `true`               | `boolean`  |    Whether to  enable **nuxt-persiststate-with-cookie** |
|        `key`        |  `__NUXT_PERSISTEDSTATE_VUEX__`   |  `string`  |     Specifies the key name used when storing the **cookie**.       |
|       `paths`       |            `['site']`             | `string[]` |    Specify the 'state' path to persist. By default, all `states` under the **~/store/site.ts** module will be persisted. |
| `setCookiesOptions` | `{ expires: 365, secure: false }` |  `object`  | Specifies the configuration object for setting the **cookie**. For details, see [The API of js-cookie](https://github.com/js-cookie/js-cookie). |

# CHANGE LOG

see [CHANGE LOG](./CHANGELOG.md)

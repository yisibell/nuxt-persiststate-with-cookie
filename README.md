# nuxt-persiststate-with-cookie

A nuxt(2) module to persist vuex state with cookie.

# Installation

```bash
# yarn
$ yarn add nuxt-persiststate-with-cookie

# npm
$ npm i nuxt-persiststate-with-cookie
```

# Usage

可以使用如下几种方式进行应用 **nuxt-persiststate-with-cookie**。

1. 基础用法。

```js
// nuxt.config.js
module.exports = {
  // ...

  modules: [['nuxt-persiststate-with-cookie']],
}
```

2. 带配置参数。

```js
// nuxt.config.js
module.exports = {
  // ...

  modules: [
    [
      'nuxt-persiststate-with-cookie',
      {
        key: 'my-custom_cookie_key',
        // ...
      },
    ],
  ],

  // 配置也可以使用
  persiststate: {
    // your config
  },
}
```

3. 使用 `requireModule` 方法应用在第三方 **nuxt module** 中。

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

|        字段         |              默认值               |  数据类型  |                                                            说明                                                            |
| :-----------------: | :-------------------------------: | :--------: | :------------------------------------------------------------------------------------------------------------------------: |
|      `enable`       |              `true`               | `boolean`  |                                               是否对 `vuex` 开启数据持久化。                                               |
|        `key`        |  `__NUXT_PERSISTEDSTATE_VUEX__`   |  `string`  |                                             指定存储 **cookie** 时使用的键名。                                             |
|       `paths`       |            `['site']`             | `string[]` |                   指定要持久化的 `state` 路径。 默认会持久化 **~/store/site.ts** 模块下的所有 `state`。                    |
| `setCookiesOptions` | `{ expires: 365, secure: false }` |  `object`  | 指定设置 **cookie** 时的配置对象。具体可参看 <a href="https://github.com/js-cookie/js-cookie"> js-cookie </a> 模块的 API。 |

# CHANGE LOG

see [change log](./CHANGELOG.md)

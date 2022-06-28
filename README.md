# nuxt-persiststate-with-cookie

A nuxt(2) module to persist vuex state with cookie.

# Installation

```bash
# yarn
$ yarn add nuxt-persiststate-with-cookie

# npm
$ npm i add nuxt-persiststate-with-cookie
```

# Usage

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
  }


}
```

3. 在其他 **nuxt module** 中使用 `requireModule` 来引用。

``` js
// ...
moduleObject.requireModule(['nuxt-persiststate-with-cookie', {
  // your config
}])
```

# Options

|        字段         |              默认值               |  数据类型  |                                 说明                                  |
| :-----------------: | :-------------------------------: | :--------: | :-------------------------------------------------------------------: |
|      `enable`       |              `true`               | `boolean`  |                    是否对 `vuex` 开启数据持久化。                     |
|        `key`        |  `__NUXT_PERSISTEDSTATE_VUEX__`   |  `string`  |                  指定存储 **cookie** 时使用的键名。                   |
|       `paths`       |            `['site']`             | `string[]` |                     指定要持久化的 `state` 路径。                     |
| `setCookiesOptions` | `{ expires: 365, secure: false }` |  `object`  | 指定设置 **cookie** 时的配置对象。具体可参看 `js-cookie` 模块的 API。 |

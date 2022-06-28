import createPersistedState from 'vuex-persistedstate'
import clientCookies from 'js-cookie'
import serverCookies from 'cookie'

const moduleOptionsJson = <%= JSON.stringify(options) %>

const moduleOptions = JSON.parse(moduleOptionsJson)

const defaultOptions = {
  key: '__NUXT_PERSISTEDSTATE_VUEX__',
  paths: ['site'],
  setCookiesOptions : { expires: 365, secure: false }
}

const options = Object.assign(defaultOptions, moduleOptions)

export default ({ store, req }) => {
  createPersistedState({
    key: options.key,
    paths: options.paths,
    storage: {
      getItem: (key) => {
        if (process.server) {
          const parsedCookies = serverCookies.parse(req.headers.cookie || '')

          return parsedCookies[key]
        } else {
          return clientCookies.getJSON(key)
        }
      },
      setItem: (key, value) => {
        clientCookies.set(key, value, options.setCookiesOptions)
      },
      removeItem: (key) => clientCookies.remove(key),
    },
  })(store)
}

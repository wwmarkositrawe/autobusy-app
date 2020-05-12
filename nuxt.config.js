const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: 'Przewozy XYZ',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital@1&display=swap"}        
  ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  //   loading: {
  //     throttle: 0,
  //     color: "#3b8070"
  // },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-4e401.firebaseio.com/',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    },
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-4e401.firebaseio.com/',
    fbAPIKey: 'AIzaSyC_BhKMDgCSWImt_VwDQsOMVh4_8XSi__c'
  },
  router: {
    linkActiveClass: 'active'
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes:  function() {
      return axios.get('https://nuxt-blog-4e401.firebaseio.com/posts.json')
        .then(res => {
          const routes = []
          for (const key in res.data) {
            routes.push({
              route: '/posts/' + key, 
              payload: { 
                postData: res.data[key]
            }})
          }
          return routes
        })
    }
  }
}

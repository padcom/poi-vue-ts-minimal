import Vue from 'vue'
import injector from 'vue-inject'

import { API } from './api'
import App from './App.vue'

import axios from 'axios'

Vue.use(injector)

injector.constant('http', axios)
injector.constant('baseURL', 'https://jsonplaceholder.typicode.com')
injector.service('api', API)

const api: API = injector.get('api')

api.loadPost(1).then(post => {
  new Vue({
    el: '#app',
    render: h => h(App, { props: { post } })
  })
})

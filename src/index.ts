import Pretender from 'pretender'

var server = new Pretender()

server.get('https://jsonplaceholder.typicode.com/posts/:id', server.passthrough)
server.get('https://jsonplaceholder.typicode.com/posts/:id/comments', server.passthrough)

server.get('https://jsonplaceholder.typicode.com/posts/1', function(request: any) { 
  return [
    200, { 'Content-Type': 'application/json' }, JSON.stringify({ 
      id: 1, userId: 2, title: 'Post nr 1', body: 'Body of post nr 1' 
    })
  ]
})
server.get('https://jsonplaceholder.typicode.com/posts/1/comments', function(request: any) { 
  return [
    200, { 'Content-Type': 'application/json' }, JSON.stringify([
      { postId: 1, id: 1, name: 'John Doe', email: 'john.doe@investa.de', body: 'Comment 1' },
      { postId: 1, id: 2, name: 'Jane Smith', email: 'jane.smith@capitalo.se', body: 'Comment 2' }
    ])
  ]
})

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

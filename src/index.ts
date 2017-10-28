import Pretender from 'pretender'

var server = new Pretender()

//server.get('http://localhost:4000/posts/:id', server.passthrough)
//server.get('http://localhost:4000/posts/:id/comments', server.passthrough)

server.get('http://localhost:4000/posts/:id', function(request: any) {
  return [
    200, { 'Content-Type': 'application/json' }, JSON.stringify({
      id: request.params.id, userId: 2, title: 'Post nr ' + request.params.id, body: 'Body of post nr ' + request.params.id
    })
  ]
})
server.get('http://localhost:4000/posts/:id/comments', function(request: any) {
  return [
    200, { 'Content-Type': 'application/json' }, JSON.stringify([
      { postId: request.params.id, id: 1, name: 'John Doe', email: 'john.doe@investa.de', body: 'Comment 1 on post ' + request.params.id },
      { postId: request.params.id, id: 2, name: 'Jane Smith', email: 'jane.smith@capitalo.se', body: 'Comment 2 on post ' + request.params.id }
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
//injector.constant('baseURL', 'https://jsonplaceholder.typicode.com')
injector.constant('baseURL', 'http://localhost:4000')
injector.service('api', API)

const api: API = injector.get('api')

api.loadPost(1).then(post => {
  new Vue({
    el: '#app',
    render: h => h(App, { props: { post } })
  })
})

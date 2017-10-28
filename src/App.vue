<template>
  <div>
    <input @input="search($event.target.value)">
    <h1 @click.prevent="clicked">{{ message }}</h1>
    <button @click="reset">Reset</button>
    <ul>
      <li v-for="(comment, index) in comments" :key="comment.id">{{ comment.email }} - {{ comment.name }}
        <button @click="deleteComment(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

import { Post } from './api'

export default Vue.extend({
  dependencies: [
    'api'
  ],
  props: {
    post: { required: true, type: Post }
  },
  data () {
    return {
      id: this.post.id,
      message: this.post.body,
      comments: []
    }
  },
  methods: {
    clicked () {
      this.loadPost(this.id + 1)
    },
    async loadPost (id) {
      this.message = 'Loading...'
      this.comments = []
      try {
        const post = await this.api.loadPost(id)
        const comments = await this.api.loadCommentsForPost(id)
        this.id = post.id
        this.message = post.body
        this.comments = comments
      } catch (e) {
        this.message = 'Error while loading data'
      }
    },
    async reset () {
      this.id = this.post.id;
      this.message = this.post.body;
      this.comments = await this.api.loadCommentsForPost(this.id)
    },
    search (term) {
      this.loadPost(parseInt(term))
    },
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  }
})
</script>

<style>
h1 {
  cursor: default;
  user-select: none;
}
</style>

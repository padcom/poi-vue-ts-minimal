import { expect } from 'chai'

import Vue from 'vue'
import App from '../../../src/components/App.vue'

describe('Component: App', () => {
  it('will have a header', () => {
    const Ctor = Vue.extend(App)
    const vm = new Ctor().$mount()
    const header = vm.$el.querySelector('h1')
    expect(header).to.not.be.null;
    if (header != null) expect(header.textContent).to.equal('Hello, world!')
  })
})

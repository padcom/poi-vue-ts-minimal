import { expect } from 'chai'

import App from '../../../src/components/App.vue'
import AppA from '../../../src/components/App.vue'
import * as AppB from '../../../src/components/App.vue'

console.log(AppA)
console.log(AppB)

describe('Component: App', () => {
  it('will have a header', () => {
    const vm = new App().$mount()
    const header = vm.$el.querySelector('h1')
    expect(header).to.not.be.null;
    if (header != null) expect(header.textContent).to.equal('Hello, world!')
  })
})

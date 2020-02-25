import React from 'react'
import * as rtl from '@testing-library/react'
// import { fetchShow }  from "./fetchShow"
import App from "../App"

jest.mock('axios', () => {
  // the callback retuns something
  // we return the "new", artificial axios module
  // { get: Function returns promise, post: Funcion... }
  return {
    get: (url) => {
      return Promise.resolve({ data: {name: "Stranger Things" } })
    }
  }
})

describe('fetchShow axios call', () => {
  afterEach(rtl.cleanup)
  let wrapper;

    beforeEach(() => {
        wrapper = rtl.render(
          <App />
        )
      })
      it.skip('renders without crashing', async () => {
          // grab an element
          const episodesDiv = wrapper.findByText("episodes")
          // run assertions
          expect(episodesDiv).toBeInTheDocument()
          expect(episodesDiv).toBeVisible()
        })
})
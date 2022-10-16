/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { LoaderNonRedux } from './LoaderNonRedux'

describe('how the LoaderNonRedux works', () => {
  test('shows Loading... then content', async () => {
    const resp = {
      json: () => {
        return [
          { a: 'Ay', b: 3434, c: 'Click', d: 'Dundee' },
          { a: 'Bee', b: 2323, c: 'Clack', d: 'Devon' },
          { a: 'Cee', b: 39405734, c: 'Clock', d: 'Dumbarton' },
        ]
      },
    }
    const fetchMock = jest.fn(() => Promise.resolve(resp as unknown as Response))
    const { findAllByText } = render(<LoaderNonRedux fetch={fetchMock} />)

    const elem1 = await findAllByText(/Loading.../)
    expect(elem1.length).toBe(1)
    expect(fetchMock.mock.calls.length).toBe(1)

    const elem2 = await findAllByText(/Dumbarton/)
    expect(elem2.length).toBe(1)
  })
})

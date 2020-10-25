import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Modal from './Modal'

describe('how the Modal works', () => {
  test('content is NOT rendered when closed', async () => {
    const setOpen = jest.fn(() => {})
    const { getByDisplayValue, getByText, queryAllByDisplayValue, queryAllByText } = render(
      <Modal open={false} setOpen={setOpen}>
        <div>blah</div>
      </Modal>
    )
    expect(queryAllByText(/blah/).length).toBe(0)
  })

  test('content IS rendered when opened', async () => {
    const setOpen = jest.fn(() => {})
    const { getByDisplayValue, getByText, queryAllByDisplayValue, queryAllByText } = render(
      <Modal open={true} setOpen={setOpen}>
        <div>blah</div>
      </Modal>
    )
    expect(queryAllByText(/blah/).length).toBe(1)
  })
})

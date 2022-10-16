/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Modal } from './Modal'

describe('how the Modal works', () => {
  test('content is NOT rendered when closed', async () => {
    const setOpen = jest.fn(() => {})
    const { queryAllByText } = render(
      <Modal open={false} setOpen={setOpen}>
        <div>blah</div>
      </Modal>
    )
    expect(queryAllByText(/blah/).length).toBe(0)
  })

  test('content IS rendered when opened', async () => {
    const setOpen = jest.fn(() => {})
    const { queryAllByText } = render(
      <Modal open={true} setOpen={setOpen}>
        <div>blah</div>
      </Modal>
    )
    expect(queryAllByText(/blah/).length).toBe(1)
  })

  test('Modals closer button works', async () => {
    const setOpen = jest.fn(() => {})
    const { container, queryAllByText } = render(
      <Modal open={true} setOpen={setOpen}>
        <div>blah</div>
      </Modal>
    )
    expect(queryAllByText(/blah/).length).toBe(1)
    expect(setOpen.mock.calls.length).toBe(0)

    const close_button = container.querySelector('.modal-close-button')
    if (close_button) {
      fireEvent.click(close_button)
      expect(setOpen.mock.calls.length).toBe(1)
      expect(setOpen.mock.calls[0]).toEqual([false])
    } else {
      expect(false).toBe(true)
    }
  })
})

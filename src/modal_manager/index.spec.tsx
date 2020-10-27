import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Main from './index'

describe('how the Modal works', () => {
  test('opening Modal B closes Modal A is currently open', async () => {
    const { container } = render(<Main />)
    expect(container.querySelector('h4')).toBe(null)

    const buttons = container.querySelectorAll('button')
    if (buttons.length > 0) {
      fireEvent.click(buttons[0])
      expect(container.querySelector('h4')?.textContent).toBe('Modal 1')
    } else {
      expect(false).toBe(true)
    }

    if (buttons.length > 1) {
      fireEvent.click(buttons[1])
      expect(container.querySelector('h4')?.textContent).toBe('Modal 2')
    } else {
      expect(false).toBe(true)
    }
  })
})

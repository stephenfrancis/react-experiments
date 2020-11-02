import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import NumDisplay from './NumDisplay'
import { registerSetStateFunction, SetStateFunc } from './StateEngine'

jest.mock('./StateEngine')

const mockedRegisterSetStateFunction = registerSetStateFunction as jest.Mock<
  (f: SetStateFunc) => void
>

describe('how the NumDisplay works', () => {
  test('content is rendered and changed by the register function', async () => {
    registerSetStateFunction
    const { queryAllByText } = render(<NumDisplay label="blah" />)
    expect(queryAllByText(/blah/).length).toBe(1)
    expect(mockedRegisterSetStateFunction.mock.calls.length).toBe(1)
    expect(typeof mockedRegisterSetStateFunction.mock.calls[0][0]).toBe('function')

    const test_num = 54674

    act(() => {
      mockedRegisterSetStateFunction.mock.calls[0][0](test_num)
    })
    expect(queryAllByText(String(test_num)).length).toBe(1)
  })
})

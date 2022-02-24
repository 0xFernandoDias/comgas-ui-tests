import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('should render', () => {
    const { getByText } = render(<Button text={'Click Me'} />)

    expect(getByText('Click Me')).toBeTruthy()
  })
})

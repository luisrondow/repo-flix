import { render } from '@testing-library/react'
import Form from './Form'
import { FormOption } from './Form.types'
import { act } from 'react-dom/test-utils'

const mockFormOptions: FormOption<{
  email: string
  password: string
}>[] = [
  {
    key: 'email',
    label: 'Email',
    placeholder: 'Email',
    required: true,
    pattern: /^\S+@\S+$/i,
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Password',
    required: true,
    type: 'password',
  },
]
const mockOnSubmit = jest.fn()

describe('Form', () => {
  it('should render correctly', () => {
    const { container, getByLabelText, getByText } = render(
      <Form
        formOptions={mockFormOptions}
        onSubmit={mockOnSubmit}
        isSubmitting={false}
        submitText="Submit"
      />,
    )

    expect(container).toMatchSnapshot()

    mockFormOptions.forEach((option) => {
      expect(getByLabelText(option.label)).toBeInTheDocument()
    })

    expect(getByText('Submit')).toBeInTheDocument()
  })

  it('should render correctly when isSubmitting is true', () => {
    const { container, getByText } = render(
      <Form
        formOptions={mockFormOptions}
        onSubmit={mockOnSubmit}
        isSubmitting
        submitText="Submit"
      />,
    )

    expect(getByText('Loading...')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should fire the onSubit when submit form', () => {
    const { getByText } = render(
      <Form
        formOptions={mockFormOptions}
        onSubmit={mockOnSubmit}
        isSubmitting={false}
        submitText="Submit"
      />,
    )

    act(() => {
      getByText('Submit').click()
    })

    expect(mockOnSubmit).toHaveBeenCalled()
  })
})

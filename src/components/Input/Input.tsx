import { forwardRef } from 'react'
import { InputProps } from './Input.types'

import Text from '../Text'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, placeholder, type, value, onChange, className, ...rest } = props

  return (
    <div className={className}>
      <label>
        <Text as="h1" className="mb-2 text-base text-white">
          {label}
        </Text>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-12 w-full rounded-md bg-base px-4 text-white"
          {...rest}
        />
      </label>
    </div>
  )
})

Input.displayName = 'Input'

export default Input

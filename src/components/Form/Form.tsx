import { useForm } from 'react-hook-form'

import Input from '../Input'
import Button from '../Button'

import { FormProps } from './Form.types'
import { FORM_ERRORS } from '../../utils/constants'

const Form = <T extends object>(props: FormProps<T>) => {
  const { formOptions, onSubmit, isSubmitting, submitText } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>()

  return (
    <div className="mt-12">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {formOptions.map((option) => (
          <Input
            key={option.key}
            defaultValue={option.defaultValue}
            className="mb-8"
            label={option.label}
            placeholder={option.placeholder}
            type={option.type || 'text'}
            error={
              errors[option.key]?.type
                ? FORM_ERRORS.find((el) => el.value === errors[option.key]?.type)?.label
                : ''
            }
            {...register(option.key, {
              required: option.required,
              ...(option.pattern && { pattern: option.pattern }),
            })}
          />
        ))}
      </form>
      <Button
        type="submit"
        className="w-full"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loading...' : submitText}
      </Button>
    </div>
  )
}

export default Form

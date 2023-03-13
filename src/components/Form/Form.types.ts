import { Path } from 'react-hook-form'

export interface FormOption<T> {
  key: Path<T>
  label: string
  placeholder: string
  defaultValue?: string
  required?: boolean
  type?: string
  pattern?: RegExp
  minLength?: number
}

export interface FormProps<T> {
  formOptions: FormOption<T>[]
  onSubmit: (values: T) => void
  isSubmitting: boolean
  submitText: string
}

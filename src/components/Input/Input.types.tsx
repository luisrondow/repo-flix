export type InputProps = {
  label: string
  placeholder: string
  type: string
  value?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  error?: string
}

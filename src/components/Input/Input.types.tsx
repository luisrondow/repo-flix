export type InputProps = {
  label: string
  placeholder: string
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

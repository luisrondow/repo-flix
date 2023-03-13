import { NavLink, useNavigate } from 'react-router-dom'
import Text from '../../components/Text'
import Form, { FormOption } from '../../components/Form'
import useFirebase from '../../hooks/useFirebase'
import { useState } from 'react'

type Inputs = {
  username: string
  email: string
  password: string
}

const SignUp = () => {
  const navigate = useNavigate()
  const { registerWithEmailAndPassword } = useFirebase()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formOptions: FormOption<Inputs>[] = [
    {
      key: 'email',
      label: 'Email',
      placeholder: 'Email',
      required: true,
      pattern: /^\S+@\S+$/i,
    },
    {
      key: 'username',
      label: 'Username',
      placeholder: 'Username',
      required: true,
    },
    {
      key: 'password',
      label: 'Password',
      placeholder: 'Password',
      required: true,
      type: 'password',
      minLength: 6,
    },
  ]

  const onSubmit = async (data: Inputs) => {
    if (isSubmitting) return

    setIsSubmitting(true)

    const { username, email, password } = data

    registerWithEmailAndPassword(username, email, password)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-base-light">
      <div className="w-88 sm:w-112">
        <Form
          formOptions={formOptions}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          submitText="Sign up"
        />
        <Text className="mt-4 flex w-full justify-center text-center text-lg">
          Already have an account?{' '}
          <NavLink to="/login">
            <Text className="ml-2 underline">Click here to login</Text>
          </NavLink>
        </Text>
      </div>
    </div>
  )
}

export default SignUp

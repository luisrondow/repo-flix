import { NavLink } from 'react-router-dom'
import Text from '../../components/Text'
import Form from '../../components/Form'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const { formOptions, onSubmit, isSubmitting } = useLogin()

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-base-light">
      <div className="w-88 sm:w-112">
        <Form
          formOptions={formOptions}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          submitText="Sign in"
        />
        <Text className="mt-4 flex w-full justify-center text-center text-lg">
          Don&apos;t have an account?{' '}
          <NavLink to="/signup">
            <Text className="ml-2 underline">Click here to sign up</Text>
          </NavLink>
        </Text>
      </div>
    </div>
  )
}

export default Login

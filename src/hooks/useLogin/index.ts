import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormOption } from '../../components/Form'
import { USER_TOKEN } from '../../utils/constants'
import useFirebase from '../useFirebase'
import useLocalStorage from '../useLocalStorage'
import { User } from '../../utils/user'

type Inputs = {
  email: string
  password: string
}

export default function useLogin() {
  const navigate = useNavigate()
  const { logInWithEmailAndPassword, getUsername } = useFirebase()
  const { state, setState } = useLocalStorage<User>(USER_TOKEN, {
    uid: '',
    email: '',
    accessToken: '',
    username: '',
  })
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
      key: 'password',
      label: 'Password',
      placeholder: 'Password',
      required: true,
      type: 'password',
    },
  ]

  useEffect(() => {
    if (state?.accessToken) {
      navigate('/')
    }
  }, [state, navigate])

  const onSubmit = async (data: Inputs) => {
    if (isSubmitting) return

    setIsSubmitting(true)

    const { email, password } = data

    try {
      const res = await logInWithEmailAndPassword(email, password)

      if (res?.user) {
        const { user } = res

        setState({
          uid: user?.uid,
          email: user?.email || '',
          accessToken: await user?.getIdToken(),
          username: await getUsername(user?.email || ''),
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { formOptions, onSubmit, isSubmitting }
}

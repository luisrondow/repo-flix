import { useState } from 'react'

import Header from '../../components/Header'
import Text from '../../components/Text'
import useFirebase from '../../hooks/useFirebase'
import Form, { FormOption } from '../../components/Form'
import useLocalStorage from '../../hooks/useLocalStorage'
import { USER_TOKEN } from '../../utils/constants'
import { User } from '../../utils/user'

type Inputs = {
  username: string
  email: string
}

const Profile = () => {
  const { state, setState } = useLocalStorage<User>(USER_TOKEN, {
    uid: '',
    email: '',
    accessToken: '',
    username: '',
  })
  const { updateUsername } = useFirebase()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formOptions: FormOption<Inputs>[] = [
    {
      key: 'email',
      label: 'Email',
      placeholder: 'Email',
      defaultValue: state.email,
      pattern: /^\S+@\S+$/i,
    },
    {
      key: 'username',
      label: 'Username',
      placeholder: 'Username',
      defaultValue: state.username,
      required: true,
    },
  ]

  const onSubmit = async (data: Inputs) => {
    if (isSubmitting) return

    setIsSubmitting(true)

    const { username, email } = data

    updateUsername(username, email)
      .then(() => {
        setState({ ...state, username, ...(email && { email }) })
        alert('Username updated successfully')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="h-full min-h-screen w-screen bg-base-light">
      <Header currentPage="profile" username={state.username} />
      <div className="mt-8 max-w-xl pl-16">
        <Text as="h1" className="mr-4">
          My Account
        </Text>
        <Form
          formOptions={formOptions}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          submitText="Save"
        />
      </div>
    </div>
  )
}

export default Profile

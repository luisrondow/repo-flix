import { useState } from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const ProfileForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <div className="mt-12">
      <div className="flex flex-col">
        <Input
          className="mb-8"
          label="Username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={handleNameChange}
        />
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <Button className="w-24">Save</Button>
    </div>
  )
}

export default ProfileForm

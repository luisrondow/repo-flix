import Header from '../../components/Header'
import Text from '../../components/Text'
import ProfileForm from './ProfileForm'

const Profile = () => {
  return (
    <div className="h-full min-h-screen w-screen bg-base-light">
      <Header currentPage="profile" />
      <div className="mt-8 max-w-xl pl-16">
        <Text as="h1" className="mr-4">
          My Account
        </Text>
        <ProfileForm />
      </div>
    </div>
  )
}

export default Profile

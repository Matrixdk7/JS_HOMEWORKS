import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const user = useSelector((state) => state.auth.user)

    return (
        <div>
            <img src={user.image} alt={user.firstName} />

            <h1>
                {user.firstName} {user.lastName}
            </h1>

            <p>{user.email}</p>

            <p>{user.phone}</p>
        </div>
    )
}

export default ProfilePage
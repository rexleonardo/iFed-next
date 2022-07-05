import type { NextPage } from 'next'
import Navbar from '../../components/shared/Navbar'
import UserProfile from '../../components/profile/ReadUser'
import CreateUser from '../../components/profile/createUser'

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <UserProfile />
        </>

    )
}

export default Home
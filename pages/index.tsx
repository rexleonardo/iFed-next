import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"

import Navbar from '../components/Navbar'
import Form from '../components/Form'

import logoDesktopTablet from '../public/assets/images/shared/deloitte-logo-desktop-tablet.png'
import logoiFED from '../public/assets/images/login/logo-ifed.png'


const Home: NextPage = () => {
  return (
    <div className="bg-[url('../public/assets/images/login/background-login-mobile.jpg')] md:bg-[url('../public/assets/images/login/background-login-tablet.jpg')] lg:bg-[url('../public/assets/images/login/background-login-desktop-xl.jpg')] lg:bg-black bg-fixed bg-center lg:bg-right bg-no-repeat bg-cover h-screen flex justify-center lg:justify-between">
      <Head>
        <title>iFED</title>
        <meta name="description" content="Deloitte Consulting Philippines Delivery Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="lg:flex flex-col items-center justify-center flex-wrap lg:w-1/3 lg:h-screen lg:bg-black hidden">
        <Image src={logoDesktopTablet} alt="Deloitte Logo" width={235} height={52.75} />
        <span className="mt-[50px]" ></span>
        <Image src={logoiFED} alt="iFED Logo" width={175} height={175} />
        <h1 className="flex justify-center text-white text-[128px] font-bold">iFED</h1>
      </div>
      <main className="flex justify-center items-center lg:w-2/3">
        <Form />
      </main>
    </div>
  )
}

export default Home

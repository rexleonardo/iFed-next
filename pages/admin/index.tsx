import { NextPage } from 'next'
import Image from "next/image"

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Navbar/sub-components/Menu'

import MdOutlineBadges from '../../public/assets/images/admin/MdOutlineBadge.svg'
import MdOutlineAccountTree from '../../public/assets/images/admin/MdOutlineAccountTree.svg'

const AdminHome: NextPage = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="bg-[url('../public/assets/images/admin/background-admin.jpg')] bg-center bg-no-repeat bg-cover md:pl-[100px] lg:pl-[170px] w-screen h-[72px] md:h-[147.81px] lg:h-[277px] text-white text-[48px] md:text-[64px] lg:text-[128px] font-bold flex justify-center md:justify-start items-center">
                admin
            </div>
            <div className="bg-[#393939] mx-auto mt-[30px] lg:mt-[50px] w-[250px] h-[50px] rounded-[10px] text-white text-[24px] font-bold flex justify-center items-center">
                Directory
            </div>
            <div className="p-[35px] flex flex-col md:flex-row justify-center items-center">
                <button className="m-[15px] rounded-[25px] hover:drop-shadow-custom hover:scale-110 bg-white transition hover:bg-[#c6c6c6] w-[150px] md:w-[250px] h-[150px] md:h-[250px] font-bold hover:invert text-[20px] flex flex-col items-center justify-center">
                    <Image src={MdOutlineBadges} width={100} height={100} />Users
                </button>
                <button className="m-[15px] rounded-[25px] hover:drop-shadow-custom hover:scale-110 bg-white transition hover:bg-[#c6c6c6] w-[150px] md:w-[250px] h-[150px] md:h-[250px] font-bold hover:invert text-[20px] flex flex-col items-center justify-center">
                    <Image src={MdOutlineAccountTree} width={100} height={100} />Metadata
                </button>
            </div>
        </div >
    )
}

export default AdminHome
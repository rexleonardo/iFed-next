import { useState } from 'react'
import { MdMenu, MdClose, MdAccountCircle } from 'react-icons/md'

const Sidebar: React.FC = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [closeMenu, setCloseMenu] = useState(true)

    const triggerMenu = () => {
        if (openMenu === false) {
            setOpenMenu(true)
            setCloseMenu(false)
        } else {
            setOpenMenu(false)
            setCloseMenu(true)
        }
    }

    return (
        <div>
            <div className="md:hidden">
                <button onClick={triggerMenu} className="absolute top-[17.5px] right-[20px] z-10">
                    <MdMenu className={closeMenu === true ? "w-[35px] h-[35px] invert" : "hidden"} />
                </button>
                <div className={openMenu === true ? "absolute bg-black bg-opacity-75 backdrop-blur-[10px] top-0 right-0 w-[255px] h-screen transition animate-fade-in duration-400 z-10" : "hidden"}>
                    <button onClick={triggerMenu} className="absolute top-[17.5px] right-[20px]">
                        <MdClose className={openMenu === true ? "w-[35px] h-[35px] invert" : "hidden"} />
                    </button>
                    <button className="mx-auto mt-[80px] mb-[35px] flex items-center text-white">
                        <MdAccountCircle className="mr-[5px] w-[50px] h-[50px]" />
                        <div>
                            <p className="font-bold text-left text-[14px]">Juan Dela Cruz</p>
                            <p className="text-[12px]">jdelacruz@deloitte.com</p>
                        </div>
                    </button>
                    <div className="font-bold text-white text-[20px] flex flex-col items-start">
                        <button className="mx-[40px] my-[15px] transition hover:opacity-100">Home</button>
                        <button className="mx-[40px] my-[15px] transition hover:opacity-100 opacity-50">Users</button>
                        <button className="mx-[40px] my-[15px] transition hover:opacity-100 opacity-50">Metadata</button>
                    </div>
                </div>
            </div>
            <div className="hidden h-[70px] w-[300px] xl:w-[510px] md:flex justify-between items-center absolute top-0 right-[20px] lg:right-[120px] text-white text-[20px] font-bold">
                <div className="w-[235px] flex justify-between">
                    <button className="transition hover:opacity-100">Home</button>
                    <button className="transition hover:opacity-100 opacity-50">Users</button>
                    <button className="transition hover:opacity-100 opacity-50">Metadata</button>
                </div>
                <button className="flex items-center">
                    <span className="hidden xl:block mr-[10px] font-normal">Juan Dela Cruz</span>
                    <MdAccountCircle className="w-[40px] h-[40px] transition hover:scale-110" />
                </button>
            </div>
        </div>
    )
}

export default Sidebar
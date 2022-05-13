import { Bus, CaretUp, ChatDots, List, MapPin } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { Links } from "./Links";


export function NavBar() {
    return (
        <div>
        <nav className="bg-zinc-800 w-screen flex h-20 items-center   text-zinc-100 ">
            {/* <List className="w-10 h-8 cursor-pointer" color="white"  /> */}
                
            <span className="text-zinc-100 flex items-center font-poppins text-3xl  py-4 px-3 ">TOS</span>

            <div className="absolute top-2 right-2">
                <Links />
            </div>
            
            <div className="sm:hidden flex items-center">
                
                <Popover className="">
                    <Popover.Panel className="bg-zinc-800 absolute top-24 right-4 p-5 rounded-md">
                        <span className="flex m-2 items-center  p-3  px-5 rounded-full group hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                        SOBRE-NÓS <Bus className="w-6 h-6 ml-3" />
                        
                        </span>
                        <span className="flex m-2 items-center p-3 my-4 px-5 rounded-full hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                            SERVIÇOS <CaretUp  className="w-6 h-6 ml-3 hover:rotate-180 hover:transition-all ease-in-out delay-150" />
                            
                        </span>
                        <span className="flex m-2  items-center p-3  px-5 rounded-full hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                            CONTATE-NOS <ChatDots className="w-6 h-6 ml-3" />
                            
                        </span>
                    </Popover.Panel>

                    <Popover.Button className="absolute top-5  right-2">
                        <List className= "w-10 h-10"/>
                    </Popover.Button>
                </Popover>

            </div>


        </nav>


            <span className="">

            </span>

        </div>
    )
}
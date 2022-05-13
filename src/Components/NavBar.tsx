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
                
                <Popover className="flex-col">
                    <Popover.Panel className="bg-zinc-800 ">
                        <Links />
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
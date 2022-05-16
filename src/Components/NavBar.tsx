import { Bus, CaretUp, ChatDots, List, MapPin } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { Links } from "./Links";
import logo from './../Assets/logo.svg'
import ReactDOM from "react-dom";


export function NavBar() {
    return (
        <div className="z-20">
        <nav className="bg-zinc-800 w-screen flex h-16 sm:h-20 items-center drop-shadow-lg  text-zinc-100  ">
            
                
            <img src={logo} className="m-5 w-28 cursor-pointer hover:w-32 transition-all  "></img>

            <div className="absolute top-2 right-2">
                <Links />
            </div>
            
            <div className="sm:hidden flex items-center">
                
                <Popover className="">
                {/* bg-zinc-800 absolute top-24 right-4 p-5 rounded-xl */}
                    <Popover.Panel className="bg-zinc-800 absolute top-24 right-4 p-5 rounded-xl z-10 " > 
                        <span className="flex m-2 items-center  p-3  px-5 rounded-xl group hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                        SOBRE-NÓS<Bus className="w-6 h-6 ml-3" />
                        
                        </span>
                        <span className="
                            flex m-2 
                            p-3 my-4 px-5
                            rounded-xl 
                            cursor-pointer
                            border-2 
                            border-orange-500
                            group
                            overflow-hidden
                            flex-col
                            max-h-12
                            transition-all ease-in-out delay-450                            
                            hover:max-h-max
                        ">
                            <div className="flex">
                            SERVIÇOS 
                            <CaretUp  className="w-6 h-6 group-hover:rotate-180 hover:transition-all ease-in-out delay-150 ml-8" />
                            </div>

                            <div className="flex flex-col pt-5  ">
                            
                            <span className="hover:text-zinc-400 cursor-pointer py-2 transition-all">
                                Lorem Ipsum
                            </span>
                            
                            <span className="hover:text-zinc-400 cursor-pointer py-2 transition-all">
                                Lorem Ipsum
                            </span>
                            
                            <span className="hover:text-zinc-400 cursor-pointer py-2 transition-all">
                                Lorem Ipsum
                            </span>
                            
                            </div>
                            
                        </span>
                        <span className="flex m-2  items-center p-3  px-5 rounded-xl hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                            CONTATE-NOS <ChatDots className="w-6 h-6 ml-3" />                            
                        </span>
                    </Popover.Panel>

                    <Popover.Button className="absolute top-4  right-2" onClick={Inner}>
                        <List className= "w-10 h-10 " />
                    </Popover.Button>
                </Popover>

            </div>


        </nav>


        </div>
    )
}


function Inner(){
    
}
import { Bus, CaretUp, ChatDots, List, MapPin, UserCircle } from "phosphor-react";
import { Popover } from '@headlessui/react'


export function Links() {

    return (
    
       
        <div id="links" className="hidden sm:flex ">
                <span className="flex m-2 items-center  p-3  px-5 rounded-full group hover:text-orange-500 hover:underline hover:underline-offset-8 transition-all ease-in-out delay-150  cursor-pointer">
                    SOBRE-NÓS <Bus className="w-6 h-6 ml-3" />
                    
                </span>
                <Popover className="flex">

                <Popover.Panel className="bg-zinc-800 absolute top-24 right-44 p-5 rounded-xl">

                        <span className="flex
                            m-2
                            items-center 
                            justify-center 
                            p-3  
                            px-5 
                            rounded-xl 
                            group 
                            hover:bg-orange-500 
                            transition-all ease-in-out delay-150  
                            cursor-pointer 
                            border-2 border-orange-500">

                            Lorem Ipsum
                        </span>
                        <span className="flex
                        m-2
                        items-center
                        justify-center
                        p-3
                        px-5 
                        rounded-xl 
                        group 
                        hover:bg-orange-500 
                        transition-all ease-in-out delay-150  
                        cursor-pointer 
                        border-2 border-orange-500">
                            Lorem Ipsum 
                        </span>
                        <span className="flex 
                        m-2  
                        items-center 
                        p-3 
                        justify-center 
                        px-5 
                        rounded-xl 
                        hover:bg-orange-500 
                        transition-all ase-in-out delay-150  
                        cursor-pointer 
                        border-2 border-orange-500">
                            Lorem Ipsum 
                        </span>
                    </Popover.Panel>

                    <Popover.Button>
                    <span className="flex m-2 items-center group p-3 px-5 rounded-full hover:text-orange-500 hover:underline hover:underline-offset-8 transition-all ease-in-out delay-150  
                cursor-pointer  overflow-hidden ">
                    <div className="flex">
                        SERVIÇOS <CaretUp  className="w-6 h-6 ml-3 group-hover:rotate-180 hover:transition-all ease-in-out delay-150" />
                    </div>
                    
                </span>
                    </Popover.Button> 
                </Popover>


                <span className="flex m-2  items-center px-5 rounded-full group hover:text-orange-500 hover:underline hover:underline-offset-8 transition-all ease-in-out delay-350  cursor-pointer ">
                    CONTATE-NOS <ChatDots className="w-6 h-6 ml-3" />
                    
                </span>

                {/* <div className="flex  ">
                    <span className="items-center justify-center p-4 px-5 gap-2">
                    <ChatDots className="w-8
                     h-8 
                     ml-3 
                     hover:w-10 
                     hover:h-10 
                     hover:text-orange-500 
                     cursor-pointer 
                     transition-all " />
                    </span>

                    <span className="items-center justify-center p-4 px-5 gap-2" >
                                <UserCircle className="w-8 h-8 ml-3 hover:w-10 hover:h-10 hover:text-orange-500 cursor-pointer transition-all"/>
                    </span>
                </div> */}




               
            </div>
        
    )

}





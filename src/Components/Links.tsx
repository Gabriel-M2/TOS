import { Bus, CaretUp, ChatDots, List, MapPin } from "phosphor-react";
import { Popover } from '@headlessui/react'


export function Links() {

    return (
    
       
        <div id="links" className="hidden sm:flex ">
                <span className="flex m-2 items-center  p-3  px-5 rounded-full group hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                    SOBRE-NÓS <Bus className="w-6 h-6 ml-3" />
                    
                </span>
                <span className="flex m-2 items-center px-5 rounded-full hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                    SERVIÇOS <CaretUp  className="w-6 h-6 ml-3 hover:rotate-180 hover:transition-all ease-in-out delay-150" />
                    
                </span>
                <span className="flex m-2  items-center px-5 rounded-full hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                    CONTATE-NOS <ChatDots className="w-6 h-6 ml-3" />
                    
                </span>
               
            </div>
        
    )

}





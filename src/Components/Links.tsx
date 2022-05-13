import { Bus, CaretUp, ChatDots, List, MapPin } from "phosphor-react";
import { Popover } from '@headlessui/react'


export function Links() {

    return (
    
       
        <div id="links" className="hidden sm:flex ">
                <span className="flex m-2 items-center  p-3  px-5 rounded-full group hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                    SOBRE-NÓS <Bus className="w-6 h-6 ml-3" />
                    
                </span>
                <Popover className="flex">

                <Popover.Panel className="bg-zinc-800 absolute top-24 right-44 p-5 rounded-xl">

                        <span className="flex m-2 items-center justify-center p-3  px-5 rounded-xl group hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                            Lorem Ipsum
                        </span>
                        <span className="flex m-2 items-center justify-center p-3  px-5 rounded-xl group hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                            Lorem Ipsum 
                        </span>
                        <span className="flex m-2  items-center p-3 justify-center px-5 rounded-xl hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                            Lorem Ipsum 
                        </span>
                    </Popover.Panel>

                    <Popover.Button>
                    <span className="flex m-2 items-center group p-3 px-5 rounded-full hover:bg-orange-500 transition-all ease-in-out delay-150  
                cursor-pointer border-2 border-orange-500  overflow-hidden ">
                    <div className="flex">
                        SERVIÇOS <CaretUp  className="w-6 h-6 ml-3 group-hover:rotate-180 hover:transition-all ease-in-out delay-150" />
                    </div>
                    
                </span>
                    </Popover.Button> 
                </Popover>

                {/* <span className="flex m-2 items-center group  px-5 rounded-full hover:bg-orange-500 transition-all ease-in-out delay-150  
                cursor-pointer border-2 border-orange-500  overflow-hidden ">
                    <div className="flex">
                        SERVIÇOS <CaretUp  className="w-6 h-6 ml-3 group-hover:rotate-180 hover:transition-all ease-in-out delay-150" />
                    </div>
                    
                </span> */}


                
                <span className="flex m-2  items-center px-5 rounded-full hover:bg-orange-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-orange-500">
                    CONTATE-NOS <ChatDots className="w-6 h-6 ml-3" />
                    
                </span>
               
            </div>
        
    )

}





import { ArrowCircleDown, MapPin } from "phosphor-react";
import mapa from './../Assets/mapa.png'



export function Sobre(){
    return (
        <div className="scroll-smooth">
            
            <div className="flex  justify-center">

                <span className="text-zinc-300 absolute top-[55rem] inter2:top-[50rem] sm:top-[40rem] text-3xl sm:text-5xl sm:flex  ">
                    O QUE OFERECEMOS <span className="text-orange-500 animate-bounce  ml-4 py-1">?</span>  
                </span>
                
            </div>

            <div className="absolute mt-10 top-[60rem] sm:ml-24 p-4 group">
                <span className="text-zinc-300  text-[1.2rem] medium:text-4xl flex">
                    LOCALIZAR SEU ÔNIBUS <MapPin size={32} color="#FF8F3F" className="ml-4 sm:mt-1 group-hover:animate-bounce" />
                </span>
            </div>

            <div className="absolute top-[70rem]  legenda:flex ">
                <img src={mapa} alt="" className="w-[95vw] sm:ml-10 inter:ml-[7rem] rounded-md border-2 border-zinc-600 " />

                <div className="flex-col sm:ml-20  break:ml-0">
                    <span className="text-zinc-300   sm:text-xl break:text-4xl font-roboto relative top-10 left-6 break:ml-10   "> WHAT IS LOREM IPSUM ? </span>
                   <div className="ml-6 break:ml-16 w-[90vw]  break:w-[50rem]">
                        <span className="relative top-20 text-sm text-zinc-400 break-word ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                   </div>
                </div>
            </div>

            

            

        </div>
    )
}


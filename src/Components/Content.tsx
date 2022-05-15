import bus from './../Assets/Bus.svg'

export function Content() {

    return (
            <div className=" ">
            
               <div className="medium:flex absolute items-center mt-72 sm:mt-0 sm:ml-24 justify-center">
                <div className=" font-roboto text-3xl medium:text-5xl  p-5 text-zinc-400">
                        <h1 className="py-1">
                            CANSADO DE FICAR 
                        </h1>
                        <h1 className="py-1 pt-2"> 
                            ESPERANDO HORAS NO PONTO DE ÔNIBUS?
                        </h1>
                        <div className="flex my-6 ">
                        <h1 className="py-1 pt-2">
                            TENTE 
                        </h1>
                        <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 ml-6 p-2  rounded text-white tracking-widest">
                            TOS
                        </h1>
                        </div>
                </div>

                <div className="sm:ml-40  min-w-[300px]">
                    <img src={bus} alt="" />
                </div>

               </div>

            </div>
    
    )
    

}
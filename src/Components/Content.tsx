import bus from './../Assets/Busao.svg'

export function Content() {

    return (
            <div className="extra:flex extra:justify-center">
                
                

              
                <div className="medium:flex absolute items-center sm:mt-0 sm:ml-24 justify-center top-24 medium:top-[12rem]">
                    <div className=" font-roboto text-3xl medium:text-5xl  p-5 text-zinc-400">
                            <h1 className="py-1">
                                CANSADO DE FICAR 
                            </h1>
                            <h1 className="py-1 pt-2"> 
                                ESPERANDO HORAS NO PONTO DE ÔNIBUS ?
                            </h1>
                            <div className="flex my-6 ">
                            <h1 className="py-1 pt-2">
                                TENTE 
                            </h1>
                            <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 ml-6 p-2  rounded text-white tracking-widest hover:text-4xl sm:hover:text-6xl transition-all">
                                TOS
                            </h1>
                            </div>
                    </div>

                    <div className="sm:ml-40  min-w-[300px] z-0">
                        <img src={bus} alt="" />
                    </div>

                </div>



            </div>
    
    )
    

}
import Line from "../Line/Line"

const Titles = ({ titulo }) => {
    return(

        // TITULOS DA PAGINA PRINCIPAL
        <div className="flex items-center justify-center gap-[10px]">
            <Line classWidth="xl:w-[160px] w-[20px]"/>
            <h1  className="text-white font-secundaria text-[20px] xl:text-[28px] px-[20px] text-shadow-lg/30 text-shadow-black">
                 {titulo} 
                 </h1>
            <Line classWidth="xl:w-[160px] w-[20px]"/>
        </div>
    )
}

export default Titles
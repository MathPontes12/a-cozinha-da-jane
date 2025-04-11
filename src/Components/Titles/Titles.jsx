import Line from "../Line/Line"

const Titles = ({ titulo }) => {
    return(
        <div className="flex items-center justify-center gap-[10px]">
            <Line width='w-[50px]' widthxl='w-[160px]'/>
            <h1  className="text-white font-secundaria text-[20px] xl:text-[28px] px-[20px] text-shadow-lg/30 text-shadow-black">
                 {titulo} 
                 </h1>
            <Line width='w-[50px]' widthxl='w-[160px]'/>
        </div>
    )
}

export default Titles
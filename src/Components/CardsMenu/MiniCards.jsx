
const MiniCards = ({ nome, className}) => {
    return(

        // MINI CARDS DE SABORES, E PREÇO

        <div className={`rounded-[70px] ${className} text-black border-white border-[2px] 
        font-secundaria p-[7px] xl:text-[12px] text-[10px]`}>
            <p className="text-center"> {nome} </p>
        </div>
    )
}

export default MiniCards
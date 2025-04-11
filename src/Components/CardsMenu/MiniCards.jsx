
const MiniCards = ({ nome, cor}) => {
    return(
        <div className={`rounded-[70px] ${cor} text-black border-white border-[2px] 
        font-secundaria p-[5px] xl:text-[11px] text-[8px] shadow-lg/20`}>
            <p> {nome} </p>
        </div>
    )
}

export default MiniCards
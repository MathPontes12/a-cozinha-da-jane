const FieldContact = ({ nome, children }) => {
    return (
        <div>
            <h1 className="text-white font-secundaria xl:text-[24px] text-[20px] xl:mb-0 mb-[30px] text-shadow-lg/30 text-shadow-black">
                {nome}
            </h1>
           <div className="text-white font-secundaria xl:text-[18px] text-[14px]">
           {children}
           </div>
        </div>
    )
}

export default FieldContact
import Link from "next/link"

const Banner = () => {
    return (
        <div className="flex xl:flex-row flex-col w-full xl:h-[170px] h-fit items-center xl:justify-center
         gap-[40px] bg-linear-to-r from-roxo to-roxoSecundario rounded-[10px] shadow-xl/50 ">

            <div className="flex xl:flex-row flex-col items-center" >

                <img className="xl:size-[130px] size-[100px] xl:mr-[58px] mt-[20px] xl:mb-[30px]" 
                src="/Images/LOGO.png" alt="logo a cozinha da jane" />
                <h1 className="font-primaria text-white text-[40px] xl:text-[70px] xl:mt-0 mt-[20px] ml-[10px] text-shadow-lg/30 text-shadow-black">
                    A cozinha da Jane
                </h1>

            </div>

            <div className="flex gap-[30px] xl:gap-[67px] xl:ml-[144px] xl:mt-[152px] xl:mb-[100px] pb-[16px]">
                <Link href="/" className="font-secundaria text-white xl:text-[20px] text-shadow-lg/30 text-shadow-black">
                    Início
                </Link>
                <Link href="/menu" className="font-secundaria text-white xl:text-[20px] text-shadow-lg/30 text-shadow-black">
                    Cardápio
                </Link>
                <Link href="/contact" className="font-secundaria text-white xl:text-[20px] text-shadow-lg/30 text-shadow-black">
                    Contato
                </Link>
            </div>
        </div>
    )
}

export default Banner
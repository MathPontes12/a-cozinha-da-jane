import Cards from "@/Components/CardsHighlights/CardHighlight"
import Sobre from "@/Components/Sobre/Sobre"
import SocialMediaBar from "@/Components/SocialMediaBar/SocialMediaBar"
import Titles from "@/Components/Titles/Titles"
import WhatsappLogo from "@/Components/WhatsappLogo/WhatsappLogo"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from "./Footer/Footer"



const Main = () => {
    return (
        <div className="relative flex flex-col items-center w-full h-fit xl:gap-[100px] gap-[60px] xl:pt-[100px] pt-[50px]">

            <Titles titulo="Destaques" />
            <div className="flex items-center justify-center w-full overflow-x-auto scrollbar-hide">
                <div className="absolute xl:hidden flex justify-start w-full">
                    <ArrowBackIosNewIcon className=" text-white" />
                </div>
                <div className="xl:ml-0 ml-[250px] xl:mr-0 mr-[20px] w-fit flex gap-4 pl-4 xl:gap-[100px] xl:justify-center">
                    <div className="w-fit">
                        <Cards titulo="Pastel" imagem="pastel" />
                    </div>
                    <div className="w-fit">
                        <Cards titulo="Empada" imagem="empada" />
                    </div>
                    <div className="w-fit">
                        <Cards titulo="Pudim" imagem="pudim" />
                    </div>
                    <div className="w-fit">
                        <Cards titulo="B. de Feijoada" imagem="bolinhodefeijoada" />
                    </div>
                </div>
                <div className="absolute xl:hidden flex justify-end w-full">
                    <ArrowForwardIosIcon className="text-white" />
                </div>
            </div>
            <h1 className="text-white font-secundaria text-[18px] xl:text-[28px] px-[20px]
             text-shadow-lg/30 text-shadow-black text-center">
                Confira essas e outras delícias no menu cardápio!!

            </h1>
            <SocialMediaBar />
            <Sobre />
            <WhatsappLogo />
            <Footer />
        </div>
    )
}

export default Main
import Banner from "@/Components/Banner/Banner"
import Cards from "@/Components/Cards/Card"
import Sobre from "@/Components/Sobre/Sobre"
import SocialMediaBar from "@/Components/SocialMediaBar/SocialMediaBar"
import Titles from "@/Components/Titles/Titles"
import WhatsappLogo from "@/Components/WhatsappLogo/WhatsappLogo"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Main = () => {
    return (
        <div className="relative bg-marrom flex flex-col items-center w-full min-h-screen xl:gap-[100px] gap-[60px]">

            <Banner />
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
                        <Cards titulo="Pastel de Forno" imagem="pastel-de-forno" />
                    </div>
                </div>
                <div className="absolute xl:hidden flex justify-end w-full">
                    <ArrowForwardIosIcon className="text-white" />
                </div>
            </div>
            <SocialMediaBar />
            <Sobre />
            <WhatsappLogo/>
        </div>
    )
}

export default Main
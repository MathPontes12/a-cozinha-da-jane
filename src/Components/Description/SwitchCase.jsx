import BolinhoDeBacalhau from "./Items/Bolinhos/DeBacalhau";
import BolinhoDeFeijoada from "./Items/Bolinhos/DeFeijoada";
import Brigadeirao from "./Items/Doces/Brigadeirao";
import Pudim from "./Items/Doces/Pudim";
import Travessa from "./Items/Doces/Travessas";
import Empada from "./Items/Empadas/Empada";
import EmpadaDoce from "./Items/Empadas/EmpadaDoce";
import Empadao from "./Items/Empadas/Empadao";
import Batatinhas from "./Items/Pratos/Batatinhas";
import Sacanagem from "./Items/Pratos/Sacanagem";
import TortaSalgada from "./Items/Pratos/TortaSalgada";
import Esfirra from "./Items/Salgadinhos/Assados/Esfirra";
import Hamburguer from "./Items/Salgadinhos/Assados/Hamburguer";
import Joelho from "./Items/Salgadinhos/Assados/Joelho";
import PastelDeForno from "./Items/Salgadinhos/Assados/PastelDeForno";
import SalsichaAssada from "./Items/Salgadinhos/Assados/Salsicha";
import BolinhaDeQueijo from "./Items/Salgadinhos/Fritos/BolinhaDeQueijo";
import Coxinha from "./Items/Salgadinhos/Fritos/Coxinha";
import PastelFrito from "./Items/Salgadinhos/Fritos/Pastel";
import Quibe from "./Items/Salgadinhos/Fritos/Quibe";
import Risole from "./Items/Salgadinhos/Fritos/Risole";
import SalsichaFrita from "./Items/Salgadinhos/Fritos/SalsichaFrita";

const SwitchCase = ({ nome, ...props }) => {

    // CONDICIONAL PARA CHAMAR A DESCRIÇAO DE ACORDO COM O ITEM SELECIONADO
    
    switch (nome) {
        case "Pastel":
            return <PastelFrito {...props} tipo1="Frito" tipo2="Congelado" />;
        case "Coxinha":
            return <Coxinha {...props} tipo1="Frito" tipo2="Congelado" />;
        case "Quibe":
            return <Quibe {...props} tipo1="Frito" tipo2="Congelado" />;
        case "Risole":
            return <Risole {...props} tipo1="Frito" tipo2="Congelado" />;
        case "Enroladinho de Salsicha Frito":
            return <SalsichaFrita {...props} tipo1="Frito" tipo2="Congelado" />;
        case "Bolinha de Queijo":
            return <BolinhaDeQueijo {...props} tipo1="Frito" tipo2="Congelado" />;


        case "Pastel de Forno":
            return <PastelDeForno {...props} />;
        case "Joelho":
            return <Joelho {...props} />;
        case "Hambúrguer":
            return <Hamburguer {...props} />;
        case "Esfirra":
            return <Esfirra {...props} />;
        case "Enroladinho de Salsicha Assado":
            return <SalsichaAssada {...props} />;


        case "Empada":
            return <Empada {...props} />;
        case "Empada Doce":
            return <EmpadaDoce {...props} />;
        case "Empadão":
            return <Empadao {...props} tipo1="Frango" tipo2="Camarão" tipo3="Bacalhau"/>;


        case "Bolinho de Bacalhau":
            return <BolinhoDeBacalhau {...props} tipo1="Frito" tipo2="Congelado" />;
        case "Bolinho de Feijoada":
            return <BolinhoDeFeijoada {...props} tipo1="Frito" tipo2="Congelado" />;



        case "Batatinhas Temperadas":
            return <Batatinhas {...props} />;
        case "Torta Salgada":
            return <TortaSalgada {...props} />;
        case "Sacanagem":
            return <Sacanagem {...props} />;



        case "Pudim":
            return <Pudim {...props} />;
        case "Brigadeirão":
            return <Brigadeirao {...props} />;
        case "Travessa Gelada":
            return <Travessa {...props} />;

        default:
            return null;
    }
}

export default SwitchCase
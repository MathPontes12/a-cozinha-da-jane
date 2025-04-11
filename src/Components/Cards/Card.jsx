import { Card, CardContent, CardHeader, CardMedia } from "@mui/material"

const Cards = ({ titulo, imagem }) => {
    return (
        <Card sx={{ borderRadius: 4 }} className="xl:w-[185px] w-[115px] xl:h-[247px] h-[167px] border-[2px] border-roxo rounded-[30px]" >
            <CardContent className="bg-bege text-white font-secundaria border-b-[2px] border-roxo
            xl:text-[20px] text-[15px] text-center xl:py-[12px] xl:px-[25px]">
                {titulo}
            </CardContent>
            <CardMedia>
                <img src= {`/Images/Destaques/${imagem}.jpeg`} />
            </CardMedia>
        </Card>
    )
}

export default Cards
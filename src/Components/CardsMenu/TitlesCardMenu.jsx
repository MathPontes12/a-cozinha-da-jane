import Line from "../Line/Line"

const TitlesCardMenu = ({ nome }) => {
    return (
        <div className="flex items-center">
            <Line width='w-[10px]' widthxl='xl:w-[30px]' />
            <p className="mx-[10px] text-[12px]"> {nome} </p>
            <Line width='w-[10px]' widthxl='xl:w-[30px]' />
        </div>
    )
}

export default TitlesCardMenu
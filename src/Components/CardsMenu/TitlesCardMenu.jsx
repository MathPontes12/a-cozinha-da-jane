import Line from "../Line/Line"

const TitlesCardMenu = ({ nome }) => {
    return (
        <div className="flex items-center">
            <Line classWidth="xl:w-[20px] w-[10px]" />
            <p className="mx-[10px] text-[12px]"> {nome} </p>
            <Line classWidth="xl:w-[20px] w-[10px]" />
        </div>
    )
}

export default TitlesCardMenu
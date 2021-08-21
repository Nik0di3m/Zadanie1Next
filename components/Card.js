import { OfficeBuildingIcon } from '@heroicons/react/outline'

const Card = ({ iconColor, bgRgba }) => {
    return (
        <div className="flex flex-col p-6 border bg-white space-y-4 rounded-sm shadow-sm hover:scale-105 hover:shadow-lg active:scale-95 duration-150 ease-in cursor-pointer">
            <div className="">
                <OfficeBuildingIcon
                    style={{ color: iconColor, backgroundColor: bgRgba }}
                    className="h-12 bg-opacity-30 rounded-lg p-2"
                />
            </div>
            <h2 className="text-xl font-semibold text-[#1a237e]">
                Ut dui neque, volutpat ac erat quis, lobortis.
            </h2>
            <p className="text-[#5c6bc0] tracking-wide">
                In eget ligula ut est interdum finibus. Etiam consectetur,
                libero tincidunt vulputate fermentum
            </p>
        </div>
    )
}

export default Card

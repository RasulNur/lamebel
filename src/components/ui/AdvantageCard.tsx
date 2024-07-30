import Image from "next/image";

interface IAdvantage {
    id: number;
    title: string;
    descr: string;
    img: string;
}

export default function AdvantageCard({
    advantage,
}: {
    advantage: IAdvantage;
}) {
    return (
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-6 bg-main-5 sm:px-5 px-4 py-10 rounded-[20px]">
            <div className="min-h-[100px] min-w-[100px] max-w-[100px] max-h-[100px] w-max bg-main-10 rounded-full flex-center">
                <Image
                    src={advantage.img}
                    alt=""
                    width={50}
                    height={50}
                    className="size-[50px] min-h-[50px] min-w-[50px] object-contain object-center"
                />
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold leading-130">
                    {advantage.title}
                </h4>

                <p className="font-medium leading-150 text-secondary">
                    {advantage.descr}
                </p>
            </div>
        </div>
    );
}

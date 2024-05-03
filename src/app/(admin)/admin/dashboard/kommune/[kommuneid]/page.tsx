import { db } from "@/db";
import { Ghost } from "lucide-react";
import { format } from 'date-fns';

interface PageProps {
    params: {
        kommuneid: string
    }
}

const page = async({ params }: PageProps) => {
    const { kommuneid } = params;

    const kommune = await db.kommune.findFirst({
        where: {
            id: kommuneid,
        }
    })

    const getKommuneInfo = await db.kommune.findUnique({
        where: {
            id: kommuneid,
        }
    })

    if(!kommune) return(
        <div className="flex flex-col items-center w-full h-[90vh] justify-center">
            <Ghost className="h-8 w-8 text-gray-900" />
            <h3 className="font-semibold text-xl">
                Fant ikke kommunen
            </h3>
            <p>
                Beklager, vi fant ikke kommunen i databasen.
            </p>
        </div>
    )

    return(
        <div>
            <h1>{getKommuneInfo?.url}</h1>
            <h1>{getKommuneInfo?.id}</h1>
            <h1>{getKommuneInfo?.name}</h1>
            <h1>createdAt: {format(new Date(getKommuneInfo?.createdAt), "MMM d yyyy")}</h1>

            USER:
            <h1>{getKommuneInfo?.userId}</h1>
        </div>
    )
}

export default page
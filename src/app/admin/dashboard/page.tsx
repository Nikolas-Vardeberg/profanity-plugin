import { getSession } from "@/lib/lib"
import { redirect } from "next/navigation";


export default async function page() {
    let session = await getSession();

    if(!session) {
        redirect("/admin/signin")
    }

    return(
        <>
        <header>
            admin header
        </header>
        <section>
            <div>
                <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
        </section>
        </>
    )
}
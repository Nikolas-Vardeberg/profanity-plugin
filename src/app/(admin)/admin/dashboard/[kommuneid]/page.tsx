
interface PageProps {
    params: {
        kommuneid: string,
        kommuneurl: string,
    }
}


const page = async({ params }: PageProps) => {
    return(
        <div>
            Kommune page
        </div>
    )
}

export default page
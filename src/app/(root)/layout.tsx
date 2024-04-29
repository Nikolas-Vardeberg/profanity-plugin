import Navbar from "@/components/Navbar"


type Props = {
    children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
    return(
        <>
            <Navbar />
            {children}
        </>
    )
}

export default RootLayout
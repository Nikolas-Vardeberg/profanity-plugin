import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"


type Props = {
    children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
    return(
        <>
            <Navbar />
            <main>
                {children}    
            </main>
            <Footer />
        </>
    )
}

export default RootLayout
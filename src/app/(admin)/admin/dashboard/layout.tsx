import Header from "./Header"


type Props = {
    children: React.ReactNode
}

const AdminLayout = ({children}: Props) => {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default AdminLayout
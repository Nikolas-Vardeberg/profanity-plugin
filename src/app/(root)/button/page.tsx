import { Button } from "@/components/ui/button"



const page = () => {
    return(
        <div className="space-y-3 flex flex-col w-[200px]">
            <Button variant="primary">
                Primary
            </Button>
            <Button variant="primaryOutline">
                Primary Outline
            </Button>
            <Button variant="adminPrimary">
                Admin Primary
            </Button>
            <Button variant="adminOutline">
                Admin Outline
            </Button>
            <Button variant="ghost">
                Ghost
            </Button>
        </div>
    )
}

export default page
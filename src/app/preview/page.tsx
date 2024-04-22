import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Input } from "@/components/ui/input";
import Image from "next/image";


const page = () => {
    return(
        <>
            <MaxWidthWrapper className="mx-20">
                <div className="relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20">

                    <Image aria-hidden="true" alt="image" width={160} height={160} src="/try-it.png" className="absolute w-40 left-2/3 -top-2 select-none hidden sm:block" />

                        <div className="flex flex-col gap-5 items-center">
                            <div className="relative w-full rounded-xl mt-12 bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
                                <div className="flex justify-between items-center"><div className="flex items-center gap-4">
                                    <span className="inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-400/20">
                                        POST
                                        </span>
                                        <div className="h-[20px] w-px bg-zinc-300"></div>
                                        
                                        <p className="break-all">https://vector.profanity.dev</p>
                                        
                                    </div>
                                </div>

                                <div className="relative flex flex-col sm:flex-row items-center gap-2 mt-6 h-full sm:h-9">
                                    <Input className="flex w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 bg-white h-9" placeholder="Defenitly not a bad word" />
                                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 h-9 w-full sm:w-fit">
                                            Profanity check
                                        </button>
                                    </div>

                                <div className="h-32 mt-4 rounded-lg border-2 border-dashed border-zinc-300 text-sm flex items-center justify-center">
                                    <p className="text-zinc-700">Results will be shown here</p>
                                </div>
                        </div>
                    </div>
                </div>
                                                
            </MaxWidthWrapper>
        </>
    )
}

export default page;
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { PLANS } from "@/config/stripe"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Check, HelpCircle, Minus } from "lucide-react"


const page = () => {

    const pricingItems = [
        {
          plan: 'Paid',
          tagline: 'Unlock Limitless Potential',
          quota: 1000,
          features: [
            {
              text: 'Begrenset daglige forespørsler',
              footnote: 'The maximum number of api request allowed per day',
            },
            {
              text: '4 Skoler',
              footnote: 'The maximum file size for each booking request.',
            },
            {
              text: 'Mobile-friendly interface',
            },
            {
                text: 'Utviklervennlig dokumentasjon',
              footnote: 'Klare og omfattende veiledninger for å hjelpe deg med å integrere API raskt.',
              negative: true,
            },
            {
              text: 'Priority support',
              negative: true,
            },
          ],
        },
        {
          plan: 'Pro',
          tagline: 'Empower Your Vision',
          quota: PLANS.find((p) => p.slug === 'pro')!.quota,
          features: [
            {
              text: 'Uendelig daglige forespørsler',
              footnote: 'No limit on the number of bookings allowed.',
            },
            {
              text: 'Utviklervennlig dokumentasjon',
              footnote: 'Klare og omfattende veiledninger for å hjelpe deg med å integrere API raskt.',
            },
            {
              text: 'Uendelig med skoler',
            },
            {
              text: 'Anpassbare passende listen',
              footnote: 'Lag og administrer dine egne listen over passende ord og uttrykk.',
            },
            {
              text: 'Priority support',
            },
          ],
        },
      ]

    return(
        <>
             <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
                <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <TooltipProvider>
                        {pricingItems.map(
                            ({ plan, tagline, quota, features}) => {
                                const price = 
                                PLANS.find(
                                    (p) => p.slug === plan.toLowerCase()
                                )?.price.amount || 0

                                return  <div
                                key={plan}
                                className={cn(
                                  'relative rounded-2xl bg-white shadow-lg',
                                  {
                                    'border-2 border-red-500':
                                      plan === 'Pro',
                                    'border border-gray-200':
                                      plan !== 'Pro',
                                  }
                                )}>
                                {plan === 'Pro' && (
                                  <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-red-600 to-fuchsia-600 px-3 py-2 text-sm font-medium text-white'>
                                    Oppgrader Nå
                                  </div>
                                )}
            
                                <div className='p-5'>
                                  <h3 className='my-3 text-center font-display text-3xl font-bold'>
                                    {plan}
                                  </h3>
                                  <p className='text-gray-500'>
                                    {tagline}
                                  </p>
                                  <p className='my-5 font-display text-6xl font-semibold'>
                                    ${price}
                                  </p>
                                  <p className='text-gray-500'>
                                    per mnd
                                  </p>
                                </div>
            
                                <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                                  <div className='flex items-center space-x-1'>
                                    <p>
                                      {quota.toLocaleString()} Request/mnd inkludert.
                                    </p>
            
                                    <Tooltip delayDuration={300}>
                                      <TooltipTrigger className='cursor-default ml-1.5'>
                                        <HelpCircle className='h-4 w-4 text-zinc-500' />
                                      </TooltipTrigger>
                                      <TooltipContent className='w-80 p-2'>
                                        How many PDFs you can upload per
                                        month.
                                      </TooltipContent>
                                    </Tooltip>
                                  </div>
                                </div>
            
                                <ul className='my-10 space-y-5 px-8'>
                                  {features.map(
                                    ({ text, footnote, negative }) => (
                                      <li
                                        key={text}
                                        className='flex space-x-5'>
                                        <div className='flex-shrink-0'>
                                          {negative ? (
                                            <Minus className='h-6 w-6 text-gray-300' />
                                          ) : (
                                            <Check className='h-6 w-6 text-blue-500' />
                                          )}
                                        </div>
                                        {footnote ? (
                                          <div className='flex items-center space-x-1'>
                                            <p
                                              className={cn(
                                                'text-gray-600',
                                                {
                                                  'text-gray-400':
                                                    negative,
                                                }
                                              )}>
                                              {text}
                                            </p>
                                            <Tooltip
                                              delayDuration={300}>
                                              <TooltipTrigger className='cursor-default ml-1.5'>
                                                <HelpCircle className='h-4 w-4 text-zinc-500' />
                                              </TooltipTrigger>
                                              <TooltipContent className='w-80 p-2'>
                                                {footnote}
                                              </TooltipContent>
                                            </Tooltip>
                                          </div>
                                        ) : (
                                          <p
                                            className={cn(
                                              'text-gray-600',
                                              {
                                                'text-gray-400':
                                                  negative,
                                              }
                                            )}>
                                            {text}
                                          </p>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                                <div className='border-t border-gray-200' />
                                {/* logget inn eller ikke logget inn */}
                              </div>
                                
                                
                            }
                        )}
                    </TooltipProvider>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default page
/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Demo from "@/components/Demo";
import CodeSection from "@/components/CodeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <>
     <div className='bg-blue-50 grainy-light'>  
      <div className='relative overflow-hidden'>
        <div className='mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52'>
          <div className='px-6 lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start'>
              <h1
                className={cn(
                  'relative tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl'
                )}>
                <span className='whitespace-nowrap'>
                  Stopp Bann
                  <span className='relative'>
                    i
                    <span className='absolute -left-4 -right-4 translate-x-[15px] md:translate-x-[3px] md:-top-1.5'>
                      <img
                        src='/swear-emoji.png'
                        className='h-5 w-5 object-contain md:h-8 md:w-12 '
                      />
                    </span>
                  </span>
                  ng
                </span>
                !
              </h1>
              <p className='mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap'>
                Velkommen til <span className="text-red-500">Ringsaker kommunes</span> nettressurs om <span className="text-red-500">stopp banning!</span> Vi støtter foreldre med å bekjempe banning med vårt spesiallagde <span className="text-red-500">API</span>. Sammen tar vi stand mot <span className="text-red-500">banning.</span>
              </p>

              <ul className='mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> Evaluering av språk
                  </li>
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> Trygge miljøer
                  </li>
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> Sammen mot <span className="text-red-500">banning</span>
                  </li>
                </div>
              </ul>

            </div>
          </div>

          <div className='relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20'>
            <Image
              width={160}
              height={160}
              alt="prøv-det"
              aria-hidden='true'
              draggable={false}
              src='/prøv-det.png'
              className='absolute left-2/3 -top-2 select-none hidden sm:block'
            />
            <Demo />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>

      <section className='bg-blue-100 grainy-dark px-4'>
        <div className='mx-auto max-w-6xl gap-6 pb-24 pt-20 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40'>
          <div className='w-full flex flex-col'>
            <div className='flex justify-center text-center'>
              <h2 className='font-heading text-5xl lg:text-6xl font-bold leading-tight text-balance sm:leading-none tracking-tight'>
              "Ord bør bygge broer,{' '}
                <span className='bg-red-500 text-white font-scary px-3'>
                  ikke
                </span>{' '}
                murer"
              </h2>
            </div>
            <p className='mx-auto mt-8 text-center text-sm max-w-xl'></p>

            {/* <Icons.arrow className='h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none' /> */}

            <p></p>

            <p className='text-center mx-auto mt-12 text-lg max-w-xl text-balance'>
              <span className='font-semibold'>
                Banning som ung kan føre til et dårlig inntrykk
              </span>{' '}
              og påvirke hvordan man blir oppfattet av andre, inkludert lærere og arbeidsgivere. Å uttrykke seg respektfullt er viktig for å bygge sterke relasjoner og lykkes både personlig og profesjonelt.
            </p>

           {/* <Icons.arrow className='h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none' />*/}

            <p className='mt-6 sm:mt-12 z-10 text-center mx-auto text-3xl font-semibold'>
              Banning kan føre til...
            </p>

            <div className='grid gap-40 sm:grid-cols-2 sm:gap-16 max-w-3xl mx-auto mt-40 text-center'>
              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t 0 from-blue-100 pointer-events-none'></div>
                  <Image
                    alt="shocked-emoji"
                    height={96} 
                    draggable={false}
                    width={96}
                    src='/shocked-emoji.png'
                    className='relative -z-10 select-none'
                  />
                </div>
                <p className='font-semibold text-lg'>
                  ...Motstand og opprør
                </p>
                <p className='mt-2 text-balance'>
                  Når unge føler seg begrenset av forbud, kan det føre til motstand og utforskning av alternative, noen ganger risikable, handlinger som et tegn på protest.
                </p>
              </div>

              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t from-blue-100 pointer-events-none'></div>
                  <Image
                    alt="swear-emoji"
                    height={96}
                    width={96}
                    draggable={false}
                    src='/moai.png'
                    className='relative -z-10 select-none'
                  />
                </div>
                <p className='font-semibold text-lg'>...begrenset utvikling</p>
                <p className='mt-2 text-balance'>
                      Forbud kan hindre unge i å utforske nye ideer og perspektiver, begrense deres kreativitet og læring, og dermed{' '}
                  <span className='font-semibold text-red-600'>
                    bremse
                  </span>{' '}
                  deres personlige og intellektuelle vekst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='video-demo' className='bg-blue-50 grainy-light'>
        <div className='mx-auto max-w-6xl gap-6 pb-24 pt-10 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40'>
          <h2 className='mx-auto text-balance text-5xl sm:text-6xl text-center font-bold leading-[4.25rem] tracking-tight max-w-2xl text-slate-900'>
            En <span className='px-2 bg-red-500 text-white'>bedre</span>{' '}
            måte finnes
          </h2>

          <p className='text-center mx-auto mt-12 text-lg max-w-xl text-balance'>
            <span className='font-semibold'>
              Moderer innholdet manuelt?
            </span>{' '}
            La heller RingsakerAPI gjøre det tunge arbeidet med å holde brukerinputen ren.
          </p>

          <div
            id='api'
            className='w-full flex flex-col items-center mt-12 px-4'>
            <p className='font-bold text-xl my-4'>Lag en API request</p>
            <div className='relative max-w-2xl w-full text-left p-5 bg-[#1e1e1e] rounded-xl shadow'>
              <CodeSection />
            </div>
          </div>
          

        </div>
      </section>
    </div>

   </>
              
  );
}

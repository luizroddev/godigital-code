import Cards from '@/components/Cards'
import Image from 'next/image'
import { Press_Start_2P, Graduate } from 'next/font/google'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' })
const graduate = Graduate({ subsets: ['latin'], weight: '400' })

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-4 bg-[#040920] relative">
            <section className='flex flex-col md:flex-row items-center justify-around'>
                <section className='flex flex-col mt-20 relative h-full px-6'>
                    <div className="max-w-md h-14 relative items-center flex">
                        <div className="left-20 top-0 absolute text-amber-200 text-opacity-20 text-md lg:text-3xl font-bold ">DESAFIO@2023</div>
                        <div className="w-[66px] h-[1px] absolute lg:bottom-2/3 bottom-3/4 bg-amber-200 bg-opacity-20"></div>
                    </div>
                    <h1 className='text-[#FFD28D] text-2xl lg:text-4xl lg:mt-4' style={pressStart2P.style}>goDigital Code!</h1>
                    <span className='text-xs mt-12 lg:text-lg max-w-md md:max-w-xs xl:max-w-4xl'>
                        Ao longo do ano, os alunos do <span className='text-[#FFD28D] text-sm mt-6' style={graduate.style}>2º ano de Sistemas
                            de Informação Online</span> da <span className='text-rose-500'>FIAP</span> foram desafiados a desenvolver sistemas completos de gestão para micro e pequenas empresas
                    </span>
                </section>

                <div className='items-center hidden xl:flex'>
                    <Image
                        className={`hidden xl:flex mt-8`}
                        width={450}
                        height={450}
                        src="/brain.png"
                        alt=""
                        priority
                    />
                </div>

                <div className='flex items-center relative mt-12 xl:hidden '>
                    <Image
                        className={`relative flex w-auto h-auto max-w-xs sm:max-w-xs`}
                        width={450}
                        height={450}
                        src="/brain.png"
                        alt=""
                        priority
                    />
                </div>
            </section>

            <section className='flex flex-col w-full px-8 items-center justify-center mt-12 md:mt-24  mb-16'>
                <h1 className='text-xl font-normal text-[#3B3A45] mb-8'>APOIO</h1>
                <section className='grid grid-cols-1 md:grid-cols-2 justify-center gap-16 items-center relative'>

                    <Image
                        className={`relative w-auto h-auto justify-self-center`}
                        src="/arnaldeira_logo.png"
                        alt=""
                        width={200}
                        height={200}
                        priority
                    />
                    <Image
                        className={`relative w-auto h-auto justify-self-center`}
                        src="/fiap_logo.png"
                        alt=""
                        width={100}
                        height={100}
                        priority
                    />

                </section>
            </section>
            <Cards></Cards>
        </main>
    )
}

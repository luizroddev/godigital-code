'use client'

import ICard from "@/@types/ICard"
import Image from "next/image"
import Languages from "./Languages"
import React, { ReactNode, useEffect, useState } from "react"

export default function Card({ card, children, hasSourceCode }: { card: ICard, children: ReactNode, hasSourceCode: boolean }) {

    const [active, setActive] = useState(false)

    function getWidth() {
        if (!hasSourceCode && !active) {
            return ''
        }
    }

    const hasLanguages = card.languages

    return (
        <div className={`
        bg-[#14192E] rounded-2xl
        p-2
        py-6
        w-[17rem]
        md:w-[20rem]
        lg:w-[19rem]
        xl:w-[27.5rem]

        h-full

        ${!hasLanguages && !active ? 'h-full' : active ? 'h-full' : 'md:h-[13rem]'}
        ${!hasLanguages && !active ? 'h-full' : active ? 'h-full' : 'xl:h-[11rem]'}
        ${!active && 'hover:opacity-80 hover:ring-blue-950/30 cursor-pointer'}`}
            onClick={() => setActive(!active)}>
            <section className={`flex gap-2 items-center justify-between`}>
                <section className='flex gap-2'>
                    <Image
                        className={`relative ${active ? 'rotate-0' : '-rotate-90'} `}
                        src="/chevron.svg"
                        alt="Next.js Logo"
                        width={24}
                        height={24}
                        priority
                    />
                    <Image
                        className="relative mr-2 w-auto h-auto"
                        src="/folder.svg"
                        alt="Next.js Logo"
                        width={28}
                        height={28}
                        priority
                    />
                    <h1 className='text-white text-md xl:text-xl font-semibold'>{card.title}</h1>
                </section>

                {hasSourceCode &&
                    <section className="flex items-center justify-center">
                        {card.links.github_url.map((url) => {
                            return <button key={url} className="hover:scale-110">
                                <a target="_blank" href={url}>
                                    <Image
                                        className="relative"
                                        src={url.includes('github') ? '/github.svg' : '/external_link.svg'}
                                        alt=""
                                        width={32}
                                        height={32}
                                        priority
                                    />
                                </a>
                            </button>
                        })}
                    </section>}
            </section>
            {
                active &&
                <section className="ml-16 flex flex-col mt-4">
                    <ul>
                        {card.members.map((member) => {
                            return <li key={member} className="text-white">{member}</li>
                        })}
                    </ul>
                </section>
            }
            {
                hasLanguages && <section className="mt-4">
                    {children}
                </section>
            }
            {active && <section className="flex py-4 mx-4">
                <button className="h-14 p-2 rounded-lg w-full mx-4 bg-orange-300 text-orange-950 hover:opacity-70">
                    <a target="_blank" href={card.links.youtube_url} className="flex gap-4 items-center justify-center">
                        <Image
                            className="relative"
                            src="/play_button.svg"
                            alt="Play"
                            width={16}
                            height={16}
                            priority
                        />
                        <h1 className="font-semibold">APRESENTAÇÃO</h1>
                    </a>
                </button>
            </section>
            }

        </div >
    )
}
import ILanguage from '@/@types/ILanguage';
import ISkills from '@/@types/ISkills';
import { promises as fs } from 'fs';
import Image from 'next/image';

function Language({ language, icons }: { language: keyof ISkills, icons: ISkills }) {

    let icon = icons[language]

    return <li className="p-2">
        <section className={`flex items-center p-1 px-2 relative ml-6`}>
            {icon && icon.icon.includes("dev") ?
                <img
                    className="relative mr-2"
                    src={icon && icon.icon}
                    alt="Next.js Logo"
                    width={16}
                    height={16}
                />
                :
                <Image
                    className="relative mr-2"
                    src={'/' + icon && icon.icon + '.svg'}
                    alt=""
                    width={16}
                    height={16}
                />
            }
            <span className='absolute w-full h-full top-0 left-0 shadow-sm opacity-30 rounded-lg' style={{
                border: `1px solid ${icon && icon.color}`,
            }}></span>
            <span className='absolute w-full h-full top-0 left-0 opacity-20 rounded-lg' style={{
                backgroundColor: icon && icon.color,
            }}></span>
            <h1 className='text-xs xl:text-sm' style={{ color: icon && icon.color }}>{language}</h1>
        </section>
    </li >
}

export default async function Languages({ languages }: { languages: {} }) {
    const file = await fs.readFile(process.cwd() + '/src/data/icons.json', 'utf8');
    const icons = JSON.parse(file) as ISkills

    if (languages && Object.keys(languages).length > 0) {
        return (
            <ul className="flex flex-wrap xl:w-full lg:w-[19rem]">
                {Object.keys(languages).map((language) => {
                    return (
                        <Language key={language} language={language as keyof ISkills} icons={icons} />
                    )
                })}
            </ul>
        )
    } else {
        return (
            <></>
        )
    }
}
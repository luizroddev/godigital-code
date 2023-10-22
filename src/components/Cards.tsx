
import ICard from '@/@types/ICard';
import { promises as fs } from 'fs';
import Card from './Card';
import Languages from './Languages';

export default async function Cards() {
    const file = await fs.readFile(process.cwd() + '/src/data/cards.json', 'utf8');
    const cards = JSON.parse(file) as ICard[]

    cards.sort((a, b) => {
        if (a.links.github_url.length > b.links.github_url.length) {
            return -1;
        } else if (a.links.github_url.length < b.links.github_url.length) {
            return 1;
        } else {
            return 0;
        }
    });

    cards.sort((a, b) => {
        if (a.languages && !b.languages) {
            return -1;
        } else if (!a.languages && b.languages) {
            return 1;
        } else {
            return 0
        }
    });

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl text-white py-8 text-opacity-90'>PROJETOS</h1>
            <div className='flex flex-wrap gap-4 justify-center'>
                {cards && cards.map((card, index) => {
                    card.links.github_url = [...card.links.github_url]

                    const hasSourceCode = card.links.github_url.length > 0

                    return <Card hasSourceCode={hasSourceCode} key={index} card={card}>
                        {hasSourceCode && <Languages languages={card.languages} />}
                    </Card>
                })}
            </div>
        </div>
    )
}
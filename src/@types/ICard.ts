export default interface ICard {
    title: string,
    members: string[],
    links: {
        youtube_url: string,
        github_url: string[]
    }
    languages: {}
}
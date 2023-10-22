import IRepo from "@/@types/IRepo";

export default function getUsernameAndRepoFromUrl(urls: string[]): IRepo[] {

    let repos = [] as IRepo[]
    urls.map((url) => {
        const regex = /github\.com\/([^/]+)\/([^/]+)/;

        const match = url.match(regex);

        if (match) {
            const username = match[1];
            const repo = match[2].replace(".git", "");
            return repos.push({ username, repo });
        }
    })

    return repos
}
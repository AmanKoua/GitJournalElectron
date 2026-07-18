const DEFAULT_TIMEOUT = 5000;

export const pullRepoData = (): Promise<void> => {

    return new Promise((res, rej) => {

        let response: boolean;
        let pollTime = 0;
        let waitTime = 100;

        window.electron.ipcRenderer.on("pullRepoDataResponse", (_, data: boolean) => { response = data })
        window.electron.ipcRenderer.send('pullRepoData');

        const pollInterval = setInterval(() => {

            if (response) {
                res();
                clearInterval(pollInterval);
            }

            if (pollTime >= DEFAULT_TIMEOUT) {
                rej()
                clearInterval(pollInterval);
            }

            pollTime += waitTime

        }, waitTime)

    })

}

export const readDataRepo = (subPath: string[]): Promise<string[]> => {

    return new Promise((res, rej) => {

        let response: string[];
        let pollTime = 0;
        let waitTime = 100;

        window.electron.ipcRenderer.on("readDataRepoResponse", (_, data: string[]) => { response = data })
        window.electron.ipcRenderer.send('readDataRepo', subPath);

        const pollInterval = setInterval(() => {

            if (response) {
                res(response);
                clearInterval(pollInterval);
            }

            if (pollTime >= DEFAULT_TIMEOUT) {
                rej()
                clearInterval(pollInterval);
            }

            pollTime += waitTime

        }, waitTime)

    })

}
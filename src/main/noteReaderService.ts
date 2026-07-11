// Basic util to pull the configured github repo, and scrape it 
import { exec } from "child_process";
import {assert} from "./utils"

export const pullRemoteChanges = () : Promise<boolean> => {

    const gitJournalDataRepoPath = getGitJournalDataRepoPath();

    return new Promise((res,rej) => {

        exec(`cd ${gitJournalDataRepoPath} && git pull`, (error, _, stdErr) => {

            if(error || stdErr) {
                rej(false)
            }

            res(true)

        })

    })


}


export const getGitJournalDataRepoPath = () => {
    assert(!!process.env.GIT_JOURNAL_DATA_PATH, "cannot read git journal repo path, because it's not available as env var")
    return process.env.GIT_JOURNAL_DATA_PATH
}
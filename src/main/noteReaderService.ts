// Basic util to pull the configured github repo, and scrape it 
import { exec } from "child_process";
import { assert } from "./utils"
import path from "path";
import * as fs from "fs";

export const pullRemoteChanges = (): Promise<boolean> => {

    console.log("pulling remote data changes!")
    const gitJournalDataRepoPath = getGitJournalDataRepoPath();

    return new Promise((res, rej) => {

        exec(`cd ${gitJournalDataRepoPath} && git pull`, (error, _, stdErr) => {

            if (error || stdErr) {
                rej(false)
            }

            res(true)

        })

    })


}

export const readDataRepo = (subPath: string[]) => {

    console.log("reading git data repo contents!")

    const gitJournalDataRepoPath = getGitJournalDataRepoPath();
    const doesGitJournalDataRepoExist = fs.existsSync(gitJournalDataRepoPath)
    assert(doesGitJournalDataRepoExist, "cannot read journal data repo contents, becasue the folder does not exist!")

    let readPath = path.join(gitJournalDataRepoPath, ...subPath)

    return fs.readdirSync(readPath);

}


export const getGitJournalDataRepoPath = (): string => {
    assert(!!process.env.GIT_JOURNAL_DATA_PATH, "cannot read git journal repo path, because it's not available as env var")
    const result = process.env.GIT_JOURNAL_DATA_PATH;
    return result!;
}
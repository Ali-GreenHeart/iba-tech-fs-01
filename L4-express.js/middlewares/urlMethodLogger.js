import { writeFile } from "fs/promises"

export default async function urlMethodLogger(req, res, next) {
    const ms = Date.now()
    const method = req.method
    const url = req.url
    const host = req.hostname
    await writeFile("log.txt",
        `${ms} - ${method} - ${host} - ${url} \n`,
        {
            flag: "a"
        }
    )
    next()
}

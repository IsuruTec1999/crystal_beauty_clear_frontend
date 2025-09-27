import { createClient } from "@supabase/supabase-js"


const supabase = createClient("https://qvypebqmubxswenpazbm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eXBlYnFtdWJ4c3dlbnBhemJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NzY3NTUsImV4cCI6MjA3NDM1Mjc1NX0.IiEBUgbXcD4wb_wHyJU9Vsp3gzfneK-hnXmSCLSPGCg");

export default function mediaUpload(file){
    const promise = new Promise(
        (resolve,reject)=>{
            if (file == null){
                reject("file is null")
            }
            const timeStamp = new Date().getTime()
            const newFileName = timeStamp+file.name

            supabase.storage.from("images").upload(newFileName, file,{
                cacheControl:"3600",
                upsert:false,
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                    resolve(url)
                }

            ).catch(
                (error)=>{
                    console.log(error)
                    reject("error uploading file")
                }
            )
        }
    )
    return promise
}

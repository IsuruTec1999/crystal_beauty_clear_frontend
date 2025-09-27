import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { toast } from "react-hot-toast"


export default function Testing() {
    const [file, setFile] = useState(null)
    const supabase = createClient("https://qvypebqmubxswenpazbm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eXBlYnFtdWJ4c3dlbnBhemJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NzY3NTUsImV4cCI6MjA3NDM1Mjc1NX0.IiEBUgbXcD4wb_wHyJU9Vsp3gzfneK-hnXmSCLSPGCg");

    function handleUpload(){
        const fileName = file.name
        const newFileName = new Date().getTime()+fileName
        
        supabase.storage.from("images").upload(newFileName, file,{
            cacheControl:"3600",
            upsert:false,
        }).then(
            ()=>{
                toast.success("file uploaded successfully")
                const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                console.log(url)
            }

        ).catch(
            ()=>{
                toast.error("error uploading file")
            }
        )
    }

    return (
        <div className="w-full h-screen  flex flex-col justify-center items-center">
            <input type="file" onChange={
                (e) => {
                   setFile (e.target.files[0])
            }
            }></input>
            <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Upload</button>
        </div>
    )
}
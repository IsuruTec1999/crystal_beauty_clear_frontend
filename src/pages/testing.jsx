import { useState } from "react"
import { toast } from "react-hot-toast"
import mediaUpload from "../utils/mediaUpload"


export default function Testing() {
    const [file, setFile] = useState(null)
    

    function handleUpload(){
        mediaUpload(file).then(
            (url)=>{
                console.log(url)
                toast.success("File upload successful")
            }
        ).catch(
            (error)=>{
                console.log(error)
                toast.error("File upload failed")
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
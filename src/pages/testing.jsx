

export default function Testing() {
    

    return (
        <div className="w-full h-screen  flex flex-col justify-center items-center">
            <input type="file" onChange={
                (e) => {
                   console.log (e.target.files)
            }
            }></input>
        </div>
    )
}
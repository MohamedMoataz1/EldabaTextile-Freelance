import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import axios from 'axios';
const ImageUpload = () => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dyszqi7mt' } });
    const [type, setType] = useState();
    const [file, setFile] = useState();
    const handleUpload = async (e, preset) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', file);
        // formData.append('type',type);
        formData.append('upload_preset', preset)
        const res = await fetch("",
            {
                method: 'POST',
                body: formData
            }
        ).then(r => r.json())
        console.log(res)

    }

    return (
        <div>
            <h1>Gallery upload</h1>
            <form onSubmit={e => handleUpload(e,'ko265jzv')}>
                <input type="file" onChange={e => setFile(e.target.files[0])} />
                <input type="text" onChange={e => setType(e.target.value)} />
                <button type="submit">Upload</button>
            </form>

            <h1>Category upload</h1>
            <form onSubmit={e => handleUpload(e,'ncwpt3g8')}>
                <input type="file" onChange={e => setFile(e.target.files[0])} />
                <input type="text" onChange={e => setType(e.target.value)} />
                <button type="submit">Upload</button>
            </form>

        </div>
    );
}

export default ImageUpload;
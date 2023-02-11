import axios from "axios";
import {useState} from "react";
export default function UploadFile() {
    const [file, setFile] = useState();
    const onFileSelected = (files) => {
        if (files && files.length) {
            setFile(files[0]);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', file);
        axios.post('https://localhost:44353/api/images', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
            console.log('res', res)
        }).catch(err => {
            console.log('err', err)
        })
    }
    return <>
        <form onSubmit={onSubmit}>
            <input name="file" type="file" onChange={(e) => onFileSelected(e.target.files)}/>
            <button>אישור</button>
        </form>
    </>
}
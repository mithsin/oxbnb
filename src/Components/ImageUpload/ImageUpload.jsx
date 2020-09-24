import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({setImageURL}) => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const uploadImage = e => {
        setLoading(true)
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_preset", "pafoxbnb")
        formData.append("file", files) 
        axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData)
            .then(res=> {
                const resUrl = res.data.secure_url;
                const formatURL = resUrl.split('/upload/');
                const url250 = `${formatURL[0]}/upload/c_scale,w_250,ar_1:1,c_fill/${formatURL[1]}`
                setImage(url250);
                setImageURL(url250);
            })
            .then(()=>{
                setLoading(false)
            })
            .catch(err=> console.log(err))
    }
return (
    <div 
        id="dropbox" 
        style={{
            border: '4px dashed #ccc',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '16px 0',
        }}>
        <div style={{ flex: "1 0 50%"}}>
            { loading ? <h3>Uploading...</h3> : <h3>Upload Image</h3> }
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={ uploadImage }/>
        </div>
        <div style={{ flex: "1 0 50%"}}>
            <img src={ image } alt={ image } style={{ width: "100px" }} />
        </div>
    </div>
)};

export default ImageUpload;

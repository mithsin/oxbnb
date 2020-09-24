import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({setImageURL}) => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_preset", "oxbnb")
        formData.append("file", files) 
        setLoading(true);
        axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData)
            .then(res=> {
                const resUrl = res.data.secure_url;
                const formatURL = resUrl.split('/upload/');
                const url250 = `${formatURL[0]}/upload/c_scale,w_250,ar_1:1,c_fill/${formatURL[1]}`
                setImage(url250);
                setImageURL(url250);
            })
            .then(setLoading(false))
            .catch(err=> console.log(err))
    }

return (
    <div id="dropbox" styel={{
        border: '4px dashed #ccc',
        paddingLeft: '8px'}}>
        <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={ uploadImage } 
        />
        {
            loading ? (
                <h2>Loading image...</h2>
            ): (
                <img src={ image } alt={ image } style={{ width: "100px" }} />
            )
        }
    </div>
)};

export default ImageUpload;

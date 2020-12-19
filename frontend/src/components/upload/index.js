import style from './style.css';
import { useState } from 'preact/hooks';
import API from '../../services/API';

import Progress from '../progress';
import Spinner from '../spinner';
import UploadControls from '../upload-controls';

const Upload = () => {
  const [isFileSelector, setIsFileSelector] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingEnd, setIsUploadingEnd] = useState(false);

  const fileSelect = (event) => {
    event.preventDefault();
    console.log('Files ready for upload');
    const files = event.target.files;
    console.log(files);

    if (!files.length)
      return;

    setIsUploading(true);

    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('images', file);
    });

    // const config = {
    //   onUploadProgress: function (progressEvent) {
    //     console.log('Upload progress');
    //   },
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // }

    API.uploadImages(formData).then(res => {
      console.log(res);
      setIsUploading(false);
      setIsUploadingEnd(true);
    }).catch(error => {
      console.error(error);
      setIsUploading(false);
      setIsUploadingEnd(true);
    })
  };

  const switchToUpload = () => {
    setIsUploadingEnd(false);
  };

  return (
    <div class={style.upload}>
      {
        !isUploading && !isUploadingEnd && (
          <>
            <input
              type="file"
              class={style.fileInput}
              id="file"
              name="images"
              multiple
              required
              accept=".png, .jpeg, .jpg"
              onChange={fileSelect} />
            <label for="file" class={style.label}> Select files...</label>
          </>
        )
      }

      {isUploading && <Spinner />}

      {isUploadingEnd && <UploadControls switchToUpload={switchToUpload} />}
    </div>
  )
};

export default Upload;
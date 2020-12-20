import style from './style.css';

import { useEffect, useState } from 'preact/hooks';

import API from '../../services/API';

import Image from '../image';

const Images = () => {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    console.log('Images list is rendered');
    API.getImages().then(res => {
      console.log(res);
      setImagesList(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, []);

  const deleteImage = (image) => {
    console.log('delete image');
  };

  return (
    <div class={style.images}>
      {
        imagesList.map(item => <Image key={item} image={item} deleteImage={deleteImage} />)
      }
    </div>
  )
};

export default Images;
import style from './style.css';

import { useEffect, useState } from 'preact/hooks';

import API from '../../services/API';

import Image from '../image';

import withAuth from '../../HOC/withAuth';

const Images = () => {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    API.getImages().then(res => {
      setImagesList(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, []);

  const deleteImage = (image) => {
    API.deleteImage(image).then(res => {
      const imagesData = imagesList.filter(item => item !== image);
      setImagesList(imagesData);
    }).catch(err => {
      console.error(err);
    })
  };

  return (
    <div class={style.images}>
      {
        imagesList.map(item => <Image key={item} image={item} deleteImage={deleteImage} />)
      }
    </div>
  )
};

const ImagesWithAuth = withAuth(Images);

export default ImagesWithAuth;
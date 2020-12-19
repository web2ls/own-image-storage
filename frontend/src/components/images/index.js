import style from './style.css';

import { useEffect } from 'preact/hooks';

import API from '../../services/API';

const Images = () => {
  useEffect(() => {
    console.log('Images list is rendered');
    API.getImages().then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }, []);

  return (
    <div>Images</div>
  )
};

export default Images;
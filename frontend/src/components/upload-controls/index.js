import style from './style.css';

import { route } from 'preact-router';

const UploadControls = (props) => {
  return (
    <div class={style.uploadControls}>
      <button class={style.uploadButton} onCLick={() => route('/')}>Cancel</button>
      <button class={style.uploadButton} onClick={props.switchToUpload}>Upload more</button>
    </div>
  )
};

export default UploadControls;
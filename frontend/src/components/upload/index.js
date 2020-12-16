import style from './style.css';

const Upload = () => {
  const fileSelect = (event) => {
    console.log('Files ready for upload');
    const files = event.target.files;
    console.log(files);
  };

  return (
    <div class={style.upload}>
      <input type="file" class={style.fileInput} id="file" multiple onChange={fileSelect} />
      <label for="file" class={style.label}> Select files...</label>
    </div>
  )
};

export default Upload;
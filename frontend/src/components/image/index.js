import style from './style.css';

const Image = (props) => {
  const source = `http://localhost:8000/${props.image}`;

  const copyImageUrl = () => {
    const $textArea = document.createElement('textarea');
    const $content = document.querySelector('.content');
    $textArea.value = source;
    $content.appendChild($textArea);
    $textArea.focus();
    $textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      console.error(err);
    }
    $content.removeChild($textArea);
  };

  return (
    <div class={style.image}>
      <div class={style.imagePreview} onClick={copyImageUrl}>
        <img src={source} class={style.imageItem} />
      </div>
      <div class={style.imageControls}>
        <button onClick={() => props.deleteImage(props.image)}>Delete</button>
      </div>
    </div>
  )
};

export default Image;
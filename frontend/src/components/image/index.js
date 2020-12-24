import style from './style.css';

const Image = (props) => {
  const domain = process.env.PREACT_APP_NODE_ENV === 'development' ? process.env.PREACT_APP_DEV_SERVER_URL + '/' : process.env.PREACT_APP_PROD_SERVER_URL;
  const source = `${domain}${props.image}`;

  const copyImageUrl = () => {
    const $textArea = document.createElement('textarea');
    const $content = document.querySelector('.content');
    $textArea.value = process.env.PREACT_APP_NODE_ENV === 'development' ? source : window.location.origin + source;
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
import style from './style.css';

const Image = (props) => {
  const source = `http://localhost:8000/${props.image}`;

  return (
    <div class={style.image}>
      <div class={style.imagePreview}>
        <img src={source} class={style.imageItem} />
      </div>
      <div class={style.imageControls}>
        <button onClick={() => props.deleteImage(props.image)}>Delete</button>
      </div>
    </div>
  )
};

export default Image;
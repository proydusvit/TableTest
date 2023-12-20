import style from './Btn.module.scss';
const DeleteBtn = ({ handleDelete, animal }) => {
  return (
    <button onClick={() => handleDelete(animal.id)} className={style.delete}>
      Видалити
    </button>
  );
};

export default DeleteBtn;

import style from './Btn.module.scss';

const EditBtn = ({ handleEdit, animal }) => {
  return (
    <button onClick={() => handleEdit(animal.id)} className={style.edit}>
      Редагувати
    </button>
  );
};

export default EditBtn;

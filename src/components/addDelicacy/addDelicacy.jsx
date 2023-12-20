import style from './AddDelicacy.module.scss';

const AddDelicacy = ({
  newTreats,
  animal,
  handleTreatQuantityChange,
  addTreatToCat,
  handleTreatNameChange,
}) => {
  return (
    <div className={style.box}>
      <div>
        <input
          className={style.input}
          type="text"
          placeholder="Назва смаколика"
          value={newTreats[animal.id]?.name || ''}
          onChange={e => handleTreatNameChange(e, animal.id)}
        />
        <input
          className={style.input}
          type="number"
          min="1"
          placeholder="Кількість"
          value={newTreats[animal.id]?.quantity || ''}
          onChange={e => handleTreatQuantityChange(e, animal.id)}
        />
      </div>
      <div>
        <button onClick={() => addTreatToCat(animal.id)} className={style.btn}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddDelicacy;

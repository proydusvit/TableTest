import styles from './Form.module.scss';

const AddForm = ({ handleAdd, handleModalInputChange, editedData }) => {
  return (
    <div className={styles.box}>
      <form onSubmit={handleAdd} className={styles.form}>
        <h2 className={styles.title}>Додати котика</h2>
        <label>
          Ім'я:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={editedData.name || ''}
            onChange={handleModalInputChange}
          />
        </label>
        <label>
          Порода:
          <input
            className={styles.input}
            type="text"
            name="breed"
            value={editedData.breed || ''}
            onChange={handleModalInputChange}
          />
        </label>
        <label>
          Вік:
          <input
            type="number"
            name="age"
            min="0"
            value={editedData.age || ''}
            onChange={handleModalInputChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Додати
        </button>
      </form>
    </div>
  );
};

export default AddForm;

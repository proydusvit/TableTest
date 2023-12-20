import styles from './Form.module.scss';

const EditForm = ({
  editedData,
  handleModalInputChange,
  setShowModal,
  handleSave,
}) => {
  return (
    <div className={styles.box}>
      <span onClick={() => setShowModal(false)} className={styles.exit}>
        &#10006;
      </span>
      <h2 className={styles.title}>Редагувати котика</h2>
      <form onSubmit={handleSave} className={styles.form}>
        <label>
          Ім'я:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleModalInputChange}
          />
        </label>
        <label>
          Порода:
          <input
            className={styles.input}
            type="text"
            name="breed"
            value={editedData.breed}
            onChange={handleModalInputChange}
          />
        </label>
        <label>
          Вік:
          <input
            className={styles.input}
            type="number"
            name="age"
            min="0"
            value={editedData.age}
            onChange={handleModalInputChange}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Зберегти
        </button>
      </form>
    </div>
  );
};

export default EditForm;

import { useState } from 'react';

import styles from './Table.module.scss';

import catsData from './cat.json';

import AddForm from '../Form/addForm';
import EditForm from '../Form/editForm';
import AddDelicacy from '../addDelicacy/addDelicacy';
import EditBtn from '../Btn/EditBtn';
import DeleteBtn from '../Btn/DeleteBtn';

function Table() {
  const [data, setData] = useState(catsData);
  const [newTreats, setNewTreats] = useState({});
  const [editingRowId, setEditingRowId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [newCatData, setNewCatData] = useState({
    name: '',
    breed: '',
    age: '',
  });
  const [editedCatData, setEditedCatData] = useState({
    id: null,
    name: '',
    breed: '',
    age: '',
  });

  const handleAdd = e => {
    e.preventDefault();

    if (newCatData.name && newCatData.breed && newCatData.age) {
      const newId = data.length + 1;
      const newCat = {
        id: newId,
        name: newCatData.name,
        breed: newCatData.breed,
        age: newCatData.age,
      };
      setData(prevData => [...prevData, newCat]);
      setNewCatData({ name: '', breed: '', age: '' });
    } else {
      alert('Будь ласка, заповніть всі поля.');
    }
  };

  const handleEdit = id => {
    setEditingRowId(id);
    const editingAnimal = data.find(animal => animal.id === id);
    setEditedCatData({ ...editingAnimal });
    setShowModal(true);
  };

  const handleSave = () => {
    const updatedData = data.map(animal =>
      animal.id === editedCatData.id ? editedCatData : animal,
    );
    setData(updatedData);
    setEditingRowId(null);
    setShowModal(false);
  };

  const handleDelete = id => {
    const updatedData = data.filter(animal => animal.id !== id);
    setData(updatedData);
  };

  const handleNewCatInputChange = e => {
    const { name, value } = e.target;
    setNewCatData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditedCatInputChange = e => {
    const { name, value } = e.target;
    setEditedCatData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addTreatToCat = catId => {
    const { name, quantity } = newTreats[catId] || {};

    if (name && quantity) {
      setData(prevData => {
        return prevData.map(cat => {
          if (cat.id === catId) {
            return {
              ...cat,
              treats: [
                ...(cat.treats || []),
                {
                  name: name,
                  quantity: quantity,
                },
              ],
            };
          }
          return cat;
        });
      });
      setNewTreats(prevState => ({
        ...prevState,
        [catId]: { name: '', quantity: '' },
      }));
    } else {
      alert('Будь ласка, заповніть обидва поля для нового смаколика.');
    }
  };
  const handleTreatQuantityChange = (e, catId) => {
    const newQuantity = e.target.value;
    setNewTreats(prevState => ({
      ...prevState,
      [catId]: {
        ...prevState[catId],
        quantity: newQuantity,
      },
    }));
  };
  const handleTreatNameChange = (e, catId) => {
    const newName = e.target.value;
    setNewTreats(prevState => ({
      ...prevState,
      [catId]: {
        ...prevState[catId],
        name: newName,
      },
    }));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {showModal && (
          <EditForm
            setShowModal={setShowModal}
            editedData={editedCatData}
            handleModalInputChange={handleEditedCatInputChange}
            handleSave={handleSave}
          />
        )}
        <AddForm
          handleAdd={handleAdd}
          handleModalInputChange={handleNewCatInputChange}
          editedData={newCatData}
        />
      </div>

      <div style={{ width: '100%' }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: '3%' }}>ID</th>
              <th style={{ width: '12%' }}>Ім'я</th>
              <th style={{ width: '12%' }}>Порода</th>
              <th style={{ width: '3%' }}>Вік</th>
              <th style={{ width: '23%' }}>Смаколик</th>

              <th style={{ width: '45%' }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map(animal => (
              <tr key={animal.id}>
                <td style={{ textAlign: 'center' }}>{animal.id}</td>
                <td>{animal.name}</td>
                <td>{animal.breed}</td>
                <td style={{ textAlign: 'center' }}>{animal.age}</td>
                <td>
                  <ul style={{ maxHeight: '75px', overflowY: 'auto' }}>
                    {animal.treats &&
                      animal.treats.map((treat, index) => (
                        <li key={index} style={{ marginBottom: '5px' }}>
                          <span>
                            {treat.name}: {treat.quantity}
                          </span>
                        </li>
                      ))}
                  </ul>
                </td>

                <td>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      textAlign: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <EditBtn handleEdit={handleEdit} animal={animal} />

                      <DeleteBtn handleDelete={handleDelete} animal={animal} />
                    </div>
                    <AddDelicacy
                      handleTreatNameChange={handleTreatNameChange}
                      newTreats={newTreats}
                      animal={animal}
                      handleTreatQuantityChange={handleTreatQuantityChange}
                      addTreatToCat={addTreatToCat}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

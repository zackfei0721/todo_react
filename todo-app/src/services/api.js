import axios from 'axios';

const URL = "http://localhost:5000/todos";

const getTasks = async () => {
    const response = await axios.get(URL);
    return response.data;
  };

const addTask = async (newTask) => {
    await axios.post(URL, newTask);
};

const deleteTask = async (id) => {
    await axios.delete(`${URL}/${id}`);
};

const toggleTask = async (id, newStatus) => {
    await axios.patch(`${URL}/${id}`, newStatus);
}

const editTask = async (id, newTask) => {
    await axios.patch(`${URL}/${id}`, newTask);
}

export default {
    getTasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask
};

const { users, generateId } = require('../data/usersData');

const getAllUsers = (req, res) => {
  return res.status(200).json({ status: 'success', results: users.length, data: users });
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, error: { code: 400, message: 'Campos obrigatórios ausentes.' }, data: null });
  }
  const newUser = { id: generateId(), name, email };
  users.push(newUser);
  return res.status(201).json({ success: true, error: null, data: newUser, message: 'Usuário cadastrado com sucesso!' });
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ status: 'fail', message: 'Usuário não encontrado.' });
  return res.status(200).json({ status: 'success', data: user });
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) return res.status(404).json({ status: 'fail', message: 'Usuário não encontrado.' });
  if (!name || !email) return res.status(400).json({ status: 'fail', message: 'Campos obrigatórios ausentes.' });
  users[userIndex] = { id: userId, name, email };
  return res.status(200).json({ status: 'success', data: users[userIndex] });
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) return res.status(404).json({ status: 'fail', message: 'Usuário não encontrado.' });
  users.splice(userIndex, 1);
  return res.status(200).json({ status: 'success', message: 'Usuário removido com sucesso.' });
};

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };

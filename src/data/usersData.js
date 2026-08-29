let users = [
  { id: 1, name: "Ana Silva", email: "ana.silva@email.com" },
  { id: 2, name: "Carlos Souza", email: "carlos.souza@email.com" }
];
let nextId = 3;
const generateId = () => nextId++;
module.exports = { users, generateId };

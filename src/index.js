const names = ['Ana', 'Julio', 'Liz', 'Karen', 'Michel', 'Juju'];
const randomMsg = () => {
  console.log(names[Math.floor(Math.random() * names.length)]);
};

// export default { randomMsg };
module.exports = { randomMsg };

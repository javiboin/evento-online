const RegisterModel = (connection, Sequelize) => {
  const Register = connection.define('register', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  });

  return Register
};

module.exports = RegisterModel;
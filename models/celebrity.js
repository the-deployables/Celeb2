module.exports = function(sequelize, DataTypes) {
    var Celebrity = sequelize.define("Celebrity", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 1,
            msg: 'Please enter a celbrity name'
          }
        }
      },
      causeofdeath: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 1,
            msg: 'Please enter a cause of death'
          }
        }
      },
      deathdate: {
        type: DataTypes.DATEONLY,
        validate: {
          len: {
            args: 1,
            msg: 'Please enter a predicted date of death'
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return Celebrity;
  };  
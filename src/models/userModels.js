module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("UserORM", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }
    });
  
    return Blog;
  };
  
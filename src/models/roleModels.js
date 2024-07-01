module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("RoleORM", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Role;
};

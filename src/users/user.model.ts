import { DataTypes, Model } from 'sequelize';
import database from '../database';
import { UserDto } from './interfaces/user.dto';

class User extends Model {
  id!: number;

  name!: string;

  username!: string;

  password!: string;

  token!: string | null;

  readonly createdAt!: Date;

  readonly updatedAt!: Date;

  toJSON(): UserDto {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
    }
  }
}

User.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING(32),
  },
}, {
  sequelize: database,
  tableName: 'users',
});

export default User;

import { Model } from "sequelize";
import { Table, Column, DataType, HasMany } from "sequelize-typescript";
import { RefershToken } from "./refersh-token.model";

@Table({ tableName: "user", underscored: true })
class User extends Model {
  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  isVerified!: boolean;

  @Column(DataType.STRING)
  verificationToken!: string;

  @Column(DataType.STRING)
  passwordReset!: string;

  @HasMany(() => RefershToken, {
    onDelete: "CASCADE",
  })
  refreshToken!: Array<RefershToken>;
}

export { User };

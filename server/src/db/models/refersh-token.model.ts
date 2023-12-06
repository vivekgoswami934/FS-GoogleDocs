import { Model } from "sequelize";
import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.model";

@Table({ tableName: "refresh_token", underscored: true })
class RefershToken extends Model {
  @Column(DataType.STRING)
  token!: string;

  @ForeignKey(() => User)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}

export { RefershToken };

import { Model } from "sequelize";
import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.model";

@Table({ tableName: "document", underscored: true })
class Document extends Model {
    @Column(DataType.STRING)
     title !: string

    @Column(DataType.JSONB)
     content!: string;

    @ForeignKey(() => User)
    userId!: number;

    
}

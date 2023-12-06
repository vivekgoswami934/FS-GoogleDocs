import { Model } from "sequelize";
import { Table, Column, DataType } from "sequelize-typescript";
import RoleEnum from "../../types/enums/role-enum";

@Table({ tableName: "role", underscored: true, timestamps: false })

class Role extends Model {
  @Column(DataType.ENUM("ADMIN", "SUPERADMIN"))
  name!: RoleEnum;
}

export { Role };

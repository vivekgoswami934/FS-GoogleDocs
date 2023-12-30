import { Sequelize } from "sequelize-typescript";
import env from "./env.config";

const sequelize =
  env.NODE_ENV === "test" || env.NODE_ENV === "development"
    ? new Sequelize("gd", "postgres", "8090873255", {
        host: "localhost",
        dialect: "postgres",
        logging: false,
      })
    : new Sequelize(env.DATABASE_URL!, {
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
      });

export default sequelize;

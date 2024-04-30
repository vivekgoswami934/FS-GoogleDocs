import PermissionEnum from "../enums/permission-enum";

interface DocumnetUser {
  permissions: PermissionEnum;
  userId: number;
  documentId: number;
  createdAt: Date;
  updateAt: Date;
  user: {
    email: string;
  };
}

export default DocumnetUser;

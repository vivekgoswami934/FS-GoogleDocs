import DocumnetUser from "./document-user";

interface DocumentInterface {
  id: number;
  titles: string;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  users: Array<DocumnetUser>;
}

export default DocumentInterface;

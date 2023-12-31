import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { documentController } from "../controllers/document/document.controller";
import { documentValidator } from "../validators/document.validator";
import { shareValidator } from "../validators/share.validator";
import { shareController } from "../controllers/document/share/share.controller";

const documentRouter = Router();

documentRouter.get("/:id", authenticate, documentController.getOne);

documentRouter.get("/", authenticate, documentController.getAll);

documentRouter.put(
  "/:id",
  authenticate,
  documentValidator.update,
  documentController.update
);

documentRouter.post("/", authenticate, documentController.create);

documentRouter.delete("/:id", authenticate, documentController.delete);

documentRouter.post(
  "/:id/share",
  authenticate,
  shareValidator.create,
  shareController.create
);

documentRouter.delete(
  "/:documentId/share/:userId",
  authenticate,
  shareController.delete
);

export default documentRouter;

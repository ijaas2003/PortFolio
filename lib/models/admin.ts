import { Schema, model, models } from "mongoose";

const Admin = new Schema({
  adminName: {
    type: String,
    required: true,
  },
  adminPass: {
    type: String,
    require: true,
  },
});

const adminPanal = models.admins || model("admin", Admin);
export default adminPanal;

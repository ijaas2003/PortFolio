import { model, models, Schema } from "mongoose";

const VisterSchema = new Schema(
  {
    visiter: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Visited = models.visited || model("visited", VisterSchema);

export default Visited;

// import exp from 'constants';
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

const connect = async () => {
  const connectionstate = mongoose.connection.readyState;

  if (connectionstate === 1) {
    console.log("Alreadyconnected");
    return;
  }

  if (connectionstate === 2) {
    console.log("connecting...");
    return;
  }

  try {
    mongoose
      .connect(MONGODB_URL!, {
        bufferCommands: true,
      })
      .then((res) => {
        console.log("Connected");
      });
  } catch (err: any) {
    console.log("Error: ", err);
    throw new Error(err);
  }
};

export default connect;

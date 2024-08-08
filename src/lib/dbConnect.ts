import mongoose from "mongoose";

// nextJS is a edge time framework so we should always check 
// if the db connection exists or not, if it exists use it, otherwise
// use the previous connection.


type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to Database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected Successfully");
  } catch (error) {
    console.log("Database connection failed ", error);

    process.exit(1);
  }
}

export default dbConnect;

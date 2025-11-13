import mongoose from 'mongoose';
import dns from "dns";

dns.setServers(["8.8.8.8"]);

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'SMIT',
    });
    console.log('✅ MongoDB Connected Successfully!');
  } catch (err) {
    console.log('❌ Error connecting to DB:', err.message);
    process.exit(1);
  }
}

export default connection;




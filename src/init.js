// import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/User";

import app from "./index";
var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🔵 PORT${PORT} 연결`);
});

import "./db";
import "./models/User";

import app from "./index";
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🔵 PORT${PORT} 연결`);
});

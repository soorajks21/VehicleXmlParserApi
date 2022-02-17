const server = require("./app");
const scheduler = require("./scheduler");

scheduler.cronJobs();

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`server running in  mode on port ${PORT}`));

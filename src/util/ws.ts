module.exports = (wss: any) => {
  wss.on("connection", function connection(ws: any) {
    ws.on("message", function incoming(message: any) {
      console.log("received: %s", message);
    });
    ws.send("something");
  });
};

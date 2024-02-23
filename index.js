const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow({
    show: false,
    title: "Menupp",
    icon: "./assets/icons/favicon-16x16.png",
  });
  win.removeMenu();
  win.maximize();
  win.show();
  win.loadURL("https://menupp.co/login");

  win.on("page-title-updated", (e) => {
    e.preventDefault();
  });
});

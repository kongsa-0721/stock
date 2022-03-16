class ModuleConfig {
  readonly port = 5000;
  readonly db = {
    host: "localhost",
    port: 3306,
    database: "chundan",
    user: "root",
    password: "123456",
  };
}

const config = new ModuleConfig();

export { config };

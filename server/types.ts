enum EApiPath {
  songsPath = '/api/v1/songs/',
}

interface IConfig {
  host: string;
  port: number;
}

export { EApiPath, IConfig };

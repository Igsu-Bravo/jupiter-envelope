interface ISong {
  name: string;
  description: string;
  isDone: boolean;
}

interface IState {
  songs: Array<ISong>;
}

export type { ISong, IState };

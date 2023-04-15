export type Data = {
  title: string;
  url: string;
  caption: string;
};

declare module '*/data/*.json' {
  const value: Data[];
  export = value;
}

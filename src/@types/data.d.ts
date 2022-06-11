declare module '*/data/*.json' {
  type Data = {
    title: string;
    url: string;
    caption: string;
  };

  const value: Data[];
  export = value;
}

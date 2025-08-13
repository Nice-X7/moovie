export interface MovieCards {
  image: string;
  name: string;
  year: number;
  genre: string;
}
export interface directorWorksType {
  image: string;
  name: string;
  year: number;
  genre: string;
}
export interface aboutDirectorType {
  image: string
  text: string
}
export interface actorType {
  directorWorks: directorWorksType[]
  aboutDirector: aboutDirectorType
}
export interface statsType {
  label: string;
  value: string | number;
  id: number;
}
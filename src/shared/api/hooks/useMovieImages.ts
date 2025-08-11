import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface MovieCards {
  image: string;
  name: string;
  year: number;
  genre: string;
}
interface directorWorksType {
  image: string;
  name: string;
  year: number;
  genre: string;
}
interface aboutDirectorType {
  image: string
  text: string
}
interface actorType {
  directorWorks: directorWorksType[]
  aboutDirector: aboutDirectorType
}

const fetchMovieTriller = async () => {
  const { data } = await axios.get("/api/trillerInfo");
  return data;
};

export const useMovieTriller = () => {
  return useQuery({
    queryKey: ["movie-triller"],
    queryFn: fetchMovieTriller,
  });
};

const fetchMovieImages = async () => {
  const { data } = await axios.get("/api/media");
  return data;
};

export const useMovieImages = () => {
  return useQuery({
    queryKey: ["movie-images"],
    queryFn: fetchMovieImages,
  });
};

const fetchMovieRecommendations = async () => {
  const { data } = await axios.get("/api/recommendations");
  return data;
};

export const useMovieRecommendation = () => {
  return useQuery<MovieCards[]>({
    queryKey: ["recommendations"],
    queryFn: fetchMovieRecommendations,
  });
};

const fetchSimilarFilms = async () => {
  const { data } = await axios.get("/api/similarFilms");
  return data;
};

export const useSimilarFilms = () => {
  return useQuery<MovieCards[]>({
    queryKey: ["similar-films"],
    queryFn: fetchSimilarFilms,
  });
};

const fetchDirectorFilms = async () => {
  const { data } = await axios.get("/api/director");
  return data;
};

export const useDirectorFilms = () => {
  return useQuery<actorType>({
    queryKey: ["director-films"],
    queryFn: fetchDirectorFilms,
  });
};

const fetchActor = async () => {
  const { data } = await axios.get("/api/actor");
  return data;
};

export const useActor = () => {
  return useQuery({
    queryKey: ["actor"],
    queryFn: fetchActor,
  });
};

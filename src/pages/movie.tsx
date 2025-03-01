import { Metadata } from "minista";
import { MovieBanner, MovieDetails} from "@/sections"
import { MovieStore } from "@/store/movie.store"

export const metadata: Metadata = {
  title: 'Movie - Kantara'
}

export default () => {
  return (
    <>
      <MovieBanner />
      <MovieDetails {...MovieStore.MovieDetails}/>
    </>
  )
}

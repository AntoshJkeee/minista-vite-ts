import { Metadata } from "minista";
import { MoviesBanner, Collections } from "@/sections"
import { MoviesStore } from "@/store/movies.store"

export const metadata: Metadata = {
  title: 'Movies & Shows',
}

export default () => {
  return (
    <>
      <MoviesBanner {...MoviesStore.MoviesBanner} />
      <Collections {...MoviesStore.Collections} />
    </>
  )
}

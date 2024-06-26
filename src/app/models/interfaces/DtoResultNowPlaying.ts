import { Dates } from "./Dates"
import { Movie } from "./Movie"

export interface DtoResultNowPlaying {
    dates: Dates
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
  }
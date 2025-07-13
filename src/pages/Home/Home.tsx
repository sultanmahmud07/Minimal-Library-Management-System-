import Banner from "./Banner/Banner"
import FAQ from "./FAQ/FAQ"
import LatestBooks from "./LatestBooks/LatestBooks"
import PopularAuthors from "./PopularAuthors/PopularAuthors"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <PopularAuthors></PopularAuthors>
      <FAQ></FAQ>
    </div>
  )
}

export default Home
import Banner from "./Banner/Banner"
import FAQ from "./FAQ/FAQ"
import ViewAllBooksInfo from "./InspirationInfo/InspirationInfo"
import LatestBooks from "./LatestBooks/LatestBooks"
import PopularAuthors from "./PopularAuthors/PopularAuthors"

const Home = () => {
  return (
    <div className="pt-20">
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <PopularAuthors></PopularAuthors>
      <ViewAllBooksInfo></ViewAllBooksInfo>
      <FAQ></FAQ>
    </div>
  )
}

export default Home
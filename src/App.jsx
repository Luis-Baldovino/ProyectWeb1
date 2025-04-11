import { ImgHero } from "./components/ImgHero"
import { Description } from "./components/Description"
import { PreparationTime } from "./components/PreparationTime"
import { Ingredients } from "./components/Ingredients"
import { Instructions } from "./components/Instructions"
import { Nutrition } from "./components/Nutrition"

function App() {

  return (
    <main className="bg-background min-h-screen">
      <ImgHero />
      <div className="container-page">
        <Description />
        <PreparationTime />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </main>
  )
}

export default App

import Intro from "./Components/Intro";
import Animes from "./Components/Animes";

export default function Home() {
  return (
    <main>
      <h1 className="">
        <Intro />

        <Animes />
      </h1>
    </main>
  )
}

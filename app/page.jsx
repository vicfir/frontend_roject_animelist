import Intro from "./Components/Intro";
import Animes from "./Components/Popular";

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

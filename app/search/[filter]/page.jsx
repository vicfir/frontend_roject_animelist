import Popular from "../../Components/Popular"

// async function GET(request, params) {
//   const mOra = params
// }

export default function searchBy( {params} ) {
  const animeOrManga = params.filter;
  console.log(animeOrManga);

  return (
    <div>
      <p>{animeOrManga}</p>
      <Popular animeOrManga={animeOrManga}/>
    </div>
  )
}

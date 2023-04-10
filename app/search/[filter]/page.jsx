import Searching from "u@/app/Components/Searchingndefined";
import Popular from "../../Components/Popular"

// async function GET(request, params) {
//   const mOra = params
// }

export default function searchBy( {params, searchParams} ) {
  const animeOrManga = params.filter;
  const search = searchParams;
  console.log(search);

  return (
    <div>
      {Object.keys(search).length === 0 ? 
        <Popular animeOrManga={animeOrManga}/>
        :
        <Searching animeOrManga={animeOrManga} search={search}/>
      }
      
    </div>
  )
}

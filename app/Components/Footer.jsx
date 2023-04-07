export default function Footer() {
  return (
    <footer className="bg-indigo-950 py-10 mt-12">
        <div className="flex justify-between max-w-4xl mx-auto text-indigo-200 font-semibold">
            <div className="flex flex-col">
                <a>Donate</a>
                <a>AniList.co</a>
                <a>AniChart.net</a>
            </div>
            <div className="flex flex-col">
                <a>Apps</a>
                <a>Site Stats</a>
                <a>Recommendations</a>
                <a>API</a>
            </div>
            <div className="flex flex-col">
                <a>Discord</a>
                <a>Twitter</a>
                <a>Facebook</a>
                <a>GitHub</a>
            </div>
            <div className="flex flex-col">
                <a>Add Data</a>
                <a>Moderators</a>
                <a>Contact</a>
                <a>Terms & Privacy</a>
                <a>Stite Map</a>
            </div>
        </div>
    </footer>
  )
}

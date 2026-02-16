import Deploy from "./components/Deploy.jsx";
import SectionPreview from "./components/SectionPreview.jsx";
import Team from "./components/Team.jsx";


function App() {

    return (
        <>
            <div className="flex h-screen bg-gray-100">

                {/* LEFT: Preview Panel */}
                <div className="w-[320px] p-4 bg-white">
                    <SectionPreview width={1400} previewWidth={300}>
                        <Deploy/>
                    </SectionPreview>
                </div>

                {/* RIGHT: Main Canvas */}
                <div className="flex-1 overflow-auto bg-gray-50">
                    <Deploy/>
                    <Team/>
                </div>

            </div>
        </>
    )
}

export default App

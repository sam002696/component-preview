import Deploy from "./components/Deploy.jsx";
import SectionPreview from "./components/SectionPreview.jsx";
import Team from "./components/Team.jsx";
import ButtonCollection from "./components/ButtonCollection.jsx";
import Button from "./components/Button.jsx";


function App() {

    return (
        <>
            <div className="flex h-screen bg-gray-100">

                {/* LEFT PANEL (fixed, scrollable) */}
                <div className="w-[320px] h-screen bg-white p-4 overflow-y-auto shrink-0">

                    {/* Deploy previews */}
                    <SectionPreview baseWidth={1400}>
                        <Deploy/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    {/* Team previews */}
                    <SectionPreview baseWidth={1400}>
                        <Team/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    {/* Button collection */}

                    <SectionPreview baseWidth={1400}>
                        <ButtonCollection/>
                    </SectionPreview>

                    {/* Single button */}

                    <hr className="my-3.5 text-gray-300"/>

                    <SectionPreview baseWidth={1400}>
                        <Button/>
                    </SectionPreview>

                </div>

                {/* RIGHT PANEL (main canvas) */}
                <div className="flex-1 overflow-y-auto bg-gray-50">
                    <Deploy/>
                    <Team/>
                    <ButtonCollection/>
                    <Button/>
                </div>

            </div>
        </>
    )
}

export default App

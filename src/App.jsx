import Deploy from "./components/Deploy.jsx";
import SectionPreview from "./components/SectionPreview.jsx";
import Team from "./components/Team.jsx";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import IconGroup from "./components/IconGroup.jsx";


function App() {

    return (
        <>
            <div className="flex h-screen bg-gray-100">

                {/* LEFT PANEL (fixed, scrollable) */}
                <div className="w-[320px] h-screen bg-white p-4 overflow-y-auto shrink-0">

                    {/* Deploy previews */}
                    <SectionPreview
                    >
                        <Deploy/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    {/* Team previews */}
                    <SectionPreview
                    >
                        <Team/>
                    </SectionPreview>

                    {/* Single button */}

                    <hr className="my-3.5 text-gray-300"/>

                    <SectionPreview>
                        <Button/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    <SectionPreview>
                        <Input/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    <SectionPreview>
                        <IconGroup/>
                    </SectionPreview>

                </div>

                {/* RIGHT PANEL (main canvas) */}
                <div className="flex-1 overflow-y-auto bg-gray-50">
                    <Deploy/>
                    <Team/>
                    <Button/>
                    <Input/>
                    <IconGroup/>
                </div>

            </div>
        </>
    )
}

export default App

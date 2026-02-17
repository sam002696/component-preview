import Deploy from "./components/Deploy.jsx";
import SectionPreview from "./components/SectionPreview.jsx";
import Team from "./components/Team.jsx";
// import ButtonCollection from "./components/ButtonCollection.jsx";
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
                    <SectionPreview previewType="section"
                    >
                        <Deploy/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    {/* Team previews */}
                    <SectionPreview previewType="section"
                    >
                        <Team/>
                    </SectionPreview>

                    {/*<hr className="my-3.5 text-gray-300"/>*/}

                    {/* Button collection */}

                    {/*<SectionPreview previewType="element">*/}
                    {/*    <ButtonCollection/>*/}
                    {/*</SectionPreview>*/}

                    {/* Single button */}

                    <hr className="my-3.5 text-gray-300"/>

                    <SectionPreview previewType="element">
                        <Button/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    <SectionPreview previewType="element">
                        <Input/>
                    </SectionPreview>

                    <hr className="my-3.5 text-gray-300"/>

                    <SectionPreview previewType="element">
                        <IconGroup/>
                    </SectionPreview>

                </div>

                {/* RIGHT PANEL (main canvas) */}
                <div className="flex-1 overflow-y-auto bg-gray-50">
                    <Deploy/>
                    <Team/>
                    {/*<ButtonCollection/>*/}
                    <Button/>
                    <Input/>
                    <IconGroup/>
                </div>

            </div>
        </>
    )
}

export default App

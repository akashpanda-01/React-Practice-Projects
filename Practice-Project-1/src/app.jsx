import React, { useState } from "react";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core-Consepts</h2>
            <ul>
              {/* <CoreConcept
                img={componentsImg}
                title="Components"
                description="The Core Concepts"
              /> */}
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          <section id="examples">
            <h2>EXAMPLES</h2>
            <menu>
              <TabButton onSelect={() => handleClick("components")}>
                Component
              </TabButton>
              <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleClick("props")}>PROPS</TabButton>
              <TabButton onSelect={() => handleClick("state")}>STATE</TabButton>
            </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

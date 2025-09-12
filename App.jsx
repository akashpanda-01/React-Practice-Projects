import { useState } from 'react';
// import componentsImg from './assets/components.png';

import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./Components/TabButton.jsx";
import CoreConcept from "./Components/core-concept.jsx";
import Header from "./Components/Header.jsx";
import { EXAMPLES } from './data.js';
// import { Components } from "react";


function App() {


const [selectedTopic, setSelectedTopic] = useState() 

function handelSelect(selectedButton){
        setSelectedTopic(selectedButton);``
        // console.log(selectedTopic);
        
    }

  let TabContent = <p>Please Select a Topic</p>;

if (selectedTopic) {
  TabContent = (
  <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  );
}

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))};


            {/* <CoreConcept 
            title="Components"
            description="THE CORE UI"
            img={componentsImg}
            /> */}

            {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={componentsImg}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>EXAMPLES</h2>
          <menu>
            <TabButton
            isSelect={selectedTopic === "components"} 
            onSelect={() => handelSelect('components')}
            >
            Components
            </TabButton>
            <TabButton 
            isSelect={selectedTopic === "jsx"}
            onSelect={function () {handelSelect('jsx')}}>
            JSX
            </TabButton>
            <TabButton
            isSelect={selectedTopic === "props"}
            onSelect={() =>  handelSelect('props')}
            >
            PROPS
            </TabButton>
            <TabButton 
            isSelect={selectedTopic === "state"}
            onSelect={() => handelSelect ('state')}
            >
            STATE
            </TabButton>
          </menu>

          {TabContent}

          {/* {selectedTopic} */}
        </section>
      </main>

      {/* {!selectedTopic && <p>Please Select a Topic</p>} */}
      {/* {selectedTopic && (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
      )} */}

      {/* {!selectedTopic ? (<p>Please Select a Topic</p>
      ) : (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
      )} */}
        
      
    </div>
  );
}

export default App;

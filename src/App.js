
import React from "react";
import Home from "./State_Lifting/Home";
// import NestedList from "./components/nested_data_list";
// import Card1 from "./components/Card1";
// import Card2 from "./components/Card2";
// import Card3 from "./components/Card3";
// import STATE from './STATE';

// import { FaBeer } from 'react-icons/fa';
// import ReactBootstrap from "./react_bootstrap/ReactBootstrap";


// import From from "./From/From";
// import Child from "./State_Lifting/Child";

// import Hocks_UseState2 from "./Hocks_UseState/index2";
// import Event_Binding from "./Event_Binding";
// import Event_Hendler_Class from "./Event_Hendler_Class";
// import Conditional_Rendering from "./conditional_rendaring";
export default function App(){
    const data ="i am a (app)";
    const handleChildData=(childData)=>{
        console.log(childData);

    }
    return (
        <>   
        {/* {<NestedList />}
        {<Card1 />}
        {<Card2 name="Md Omar Farouk" />}
        {<Card3 />}
        {<FaBeer />}
        {<ReactBootstrap />} */}
        {/* {<STATE />}
         */}
         {/* {<Conditional_Rendering />} */}
         {/* {<Child  data={data} onChildData={handleChildData} />} */}
         {<Home />}

        </>
    );
}

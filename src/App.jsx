import React from "react";
import FreeConsultation from "./component/FreeConsultation";
import TokenizationGuide from "./component/TokenizationGuide";
import ComprehensiveGuide from "./component/ComprehensiveGuide"; 
import { TokenLegalAccess } from "./component/TokenLegalAccess";
import RegulatoryCompliance from "./component/RegulatoryCompliance";
import { SelectedServices } from "./component/SelectedServices";
import { OtherDetails } from "./component/OtherDetails";
import FAQS from "./component/FAQS";
import { RealestateTokenization } from "./component/RealestateTokenization";
import AssestsTonkenize from "./component/AssestsTonkenize";

const App = () => {
  return (
<div className="1xl:flex flex-col items-center">
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><FreeConsultation/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><TokenizationGuide/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><ComprehensiveGuide/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><AssestsTonkenize/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><TokenLegalAccess/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><RegulatoryCompliance/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><SelectedServices/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><FAQS /></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><OtherDetails/></div>
<div className="1xl:w-[90vw] 11xl:w-[75vw]  3xl:w-[70vw] 4xl:w-[44vw] "><RealestateTokenization/></div>
</div>  
  );
};
export default App;
 
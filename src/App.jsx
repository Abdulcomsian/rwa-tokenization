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
    <>
        <FreeConsultation/>
        <TokenizationGuide/>
        <ComprehensiveGuide/>
        <AssestsTonkenize/>
         <TokenLegalAccess/>
        <RegulatoryCompliance/>
        <SelectedServices/>
        <FAQS />
        <OtherDetails/>
        <RealestateTokenization/>
    </>
  );
};
export default App;

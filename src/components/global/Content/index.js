import React, {Fragment} from "react";

//view
import View from "./view";

export const Content = ({children})=>{
    return(
        <Fragment>
            <View content={children}/>
        </Fragment>
    );
}
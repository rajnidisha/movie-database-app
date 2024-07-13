import React from "react";
function Callbacks({count,xyz}) {
    console.log('rerender');
    return(
        <div>
        <button onClick={xyz}>Increment</button>
        <h3>counttS:{count}</h3>
        </div>
    );

}
export default React.memo(Callbacks) ;
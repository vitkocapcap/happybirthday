import React from 'react';

const Next = ({onRouteChange})=>{
        return(
            <input 
                onClick={()=> onRouteChange('musicandcake')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt4" 
                type="submit" 
                value="Next"
            />
        );
}

export default Next;
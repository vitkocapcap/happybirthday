import React from 'react';

const TurnOnTheLight = ({onRouteChange})=>{
        return(
            <div className="">
                <input 
                    onClick={()=>onRouteChange('musicandcake')}
                    className="b ph4 pv4 ba b--black-30 bg-transparent grow pointer f6 dib w-100 w-50-m w-25-l mw6 shadow-5 center mv7 " 
                    type="submit" 
                    value="I'm ready to start"
                />
            </div>
        );
}

export default TurnOnTheLight;
import React from 'react';

const Next = ({onRouteChange})=>{
        return(
            <div className="pt4">
                <input 
                    onClick={()=> onRouteChange('wishes')}
                    className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib mr1" 
                    type="submit" 
                    value="Back"
                />
                <input 
                    onClick={()=> onRouteChange('musicandcake')}
                    className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib ml1" 
                    type="submit" 
                    value="Next"
                />
            </div>
        );
}

export default Next;
import React from 'react';
import './TurnOnTheLight.css';

const TurnOnTheLight = ({onRouteChange})=>{
        return(
            <article class="mw7 center ph3 ph5-ns tc br2 pv5 bg-white dark-green mb5 mv6 athelas">
                <h1 class="fw6 f4 f2-ns lh-title mt0 mb3">
                    This is a message for you.
                </h1>
                <div class="pa4 athelas">
                <cite class="f6 ttu tracked fs-normal">From Bao Viet to Thu Ha</cite>
                    <blockquote class="ml0 mt3 pl4 black-90 bl bw2 b--blue">
                        <p class="f5 f4-m f3-l lh-copy measure mt0">
                        Dear my love, I'm so sorry for not being with you today but I hope this gift can really do that.
                        Thank you for everything.
                        </p>
                    </blockquote>
                </div>
                <div>
                    <input
                    onClick={()=>onRouteChange('wishes')}
                    class="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 athelas"
                    type="submit" 
                    value="I'm ready to start"
                    />
                </div>
            </article>
        );
}

export default TurnOnTheLight;
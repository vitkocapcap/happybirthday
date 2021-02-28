import React from 'react';
import './MusicAndCake.css';

const MusicAndCake = ({onRouteChange}) =>{
    return(
        <article class="athelas">
            <div class="vh-100 dt w-100 tc bg-dark-gray white cover" 
                style= {{background:'url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center'}}
            >
                <div class="dtc v-mid">
                    
                        <h2 class="f5 fw1 ttu tracked mb2 lh-title">01.03.2001 - 01.03.2021</h2>
                    
                    <h1 class="f1 f-headline-l fw1 i white-60">Happy Birthday Thu Hà</h1>
                    <blockquote class="ph0 mh0 measure f4 lh-copy center">
                        <p class="f2 fw1 white-70">
                        I will always love you 
                        </p>
                        <cite class="f6 ttu tracked fs-normal">Nguyễn Phan Bảo Việt</cite>
                    </blockquote>
                </div>
            </div>
            <div class="center measure-wide f5 pv5 lh-copy ph2">
                <h1 class="f1 lh-title">The repercussion of ugliness is endless</h1>
                <p>
                The choice of paper size is one of the  first of any given work to be printed. There are two basic paper size systems in the world: the international A sizes, and the American sizes.
                </p>
            </div>
        </article>
    );
}

export default MusicAndCake;
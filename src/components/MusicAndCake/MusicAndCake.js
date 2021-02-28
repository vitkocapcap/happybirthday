import React from 'react';
import './MusicAndCake.css';

const MusicAndCake = ({onRouteChange}) =>{
    return(
        <article class="athelas">
            <div class="vh-100 dt w-100 tc bg-dark-gray white cover" 
                style= {{background:'url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center'}}
            >
                <div class="dtc v-mid">
                    
                        <h2 class="f5 pt5 fw1 ttu tracked mb2 lh-title">Dear Thu Hà</h2>
                    
                    <h1 class="f1 f-headline-l fw1 i white-60">Happy 20ᵗʰ Birthday</h1>
                    <blockquote class="ph0 mh0 measure f4 lh-copy center">
                        <p class="f2 fw1 white-70">
                        I will always love you 
                        </p>
                        <cite class="f6 ttu tracked fs-normal">Nguyễn Phan Bảo Việt</cite>
                    </blockquote>
                </div>
            </div>
            <div class="center measure-wide f5 pv5 lh-copy ph2">
                <h1 class="f1 lh-title">Love is not what we hear but how we feel</h1>
                <hr class="mw3 bb bw1 b--black-50"/>
                <h4>
                    Gửi em cô gái anh yêu
                    </h4>
                <div class="tl">
                    <p>
                        Anh xin lỗi vì hôm nay làm em buồn nhiều hơn vui. Anh cố gắng làm ra chút gì đó làm quà tặng tinh thần cho em, nhưng mà mấy cái này trình độ có hạn (tới cái font chữ còn không chuẩn), mới học vài ngày xong nhảy vào làm thì đúng là nó hơi chậm, nên hôm nay bỏ quên em hơi nhiều.
                    </p>
                    <p>
                        Mà thôi bỏ qua mấy chuyện giận hờn nhau, tập trung vô vấn đề chính bây giờ của chị Thu Hà nè. Chúc chị Ong của anh tuổi 20 luôn nhiều niềm vui và sức khỏe, con đường học tập và sự nghiệp sẽ luôn phát triển tốt hơn (tất nhiên là cùng với sự cố gắng giúp đỡ từ anh người yêu đáng ghét của chị). Mong là chị sẽ hiền lành, không bắt nạt tui, không giận hờn vu vơ với nhau nữa, và quan trọng là luôn luôn hạnh phúc bên gia đình hiện tại và tui - gia đinh tương lai của chị nhé.
                    </p>
                    <p>
                        Nói chung là cái màn này cũng hơi gấp, anh làm mọi thứ trong một ngày mà không kịp chuẩn bị quá kĩ. Nhưng mà mong là em sẽ thích món quà này của anh nha. Mặc dù món quà lớn nhất từ anh vẫn là sẽ luôn ở bên em mỗi ngày.
                    </p>
                    <p>
                        I give you my heart, with a lifetime guarantee. I can't help falling in love with you, and ONLY YOU. 
                    </p>
                    <h4>From Dịt With Love</h4>
                </div>
                
            </div>
            
        </article>
    );
}

export default MusicAndCake;
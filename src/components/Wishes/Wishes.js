import React from 'react';
import './Wishes.css';


const data = {
    images:[
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/154974002_134245541914011_446673371804697342_n.jpg?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=eEnC2qGemEoAX8DiGIq&_nc_ht=scontent-muc2-1.xx&oh=82ddb2e33cc03deb50dbea22c9c5f27d&oe=6062F353'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155312576_460734171718069_4773601303703587080_n.jpg?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=5W1l3D6icPkAX-_grYG&_nc_ht=scontent-muc2-1.xx&oh=12e8910454a404d7f4919aab1c49f5de&oe=606039AB'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/154879553_263877725410759_5808970801452747385_n.jpg?_nc_cat=107&ccb=3&_nc_sid=ae9488&_nc_ohc=NqFlItvocngAX83Is3b&_nc_ht=scontent-muc2-1.xx&oh=52c2f60106cbca54dda39fd3b5fab0cf&oe=6060CDC5'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155492450_3719012284814731_2507294008765715034_n.jpg?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=elvr6nWHoYAAX9mwfbC&_nc_oc=AQko_7YWYURr0BVSb-_hlVg86OoOtXDqOnLDV4lGQf8hvcOWFHSNC4dBBheBv7jPlDo&_nc_ht=scontent-muc2-1.xx&oh=166020319cbff4bc5ef9b028e9ae9fb5&oe=6062476F'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155824644_890001645123496_6679440257275847839_n.png?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=eHydU16eygoAX8Bro-6&_nc_ht=scontent-muc2-1.xx&oh=902c50685cc2455fd77cf9ce57307ffc&oe=6063066C'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155122031_1097226564080478_8406385298484646533_n.jpg?_nc_cat=106&ccb=3&_nc_sid=ae9488&_nc_ohc=fjB9Ra_ae1YAX_ByVMR&_nc_ht=scontent-muc2-1.xx&oh=efbea8696bf3b72f5f0e69f519b2b3e8&oe=6060D43B'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/155399554_743308599656195_6009146385275661249_n.jpg?_nc_cat=109&ccb=3&_nc_sid=ae9488&_nc_ohc=a9tp72Vm-aUAX8orePJ&_nc_ht=scontent-muc2-1.xx&tp=6&oh=148be98ad40ac492afde409f28cf1b28&oe=6060ADD9'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155192579_1528836377305137_5039111868451959816_n.jpg?_nc_cat=104&ccb=3&_nc_sid=ae9488&_nc_ohc=vuhlpUFOs7oAX-z2_WL&_nc_oc=AQlHFl8c3qQQvsvG8scYXDMZBESlKHNEcZCNafQ_LrIi_u5Nt3vjjEmOPWeS40K5Mxk&_nc_ht=scontent-muc2-1.xx&oh=29b8f5e289a33f93e3f404f78d14960f&oe=606000E1'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155483185_256484636101438_6002492031100818242_n.jpg?_nc_cat=104&ccb=3&_nc_sid=ae9488&_nc_ohc=_Uj58PRvqY0AX8X6qTP&_nc_ht=scontent-muc2-1.xx&oh=68354a330abb1c7c60e247c1de2cb190&oe=60621260'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155259229_523569168626178_2939498137438035449_n.jpg?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=NW4xag2-RuAAX-TWw8u&_nc_ht=scontent-muc2-1.xx&oh=5f300191d2da67e18adcdbaadc78d084&oe=6062CC4D'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/155160869_4038637719482229_3175851367833553360_n.jpg?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=nT4HAmGx6EwAX9oounJ&_nc_ht=scontent-muc2-1.xx&oh=5eaba20856ab9e133bfb10fefa4bc17c&oe=60631F4C'},
        {url: 'https://scontent-muc2-1.xx.fbcdn.net/v/t1.15752-9/156085122_445308556716318_6105119383382190683_n.jpg?_nc_cat=106&ccb=3&_nc_sid=ae9488&_nc_ohc=HMwcJ7i5lXwAX-c5CtA&_nc_ht=scontent-muc2-1.xx&oh=c6f67af4340bc161fb0a7b43fe53306e&oe=605F5598'}
    ],

    texts:[
        {text: 'Thu Hà'},
        {text: 'Vợ anh này'},
        {text: 'Nay tròn 20 rồi'},
        {text: 'Không còn trẻ con nữa'},
        {text: 'Chúc em'},
        {text: 'Giỏi giang hơn'},
        {text: 'Dễ thương, xinh đẹp hơn'},
        {text: 'Luôn luôn vui vẻ'},
        {text: 'Luôn luôn thành công'},
        {text: 'Bạn bè luôn cạnh bên'},
        {text: 'Mãi hạnh phúc em nhé'},
        {text: 'Bonus'}
    
    ]
}
let i=0;
class Wishes extends React.Component{

    constructor(){
        super();
        this.state ={
            currentImage: data.images[0].url,
            currentText: data.texts[0].text
        }
    }
    


    onClickNext = ()=>{
        i++;
        console.log(data.texts.length);
        console.log(i);
        if(i < (data.images.length)){
            this.setState({currentImage: data.images[i].url});
            this.setState({currentText: data.texts[i].text});
        }else{
            this.props.onRouteChange('video');
        }
    }

    render(){
        return(
            <div class="vh-100 dt w-100 tc bg-dark-gray white cover" 
            style= {{background:'url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center'}}>
            <article class="mw6 mv6 center bg-white br3 pa3 pa3-ns mv3 ba b--black-40">
                <div class="tc">
                    <img 
                    alt=''
                    src= {this.state.currentImage} class="br-100 h5 w5 dib ba b--black-05 pa2 mt5" title="Photo of a kitty staring at you"/>
                    <h2 class="f4 fw4 gray mt0">{this.state.currentText}</h2>
                    <input 
                        onClick={this.onClickNext}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Next"
                    />
                </div>
            </article>
            </div>
        );
    }
}

export default Wishes;
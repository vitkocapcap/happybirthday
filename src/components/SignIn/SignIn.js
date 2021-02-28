import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state ={
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event)=>{
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event)=>{
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () =>{
        const {signInEmail,signInPassword} = this.state;
        if (signInEmail.toLowerCase() ==='lethithuha' && signInPassword.toLowerCase() === '01032001'){
            this.props.onRouteChange('turnonthelight');
        }else{
            alert("Try again!")
        }
    }

    render(){
        return(
            <div class="vh-100 dt w-100 tc bg-dark-gray white cover" 
            style= {{background:'url(https://i.pinimg.com/originals/c6/d4/80/c6d480a1238752ba4e9909a7cc765b20.jpg) no-repeat center'}}>
            <article className="br4 ba b--black-20 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80 bg-white-80 br4">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email"
                                    name="email-address" 
                                    id="email-address"
                                    
                                    onChange ={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange ={this.onPasswordChange}
                                />
                            </div> 
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign in"
                            />
                        </div>
                    </div>
                </main>
            </article>
            </div>
        );
    }
}

export default SignIn;
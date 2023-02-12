import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import './styles/homePage.css';
import './styles/form.css';

import ColoredBorderButton from '../ColoredBorderButton';
import { Link } from 'react-router-dom';
import Input from '../Input';
import TextArea from '../TextArea';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type, // '', 'mow', 'tree'
            text: true,
            feedbackActive: '',
        };
        this.toggleText = this.toggleText.bind(this);
        this.submit = this.submit.bind(this);

        this.name = React.createRef();
        this.phone = React.createRef();
        this.address = React.createRef();
        this.desc = React.createRef();
    }

    toggleText() {
        this.setState({
            text: !this.state.text
        })
    }

    submit() {
        const data = {
            type: this.state.type,
            name: this.name.current.getValue(),
            phone: this.phone.current.getValue(),
            address: this.address.current.getValue(),
            desc: this.desc.current.getValue(),
            date: new Date(),
        };
        console.log(data);

        // If successfully sent request
        this.setState({
            feedbackActive: 'active',
        });
    }

    render() {
        return(
            <div className='HomePage'>
                
                <img alt='title' className='title' src='/title.svg' />

                <h3 className='subTitle'>Tree Demolition and Mowing</h3>

                <img className='titleHr' alt='hr' src='/hrBoth.svg' />

                <div className='form buttons'>
                    {/* Titles/Design */}
                    <Link className='goBackBtn' to={'/'}>
                        Go back
                    </Link>

                    <h2>
                        {this.state.type==='mow'?'Get Your Lawn Mowed':'Get Tree(s) Removed'}
                    </h2>

                    <img alt='hr' src={this.state.type==='mow'?'/hrRed.svg':'/hrBlue.svg'} />


                    <h3>----- We will contact you -----</h3>

                    {/* Inputs */}
                    <Input key="name" ref={this.name} placeholder="Name" />
                    <Input key="phone" ref={this.phone} placeholder="Phone">
                        <div className='textCheck' onClick={this.toggleText} >
                            <img alt='text bool' className='textCheck' src={this.state.text===true?'/textCheck.svg':'/textX.svg'} />
                        </div>
                    </Input>
                    <Input key="address" ref={this.address} placeholder="Address of job location"/>
                    <TextArea key="desc" ref={this.desc} placeholder="Brief job description"/>

                    <ColoredBorderButton onClick={this.submit} color={this.state.type==='mow'?'red':'blue'} width='100%' height='60px'>
                        Request!
                    </ColoredBorderButton>

                    <div className='disclaimer'>
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <p>We will attempt to text and/or call you as soon as we get the chance!</p>
                    </div>

                    {/* Submit feedback */}
                    <div className={`submitFeedback ${this.state.feedbackActive}`}>    
                        <h2>Your request has been successfully submitted!</h2>
                        <p>---- Expect a response within 1-3 business days ----</p>
                    </div>


                </div>

                <div className='treeImages titleImages'>
                    <div className='frontImage a' >
                        <div className='cover'></div>
                        <img alt='tree 1' src='/attachments/tree0.jpg' />
                    </div>
                    <div className='frontImage b' >
                        <img alt='tree 2' src='/attachments/tree1.jpg' />
                        <div className='cover'></div>
                    </div>
                    
                </div>

                <div className='mowImages titleImages'>
                    <div className='frontImage a' >
                        <div className='cover'></div>
                        <img alt='mow 1' src='/attachments/tree3.jpg' />
                    </div>
                    <div className='frontImage b' >
                        <img alt='mow 2' src='/attachments/tree2.jpg' />
                        <div className='cover'></div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default FormPage;
import React, { Component } from 'react';
import './styles/homePage.css';

import ColoredBorderButton from '../ColoredBorderButton';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: '', // '', 'mow', 'tree'
        };

        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm(form) {
        this.setState({
            form,
        });

    }

    render() {
        return(
            <div className='HomePage'>
                
                <img alt='title' className='title' src='/title.svg' />

                <h3 style={{color: '#DBDBDB', fontWeight: 300, fontSize: 25, marginTop: 20, marginBottom: 5}}>Tree Demolition and Mowing</h3>

                <img alt='hr' src='/hrBoth.svg' />

                <div className='buttons'>
                    <ColoredBorderButton color="red" onClick={() => this.toggleForm('mow')}>
                        Get Your Lawn Mowed
                    </ColoredBorderButton>

                    <h4 style={{marginTop: 30, marginBottom: 30, color: '#B4B4B4'}}>------- or -------</h4>

                    <ColoredBorderButton color="blue" onClick={() => this.toggleForm('tree')}>
                        Remove Tree(s)
                    </ColoredBorderButton>
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

export default HomePage;
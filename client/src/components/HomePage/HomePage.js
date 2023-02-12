import React, { Component } from 'react';
import './styles/homePage.css';

import ColoredBorderButton from '../ColoredBorderButton';
import { Link } from 'react-router-dom';

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

                <h3 className='subTitle'>Tree Demolition and Mowing</h3>

                <img className='titleHr' alt='hr' src='/hrBoth.svg' />

                <div className='buttons'>
                    <Link className='link' to={'/mow'} style={{textDecoration: "none"}} >
                        <ColoredBorderButton color="red">
                            Get Your Lawn Mowed
                        </ColoredBorderButton>
                    </Link>

                    <h4 style={{marginTop: 30, marginBottom: 30, color: '#B4B4B4'}}>------- or -------</h4>

                    <Link className='link' to={'/tree'} style={{textDecoration: "none"}} >
                        <ColoredBorderButton color="blue">
                            Remove Tree(s)
                        </ColoredBorderButton>
                    </Link>
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
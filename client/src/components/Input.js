import {Component} from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            value: '',
            placeholderActive: '',
        }
        this.type = props.type || 'text';
        this.placeholder = props.placeholder || 'Placeholder';
        this.color = props.color || '#6C6C6C';
        this.backgroundColor = props.backgroundColor || '#373737';

        this.getValue = this.getValue.bind(this);
        this.setValue = this.setValue.bind(this);
        this.move = this.move.bind(this);
    }

    getValue() {
        return this.state.value;
    }

    setValue(e) {
        const value = e.target.value;
        if (value.length===0) this.move(false);
        if (value.length>0) this.move(true);
        this.setState({ value });
    }

    move(pos) {
        if (pos) {
            this.setState({placeholderActive: 'active'});
        } else {
            if (this.state.value) return;
            this.setState({placeholderActive: ''});
        }
    }

    render() {
        return(
            <div className='Input' style={{border: '1px solid '+this.color, backgroundColor: this.backgroundColor}}>
                <input onInput={this.setValue} value={this.state.value} style={{backgroundColor: this.backgroundColor, zIndex: 0}} onFocus={() => {this.move(true)}} onBlur={() => {this.move(false)}} />
                <div className={`placeholder ${this.state.placeholderActive}`} style={{backgroundColor: this.backgroundColor}}>
                    {this.placeholder}
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Input;
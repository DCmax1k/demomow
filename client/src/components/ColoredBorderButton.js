import {Component} from 'react';
const colors = {
    red: '#830000',
    blue: '#00828A',
}

class ColoredBorderButton extends Component {



    render() {
        return(
            <div onClick={this.props.onClick} className="ColoredBorderButton" style={{cursor: 'pointer', height: this.props.height || 80, width: this.props.width || 350, borderRadius: 15, borderWidth: 2, borderColor: this.props.color==='red'?colors.red:this.props.color==='blue'?colors.blue:'none', borderImage: this.props.color==='both'?'linear-gradient(to right bottom, #830000, #01FFFF)':'none', backgroundColor: 'transparent', borderStyle: 'solid', borderImageSlice: 1, boxShadow: '-10px 10px 10px 1px rgba(0,0,0,0.25)'}}>
                <h2 style={{fontSize: this.props.size || 20, color: 'white'}}>{this.props.children}</h2>
            </div>
        )
    }
}

export default ColoredBorderButton;
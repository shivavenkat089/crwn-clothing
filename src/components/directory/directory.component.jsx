import { Component } from 'react';
import './directory.styles.scss';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: sections,
        }
    }
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( ({title, id, imageUrl, size}) => (
                        <MenuItem key={'section'+id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;

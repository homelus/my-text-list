import React, {Component} from 'react';
import './TextItem.css';

class TextItem extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.checked !== nextProps.checked
    }

    render() {
        const {content, checked, id, onToggle, onRemove} = this.props;

        console.log(id)
        return (
            <div className="text-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemove(id)}
                }>×</div>
                <div className={`text-content ${checked && 'checked'}`}>
                    <div>{content}</div>
                </div>
                {
                    checked && (<div className={"check-mark"}>✓</div>)
                }
            </div>
        );
    }
}

export default TextItem;
import React, {Component} from 'react';
import TextItem from './TextItem';

class TextItemList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.textList !== nextProps.textList;
    }

    render() {
        const { textList, onToggle, onRemove } = this.props;
        const textItems = textList.map(
            ({id, content, checked}) => (
                <TextItem
                    id={id}
                    content={content}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        )

        return (
            <div>
                {textItems}
            </div>
        );
    }
}

export default TextItemList;
import React, { Component } from 'react';
import TextTemplate from './components/TextTemplate';
import Form from './components/Form'
import TextItemList from './components/TextItemList'
import axios from 'axios';

class App extends Component {

    id = 3

    state = {
        input : '',
        textList: [
            { id : 0, content: '리액트 소개1', checked: false},
            { id : 1, content: '리액트 소개2', checked: true},
            { id : 2, content: '리액트 소개3', checked: false},
            ]
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleCreate = () => {
        const { input, textList } = this.state;
        this.setState({
            input: '',
            textList: textList.concat({
                id: this.id++,
                content: input,
                checked: false
            })
        })
    }

    handleRemove = (id) => {
        const { textList } = this.state;
        this.setState({
            textList: textList.filter(text => text.id !== id)
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const { textList } = this.state;
        const index = textList.findIndex(text => text.id === id);
        const selected = textList[index];

        const nextTextList = [...textList];

        nextTextList[index] = {
            ...selected,
            checked: !selected.checked
        }

        this.setState({
            textList: nextTextList
        })
    }

    render() {
        const fetchText = async () => {
            const response = await axios.get('http://localhost/text')
            console.log(response)
        }
        fetchText()

        const { input, textList } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove
        } = this;

        return (
            <TextTemplate form={(
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />)}>
                <TextItemList
                    textList={textList}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TextTemplate>
        );
    }
}

export default App;
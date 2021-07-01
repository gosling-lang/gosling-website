import { validateGoslingSpec, GoslingComponent } from "gosling.js";
import React from 'react'
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chrome";


const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
        }, wait);
    };
}

export class GoslingEditor extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            spec: this.props.spec
        };
        this.onChange = this.onChange.bind(this)
        this.reset = this.reset.bind(this)
        this.WAIT = 500
    }
    onChange(value, _){
        if (validateGoslingSpec(JSON.parse(this.stripJsonComments(value)))){
            this.setState({
                spec: value
            })
        }
    }
    stripJsonComments(data){
        let newData = data.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
        return newData
    }
    reset () {
        this.setState({spec: this.props.spec})
    }
    render(){
        return <>
            <div className='codeContainer' style={{position: "relative", width: "100%"}}>
                <AceEditor  mode="javascript"
                    theme="chrome"
                    onChange={debounce(this.onChange, this.WAIT)}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value = {this.state.spec}
                    showPrintMargin={false}
                    width = '100%'
                    style={{width:'100%', border: "solid 1px lightgray", borderRadius: "5px"}}
                    wrapEnabled={true}
                /> 
                 <button type="button" className='reset-button' onClick={this.reset}>reset</button>
            </div>
            <h4> Gosling Visualization</h4>
            <div style={{width:'100%', border: "solid 1px lightgray", borderRadius: "5px"}}>
            <GoslingComponent spec={JSON.parse(this.stripJsonComments(this.state.spec))}
                compiled={(spec, vConf) => { /* Callback function when compiled */ }}
            />
            </div>
        </>
    }
}


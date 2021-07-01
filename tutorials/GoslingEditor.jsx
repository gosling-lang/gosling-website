import { validateGoslingSpec, GoslingComponent } from "gosling.js";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";


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
            spec: JSON.stringify(this.props.spec, null, 2)
        };
        this.onChange = this.onChange.bind(this)
        this.reset = this.reset.bind(this)
        this.WAIT = 500
    }
    onChange(value, event){
        console.info(value)
        if (validateGoslingSpec(JSON.parse(this.stripJsonComments(value)))){
            this.setState({
                spec: value
            })
        }
    }
    stripJsonComments(data){
        data = data.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
        return data
    }
    reset () {
        this.setState({spec: JSON.stringify(this.props.spec, null, 2)})
    }
    render(){
        return <>
            <div className='codeContainer' style={{position: "relative", width: "100%"}}>
                <AceEditor  mode="javascript"
                    theme="tomorrow"
                    onChange={debounce(this.onChange, this.WAIT)}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value = {this.state.spec}
                    width = '100%'
                    style={{width:'100%', border: "solid 1px lightgray", borderRadius: "5px"}}
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


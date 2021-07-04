import { validateGoslingSpec, GoslingComponent } from "gosling.js";
import React from 'react'
import MonacoEditor from 'react-monaco-editor';
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
import GoslingSchema from './gosling.schema.json';
import './editor.css';


const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
}

export const stripJsonComments = (data) => {
    let newData = data.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
    return JSON.parse(newData)
}

export class GoslingEditor extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            code: this.props.spec,
            spec: stripJsonComments(this.props.spec),
            log: { state: 'success', message: '' },
            isDarkTheme: false
        };
        this.onChange = this.onChange.bind(this)
        this.reset = this.reset.bind(this)
        this.WAIT = 500
    }
    updateTheme() {
        const { isDarkTheme } = this.state
        Monaco.editor.defineTheme(
            'gosling',
            isDarkTheme
                ? {
                    base: 'vs-dark',
                    inherit: true,
                    rules: [
                        { token: 'string.key.json', foreground: '#eeeeee', fontStyle: 'bold' }, // all keys
                        { token: 'string.value.json', foreground: '#8BE9FD', fontStyle: 'bold' }, // all values
                        { token: 'number', foreground: '#FF79C6', fontStyle: 'bold' },
                        { token: 'keyword.json', foreground: '#FF79C6', fontStyle: 'bold' } // true and false
                    ],
                    colors: {
                        // ...
                    }
                }
                : {
                    base: 'vs', // vs, vs-dark, or hc-black
                    inherit: true,
                    // Complete rules: https://github.com/microsoft/vscode/blob/93028e44ea7752bd53e2471051acbe6362e157e9/src/vs/editor/standalone/common/themes.ts#L13
                    rules: [
                        { token: 'string.key.json', foreground: '#222222' }, // all keys
                        { token: 'string.value.json', foreground: '#035CC5' }, // all values
                        { token: 'number', foreground: '#E32A4F' },
                        { token: 'keyword.json', foreground: '#E32A4F' } // true and false
                    ],
                    colors: {
                        // ...
                    }
                }
        );
    }
    editorDidMount(monacoEditor) {
        monacoEditor.focus();

        // Workaround to make `actions.find` working with Monaco editor 0.22.0 (https://github.com/microsoft/monaco-editor/issues/2355)
        monacoEditor.createContextKey('editorIsOpen', true);
    }
    editorWillMount() {
        this.updateTheme();
        Monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            allowComments: true,
            enableSchemaRequest: true,
            validate: true,
            schemas: [
                {
                    uri: 'https://raw.githubusercontent.com/gosling-lang/gosling.js/master/schema/gosling.schema.json',
                    fileMatch: ['*'],
                    schema: GoslingSchema
                }
            ]
        });
        Monaco.languages.json.jsonDefaults.setModeConfiguration({
            diagnostics: true,
            documentFormattingEdits: false,
            documentRangeFormattingEdits: false,
            documentSymbols: true,
            completionItems: true,
            hovers: true,
            tokens: true,
            colors: true,
            foldingRanges: true,
            selectionRanges: false
        });
    }
    onChange(code, _) {
        try {
            const spec = stripJsonComments(code)
            const validateInfo = validateGoslingSpec(spec)

            if (validateInfo.state = 'success') {
                this.setState({
                    spec,
                    code,
                    log: validateInfo
                })
            } else {
                this.setState({ code, log: validateInfo })
            }
        } catch (e) {
            this.setState({
                code,
                log: { message: '✘ Cannnot parse the code.', state: 'error' }
            })
        }
    }

    reset() {
        this.setState({ spec: this.props.spec })
    }
    render() {
        const { log } = this.state
        return <div className='gosling-container'>
            <div className='codeContainer' style={{ position: "relative", width: "100%" }}>
                <MonacoEditor
                    height={500}
                    width='100%'
                    language='json'
                    value={this.state.code}
                    onChange={debounce(this.onChange, this.WAIT)}
                    theme="gosling"
                    editorDidMount={this.editorDidMount.bind(this)}
                    editorWillMount={this.editorWillMount.bind(this)}
                    options={{ minimap: { enabled: false }, wordWrap: 'on', scrollBeyondLastLine: false }}
                />
                <div className={`compile-message compile-message-${log.state}`}>{log.message}</div>
                <button type="button" className='reset-button' onClick={this.reset}>Reset</button>
            </div>
            <div style={{ margin: '5px 10px' }}>
                <span><b>You can interact with the visualization through zoom and pan, or modify it by changing the code above</b></span>
            </div>
            <div style={{ margin: '0 60px' }}>
                <GoslingComponent
                    spec={this.state.spec}
                    padding={20}
                    compiled={(spec, vConf) => { /* Callback function when compiled */ }}
                    className='gosling-component'
                />
            </div>
            {/* </div> */}
        </div>
    }
}


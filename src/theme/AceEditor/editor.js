import * as React from 'react';
var AceEditor = undefined
import clsx from 'clsx';
import styles from './styles.module.css';
import { setItem, getItem } from '../utils/storage';
import { DOM_ELEMENT_IDS } from './constants';


function PlaceholderEditor({ pyScript }) {
    return (
        <pre>
            <code>
                {pyScript}
            </code>
        </pre>
    )
}

const loadLibs = (callback) => {
    if (AceEditor) {
        return callback();
    }

    import('react-ace').then((aceModule) => {
        return Promise.all([
            import('ace-builds/src-noconflict/mode-python'),
            // import 'ace-builds/src-noconflict/theme-textmate';
            import('ace-builds/src-noconflict/theme-dracula'),

            // import('ace-builds/src-noconflict/snippets/python'),
            import("ace-builds/src-noconflict/ext-language_tools"),
        ]).then(obj => {
            AceEditor = aceModule.default;
            callback();
        });
    })
};

export default function Editor({
    onChange,
    execScript,
    pyScript,
    setPyScript,
    codeId }) {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        loadLibs(() => {
            setLoaded(true);
            setItem(codeId, { original: pyScript });
            const item = getItem(codeId)
            if (item.edited) {
                setPyScript(item.edited);
            }
        });
    }, [loaded]);
    const editorRef = React.useCallback(node => {
        if (node !== null) {
            if (node.editor) {
                node.editor.commands.addCommand({
                    // commands is array of key bindings.
                    name: 'execute',
                    bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                    exec: execScript
                });
            }
        }
        return () => {
            if (node && node.editor) {
                const cmd = node.editor.commands.commands['execute'];
                if (cmd) {
                    node.editor.commands.removeCommand(cmd, true);
                }
            }
        }
    }, []);

    return (
        <div className={clsx(styles.brythonCodeBlock, styles.editor)}>
            {
                loaded ? (
                    <AceEditor
                        className={styles.brythonEditor}
                        style={{
                            width: '100%',
                        }}
                        maxLines={36}
                        ref={editorRef}
                        mode="python"
                        theme="dracula"
                        keyBindings="VSCode"
                        onChange={onChange}
                        value={pyScript}
                        defaultValue={pyScript}
                        name={DOM_ELEMENT_IDS.aceEditor(codeId)}
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            displayIndentGuides: true,
                            vScrollBarAlwaysVisible: false,
                            highlightGutterLine: false
                        }}
                        showPrintMargin={false}
                        highlightActiveLine={false}
                        enableBasicAutocompletion
                        enableLiveAutocompletion={false}
                        enableSnippets={false}
                        showGutter
                    />
                ) : (
                    <PlaceholderEditor pyScript={pyScript} />
                )}
        </div>
    )
}
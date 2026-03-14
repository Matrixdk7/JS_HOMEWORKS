import React, {useEffect, useRef} from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = new Editor({ el: editorRef.current });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            if(onContentChange) onContentChange(content);
        });

        return () => editor.destroy();
    },[])


    return (
        <div ref={editorRef}></div>
    );
};

export default MarkdownEditor;
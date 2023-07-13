import '../../assets/css/editor.css'
import React, { useState, useEffect, useRef, ChangeEvent } from 'react'

interface IProp {
    name: string
    data: string
    onChange: (event: ChangeEvent<HTMLInputElement>, editor: any) => void
}

const ContentEditor = ({ name, data, onChange }: IProp) => {
    const editorRef = useRef<any>()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor } = editorRef.current || {}

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        }
        setEditorLoaded(true)
    }, [])

    return (
        <div>
            {editorLoaded ? (
                <CKEditor
                    className="mt-3 wrap-ckeditor"
                    name={name}
                    onChange={onChange}
                    data={data}
                    config={{
                        placeholder: 'Type the content here!',
                    }}
                    editor={ClassicEditor}
                />
            ) : (
                'loading...'
            )}
        </div>
    )
}

export default ContentEditor

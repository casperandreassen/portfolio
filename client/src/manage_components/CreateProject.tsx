import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../styles/createProject.css'
import draftToHtml from 'draftjs-to-html'
import { useState } from 'react'

const CreateProject = () => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())
  const [raw, setRaw] = useState('')
  const onEditorStateChange = (newState: EditorState) => {
    setEditorState(newState)
  }

  const seeHtml = () => {
    console.log('hello')
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    setRaw(draftToHtml(rawContentState))
  }

  return (
    <div className='createProjectWrapper'>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName='toolbarWrapper'
          wrapperClassName='inputWrapper'
          editorClassName='editorWrapper'
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <button onClick={seeHtml}>See html</button>
      <p>{raw}</p>
    </div>
  )
}

export default CreateProject

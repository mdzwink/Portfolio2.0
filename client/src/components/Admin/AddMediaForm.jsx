import axios from "axios";
import { useEffect, useState } from "react";
import './Form.css'

const AddMediaForm =() => {
  const [formMode, setFormMode] = useState('media')
  // addMedia form values
  const [file, setfile] = useState('')
  const [category, setCategory] = useState('')
  // addProject form values
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [projectImage, setProjectImage] = useState('')
  const [link, setLink] = useState('')
  
  useEffect(() => {
    console.log(category)
  }, [category])

  const handleFormModeClick = () => {
    formMode === 'media' ? setFormMode('project') : setFormMode('media')
  }

  const handleFormChange = (e) => {
    if (e.target.files) {
      setfile(e.target.files[0])
    }
  }
  const submitNewMedia = (e) => {
    e.preventDefault()
    if (!file) return;
    console.log(file)
    const formData = new FormData()
    formData.append('new-image', file, 'new-image');

    axios.post('/test/upload', { body: formData,
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
    // .then(res=> res.json())
    .then(res=> console.log(res))
    .catch(err=> console.log('ERROR-AMF>>>',err))
    // validation/setError
    // POST{
				// await file2Base64(resumeFile[0]);
  }
  const submitNewProject = (e) => {
    e.preventDefault()
    console.log()
    // validation/setError
    // POST
  }
  

  return (
    <form encType="multipart/form-data">
      <section className="category">
        <div className={formMode === 'media' ? "imagery active" : "imagery"} onClick={handleFormModeClick}>Imagery</div>
        <div className={formMode === 'project' ? "web active" : "web"} onClick={handleFormModeClick}>Web</div>
      </section>
      {formMode === 'media' && 
      <>
        {/* <label>Category</label>
        <select name="category" id="category" onChange={e => setCategory(e.target.value)}>
          <option value="">--Category--</option>
          <option value="nature">Nature</option>
          <option value="city">City</option>
        </select> */}
        <label>Image</label>
        <input type="file" name={'new-image'} onChange={handleFormChange} />
        <button className="add-imagery" onClick={e => submitNewMedia(e)}>Add/Upload Media</button>
      </>
      }
      {formMode === 'project' && 
      <>
        <input type="text" name="title" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="date" name="date" placeholder="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="file" name="gif" placeholder="gif" value={projectImage} onChange={e => setProjectImage(e.target.value)} />
        <input type="url" name="link" placeholder="link" value={link} onChange={e => setLink(e.target.value)} />
        <button className="add-web" onClick={e => submitNewProject(e)}>Add/Upload Project</button>
      </>
      }
    </form>
  )
}

export default AddMediaForm;
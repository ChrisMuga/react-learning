import React from "react";
import axios from "axios";

const fileInput = React.createRef();
function FileUpload(props) {
  function submit(e) {
    e.preventDefault();
    console.log(fileInput.current.files[0]);
    // file upload
    const formData = new FormData();
    formData.append("imageFile", fileInput.current.files[0]);
    const URL = "http://localhost:4000/api/file-upload";
    const CONFIG = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    axios.post(URL, formData, CONFIG);
    // file upload
  }
  return (
    <div className="row my-2 d-flex justify-content-center">
      <div className="col-md-6">
        <div className="alert alert-primary">File Upload</div>
        <input type="file" name="imageFile" placeholder="Select Image" ref={fileInput} />
        <button className="btn btn-success form-control mt-2" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default FileUpload;

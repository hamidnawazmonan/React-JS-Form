import './App.css';
import {React,useState} from 'react'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubjectChange = (sub)=>{
    setSubjects((prev)=>({
      ...prev,
      [sub]: !prev[sub],
    }))
  }
  const handleReset = ()=>{
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("Male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    })
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    )
  }

  return (
    <div className='App'>
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method='get'>
          <label htmlFor="firstname">First Name*</label>
          <input type="text" name='firstname' id='firstname' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter First Name' required/>
          <label htmlFor="lastname">Last Name*</label>
          <input type="text" name='lastname' id='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter Last Name' required/>
          <label htmlFor="email">Enter Email*</label>
          <input type="text" name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' required/>
          <label htmlFor="contact">Contact*</label>
          <input type="text" name='contact' id='contact' value={contact} onChange={(e)=>setContact(e.target.value)} placeholder='Enter Mobile Number' required/>
          <label htmlFor="gender">Gender*</label>
          <input type="radio" name='gender' id='male' value='male' onChange={(e)=>setGender(e.target.value)} checked={gender === 'male'} />
          Male
          <input type="radio" name='gender' id='female' value='female' onChange={(e)=>setGender(e.target.value)} checked={gender === 'female'} />
          Female
          <input type="radio" name='gender' id='other' value='other' onChange={(e)=>setGender(e.target.value)} checked={gender === 'other'} />
          Others
          <label htmlFor="subjects">Your best subjects</label>
          <input type="checkbox" name='lang' id='english' onChange={()=>handleSubjectChange("english")} checked={subjects.english} />
          English
          <input type="checkbox" name='lang' id='maths' onChange={()=>handleSubjectChange("maths")} checked={subjects.maths} />
          Maths
          <input type="checkbox" name='lang' id='physics' onChange={()=>handleSubjectChange("physics")} checked={subjects.physics} />
          Physics
          <label htmlFor="file">Upload Resume*</label>
          <input type="file" name='file' id='file' placeholder='Enter Upload File' onChange={(e)=>setResume(e.target.files[0])} required/>
          <label htmlFor="url">Enter URL</label>
          <input type="url" name='url' id='url' placeholder='Enter url' onChange={(e)=> setUrl(e.target.value)} required/>
          <label htmlFor="selection">Select your choice</label>
          <select name='select' id='select' value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
          <option value="" selected={selectedOption === ""} disabled>
            Select...
          </option>
          <optgroup label='Beginers'>
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JavaScript</option>
          </optgroup>
          <optgroup label='Advanced'>
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
            <option value="t">MongoDB</option>
          </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea name="about" id="about" cols="30" rows="10" placeholder='About yourself' onChange={(e) => setAbout(e.target.value)} required></textarea>
          <button type='reset' value="reset" onClick={()=>handleReset()}>Reset</button>
          <button type='submit' value="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
      </fieldset>

    </div>
   
  );
}

export default App;

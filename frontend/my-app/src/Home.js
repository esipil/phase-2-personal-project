import React, {useState} from 'react'

function Home() {

  const [formData, setFormData] = useState({
    comment:""
  });
  function handleChange (event) {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    });
  }

  function handleSubmit (event) {
    event.preventDefault();
    event.reset()
    fetch("http://localhost:3000/feedback", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        comment:formData.comment
      })
    })
  }

  return (
    <div className='home'>
      <div className='homePage'>
        <h3 className='welcome-note'>
          THE DINE
        </h3>
        <h2 className='slogan'>
          WHERE EVERY FLAVOUR TELLS A STORY
        </h2>
      </div>
      <div className='homeContent'>
        <p class="welcome">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet consectetur adipiscing elit ut aliquam purus. Urna molestie at elementum eu facilisis sed. Justo laoreet sit amet cursus sit. Faucibus et molestie ac feugiat sed. Tellus mauris a diam</p>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
        <p class="welcome">Enim nunc faucibus a pellentesque sit amet porttitor eget. Eget egestas purus viverra accumsan in nisl. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Id eu nisl nunc mi ipsum faucibus. Purus gravida quis blandit turpis cursus. Non diam phasellus vestibulum lorem sed risus ultricies tristique. .</p>
      </div>
      <div className="feedback">
        <h3  className='feedback-notice'>Tell Us How You Dined</h3>
        <form onClick={handleSubmit}>
          <label className='hhh'> we value your feedback.uykjhvb kjhgncb 
            <input 
            type={"text"} 
            className="input"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            ></input>
          </label>
          <div className='button'>
          <button  type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
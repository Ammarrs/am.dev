import "./Contact.css"

function Contact() {
  return (
    <div className="center flex">
      <div className="section">
        <div className="section-name">
          <div>// 05_contact</div>
        </div>
        <h1 className="title">Get in touch</h1>
        <div className="subtitle contact-sub">Open to full-time roles and interesting conversations</div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="available-badge">
              <div className="available-dot"></div>
              <div className="available-text">open to work — full-time</div>
            </div>
            <div className="contact-link">
              <p className="contact-link-name">email</p>
              <p className="contact-link-text">ammarsmeshaal@gmail.com</p>
            </div>
            <div className="contact-link">
              <p className="contact-link-name">github</p>
              <p className="contact-link-text">github.com/Ammarrs</p>
            </div>
            <div className="contact-link">
              <p className="contact-link-name">linkedin</p>
              <p className="contact-link-text">linkedin.com/in/ammar-meshaal</p>
            </div>
            <div className="contact-link">
              <p className="contact-link-name">resume</p>
              <p className="contact-link-text">Ammar_meshaal_resume.pdf</p>
            </div>
          </div>
          <div className="send-message">
            <form className="contact-form" action="">
              <div className="form-row">
                <div className="form-section">
                  <label className="form-label" htmlFor="">name</label>
                  <input className="form-input" type="text" placeholder="your_name" />
                </div>
                <div className="form-section">
                  <label className="form-label" htmlFor="">email</label>
                  <input className="form-input" type="text" placeholder="you@email.com" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-section">
                  <label htmlFor="" className="form-label">subject</label>
                  <input type="text" className="form-input" placeholder="role / opportunity / collab" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-section">
                  <label htmlFor="" className="form-label">message</label>
                  <textarea name="" id="" className="form-text-area" placeholder="Hey, we're looking for a software engineer who..."></textarea>
                </div>
              </div>
              <div className="form-group">
                <button className="send-btn">./send_message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
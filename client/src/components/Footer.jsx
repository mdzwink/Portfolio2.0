
const Footer = () => {
  const time = new Date().toISOString();
  
  return (
    <footer className="footer-container">
    <div className="footer-grid">
      <div className="time">{time}</div>
      <div className="time">© Muhammad Zw inc 2023</div>
    </div>
  </footer>
  )
}

export default Footer;
function WhatsAppButton() {
  const phoneNumber = '03331234567' // replace with your WhatsApp number
  const message = encodeURIComponent('Hello, I would like to schedule a consultation.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-button">
      <span className="whatsapp-icon">💬</span>
      <span className="whatsapp-label">Chat on WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

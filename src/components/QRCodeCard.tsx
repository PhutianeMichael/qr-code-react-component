import './QRCodeCard.css';
import QRCodeImage from '../assets/image-qr-code.png';

const QRCodeCard = () => (
  <div className="qr-container">
    <img src={QRCodeImage} alt="QR code linking to Frontend Mentor" className="qr-image" />
    <h1 className="qr-title">Improve your front-end skills by building projects</h1>
    <p className="qr-description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </div>
);

export default QRCodeCard;

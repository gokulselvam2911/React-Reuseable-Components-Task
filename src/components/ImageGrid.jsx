import PropTypes from 'prop-types';
import './ImageGrid.css';

const ImageGrid = ({ imageSrc, iconClass, heading, description, imgClass }) => {
  return (
    <div className="info-card">
      <div>{imageSrc ? (
        <img src={imageSrc} alt={heading} className={`info-card-image ${imgClass}`} />
      ) : (
        <i className={`bi ${iconClass} info-card-icon`}></i>
      )}</div>
      <h2 className="info-card-heading">{heading}</h2>
      <p className="info-card-description">{description}</p>
    </div>
  );
};

ImageGrid.propTypes = {
  imageSrc: PropTypes.string,  // Optional image source if icon is not provided
  iconClass: PropTypes.string, // Optional Bootstrap icon class
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgClass: PropTypes.string  // Additional class names for image
};

export default ImageGrid;

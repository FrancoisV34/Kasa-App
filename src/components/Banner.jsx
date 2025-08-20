function Banner({ image, alt, opacifier }) {
  return (
    <div className="welcome-Pic-Text">
      <img src={image} alt={alt} />
      {opacifier && opacifier}
    </div>
  );
}
export default Banner;

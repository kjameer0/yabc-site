import StyledHeroImage from './StyledHeroImage';

export default function HeroImage({ imgLink, text, color, id }: { imgLink: string; text: string[]; color: 'white' | 'black'; id: string }) {
  return (
    <StyledHeroImage id={id} className="hero-image-container" color={color} $imgLink={imgLink}>
      <div className='words-wrapper'>
        {text.map((word) => (
          <p className="single-word" key={word}>
            {word}
          </p>
        ))}
      </div>
    </StyledHeroImage>
  );
}

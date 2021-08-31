import LogoSvg from './logo.svg';
import StarSvg from './star.svg';

export const Logo = () => <img src={LogoSvg} alt="Logo" />;
export const Star = () => <img src={StarSvg} alt="Star" />;

/* eslint-disable-next-line */
export interface FeatureProps {
  shape: 'logo' | 'star';
}

export function Feature(props: FeatureProps) {
  return (
    <div>
      {(props.shape === 'logo') ? (
        <Logo />
      ):(
        <Star />
      )}
    </div>
  );
}

export default Feature;




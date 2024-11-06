import { Link } from 'react-router-dom';
import Footbar from './UI/Footbar';

export default function Footer() {
  return (
    <Footbar
      links={[
        <Link key={1} className="text-light fs-5" to="https://github.com/jesseswanton/">
          My Github &nbsp; &nbsp; <img src="https://github.com/jesseswanton/reactportfolio/blob/main/assets/github.png" alt="Github logo" width="50" height="50" />
        </Link>,
      ]}
    />
  );
}

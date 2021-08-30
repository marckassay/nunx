import './page.module.css';
import { ReactComponent as Logo } from './logo.svg';
import {Feature} from '@nunx/feature';

/* eslint-disable-next-line */
export interface PageProps {
  title: string
}

export function Page(props: PageProps) {
  return (
    <div>
      <h1>Welcome to Page!</h1>
      <h2>props.title</h2>
      <div>
        <Feature />
      </div>
    </div>
  );
}

export default Page;

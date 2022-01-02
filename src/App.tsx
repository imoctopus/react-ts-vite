import ReactDom from 'react-dom';
import Logo from '@/assets/logo.png';
import HelloWorld from '@/components/HelloWorld/HelloWorld';
import styles from './App.module.less';

export default function App() {
  console.log(ReactDom);

  return (
    <main className={styles.main}>
      <img className={styles.logo} alt="React logo" width="400px" src={Logo} />
      <HelloWorld msg="Hello React + TypeScript + ViteHello React + TypeScript + ViteHello React + TypeScript + ViteHello React + TypeScript + ViteHello React + TypeScript + ViteHello React + TypeScript + Vite" />
    </main>
  );
}

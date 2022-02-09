import React from 'react';
import Image from 'next/image';
// import styles from './Header.module.css';

export function Header() {
  return (
    <header>
      <a href=''>
        Powered by{' '}
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </header>
  );
}

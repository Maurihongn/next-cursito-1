import Link from 'next/link';
import { Routes } from '@/models';
import { Navigator } from '@/components';

export default function Home() {
  return (
    <>
      <h1>Welcome to Rick and Morty app</h1>
      <h2>What do you want to see?</h2>
      <Navigator
        pathNames={[Routes.CHARACTERS, Routes.LOCATIONS, Routes.HOME]}
      />
    </>
  );
}

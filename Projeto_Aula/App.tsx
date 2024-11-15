import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routers } from './routes';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <Routers />
    </>
  );
}
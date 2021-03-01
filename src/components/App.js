import React from 'react';
import withTheme from '../hocs/withTheme';
import './App.scss';
import { Articles } from './Articles';
import { Button } from './Button';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { ThemePickerButton } from './ThemePickerButton';

const App = (props) => {
  return (
    <>
      <Header>
        <ThemePickerButton theme={props.theme} themeToggler={props.themeToggler} />
      </Header>
      <Articles />
      <InputForm />
      <Button />
    </>
  );
}

const ThemedHomeComponent = withTheme(App);

export default ThemedHomeComponent;

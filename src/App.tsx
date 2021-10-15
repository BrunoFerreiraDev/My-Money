import { useState } from "react";
import { Dashboard } from "./components/Dashboard/indesx";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./hooks/useTransactions";
import { ThemeProvider } from 'styled-components'
import { ligthTheme, darkTheme } from './themes'
import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')//acessibilidade

export function App() {
  const [isnewTransactionModalOpen, setIsnewTransactionModalOpen] = useState(false);
  const [theme, setTheme] = useState('ligth');

  const themeTooggle = () => {
    theme === 'ligth' ? setTheme('dark') : setTheme('ligth')
  }


  function handleOpenNewTransactionModal() {
    setIsnewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsnewTransactionModalOpen(false)
  }


  return (
    <ThemeProvider theme={theme === 'ligth' ? ligthTheme : darkTheme}>
      <TransactionsProvider >
        <GlobalStyle />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard
          onThemeTooggle={themeTooggle}
          stateTheme={theme}
        />
        <NewTransactionModal
          isOpen={isnewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
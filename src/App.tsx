import { useState } from "react";
import { Dashboard } from "./components/Dashboard/indesx";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./hooks/useTransactions";
import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')//acessibilidade

export function App() {
  const [isnewTransactionModalOpen, setIsnewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsnewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsnewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider >
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isnewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
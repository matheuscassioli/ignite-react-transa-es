import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="50%">{item.description}</td>
                  <td>
                    <PriceHighLight variant={item.type}>
                      {item.price}
                    </PriceHighLight>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};

export default Transactions;

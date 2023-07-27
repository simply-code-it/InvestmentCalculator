import { useState } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Table from "./components/table/Table";

function App() {
  // const [results, setResults] = useState([]);
  const [results, setResults] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState(0);
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    setInitialInvestment(currentSavings);
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {results.length > 0 && (
        <Table results={results} initialInvestment={initialInvestment} />
      )}
      {/* {results.length == 0 && <p>No results available!</p>} */}
      {results.length == 0 && (
        <p style={{ textAlign: "center" }}>No results available!</p>
      )}
    </div>
  );
}

export default App;

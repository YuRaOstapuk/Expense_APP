import React, { useState } from "react";
import {
  RightSide,
  LeftSide,
  Center,
  Wrapper,
  PageContainer,
} from "./index.style";

import SelectCategory from "../../components/select/index";
import { InterestingButton } from "../../components/button/index";
import { InterestingInput } from "../../components/input/index";
import expensesData from "../../mocks/index";

const ExpensesTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(expensesData);
  const [newExpenseAmount, setNewExpenseAmount] = useState("");
  const [newExpenseDate, setNewExpenseDate] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddExpense = () => {
    if (selectedCategory && newExpenseAmount) {
      try {
        const amount = parseFloat(newExpenseAmount);
        if (isNaN(amount)) {
          throw new Error("Сумма должна быть числом");
        }
        const newExpense = {
          id: expenses.length + 1,
          category: selectedCategory,
          amount,
          date: new Date().toISOString().slice(0, 10),
        };

        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        setNewExpenseAmount("");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    selectedCategory ? expense.category === selectedCategory : true
  );

  return (
    <PageContainer>
      <Wrapper>
        <LeftSide>
          <h2>Категории</h2>
          <SelectCategory size="s" onChange={handleCategoryChange} />
        </LeftSide>
        <Center>
          <h2>Добавить расход</h2>
          <InterestingInput
            type="number"
            placeholder="Сумма"
            value={newExpenseAmount}
            onChange={(e) => setNewExpenseAmount(e.target.value)}
          />
          <InterestingInput
            type="date"
            placeholder="дата"
            value={newExpenseDate}
            onChange={(e) => setNewExpenseDate(e.target.value)}
          />
          <InterestingButton size="s" onClick={handleAddExpense}>
            Добавить
          </InterestingButton>
        </Center>
        <RightSide>
          <h2>Траты по категории: {selectedCategory}</h2>
          {filteredExpenses.map((expense) => (
            <div key={expense.id}>
              <p>{expense.date}</p>
              <p>{expense.amount} руб.</p>
              <p>{expense.category}</p>
              <InterestingButton
                size="s"
                onClick={() => handleDeleteExpense(expense.id)}
              >
                Удалить
              </InterestingButton>
            </div>
          ))}
        </RightSide>
      </Wrapper>
    </PageContainer>
  );
};

export default ExpensesTracker;



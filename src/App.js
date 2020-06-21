import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <section
        id="body"
      >
        <div
          id="overview"
          className="col-lg-3 col-12"
        >
          <ul
            id="overviewUl"
            className="col-12"
          >
            <li>
              <div
                id="income"
              >
                <section
                  className="col overviewHeadings"
                >
                  <span>
                    Income
                  </span>
                  <button 
                    onClick={incomeBtn}
                  >
                    <i 
                      className="fa fa-cog"
                    >
                    </i>
                  </button>
                </section>
                <section
                  className="overviewSpan"
                >
                  <Income num={myIncomeAmmount}></Income>
                </section>
              </div>
            </li>
            <li>
              <div
                id="expense"
              >
                <section
                  className="col overviewHeadings"
                >
                  <span>
                    Expense
                  </span>
                  <button
                    onClick={expenseBtn}
                  >
                    <i 
                      className="fa fa-cog"
                    >
                    </i>
                  </button>
                </section>
                <section
                  className="overviewSpan"
                >
                  <span
                    id=""
                  ></span>
                  Rs.
                </section>
              </div>
            </li>
          </ul>
        </div>
        <div
          id="details"
          className="col-lg-9 col-12"
        >
          <div
            id="incomeDetails"
          >
            <IncomeDetails>
            </IncomeDetails>
            <button
              onClick={expenditureBtn}
              id="summaryBtn"
            >
              <i 
                className="fa fa-history"
              >
              </i>
              History
            </button>
          </div>
          <div
            id="expenseDetails"
          >
            <ExpenseDetails>
            </ExpenseDetails>
            <button
              onClick={expenditureBtn}
              id="summaryBtn"
            >
              <i 
                className="fa fa-history"
              >
              </i>
              History
            </button>
          </div>
          <div
            id="expenditureDetails"
          >
            <ExpenditureDetails>
            </ExpenditureDetails>
          </div>
        </div>
      </section>
      
      <section
        id="footer"
      >
        <div>
        </div>
      </section>
    </div>
  );
}

export default App;

document.getElementById('btn-deposit').addEventListener('click', function(){
    
      const newDepositAmount = getInputFieldValueById("deposit-field");
      const previousDepositTotal = getTextElementValueById("deposit-total");
    
      // calculate new deposit total
      const newDepositTotal = previousDepositTotal + newDepositAmount;
      // set deposit total value
      setTextElementValueById("deposit-total", newDepositTotal);
    
      // get previous balance by using the function
      const previousBalanceTotal = getTextElementValueById("balance-total");
      const newBalanceTotal = previousBalanceTotal + newDepositAmount;
      setTextElementValueById("balance-total", newBalanceTotal);
  })
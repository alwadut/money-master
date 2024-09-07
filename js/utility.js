
 
document.getElementById('calculat').addEventListener('click',function(){
    const income = document.getElementById('income');
    const incomeString = income.value;
    const incomeTotal = parseFloat(incomeString);
    
    
    
    const foodCost = document.getElementById('food');
       const rantCost = document.getElementById('rent');
       const clothsCost = document.getElementById('cloths');

       
       const foodCostString = foodCost.value;
       const totalFoodCost = parseFloat(foodCostString);
       
       const rantCostString = rantCost.value;
       const totalRantCost = parseFloat(rantCostString);
       
       const clothsCostString = clothsCost.value;
       const totalClothCost = parseFloat(clothsCostString);
    
       const expenceTotal= totalClothCost+totalFoodCost+totalRantCost;
       
      
       const totalExpence = document.getElementById('expence');
       const totalExpenceString = totalExpence;
       const newTotalExpence = totalExpenceString;
        newTotalExpence.innerText = expenceTotal;

      
        
        const newBalanceTotal = incomeTotal - expenceTotal; 
        // console.log(newBalanceTotal);
        
        const balance = document.getElementById('balance');
        const balanceString = balance;
        const newBalance = balanceString;
        newBalance.innerText = newBalanceTotal;
        
       
})

document.getElementById('saving').addEventListener('click',function(){

    const balance = document.getElementById('balance');
    const previousBalance = parseFloat(balance.innerText);
    
    const saveElement = document.getElementById('saving-input');
    const saveElementString = parseFloat(saveElement.value);
    
    const saveTotal = saveElementString / 100;
    const savingAmount = saveTotal * previousBalance;
    
    const savingAcountElement = document.getElementById('saving-acount');
    const savingAcountElementString = savingAcountElement;
    const savingAcountTotal = savingAcountElementString;
    savingAcountTotal.innerText = savingAmount;

    

    const newReminingBalance = previousBalance - savingAcountTotal.innerText;
    
    
    
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = newReminingBalance;
    
    
    
    
})

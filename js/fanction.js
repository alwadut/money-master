function getElementByExpence(expenceId){
    const expence = document.getElementById(expenceId);
    const expenceString = expence.value;
    const totalExpence = parseFloat(expenceString);
    
    return totalExpence;

}
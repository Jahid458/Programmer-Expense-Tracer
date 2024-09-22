//getting all the value in global variable 

//get value function
function getInputValueById(id){
   return  parseFloat(document.getElementById(id).value); 
}

function showError(id){
    document.getElementById(id).classList.remove("hidden");
}

function formatCurrency(amount){
  return `${amount.toFixed(2)}`
}


function addToHistory(income, totalExpenses, balance){
  const historyItem = document.createElement('div');
  historyItem.classList.add = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
  historyItem.innerHTML = `
     <p class="text-xs text-gray-500">Serial: ${count}</p>
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
     <p class="text-xs text-gray-500">Income: ${formatCurrency(income)}</p>
     <p class="text-xs text-gray-500">Expense: ${formatCurrency(totalExpenses)}</p>
     <p class="text-xs text-gray-500">Balance: ${formatCurrency(balance)}</p>`;
     const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild); // insert ki dibo ,mkothao dibo

}



let count = 0; 
//add event listener for calculate button
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function(){
  count += 1
  // const income = parseFloat(document.getElementById("income").value);

  // const software = parseFloat(document.getElementById("software").value);
  // const courses = parseFloat(document.getElementById("courses").value);
  // const internet = parseFloat(document.getElementById("internet").value);

  // get value from function 
  const income = getInputValueById('income');
  const software = getInputValueById('software');
  const courses = getInputValueById('courses');
  const internet = getInputValueById('internet');

    if(income < 0 || isNaN(income)){
            // document.getElementById('income-error').classList.remove('hidden');
            showError('income-error')
            return
    }
   
    if(software < 0 || isNaN(software)){
            // document.getElementById('software-error').classList.remove('hidden');
            showError('software-error')
            return
    }
    if(courses < 0 || isNaN(courses)){
            // document.getElementById('courses-error').classList.remove('hidden');
            showError('courses-error')
            return
    }
    if(internet < 0 || isNaN(internet)){
            // document.getElementById('internet-error').classList.remove('hidden');
            showError('internet-error')
            return
    }
   
    

   const totalExpenses = software + courses + internet ; 
   const balance = income - totalExpenses ; 

    if(totalExpenses > income){
      // document.getElementById('logic-error').classList.remove("hidden");
      showError('logic-error')

      return
    }

   const totalExpensesElement = document.getElementById('total-expenses');
   totalExpensesElement.innerText = totalExpenses.toFixed(2);
   
   const balanceElem = document.getElementById('balance');
   balanceElem.innerText = balance.toFixed(2); 

   const results = document.getElementById('results');
   results.classList.remove('hidden');


   //history
  //  const historyItem = document.createElement('div');
  //  historyItem.classList.add = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
  //  historyItem.innerHTML = `
  //     <p class="text-xs text-gray-500">Serial: ${count}</p>
  //     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  //     <p class="text-xs text-gray-500">Income: ${formatCurrency(income)}</p>
  //     <p class="text-xs text-gray-500">Expense: ${formatCurrency(totalExpenses)}</p>
  //     <p class="text-xs text-gray-500">Balance: ${formatCurrency(balance)}</p>`;
  //     const historyContainer = document.getElementById('history-list');
  //     historyContainer.insertBefore(historyItem, historyContainer.firstChild); // insert ki dibo ,mkothao dibo
  addToHistory(income,totalExpenses,balance)

})
//add event listener for savings button


const calculateSavingsButton = document.getElementById("calculate-savings")
calculateSavingsButton.addEventListener('click',function(){

  const savingPercentant = parseFloat(document.getElementById('savings').value);
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  


  const totalExpenses = software + courses + internet ; 
  const balance = income - totalExpenses ; 

  const savingAmount = (savingPercentant  * balance) / 100 ;
  
  const remainingBalance = balance - savingAmount;

  const savingElement = document.getElementById('savings-amount');
  savingElement.innerText = savingAmount.toFixed(2);

  const remainingElem = document.getElementById('remaining-balance');
  remainingElem.innerText = remainingBalance.toFixed(2)

})


// History Tab Functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){
  historyTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
  historyTab.classList.remove('text-gray-600')
  assistantTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
  assistantTab.classList.add('text-gray-600');

  document.getElementById("expense-form").classList.add('hidden');
  document.getElementById("history-section").classList.remove('hidden'); 

})

assistantTab.addEventListener("click", function(){
   assistantTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
   historyTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
   document.getElementById("expense-form").classList.remove('hidden');
  document.getElementById("history-section").classList.add('hidden');


})

//live validate for input

// document.getElementById('income').addEventListener("input", function(){
//   const inputValue = parseFloat(document.getElementById("income").value);
//   // console.log(inputValue);
//   if(isNaN(inputValue) || inputValue <= 0){
//     document.getElementById('income-error').classList.remove('hidden');
//     return
//   }
// })
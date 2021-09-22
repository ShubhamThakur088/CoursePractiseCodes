class Calculator
{
    constructor(previousOperandTextElement,currentOperandTextElement)//To take input
    {
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        this.clear();
    }
    
    clear()
    {
        this.currentOperand='';//default input is String
        this.previousOperand='';//default input is String
        this.operation=undefined;
    }
    
    delete()
    {
        this.currentOperand=this.currentOperand.toString().slice(0,-1);//if a value is a two or more than two digit value then to eliminate from
                                                                       //the last slice() with negative index is used. 
    }
    
    appendNumber(number)
    {
        if(number==='.' && this.currentOperand.includes('.'))//this condition restricts adding of not more than one dot(.)
        {
            return;
        }
        this.currentOperand=this.currentOperand.toString()+number.toString();//to append numbers, they are converted to string because
                                                                             //if number is not converted to string then 1+1 will 
                                                                             //become 2 but not 1+1
    }
    
    chooseOperation(operation)
    {
        if(this.currentOperand==='')
        {
            return;
        }
        if(this.previousOperand!='')//after calculation result is displayed, if user wishes to continue
        {                            //+,-,* or / with the result then from the result further operation is continued
            this.compute();
        }
        
        this.operation=operation;
        this.previousOperand=this.currentOperand;
        this.currentOperand='';
    }
    
    compute()
    {
        let computation;
        const prev=parseFloat(this.previousOperand);//converting string to a number
        const current=parseFloat(this.currentOperand);//converting string to a number
        if(isNaN(prev) || isNaN(current))
        {
            return;
        }
        
        switch(this.operation)
        {
            case '+':computation=prev+current;break;
            case '-':computation=prev-current;break;
            case '*':computation=prev*current;break;
            case '/':computation=prev/current;break;            
        }
        
        this.currentOperand=computation;//calculated result is stored in current operand
        this.operation=undefined;
        this.previousOperand='';
    }
    
    updateDisplay()
    {
        this.currentOperandTextElement.innerText=this.currentOperand;
        if(this.operation!=null)
        {
            this.previousOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`;
        }
        
        else
        {
            this.previousOperandTextElement.innerHTML='';//after calculation removes previous number from the display
                                                         //prints result
        }
    }
}

const numberButtons=document.querySelectorAll('[data-number]');//get all the digits
const operationButtons=document.querySelectorAll('[data-operation]');//get all the operations
const equalsButton=document.querySelector('[data-equals]');//= button
const deleteButton=document.querySelector('[data-delete]');
const allClearButton=document.querySelector('[data-all-clear]');
const previousOperandTextElement=document.querySelector('[data-previous-operand]');
const currentOperandTextElement=document.querySelector('[data-current-operand]');


const calculator=new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click',button=>{
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click',button=>{
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click',button=>{
    calculator.delete();
    calculator.updateDisplay();
});
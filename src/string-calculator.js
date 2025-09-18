function add(numbers){
    if(numbers === ""){
        return 0;
    }else{
        const newNumbers = numbers.replace(/\n/g,','); // replace /n wiht ,
        const digits = newNumbers.split(',').map(Number);
        
        let sum = 0;
        for(const num of digits){
            sum += num;
        }

        return sum;
    }
}

module.exports ={ add }
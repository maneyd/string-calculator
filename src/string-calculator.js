function add(numbers){
    if(numbers === ""){
        return 0;
    }else{

        let delimiters = [",","\n"];

        if(numbers.startsWith("//")){
            const parts = numbers.split('\n');
            const customDelimiter = parts[0][2];
            delimiters.push(customDelimiter);
            numbers = parts[1];
        }

        for(const i of delimiters){
            numbers = numbers.split(i).join(",");
        }

        const digits = numbers.split(',').map(Number);
        
        let sum = 0;
        for(const num of digits){
            sum += num;
        }

        return sum;
    }
}

module.exports ={ add }
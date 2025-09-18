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
        
        let negatives = [];

        let sum = 0;
        for(const num of digits){
            if(num < 0){
                negatives.push(num);
            }else if(num <= 1000){
                sum += num;
            }
        }

        if(negatives.length == 1){
            throw new Error("negatives are not allowed");
        }else if(negatives.length > 1){
            throw new Error("negative numbers not allowed: " + negatives.join(", "));
        }

        return sum;
    }
}

module.exports ={ add }
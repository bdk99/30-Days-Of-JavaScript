//Provided Arrays and Objects
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Europia']
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const products = [ { product: 'banana', price: 3 },
                       { product: 'mango', price: 6 },
                       { product: 'potato', price: ' ' },
                       { product: 'avocado', price: 8 },
                       { product: 'coffee', price: 10 },
                       { product: 'tea', price: '' }]

//Exercises Level 1
    //Exercise 1 -- Explain the difference between forEach, map, filter, and reduce.
        //forEach --> only used with arrays, it takes a callback function with elements, index, and array itself.
            //Does something for each element in the array (Iterates through arrays)
    
        //Map --> Replaces one thing for each element in the array
            //Returns a new array from original array (Iterates and modifies array elements)

        //Filter --> Filters out items which full fill conditons and returns new array
            
        //Reduce --> Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. 
            //It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value

    //Exercise 2 -- Define a callback function before you use it in forEach, map, filter or reduce.
        const callback = (n) => {
            return n ** 2   
        }
        numbers.forEach(function (element, index){
            numbers[index] = callback(element);
        });
        console.log(numbers);

        let newNumbers = numbers.map((num) => callback(num));
        console.log(newNumbers);

        const numbersNew = numbers.filter((num) => 
            callback(num)
        );
        console.log(numbersNew);

        numbers.reduce((acc, cur) => {
            callback(acc);
        });
        console.log(numbers);

    //Exercise 3 -- Use forEach to console.log each country in the countries array.
        countries.forEach(function (element)
        {
            console.log(element);
        });

    //Exercise 4 -- Use forEach to console.log each name in the names array.
        names.forEach(function (element)
        {
            console.log(element);
        });    

    //Exercise 5 -- Use forEach to console.log each number in the numbers array.
        numbers.forEach(function (element){
            console.log(element);
        });
        
    //Exercise 6 -- Use map to create a new array by changing each country to uppercase in the countries array.
        let upperCaseCountries = countries.map((countries) => (countries).toUpperCase());
        console.log(upperCaseCountries);

    //Exercise 7 -- Use map to create an array of countries length from countries array.
        let countriesLength = countries.map((countries) => (countries.length));
        console.log(countriesLength);

    //Exercise 8 -- Use map to create a new array by changing each number to square in the numbers array
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let squaredNumbers = numbers.map((numbers) => Math.pow(numbers, 2));
        console.log(squaredNumbers);

    //Exercise 9 -- Use map to change to each name to uppercase in the names array
        let newNames = names.map((names) => names.toUpperCase());
        console.log(newNames);

    //Exercise 10 -- Use map to map the products array to its corresponding prices
        let productPriceMatch = products.map((item) => {
            const container = {};
            if(item.price == '' || item.price == ' ')
                container[item.product] = 'Unknown';
            else
                container[item.product] = item.price;
            return container;
        });
        console.log(productPriceMatch);

    //Exercise 11 -- Use filter to filter out countries containing land.
            const landCountries = countries.filter((country) => 
            country.includes('land') || country.includes('Land')
        );
        console.log(landCountries);
 
    //Exercise 12 -- Use filter to filter out countries having six characters.
        let sixCharCountries = countries.filter((country) => 
            country.length == 6
        );
        console.log(sixCharCountries);

    //Exercise 13 -- Use filter to filter out countries containing six letters and more in the country array.
        let sixOrMoreCharCountries = countries.filter((country) => 
            country.length >= 6
        );
        console.log(sixOrMoreCharCountries);

    //Exercise 14 -- Use filter to filter out country start with 'E';
        let eCountries = countries.filter((country) =>
            country.startsWith('E')
        );
        console.log(eCountries);

    //Exercise 15 -- Use filter to filter out only prices with values.
        let valuesWithProducts = products.filter((item) => (typeof(item.price) == 'number'));
        console.log(valuesWithProducts);

    //Exercise 16 -- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
        function getStringLists(array)
        {
            let stringItems = array.filter((item) => (typeof(item) == 'string'));
            return stringItems;
        }
        console.log(getStringLists([1,2,3,'myString',4,'yourString']));

    //Exercise 17 -- Use reduce to sum all the numbers in the numbers array.
        const sum = numbers.reduce((sum, cur) => sum+cur,0);
        console.log(sum);

    //Exercise 18 -- Use reduce to concatenate all the countries and to produce this sentence: 
        //Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
        //PROVIDED: ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Europia']
        const finalString = countries.reduce(function(accumulator, currentValue, index, array) {
            if(index == 4)
                return accumulator + " and " + currentValue;
            else if(index == 5)
                return accumulator + " are north European countries";
            else
                return accumulator + ", " +currentValue;
        },'Europia');
        console.log(finalString);

    //Exercise 19 -- Explain the difference between some and every
        //some --> Checks to see if SOME of the elements are similar in one aspect. It returns boolean
        //every --> Checks to see if ALL the elements are similar in one aspect. It returns boolean

    //Exercise 20 -- Use some to check if some names' length greater than seven in names array
        const areSomeTrue = names.some((name) =>  (name.length > 7));
        console.log(areSomeTrue);

    //Exercise 21 -- Use every to check if all the countries contain the word land
        const allCountriesContainLand = countries.every((country) => (country.includes('land')));
        console.log(allCountriesContainLand);

    //Exercise 22 -- Explain the difference between find and findIndex.
        //find --> Returns the VALUE of the first element which satisfies the condition    
        //findIndex --> Returns the INDEX of the first element which satisfies the condition

    //Exercise 23 -- Use find to find the first country containing only six letters in the countries array
        const firstCountryContainingSix = countries.find((country) => (country.length==6));    
        console.log(firstCountryContainingSix);

    //Exercise 24 -- Use findIndex to find the position of the first country containing only six letters in the countries array
        const firstCountryIndexContainingSix = countries.findIndex((country) => (country.length==6));
        console.log(firstCountryIndexContainingSix);

    //Exercise 25 -- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1
        const norwayPosition = countries.findIndex((country) => (country=='Norway'));
        console.log(norwayPosition); 

    //Exercise 26 -- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1
        const russiaPosition = countries.findIndex((country) => (country=='Russia'));
        console.log(russiaPosition); 

//Exercises Level 2
    //Exercise 1 -- Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
        //products.map((product) => (products.reduce((price) => (price))));

    //Exercise 2 -- Find the sum of price of products using only reduce reduce(callback))
        const sumPrice = products.reduce((acc, item) => {
            
            if(item.price =='' || item.price == ' ')
                return acc + 0;
            else
                return acc + item.price;
        }, 0);
        console.log(sumPrice);

    //Exercise 3 -- Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
        function categorizeCountries(string)
        {
            let tempArray = countries3.filter((country) => country.includes(string))
            return tempArray;
        }
        console.log(categorizeCountries('land'));

    //Exercise 4 -- Create a function which returns an array of objects, which is the letter and the number of times the letter is used to start with a name of a country.
        
    //Exercise 5 -- Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
        
    //Exercise 6 -- Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

    //Exercise 7 -- Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

//Exercises Level 3
    //Exercise 1 -- Use the countries information, in the data folder. Sort countries by name, by capital, by population




    //Exercise 2 -- *** Find the 10 most spoken languages:

    // // Your output should look like this:
    // console.log(mostSpokenLanguages(countries, 10))
    // [
    // {country: 'English',count:91},
    // {country: 'French',count:45},
    // {country: 'Arabic',count:25},
    // {country: 'Spanish',count:24},
    // {country:'Russian',count:9},
    // {country:'Portuguese', count:9},
    // {country:'Dutch',count:8},
    // {country:'German',count:7},
    // {country:'Chinese',count:5},
    // {country:'Swahili',count:4}
    // ]

    // // Your output should look like this
    // console.log(mostSpokenLanguages(countries, 3))
    // [
    // {country: 'English',count: 91},
    // {country: 'French',count: 45},
    // {country: 'Arabic',count: 25},
    // ]```
    




    //Exercise 3 -- *** Use countries_data.js file create a function which create the ten most populated countries

    // console.log(mostPopulatedCountries(countries, 10))
    // [
    // {country: 'China', population: 1377422166},
    // {country: 'India', population: 1295210000},
    // {country: 'United States of America', population: 323947000},
    // {country: 'Indonesia', population: 258705000},
    // {country: 'Brazil', population: 206135893},
    // {country: 'Pakistan', population: 194125062},
    // {country: 'Nigeria', population: 186988000},
    // {country: 'Bangladesh', population: 161006790},
    // {country: 'Russian Federation', population: 146599183},
    // {country: 'Japan', population: 126960000}
    // ]

    // console.log(mostPopulatedCountries(countries, 3))
    // [
    // {country: 'China', population: 1377422166},
    // {country: 'India', population: 1295210000},
    // {country: 'United States of America', population: 323947000}
    // ]
    // ```
    
    
    


    //Exercise 4 -- *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

    // const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    // console.log('Count:', statistics.count()) // 25
    // console.log('Sum: ', statistics.sum()) // 744
    // console.log('Min: ', statistics.min()) // 24
    // console.log('Max: ', statistics.max()) // 38
    // console.log('Range: ', statistics.range() // 14
    // console.log('Mean: ', statistics.mean()) // 30
    // console.log('Median: ',statistics.median()) // 29
    // console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    // console.log('Variance: ',statistics.var()) // 17.5
    // console.log('Standard Deviation: ', statistics.std()) // 4.2
    // console.log('Variance: ',statistics.var()) // 17.5
    // console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
    // console.log(statistics.describe())
    // Count: 25
    // Sum:  744
    // Min:  24
    // Max:  38
    // Range:  14
    // Mean:  30
    // Median:  29
    // Mode:  (26, 5)
    // Variance:  17.5
    // Standard Deviation:  4.2
    // Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]



    //Finish Exercise Level 2, Exercise 1 before finishing Day 9
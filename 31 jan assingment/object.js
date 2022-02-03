var num1 = prompt("Please enter marks");
var ip = parseInt(num1);// for converting string to number
if (isNaN(ip)) {
    alert('Please enter valid number ');
} else {
    var data = { 
        'fname': "pavan ",
        'mname': "Kumar",
        'lname': "raj",
        'age': 25,
        'class': "B.tech",
        'students': [ // create a students array inside the data object and give them name and marksd
            { 'name': "pavan", 'marks': 49 },
            { 'name': "chotu", 'marks': 25 },
            { 'name': "manxoor", 'marks': 40 },
            { 'name': "pankaj", 'marks': 33 },
            { 'name': "nitish", 'marks': 32 },
            { 'name': "Sonu", 'marks': 329 },
            { 'name': "yadav", 'marks': 23 },
            { 'name': "neeraj", 'marks': 10 },
            { 'name': "rajpoot", 'marks': 44 },
            { 'name': "kashyap", 'marks': 21 }
        ]

    };
    var counter = 0; 
    var limit = data.students.length; 
    var num = data.students; 
    for (i = 0; i < limit; i++) {
        score = (num[i].marks);
        if (score >= ip) {
            console.log(num[i].name);
            counter += 1;
        }
    }// and at last print the output
    console.log(`There are counter  Students who score above or equal to the  `);
    alert(`There are counter  Students who score above or equal to the  `);

}

# 1.1 String Palindrome

    String Palindrome

    Write a JavaScript console program to read the input file and check whether the given string is palindrome or not.

    Input and Output Format:
    Refer sample input and output for formatting specifications.
    Input is a string.
    Output displays whether the given string is palindrome or not. (case insensitive)

    The spaces should be removed before checking.

    Input 1:
    Taco cat

    Output 1:
    Taco cat is a palindrome

    Input 2:
    A gross creature

    Output 2:
    A gross creature is not a palindrome

# 1.2 Factorial

    Find Factorial

    Write a program using the Arrow function to find the factorial of a given number.

    Input and Output :
    Below input is the format of the file input.txt.
    Input consists of an integer.
    Output is an integer.

    Sample Input :
    5

    Sample Output :
    120

# 2.1 Print Employee Details using ES5

    Print Employee Details using ES5

    Print employee details using javascript class using ES5.

    Problem Description:
    1) Read input file ‘input.txt’
    2) Create a class named as Employee.
    3) Inside the class create arguments employee name,dept and DOJ.
    4) Now create the method as displayEmployee() and inside the method print the employee details.
    5) Create object for the class using new Classname() and pass the input to the constructor.
    6) And call the object method, using object.methodName() to print the employee details.

    Input and Output Format:

    Refer to sample input and output.

    Input and output is employee details.

    Input:

    John
    HR
    23-8-1997

    Output:

    Name : John
    Department : HR
    DOJ : 23-8-1997

# 2.2 Area and Perimeter using ES6

    Area and Perimeter using ES6

    Write a program to find the area and perimeter of extended classes from the parent class.

    Problem Description :

    1.  Read input file ‘input.txt’
    2.  Create a class named as Shape using the keyword class.
    3.  Inside the class create constructor with argument name.
    4.  Create a method calculatePerimeter() and calculateArea in the parent class Shape.
    5.  Create three child classes Circle, Square, and Triangle.
    6.  Each class should have a constructor which invokes name from the parent class:
        Constructor of Circle should have arguments for name and radius
        Constructor of Square should have arguments for name and side
        Constructor of Triangle should have arguments for name, side1, side2, side3, side4, base and height.
    7.  Create methods in each class to display the measurements.

        displayCircleMeasurments() in class Circle
        displaySquareMeasurments() in class Square
        displayTriangleMeasurments() in class Triangle

    8.  Each display method should invoke the methods in the parent class

            calculateArea()
            calculatePerimeter()

        Note :

    calculateArea() and calculatePerimeter() are the methods written inside Parent class Shape. It should be invoked from the child classes with the super keyword.

    Input and Output Format :

    Refer to sample input and output.
    Input consists of n lines. Each line consists of a comma-separated values of the name of the shape and required sides of the corresponding shape
    Output should display the calculated area and perimeter of all the three shapes.

    Sample Input :

    Circle,11
    Square,4
    Triangle,3,4,5,4,6

    Sample Output :

    Perimeter of a Circle: 69.08
    Area of a Circle: 379.94
    Perimeter of a Square: 16
    Area of a Square: 16
    Perimeter of a Triangle: 12
    Area of a Triangle: 12

# 3.1 JS - Grade

    Maple Educational Institutions has conducted an Entrance Examination to select prospective students for admissions of the upcoming academic year. The students who have cleared the entrance exam with 50% and above i.e more than 'E' grade are considered for the post-admission process, where other students have to re-appear for the examinations.


    The Institution Management decided to announce the exam results with the grade obtained by each of the students on their official website and has approached you for help.  Create a webpage which will get the marks as input from the students and display the grade obtained by them.
    Hints : if/else statementUse if to specify a block of code to be executed, if a specified condition is true.
    Use else to specify a block of code to be executed, if the same condition is false. Syntax :
    if (condition) {
    // if the condition is true block of code to be executed
    } else {
    // if fails else part gets executed
    }

    Constraints :
    The Html page must contain a h1 tag.
    The name and id of the text field should be "mark".
    The name of the button should be "submit".
    onclick attribute should have the value "myFunction()".
    Grade sheet is as mentioned below.
    S.No	Marks	Grade
    1	    100	    A+
    2	    90 - 99	A
    3	    80 - 89	B
    4	    70 - 79	C
    5	    60 - 69	D
    6	    50 - 59	E
    7	    < 50    RA

    The grade of the student must be displayed inside the div element with id "result".

# 3.2 JS - Increase width and height

    JS - Increase width and height
    Nowadays, pictures play an important role in strengthening the communication and marketing efforts in all levels of publishing the organization. Recently Lee, the techno-assistant of "Pink Frag Event Organization" got a feedback regarding the images being uploaded in their official website couldnt be clearly understood, as the resolution was not upto the level.

    Hence, Lee has assigned you the task of making the images to be zoomed in i.e, the width and heigth of the images should be increased on every double click on the image using the javascript functions.

    Hints : Width and height Property The width property sets or returns the width an element. The height property sets or returns the height of an element. The width and height property has effect only on block-level elements or on elements with absolute / fixed position. Syntax : object.style.width (for width) and object.style.height (for height) where object = document.getElementById("#id");

    Content :
    h1 - Increase width and height of div
    div id="myDiv" width="400px" height="200px" ondblclick="addSize()"
    h3 - Pink frag Event Organization
    Our events team handles all your requirements from conceptualization to execution, leaving you free to focus completely on achieving your objectives.With proper planning and logistics management and the ability to activate requisite resources, we have undertaken a wide variety of projects.

# 4 Ajax – JSON Retrieval and JSON Conversion

    Ajax – JSON Retrieval and JSON Conversion

    Design a webpage that will get the JSON details from a file and display it in a table. Then, display the Input fields to convert the particular booklist into a JSON format.

    Problem specification:

    The file name should be index.html.
    Get the details from the JSON data and display them in the table.
    Then displays the table data in the object notation format.
    UI Constraints :
    Retrieve the table data from JSON during body onload and the function name should be loadJson( ).
    Have a heading text 'Book List' inside the 'h1' tag.
    The JSON file name should be booklist.json
    Have a div tag with id “booklist”. And display the result table inside the div with id 'booklist'.
    Parse the JSON elements and display them in tabular form as shown in the screenshot.
    Have a button with id “convertToJSON” . While on clicking, the JSON format of entered book details should be displayed inside the div tag with id ‘jsonData’.
    Kindly give the id’s and class names as per the constraints and screenshot.
    Use XMLHttpRequest to make Ajax call.

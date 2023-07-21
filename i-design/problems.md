# 1 CONTROL STATEMENT

    Eligible Voter

    A voting age is a minimum age established by law that a person must attain before they become eligible to vote in public election. Allow the person if his/her age is greater than or equal to 18 using function.

    Problem Description:
    1) Read input file ‘input.txt’.
    2) Check the constraint inside the function checkAge().
    3) Display the message for the voters based on the constraint.


    Input and Output Format:

    Refer to sample input and output.

    Input is the age of the person.

    Output is the message for voters.(Allowed/Not Allowed)

    Input:

    25

    Output:

    Allowed

    Input:

    7

    Output:
    Not Allowed

# 2.1 CHECK LENGTH

    Check Name Length using ES5

    Check the given user name length using Javascript class using ES5.

    Problem Description:
    1) Read input file ‘input.txt’
    2) Create class named as User.
    3) Inside the class create the argument as user name.
    4) Now create getter for name.
    5) Create the function checkNameLength() inside the class.
    6) Inside the function check the length of the user name.
    7) If the user name length is greater than 4 then, print the name as it is. Else print the message ‘Name is too short’.
    6) Create object for the class using new Classname() and pass the input to the constructor.
    7) And call the object method, using object.methodName() to print the output.

    Input and Output Format:

    Refer to sample input and output.

    Input is user name.

    Output is user name.(If the length is greater than 4), Else  ‘Name is too short’.

    Input:

    Harina

    Output:

    Harina

    Input:

    Jim

    Output:

    Name is too short

# 2.2 PRIME OR COMPOSITE

    Prime or Composite using ES6

    Write a program to check the given number is prime or composite.

    Problem Description:
    1) Read a number from file ‘input.txt’
    2) In display.js check and print, the given number is prime or composite.
    3) In display.js exports the function/class name.  ( Example : exports.className = className; )
    4) In app.js import the function/class name. ( Example: {className} = require(‘file path'); )
    5) From app.js call the function/class to print the message.

    Input and Output Format:

    Refer to sample input and output.

    Input is a number.

    The output is the statement.

    Input:

    23

    Output:

    Prime Number

    Input:

    26

    Output:

    Composite Number

    Input:

    1

    Output:

    Neither Prime nor Composite

# 3.1 CHANGE PROPERTY

    Changing property using Javascript

    Design an HTML page as shown in the screenshot and apply the style using the Javascript function.

    Property marginTop
    Set the top margin of a <div> element.
    Syntax :
    document.getElementById("myDiv").style.marginTop = "50px";
    Property border
    Add a border to a <div> element.
    Syntax :
    document.getElementById("myDiv").style.border= "1px solid";

    Additional Constraints :

    The file name shall be index.html.
    Have two div's, one inside the other.
    The outer div shall have id "outerDiv" and apply border property in the script.
    The inner div shall have id "innerDiv" and apply marginTop property in the script.
    Change the properties inside the apply() function.
    Load the function apply() on body onload attribute.

    Note :

    Content of the page should be present as shown in the screenshot.

    Content :

    A wedding planner is a professional who assists with the design, planning and management of a client's wedding. Weddings are significant events in people's lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding planners are often used by couples who work long hours and have little spare time available for sourcing and managing wedding venues and wedding suppliers.

# 3.2 CREDIT CARD VALIDATION

    JS - Credit card validation

    Design an HTML page to perform phone number and credit card validation using javascript as shown in the screenshot.

    If the phone number contains anything other than digits it must print 'Phone number must contain only digits' in the div with id 'phoneNumber_Warning'.

    If the card number contains other than digits it must print 'Card number must contain only digits' in the div with id 'cardNumber_Warning'.

    If the Phone number does not contain 10 digits it must print 'Phone Number must be 10 digits' in the div with id 'phoneNumber_Warning'.

    If the card number does not contain 16 digits it must print 'Card Number must be 16 digits' in the div with id 'cardNumber_Warning'.

    If both phone and card numbers are validated, then print 'Details stored in database' in the div with id 'success'

# 3.3 Oninput EVENT

    JS - Oninput Event

    "Eventious" is one of the most popular online application being used by the people of all age groups as it would include knowledgeable games. They have planned to launch a new game that would display the content simultaneously when the user types the values in the specific field. This game would estimate the speed of the contents being typed in the content box.

    As the developers of Eventious are busy in playing support roles for the existing games, the technnical team has assigned you the task of creating the web-app for repeating the contents in the text area using oninput events in javascript.
    Hints : The oninput event occurs when an element gets user input.
    This event occurs when the value of an <input> or <textarea> element is changed.Syntax :<element oninput="myScript">

    Content :
    h3 - Oninput Event
    Have one <div> element with id 'result'
    Have a <textarea> field with id 'myContent' and oninput attribute value 'displayContent()'
    Display the whole content inside the <center> tag.
    Include the following functions/methods in the script.
    Function Name	Description
    displayContent()	This method is used to display the content of textarea in the resulting <div> element while the user types and clears the content.

    Constraints:
    File name should be 'index.html'.
    Enter the content in the textarea with id 'myContent'.
    The content of textarea must be displayed inside the div element with id 'result' while the user types and clears the content.

    On entering the contents in textarea , it should be displayed in the result div as mentioned below,
    On clearing the content in textarea , the change should be reflected in the result div.

# 4.1 AJAX

    Ajax – JSON Retrieval and updating JSON data

    Write a javascript code to display and update the Student details using JSON data.

    UI Constraints:

    The file name should be index.html
    Get the details from the JSON data and display them in the table.
    Retrieve the table data from JSON during body onload and the function name should be display( ).
    Have a heading text 'Student Details' inside the 'h2' tag.
    The JSON file name should be Students.json
    After providing inputs and clicking the Update button, the Student table data should be updated.
    Kindly give the id’s and class names as per the constraints and screenshot.
    Use XMLHttpRequest to make Ajax call.

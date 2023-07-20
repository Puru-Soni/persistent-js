# persistent-js

JavaScript fullstack course by persistent systems

# Prerequisites:

    Vscode
    Nodejs - version v18.16+
    npm - version 9.6+
    Extensions for vscode

# What is Javascript ?

    initial - client side scripting language
    serve side scripting language using node.js
    now also - programming language

    Used to create - Dynamice website and do DOM manipluation, power of WEB API's
    dom - document object model - html elements - dom tree

    dynamic typed language - at runtime datatype is defined
    not typesafe - use typescript for typesafe

    typeof keyword used to check the type of datatype for a variable

    Ecmascript - standarad rules for js to run on all browsers
    ES5/ES6 - modules, classes, block scoping ( let and const ), arrow functions (=>), promises (ajax, fetch), object literals ``;

    to wirte js in web -> <script> tag is used

    internal, external
    html parses -> top to bottom
    so best to write script at end of body.

# DAY 1

    ->  how to write js code ?

    ->  datatype (Number, object, boolean, string etc)
        typeof
        variables
        var, let, const

    ->  scoping - function / block scope

    ->  operators
        control statements

    ->  Aarrys and Objects(key-value pairs)

# DAY 2

    ->  string methods
        contactination

    ->  loops

    ->  functions
        arrow functions

    ->  object constructor (objectConstructor.js)

    ->  delete keyword (deleteOperator.js)

    ->  how to select DOM object
        JSON ( JSON.parse, JSON.stringify )

    ->  Error (try, catch, finally blocks)

    ->  classes (ES6)

# DAY 3

    ->  object destucturing
        inheritance and prototype chain
        method overriding / overloading

    ->  modules
            es5( require )
            es6( import/export )
            module file extension  -> .mjs

    ->  maps
        sets

    ->  callback function

# DAY 4

    ->  promises  (handle async data)
    ->  eventHandler
    ->  event propogation (determines which order object recieve events)
            event bubbling (bottom to up)/(inner to outer) - false
            event capturing (top to bottom)/(outer to inner) - true
            addEventListner("event", callback, {boolean} event propogation)

    -> DOM API's
    -> AJAX
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
    -> Fetch

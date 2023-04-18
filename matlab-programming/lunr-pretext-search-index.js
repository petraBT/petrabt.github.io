var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "meta_frontmatter-preface",
  "level": "1",
  "url": "meta_frontmatter-preface.html",
  "type": "Preface",
  "number": "",
  "title": "Introduction",
  "body": "   Introduction  Welcome to the MATLAB portion of ENGS 20: Introduction to Scientific Computing!  From the Dartmouth course catalog:  This course introduces concepts and techniques for creating computational solutions to problems in engineering and science. The essentials of computer programming are developed using the C and MATLAB languages, with the goal of enabling the student to use the computer effectively in subsequent courses. Programming topics include problem decomposition, control structures, recursion, arrays and other data structures, file I\/O, graphics, and code libraries. Applications will be drawn from numerical solution of ordinary differential equations, root finding, matrix operations, searching and sorting, simulation, and data analysis. Good programming style and computational efficiency are emphasized. Although no previous programming experience is assumed, a significant time commitment is required.  Students planning to pursue the engineering sciences major are advised to take ENGS 20. Students considering the computer science major or majors modified with computer science should take COSC 1 and COSC 10.  This textbook contains the course materials for only the MATLAB portion of the class, which generally is covered within the last three weeks of the class. There are homework assignments, in-class activities, and various other materials in this textbook.  The easiest way to know which sections of this book are assigned for homework, or which will be explored during class, is to use the Table of Contents. There, all the sections are grouped into their respective class or pre-class. Be sure to complete all pre-class sections prior to the subsequent class meeting, as these are homework. On the other hand, if searching for a specific topic, the Index or the embedded search bar at the top of the page will be of use.  In the next chapter, Getting Started, the various tools and features of this book will be introduced and explained.  "
},
{
  "id": "meta_frontmatter-toc",
  "level": "1",
  "url": "meta_frontmatter-toc.html",
  "type": "Preface",
  "number": "",
  "title": "Table of Contents",
  "body": " Table of Contents  located at the end of the book.  ------------------------------------Week 7------------------------------------    Class 2              Pre-Class 3       Class 3         ------------------------------------Week 8------------------------------------    Pre-Class 1        Class 1           Pre-Class 2      Class 2          Pre-Class 3    (excluding Activity 5.6.1)           Class 3         ------------------------------------Week 9------------------------------------    Pre-Class 1         Class 1     Pre-Class 2              Class 2            Pre-Class 3       Class 3                ------------------------------------Week 10------------------------------------    Class 1        "
},
{
  "id": "gettingstarted-complanguages",
  "level": "1",
  "url": "gettingstarted-complanguages.html",
  "type": "Section",
  "number": "1.1",
  "title": "Computer Languages",
  "body": " Computer Languages  With the C programming language we found that there were very few built-in functions. Anything we wanted to accomplish we had to program by ourselves. Using pointers and other such strategies we can work directly with the computer's memory. We are therefore programming close to the hardware . Programming languages that allow working close to the hardware are also referred to as low level languages. One can, therefore, write code that is very portable (simply pass your C-program to someone else and as long as they have a C-compiler they can compile your code into an executable program). You can also create your own user-defined libraries to provide additional features.  With MATLAB, we will see that there are many built-in functions. Rather than having to decide on our own how large an array will be or how much memory we might need, MATLAB takes care of all these worries for us. We won't even have to declare variables since MATLAB figures it out on its own. Such a language is also referred to as high level . In fact, we will see that the power of MATLAB comes from the built-in functions, graphics capabilities, interactivity, and on-line help. There are so many built-in functions that we'll never come even close to learning about all of them.  Finally, MATLAB is a commercial product and costs money, unlike C, for which compilers are freely available.    Examples of Computer Languages     Language    Level     MATLAB, IDL , Octave  highest level    C++, Java   |    C, Fortran, Pascal, Basic   |    Assembly Language  lowest level     "
},
{
  "id": "table-1",
  "level": "2",
  "url": "gettingstarted-complanguages.html#table-1",
  "type": "Table",
  "number": "1.1",
  "title": "Examples of Computer Languages",
  "body": " Examples of Computer Languages     Language    Level     MATLAB, IDL , Octave  highest level    C++, Java   |    C, Fortran, Pascal, Basic   |    Assembly Language  lowest level    "
},
{
  "id": "gettingstarted-what",
  "level": "1",
  "url": "gettingstarted-what.html",
  "type": "Section",
  "number": "1.2",
  "title": "What is MATLAB",
  "body": " What is MATLAB  The name MATLAB is derived from the idea that the basic element of operation is a matrix in this language. It is like a lab for working with matrices, or a MAT rix LAB oratory.  MATLAB is an interactive system whose basic data element is an array that does not require dimensioning. This allows you to solve many technical computing problems, especially those with matrix and vector formulations, in a fraction of the time it would take to write a program in a scalar non-interactive language such as C or Fortran. We will see that MATLAB can simply perform operations on all elements of an array at the same time, without us having to write several loops to advance through the individual matrix elements.  MATLAB MATLAB is a high-performance language for technical computing. It integrates computation , visualization , and programming in an easy-to-use environment where problems and solutions are expressed in familiar mathematical notation. It also comes with an integrated development environment in which you can write code, click buttons to execute your code, access help functions and much more.  MATLAB is portable between numerous platforms: Unix, Linux, Windows, OS X  Unlike C, MATLAB is an interpreted language (mostly ). Recall that C is a compiled language. You write your code in the C-programming language in a file with the extension .c and then run this file through a C-compiler (with the help of header files that contain prototypes of functions you wish to use). This process generates an object file, which is simply the translation into machine language of your C-code. An object file by itself is not yet executable, however. The linker takes the object file along with the machine-language versions of all needed libraries and bundles everything together into an executable file.     C-Programming Structure   C-Programming Structure   MATLAB on the other hand is an interpreted language. This means that each line of your code gets executed (interpreted) one at a time. So even if you had a massive syntax error somewhere halfway through your code, all of the lines up to that error would still get executed (assuming they did not contain errors).    MATLAB Structure   MATLAB Structure   The following video highlights the difference between interpreted and compiled languages:   "
},
{
  "id": "p-113",
  "level": "2",
  "url": "gettingstarted-what.html#p-113",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "computation visualization programming "
},
{
  "id": "p-114",
  "level": "2",
  "url": "gettingstarted-what.html#p-114",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "portable "
},
{
  "id": "p-115",
  "level": "2",
  "url": "gettingstarted-what.html#p-115",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linker "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "gettingstarted-what.html#figure-1",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": "  C-Programming Structure   C-Programming Structure  "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "gettingstarted-what.html#figure-2",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": "  MATLAB Structure   MATLAB Structure  "
},
{
  "id": "gettingstarted-windows",
  "level": "1",
  "url": "gettingstarted-windows.html",
  "type": "Section",
  "number": "1.3",
  "title": "The MATLAB Windows",
  "body": " The MATLAB Windows  When you first start MATLAB, you will see this window:    Starting Matlab   Starting Matlab    MATLAB Command Window  The Command Window is the main window of Matlab. Commands are typed into this window and interpreted by MATLAB:   >>  is the command prompt, that is the place where you can enter commands for MATLAB to execute.  As soon as you hit 'enter', the command you just typed is executed (well, mostly. It gets a bit more complicated once we get to programming but for but for now think of MATLAB as simply a fancy graphing calculator).  Try it out right now: type 3 + 5 and hit enter .    Several commands can be typed on a single line by separating them with commas (think ; in C )  Try it out right now: type 3+5, 4+6 and hit enter .    Use the up ( ) and down ( ) arrows to reissue previous commands, without having to retype them.  Try it out .    Continue long lines with ellipsis ( ) - watch out for spaces!  Try it out: type 3+... , hit enter , type 5 and hit enter .    The semicolon ( ; ) prevents the output of your command from being echoed to the command window. This may seem useless right now, but just trust me: you'll need this later.  The percent symbol ( % ) indicates a comment, which will become useful when writing programs in MATLAB.  clc clears the command window.    MATLAB Command Window   Command Window   Command Window     More Windows  The Command History window displays a log of statements that you ran in the current and previous MATLAB sessions, along with information as to when you ran that command. You can simply double click on a command in the history window and it'll get executed again. Or you can drag it over to the command window (in case you want to make edits, for example.) A colored mark precedes each statement that generated an error.    Command History   Command History   The Workspace window shows you all of the variables and other objects that are in use during your current session. We haven't used any variables yet, but as soon as we do you'll see the value of this window. Whereas in C we had to use printf() statements to monitor the values of variables in your code, the Worskape window allows you to keep track of variables without any extra work required.    Workspace   Workspace   MATLAB comes with a huge Online Help ecosystem. To access this help system, simply click on the question mark.    Online Help   Online Help   Within the help system you can find lots of manuals on everything you can think of.    Go to the online help in MATLAB and try to search for an example named \"teapot\". If you find the example, try to open up the code in your MATLAB window. Can you even figure out how to run the code?       MATLAB Manuals   MATLAB Manuals   And finally, MATLAB comes with lots of demo code . Can you find a demo named teapot ? If so, open up the code in your MATLAB windows. Can you even figure out how to run the code?    MATLAB Demos   MATLAB Demos    "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "gettingstarted-windows.html#figure-3",
  "type": "Figure",
  "number": "1.4",
  "title": "",
  "body": "  Starting Matlab   Starting Matlab  "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "gettingstarted-windows.html#figure-4",
  "type": "Figure",
  "number": "1.5",
  "title": "",
  "body": " MATLAB Command Window   Command Window   Command Window  "
},
{
  "id": "p-125",
  "level": "2",
  "url": "gettingstarted-windows.html#p-125",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Command History "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "gettingstarted-windows.html#figure-5",
  "type": "Figure",
  "number": "1.6",
  "title": "",
  "body": "  Command History   Command History  "
},
{
  "id": "p-126",
  "level": "2",
  "url": "gettingstarted-windows.html#p-126",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Workspace "
},
{
  "id": "figure-6",
  "level": "2",
  "url": "gettingstarted-windows.html#figure-6",
  "type": "Figure",
  "number": "1.7",
  "title": "",
  "body": "  Workspace   Workspace  "
},
{
  "id": "p-127",
  "level": "2",
  "url": "gettingstarted-windows.html#p-127",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Online Help "
},
{
  "id": "figure-7",
  "level": "2",
  "url": "gettingstarted-windows.html#figure-7",
  "type": "Figure",
  "number": "1.8",
  "title": "",
  "body": "  Online Help   Online Help  "
},
{
  "id": "activity-teapot",
  "level": "2",
  "url": "gettingstarted-windows.html#activity-teapot",
  "type": "Activity",
  "number": "1.1",
  "title": "",
  "body": "  Go to the online help in MATLAB and try to search for an example named \"teapot\". If you find the example, try to open up the code in your MATLAB window. Can you even figure out how to run the code?    "
},
{
  "id": "figure-8",
  "level": "2",
  "url": "gettingstarted-windows.html#figure-8",
  "type": "Figure",
  "number": "1.9",
  "title": "",
  "body": "  MATLAB Manuals   MATLAB Manuals  "
},
{
  "id": "figure-9",
  "level": "2",
  "url": "gettingstarted-windows.html#figure-9",
  "type": "Figure",
  "number": "1.10",
  "title": "",
  "body": "  MATLAB Demos   MATLAB Demos  "
},
{
  "id": "gettingstarted-arithmetic",
  "level": "1",
  "url": "gettingstarted-arithmetic.html",
  "type": "Section",
  "number": "1.4",
  "title": "Arithmetic Operators with Scalars",
  "body": " Arithmetic Operators with Scalars  MATLAB can be used directly as a calculator. After all, a number can simply be viewed as a scalar and as such is a single-element 1D matrix .   Scalar Operators  operators arithmetic  Arithmetic Operators     Operator    Symbol    Example     Addition   +   5 + 3    Subtraction   -   5 - 3    Multiplication   *   5 * 3    Division   \/   5 \/ 3    Left Division   \\   5 \\ 3 (= 3 \/ 5)    Exponentiation   ^   5^3 (=5 = 125)     I know. Left division seems like pretty much the most useless thing ever. We'll have to wait for matrices with more than one element for this to make any kind of sense.  operators  Operator(s)     Operator    Symbol    Precedence     Parentheses   ()   highest    Exponentiation   ^    |    Multiplication and Division   * \/ \\    |    Addition and Subtraction   + -   lowest       Examples   In the command window, enter the expression at the prompt and the result is echoed back to you.  ans The result of the current expression is stored in a predefined variable ans .  ans can be used as a normal variable (but remember that as soon as you perform a new operation, the value of ans reflects the result of this most recent computation and no longer that of the previous operation.  suppress output Adding a semicolon ; to the end of the command line suppresses the output, while typing the variable's name displays its value.   Simple example:      Example with operator precedence:       What is the result of the following evaluation in MATLAB:  27^1\/3 + 32^0.2      "
},
{
  "id": "p-131",
  "level": "2",
  "url": "gettingstarted-arithmetic.html#p-131",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar single-element 1D matrix "
},
{
  "id": "table-2",
  "level": "2",
  "url": "gettingstarted-arithmetic.html#table-2",
  "type": "Table",
  "number": "1.11",
  "title": "Arithmetic Operators",
  "body": "operators arithmetic  Arithmetic Operators     Operator    Symbol    Example     Addition   +   5 + 3    Subtraction   -   5 - 3    Multiplication   *   5 * 3    Division   \/   5 \/ 3    Left Division   \\   5 \\ 3 (= 3 \/ 5)    Exponentiation   ^   5^3 (=5 = 125)    "
},
{
  "id": "table-3",
  "level": "2",
  "url": "gettingstarted-arithmetic.html#table-3",
  "type": "Table",
  "number": "1.12",
  "title": "Operator(s)",
  "body": "operators  Operator(s)     Operator    Symbol    Precedence     Parentheses   ()   highest    Exponentiation   ^    |    Multiplication and Division   * \/ \\    |    Addition and Subtraction   + -   lowest    "
},
{
  "id": "activity-operator-precedence",
  "level": "2",
  "url": "gettingstarted-arithmetic.html#activity-operator-precedence",
  "type": "Activity",
  "number": "1.2",
  "title": "",
  "body": "  What is the result of the following evaluation in MATLAB:  27^1\/3 + 32^0.2    "
},
{
  "id": "gettingstarted-displayformats",
  "level": "1",
  "url": "gettingstarted-displayformats.html",
  "type": "Section",
  "number": "1.5",
  "title": "Display Formats",
  "body": " Display Formats  One can control the format in which MATLAB displays (echos) output to the command window:   The default format is fixed-point with 4 decimal digits .  Issue the format command (see below for some examples) to change the output for the remainder of the session.  The output format does not change the way that MATLAB computes and stores numbers.  The default data type is a double-precision array which means that by default, any number is stored with double-precision (which means using 64 bits).  Using 64 bits, number you can store range from 2.225073858507201e-308 to 1.797693134862316e+308    display formats  Display Formats        Display Format    Description    Example     format short   fixed-point with 4 decimal digits for number , otherwise uses short e   >> 290\/7 ans = 41.4286    format long   fixed-point with 15 decimal digits for number , otherwise uses long e    >> 290\/7 ans = 41.42857142857143     format short e   scientific notation with 4-decimal digits    >> 290\/7 ans = 4.1429e+001     format long e   scientific notation with 15-decimal digits    >> 290\/7 ans = 4.142857142857143e+001     format short g   best of 5-digit or scientific notation    >> 290\/7 ans = 41.429     format long g   best of 15-digit or scientific notation    >> 290\/7 ans = 41.4285714285714     format bank   Two decimal digits    >> 290\/7 ans = 41.43     format compact   eliminates empty lines       format loose   adds empty lines        "
},
{
  "id": "table-4",
  "level": "2",
  "url": "gettingstarted-displayformats.html#table-4",
  "type": "Table",
  "number": "1.13",
  "title": "Display Formats",
  "body": "display formats  Display Formats        Display Format    Description    Example     format short   fixed-point with 4 decimal digits for number , otherwise uses short e   >> 290\/7 ans = 41.4286    format long   fixed-point with 15 decimal digits for number , otherwise uses long e    >> 290\/7 ans = 41.42857142857143     format short e   scientific notation with 4-decimal digits    >> 290\/7 ans = 4.1429e+001     format long e   scientific notation with 15-decimal digits    >> 290\/7 ans = 4.142857142857143e+001     format short g   best of 5-digit or scientific notation    >> 290\/7 ans = 41.429     format long g   best of 15-digit or scientific notation    >> 290\/7 ans = 41.4285714285714     format bank   Two decimal digits    >> 290\/7 ans = 41.43     format compact   eliminates empty lines       format loose   adds empty lines       "
},
{
  "id": "gettingstarted-functions",
  "level": "1",
  "url": "gettingstarted-functions.html",
  "type": "Section",
  "number": "1.6",
  "title": "Elementary Built-In Math Functions",
  "body": " Elementary Built-In Math Functions  built-in functions elementary math  built-in functions trigonometric  MATLAB has a very large library of built in functions.  Elementary math functions:   sqrt(x)  exp(x)  abs(x)  log(x)  log10(x)  factorial(n)   Trigonometric math functions   sin(x)  cos(x)  tan(x)  cot(x)  asin(x)  acos(x)  atan(x)  acot(x)  sinh(x)  cosh(x)  tanh(x)  coth(x)  Note: adding d to any of the above function names will produce results in d egrees, i.e. sind(x)   There are lots of other mathematical built-in functions in MATLAB. Use the help function to learn more.  Many functions can help with various ways of rounding in MATLAB.  built-in functions rounding  Rounding Functions        Function    Description    Example      round(x)    round to the nearest integer   >> round(17\/5) ans = 3     fix(x)    round towards zero (truncate)   >> fix(13\/5) ans = 2     ceil(x)    round towards infinity (like fix for x < 0)   >> ceil(11\/5) ans = 3     floor(x)    round towards minus infinity (like fix for x > 0)   >> floor(-9\/4) ans = -3     rem(x,y)    remainder after x is divided by y   >> rem(13,5) ans = 3     sign(x)    1 if x > 0, -1 if x < 0, and 0 if x = 0   >> sign(5) ans = 1       How do you find the sine of an angle in MATLAB,   where the angle is given in radians (for example, )?  where the angle is given in degrees (for example, )?      "
},
{
  "id": "table-5",
  "level": "2",
  "url": "gettingstarted-functions.html#table-5",
  "type": "Table",
  "number": "1.14",
  "title": "Rounding Functions",
  "body": "built-in functions rounding  Rounding Functions        Function    Description    Example      round(x)    round to the nearest integer   >> round(17\/5) ans = 3     fix(x)    round towards zero (truncate)   >> fix(13\/5) ans = 2     ceil(x)    round towards infinity (like fix for x < 0)   >> ceil(11\/5) ans = 3     floor(x)    round towards minus infinity (like fix for x > 0)   >> floor(-9\/4) ans = -3     rem(x,y)    remainder after x is divided by y   >> rem(13,5) ans = 3     sign(x)    1 if x > 0, -1 if x < 0, and 0 if x = 0   >> sign(5) ans = 1    "
},
{
  "id": "activity-sine-angle",
  "level": "2",
  "url": "gettingstarted-functions.html#activity-sine-angle",
  "type": "Activity",
  "number": "1.3",
  "title": "",
  "body": "  How do you find the sine of an angle in MATLAB,   where the angle is given in radians (for example, )?  where the angle is given in degrees (for example, )?     "
},
{
  "id": "gettingstarted-scalarvars",
  "level": "1",
  "url": "gettingstarted-scalarvars.html",
  "type": "Section",
  "number": "1.7",
  "title": "Scalar Variables",
  "body": " Scalar Variables  variables declaring Variables need not be declared in MATLAB, one simply makes an assignment.  x = 5; y = 10; z = x + y;  When variable are assigned, they show up in the workspace window, along with their value and class (built-in debugger!)  x = 10; y = 10; z = x + y;    Can you name a variable \"cos\"? If so, what is the effect of doing so?      Naming Variables variables naming  Rules for variable names (similar to C):   Can contain only letters, digits, and the underscore '_'  Must begin with a letter (not true for C, e.g., _var)  Case sensitive (AA Aa aA aa are all different variables)  Avoid using built-in function names. You can actually use such a name, but then you can no longer use the function (i.e. cos, sin, exp, sqrt, etc.)  Can be up to 63 characters long but we know that using such a variable name would be poor style!     Managing Variables  variables managing  Managing Variables       Function    Description      clear    Removes all variables from memory      clear x y z    Removes only the variables x , y , z      who    Displays a list of variables in memory      whos    Displays a list of variables in memory, along with their size and other info      The Workspace Window also shows you a visual picture of the variables that you have assigned.    "
},
{
  "id": "activity-cos-variable",
  "level": "2",
  "url": "gettingstarted-scalarvars.html#activity-cos-variable",
  "type": "Activity",
  "number": "1.4",
  "title": "",
  "body": "  Can you name a variable \"cos\"? If so, what is the effect of doing so?    "
},
{
  "id": "table-6",
  "level": "2",
  "url": "gettingstarted-scalarvars.html#table-6",
  "type": "Table",
  "number": "1.15",
  "title": "Managing Variables",
  "body": "variables managing  Managing Variables       Function    Description      clear    Removes all variables from memory      clear x y z    Removes only the variables x , y , z      who    Displays a list of variables in memory      whos    Displays a list of variables in memory, along with their size and other info     "
},
{
  "id": "gettingstarted-practice",
  "level": "1",
  "url": "gettingstarted-practice.html",
  "type": "Section",
  "number": "1.8",
  "title": "Practice Your Arithmetic",
  "body": " Practice Your Arithmetic    An object with an initial temperature of is placed in an environment with a constant temperature at . The time-dependent temperature of the object is given by: where is a positive constant known as the thermal diffusivity and depends on the material's thermal conductivity ( ), specific heat ( ), and density ( ).  Suppose a soda can with thermal diffusivity of that was left in the sun has an initial temperature of and was then placed in a refrigerator at .  To the nearest degree, what is the temperature of the can after three hours?     "
},
{
  "id": "activity-temperature",
  "level": "2",
  "url": "gettingstarted-practice.html#activity-temperature",
  "type": "Activity",
  "number": "1.5",
  "title": "",
  "body": "  An object with an initial temperature of is placed in an environment with a constant temperature at . The time-dependent temperature of the object is given by: where is a positive constant known as the thermal diffusivity and depends on the material's thermal conductivity ( ), specific heat ( ), and density ( ).  Suppose a soda can with thermal diffusivity of that was left in the sun has an initial temperature of and was then placed in a refrigerator at .  To the nearest degree, what is the temperature of the can after three hours?    "
},
{
  "id": "gettingstarted-practice-solution",
  "level": "1",
  "url": "gettingstarted-practice-solution.html",
  "type": "Section",
  "number": "1.9",
  "title": "Worked Problem",
  "body": " Worked Problem    An object with an initial temperature of is placed in an environment with a constant temperature at . The time-dependent temperature of the object is given by: where is a positive constant known as the thermal diffusivity and depends on the material's thermal conductivity ( ), specific heat ( ), and density ( ).  Suppose a soda can with thermal diffusivity of that was left in the sun has an initial temperature of and was then placed in a refrigerator at .  To the nearest degree, what is the temperature of the can after three hours?       Ts = 38; % temperature of fridge T0 = 120; % initial temperature k = 0.000125; % thermal diffusivity t = 3*60*60; % 3 hours in second T_3hr = round(Ts + (T0-Ts)*exp(-k*t))      Improving Our Solution    We can do much better than just finding the temperature at hour three of the experiment. We can plot its temperature across an array of times! How can we do this?    t = 0:60:60*60*10; % array of times T = round(Ts + (T0-Ts)*exp(-k*t)); plot(t\/3600, T) % plot the curve      "
},
{
  "id": "activity-temperature-solutions",
  "level": "2",
  "url": "gettingstarted-practice-solution.html#activity-temperature-solutions",
  "type": "Activity",
  "number": "1.6",
  "title": "",
  "body": "  An object with an initial temperature of is placed in an environment with a constant temperature at . The time-dependent temperature of the object is given by: where is a positive constant known as the thermal diffusivity and depends on the material's thermal conductivity ( ), specific heat ( ), and density ( ).  Suppose a soda can with thermal diffusivity of that was left in the sun has an initial temperature of and was then placed in a refrigerator at .  To the nearest degree, what is the temperature of the can after three hours?       Ts = 38; % temperature of fridge T0 = 120; % initial temperature k = 0.000125; % thermal diffusivity t = 3*60*60; % 3 hours in second T_3hr = round(Ts + (T0-Ts)*exp(-k*t))    "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "gettingstarted-practice-solution.html#activity-7",
  "type": "Activity",
  "number": "1.7",
  "title": "",
  "body": "  We can do much better than just finding the temperature at hour three of the experiment. We can plot its temperature across an array of times! How can we do this?    t = 0:60:60*60*10; % array of times T = round(Ts + (T0-Ts)*exp(-k*t)); plot(t\/3600, T) % plot the curve    "
},
{
  "id": "array-vector",
  "level": "1",
  "url": "array-vector.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Vectors",
  "body": " Introduction to Vectors  The array is the fundamental data type used by MATLAB. Recall that even a single number can be viewed as a matrix (or an array) with just one row and one column.  array An array is just a collection of like-type objects, arranged into rows and columns. Next to a single number the simplest type of array is one-dimensional and thus simply a list of elements – a vector. More complicated arrays (multiple rows \/ columns or even higher dimensional arrays) are also possible, just as they were in C.  The biggest differences between arrays in C and MATLAB are:   Arrays are dynamic in MATLAB – an array can be resized as needed (whereas in C we had to decide on the size of the array at declaration time).  Arrays know their own size so there is no need for us to keep track of such things.  Calculations with arrays are as simple as with scalar quantities (recall that in C we had to loop over all elements of an array in order to perform operations on all array elements; we'll soon learn about very useful array operations in MATLAB).    Creating a Vector   A vector is a one-dimensional array. A vector can be created in multiple ways, one of them being to simply list the elements in the following ways   A 1×n array (1 row and n columns) is also called a row vector . In MATLAB we indicate this by separating elements by spaces or commas. Here is an example:    A nx1 array (n rows, 1 column) is a column vector . In MATLAB we create such a vector by separating elements with semicolons or carriage returns.   years = [1995 1996 1997 1998]     Regularly Spaced Values in Vectors  There are several convenient ways to create vectors with regularly spaced values without actually typing out all of the values. One can create a vector with constant-spaced values by specifying the initial value, the spacing, and the final value. Optionally you can place brackets around the whole thing:    Here, xi is the initial value, dx is the spacing, and xf is the final value.  Note that dx is optional and defaults to 1.  MATLAB figures out how many elements are needed so the final value is not exceeded. Here are some examples:      It is also possible for you to decide how many elements your vector should have and to equally space those elements between an initial and a final value. The linspace() function accomplishes this task:   Here, n is the number of elements to be equally spaced between the initial value xi and the final value xf . Note that n is optional and defaults to 100. Here are some examples:     "
},
{
  "id": "p-184",
  "level": "2",
  "url": "array-vector.html#p-184",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "p-185",
  "level": "2",
  "url": "array-vector.html#p-185",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row vector "
},
{
  "id": "p-186",
  "level": "2",
  "url": "array-vector.html#p-186",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column vector "
},
{
  "id": "array-matrix",
  "level": "1",
  "url": "array-matrix.html",
  "type": "Section",
  "number": "2.2",
  "title": "Introduction to Matrices",
  "body": " Introduction to Matrices    Creating Matrices  matrix A matrix is simply a two-dimensional array. Again, there are several ways in MATLAB to create a matrix. One way is to simply list all of the matrix elements row by row, separating individual rows by semicolons (or carriage returns) and separating elements of a particular row by commas or spaces:   Each row must have the same number of elements ( n ). A matrix with m rows and n columns is also called a matrix. Here is an example:   You can use carriage returns to separate rows:  a = [5 20 45 16 1 2 4 3 6 9 11 4]   You can use vectors to make up rows:     Fancy Ways of Creating Arrays  Matrices of all zeros, ones, and the identity matrix can be created using functions:   zeros(m,n) creates a matrix of all zeros, with m rows and n columns  ones(m,n) creates a matrix of all ones, with m rows and n columns  eye(n) creates a n x x identity matrix   Here are some examples - type these into your MATLAB prompt and play with the inputs:      "
},
{
  "id": "array-transpose",
  "level": "1",
  "url": "array-transpose.html",
  "type": "Section",
  "number": "2.3",
  "title": "Transposing Arrays",
  "body": " Transposing Arrays   array transposing Sometimes it is useful to exchange rows and columns of a matrix. This operation is called the transpose . More specifically, transposing a matrix basically flips it over its diagonal. The outcome is another matrix, often denoted by (among other notations). Expressed mathematically, here is what happens:  The transpose of a matrix A is just:   So if is a matrix with 7 rows and 4 columns, then is a matrix with 4 rows and 7 columns. The first row of simply consists of the elements of the first column of , the second row of is the second column of , etc.  In particular, the transpose of a 1 x m row vector is thus an m x 1 column vector.  If you know matrix multiplication then having the transpose operator allows you to find the inner product of two row vectors x and y via:   that is, a 1 x m times an m x 1 . The result is a 1 x 1 and thus a scalar (number).  The transpose operator in MATLAB is the apostrophe ' . Here are some examples:       "
},
{
  "id": "p-203",
  "level": "2",
  "url": "array-transpose.html#p-203",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inner product "
},
{
  "id": "array-practice",
  "level": "1",
  "url": "array-practice.html",
  "type": "Section",
  "number": "2.4",
  "title": "Practice Your Arrays",
  "body": " Practice Your Arrays    Stirling's approximation for large factorials is given by   where means that the ratio of left and right hand sides approaches 1 as n goes to infinity.  Use the formula to calculate an approximation for 20! and compare the result with the true value obtained with MATLAB's built-in function factorial by calculating the ratio of the two quantities. Repeat for n = 50 and n = 100.       Create a row vector that has the following elements:        Define the variables x = 0.85, y = 12.5, and then use them to create a column vector that has the following elements:        Create a row vector in which the first element is 2, and the last element is 37, with an increment of 5 between the elements.       Create a row vector with 9 equally spaced elements in which the first element is 81 and the last element is 12.       Use a single command to create a row vector (assign it to a variable named a) with 19 elements such that   Do not type the vector explicitly.     "
},
{
  "id": "activity-8",
  "level": "2",
  "url": "array-practice.html#activity-8",
  "type": "Activity",
  "number": "2.1",
  "title": "",
  "body": "  Stirling's approximation for large factorials is given by   where means that the ratio of left and right hand sides approaches 1 as n goes to infinity.  Use the formula to calculate an approximation for 20! and compare the result with the true value obtained with MATLAB's built-in function factorial by calculating the ratio of the two quantities. Repeat for n = 50 and n = 100.    "
},
{
  "id": "activity-9",
  "level": "2",
  "url": "array-practice.html#activity-9",
  "type": "Activity",
  "number": "2.2",
  "title": "",
  "body": "  Create a row vector that has the following elements:     "
},
{
  "id": "activity-10",
  "level": "2",
  "url": "array-practice.html#activity-10",
  "type": "Activity",
  "number": "2.3",
  "title": "",
  "body": "  Define the variables x = 0.85, y = 12.5, and then use them to create a column vector that has the following elements:     "
},
{
  "id": "activity-11",
  "level": "2",
  "url": "array-practice.html#activity-11",
  "type": "Activity",
  "number": "2.4",
  "title": "",
  "body": "  Create a row vector in which the first element is 2, and the last element is 37, with an increment of 5 between the elements.    "
},
{
  "id": "activity-12",
  "level": "2",
  "url": "array-practice.html#activity-12",
  "type": "Activity",
  "number": "2.5",
  "title": "",
  "body": "  Create a row vector with 9 equally spaced elements in which the first element is 81 and the last element is 12.    "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "array-practice.html#activity-13",
  "type": "Activity",
  "number": "2.6",
  "title": "",
  "body": "  Use a single command to create a row vector (assign it to a variable named a) with 19 elements such that   Do not type the vector explicitly.    "
},
{
  "id": "array-address",
  "level": "1",
  "url": "array-address.html",
  "type": "Section",
  "number": "2.5",
  "title": "Addressing Arrays",
  "body": " Addressing Arrays  We already have experience working with arrays from studying the C programming language. There are some subtle and some not-so-subtle differences with working with arrays in MATLAB, some of them syntactical and others more fundamental. The main differences from C are:   array addressing In MATLAB, array elements are addressed using parentheses () (and not brackets [] as in C).  In MATLAB you can select or address more than one array element at once and thus perform operations with multiple elements at once. This will become clearer as soon as we look at some examples.  Arrays in MATLAB are ones-based (1-N) rather than zero-based. For example, if A = [5 -2 4 3] is your array, then the 5 is located at index 1 of the array in MATLAB whereas in C we would use the index 0 . So in MATLAB, A[1] = 5 whereas in C, A(0) = 5 .   Here are some examples of how to find the kth element of a vector ve or the element in row k and column p of matrix ma in MATLAB. Do you remember how to address the equivalent elements in C?  ve(k) % kth element in a vector ma(k,p) % kth row and pth column of matrix  Once you have addressed an array element (and assuming it is a number), we can now use these scalar values just like any other scalar value.  You can also select entire ranges of elements in an array. The colon operator : is often used for this purpose. Its use is most easily understood by looking at some examples.  Let's start with using the colon operator to select ranges of elements in a vector. Suppose ve is a vector.  % vector examples: ve(:) % all elements in a vector ve(p:q) % all elements from index p to index q in a vector  Now let's look at matrices. Suppose that ma is a matrix with nrow rows and ncol columns.  % matrix examples: ma(:,j) % all rows, column j (result is nrow by 1) ma(i,:) % row i, all columns (result is 1 by ncol) ma(:,p:q) % columns p through q ma(p:q,:) % rows p through q ma(p:q,r:s) % rows p to q of cols r to s  Note that when you address multiple elements, the result is a vector or matrix of the selected size:    Suppose that you have typed:   And now you type:  v = u(3:5); w = u([9 1 4 8]);  What values will v and w contain?     You can explicitly list the indices, in your desired order, whose corresponding elements you are interested in. Note that these indices are listed inside the parentheses of u(...) in the form of a vector, so enclosed in brackets.  The same principles hold for matrices, for example:    Here are some more examples. Suppose we define a matrix A as follows:   If you wanted to select the first column of this matrix, you'd choose all rows and specify column 1 as is done here:   And if you wanted to select several columns at once, for example columns 1-3 you could do so as follows:   "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "array-address.html#activity-14",
  "type": "Activity",
  "number": "2.7",
  "title": "",
  "body": "  Suppose that you have typed:   And now you type:  v = u(3:5); w = u([9 1 4 8]);  What values will v and w contain?    "
},
{
  "id": "array-resize",
  "level": "1",
  "url": "array-resize.html",
  "type": "Section",
  "number": "2.6",
  "title": "Adding Elements to Arrays",
  "body": " Adding Elements to Arrays  array adding elements   Adding to Vectors  Whereas in C, the size of an array was fixed throughout its existence, in MATLAB arrays can be dynamically resized without too much trouble. In fact, you can simple add on to an array by telling MATLAB new elements to be included. Let's take a look at an example. Suppose we have a vector ve , for example as follows:   This vector has six elements: ve(1) , ve(2) , ..., ve(6) . We can add on to this vector by simply telling MATLAB about additional elements:   By specifying elements seven through nine MATLAB automatically resized the vector to make room for these new elements. In addition, MATLAB will kindly pad with zeros if you create a hole :     Adding to Matrices  Just as for vectors, matrices can easily have new elements appended to them as well as you can see from this example. Suppose we have a matrix defined as follows:   This matrix has four rows and four columns. If we specify a new row, for example row 6, then not only will MATLAB enlarge the matrix to hold 6 rows, but it will also pad the fifth row with zeros.   Finally, arrays can have more than two dimensions:      "
},
{
  "id": "array-delete",
  "level": "1",
  "url": "array-delete.html",
  "type": "Section",
  "number": "2.7",
  "title": "Deleting Elements from Arrays",
  "body": " Deleting Elements from Arrays array deleting elements  Deleting elements from arrays is accomplished by assigning nothing to the elements - the empty array [] .    Similarly, elements can be deleted from matrices. Since we need to retain the rectangular shape of a matrix, we need to delete an entire column or an entire row at once. Take a look at this example:    In this example, we deleted columns 2 and 4 from the matrix, leaving us with columns 1 and 3 only.  "
},
{
  "id": "array-function",
  "level": "1",
  "url": "array-function.html",
  "type": "Section",
  "number": "2.8",
  "title": "Array Functions",
  "body": " Array Functions built-in functions array   There are many built-in functions for dealing with arrays. Here are a few of them:   length(v) returns the number of elements in a vector (number of columns for a matrix)  size(a) returns a row vector that lists all of the dimensions of a . For example, if a is a matrix then size(a) = [m n] .  reshape(a,m,n) rearranges the elements of a into a matrix with m rows and n columns. It is important to understand that the new shape is filled up with the elements of a column by column. If a itself is a matrix then its elements are read column by column to do so.  If v is a vector then diag(v) creates a matrix with the elements of v along the diagonal, zeros everywhere else. Such a matrix is called a diagonal matrix (since it only has non-trivial elements along its diagonal).  If a is a matrix then diag(a) creates a vector of the diagonal elements of a   Example using the reshape() function:     Use the MATLAB Help function to find more useful functions:   "
},
{
  "id": "array-practice-more",
  "level": "1",
  "url": "array-practice-more.html",
  "type": "Section",
  "number": "2.9",
  "title": "Practice Your Matrices",
  "body": " Practice Your Matrices    Create the following matrix by using vector notation for creating vectors with constant spacing and\/or the linspace command. Do not type individual elements explicitly.        Create the following matrix by using vector notation for creating vectors with constant spacing and\/or the linspace command. Do not type individual elements explicitly.        Create a matrix whose first row contains all zeros, the second row contains the numbers from 1 through n, the third the numbers from n to 1, where n is a variable with a positive integer value.       The following vector is defined in MATLAB:   Enter below what will be displayed if the following commands are executed by MATLAB. Check your answers by executing the commands with MATLAB.           "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "array-practice-more.html#activity-15",
  "type": "Activity",
  "number": "2.8",
  "title": "",
  "body": "  Create the following matrix by using vector notation for creating vectors with constant spacing and\/or the linspace command. Do not type individual elements explicitly.     "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "array-practice-more.html#activity-16",
  "type": "Activity",
  "number": "2.9",
  "title": "",
  "body": "  Create the following matrix by using vector notation for creating vectors with constant spacing and\/or the linspace command. Do not type individual elements explicitly.     "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "array-practice-more.html#activity-17",
  "type": "Activity",
  "number": "2.10",
  "title": "",
  "body": "  Create a matrix whose first row contains all zeros, the second row contains the numbers from 1 through n, the third the numbers from n to 1, where n is a variable with a positive integer value.    "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "array-practice-more.html#activity-18",
  "type": "Activity",
  "number": "2.11",
  "title": "",
  "body": "  The following vector is defined in MATLAB:   Enter below what will be displayed if the following commands are executed by MATLAB. Check your answers by executing the commands with MATLAB.          "
},
{
  "id": "string-intro",
  "level": "1",
  "url": "string-intro.html",
  "type": "Section",
  "number": "3.1",
  "title": "Strings as Arrays of Characters",
  "body": " Strings as Arrays of Characters   string MATLAB provides several ways to deal with text. One way to store text is as an array of characters, just like it is done in C. There are two subtle differences: In MATLAB, an array of characters is created using single quotes (recall that double quotes were used in C):   Since arrays know their own size and we never really worry about such things, we don't have to worry about whether they are null-terminated or not, we just use them.   Can a string include (in addition to digits, letters, other symbols, and spaces) double quotes?  Yes!  You can simply include double quotes, for example: name = 'My name is \"Petra\"'   One can treat strings just like any other array type when addressing elements:    Strings can be used in output commands to display text messages, format commands for plots, input arguments for functions and more.  Be careful of the following difference:   Here, x is simply a number (check the workspace window).   Here on the other hand, x is an array of characters (a character array).  "
},
{
  "id": "investigation-1",
  "level": "2",
  "url": "string-intro.html#investigation-1",
  "type": "Investigate",
  "number": "3.1",
  "title": "",
  "body": " Can a string include (in addition to digits, letters, other symbols, and spaces) double quotes?  Yes!  You can simply include double quotes, for example: name = 'My name is \"Petra\"'  "
},
{
  "id": "string-array",
  "level": "1",
  "url": "string-array.html",
  "type": "Section",
  "number": "3.2",
  "title": "Arrays of Strings",
  "body": " Arrays of Strings  string array Arrays of strings (when using character arrays to store each string) are relatively tricky in MATLAB.  You can make an array of strings from individual strings but you must be sure to pad strings with spaces to make sure they are all the same size.  If all your strings are of the same size there is no problem:   If the individual strings are not of the same length then you get into trouble:   One way to deal with this issue is to pad the shorter strings with spaces:   Since this is not great, MATLAB provides a function to help, the char() function which does the padding for you:    "
},
{
  "id": "string-array-of-strings",
  "level": "1",
  "url": "string-array-of-strings.html",
  "type": "Section",
  "number": "3.3",
  "title": "Strings as String Arrays",
  "body": " Strings as String Arrays  string string Arrays Newer versions of MATLAB support another string type which makes it possible to store multiple such strings in an array without the need for padding. Each individual string is also called a string scalar. To use these so-called string arrays (as opposed to the above described character arrays ) you enclose text in double quotes:   Using this string datatype it is easy to create an array of strings without having to worry about padding:   "
},
{
  "id": "math-add-sub",
  "level": "1",
  "url": "math-add-sub.html",
  "type": "Section",
  "number": "4.1",
  "title": "Addition and Subtraction",
  "body": " Addition and Subtraction  addition subtraction Two vectors or two matrices can be added or subtracted in MATLAB just as they are added in Linear Algebra, using the simple + or - operator.  Vectors and matrices must be the same size (dimensions) in order for this to work:  If   and   then   and   Check out the following MATLAB example:  va = [8 5 3]; vb = [2 9 4]; vc = va - vb   The same syntax works to add and subtract matrices instead of just vectors:  If   and   then   and   Check out the following MATLAB example:  A = [8 5 3; 1 2 5]; B = [2 9 4; 6 3 2]; C = A + B   "
},
{
  "id": "math-multiply",
  "level": "1",
  "url": "math-multiply.html",
  "type": "Section",
  "number": "4.2",
  "title": "Multiplication",
  "body": " Multiplication  The multiplication of matrices in linear algebra is not quite as straight-forward as the addition and subtraction are. If you have never heard of matrix multiplication before then it may be helpful for you to quickly watch a few YouTube videos to get up to speed. Matrix multiplication is not an essential skill in this class but it'll help to put what comes next in context. Also, you'll need to familiarize yourself with matrix multiplication for future classes, so you might just as well get started now.  matrix multiplication The linear algebra style array multiplication is performed in MATLAB with the * operator. In order to be able to multiply two matrices it is important that the number of columns of the first matrix is the same as the number or rows of the second matrix. We also say that the inside dimensions must match . Let's make this precise.  If we have two matrices, (dimensions: ) and (dimensions: ), then because their inside dimensions are both , they can be multiplied together to create a matrix whose dimensions will be .  Unlike the multiplication of numbers, matrix multiplication is not commutative. In other words, in general,  Rather than writing down the entire general definition of matrix multiplication, we'll present it for the product of a matrix with a matrix. Since the inside dimensions are both , we can multiply these two and the result will be a matrix. Here is how it's done: If   and   then   Check out the following MATLAB example:  A = [8 5 3; 1 2 5]; B = [2 9; 4 6; 3 2]; C = A * B   In this particular example we could also compute since the inside dimensions are now both equal to . The result, however, will be a matrix:   You can see that definitely, and are not the same!  But if the inside dimensions of the two matrices to be multiplied do not agree then they cannot be multiplied. MATLAB will let you know!    "
},
{
  "id": "p-283",
  "level": "2",
  "url": "math-multiply.html#p-283",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inside dimensions must match "
},
{
  "id": "math-scalar",
  "level": "1",
  "url": "math-scalar.html",
  "type": "Section",
  "number": "4.3",
  "title": "Scalar Multiplication",
  "body": " Scalar Multiplication  matrix scalar multiplication In linear algebra, scalar multiplication allows us to multiply an array by a number. This simply means that each element of the array is multiplied by that one number.  In MATLAB, this operation is performed by simply using the * operator. Take a look at this example:  A = [8 5 3; 1 2 5]; B = -2 * A   You can see that each element of A is simply multiplied by the scalar (in this example: -2).    Create the following three matrices:   Is ?       Create the following three matrices:   Is ?       Create the following three matrices:   Is ?       Create the following three matrices:   Is ?       Create the following three matrices:   Is ?       Create the following three matrices:   Is ?       Create the following three matrices:   Is ?     "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "math-scalar.html#activity-19",
  "type": "Activity",
  "number": "4.1",
  "title": "",
  "body": "  Create the following three matrices:   Is ?    "
},
{
  "id": "activity-20",
  "level": "2",
  "url": "math-scalar.html#activity-20",
  "type": "Activity",
  "number": "4.2",
  "title": "",
  "body": "  Create the following three matrices:   Is ?    "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "math-scalar.html#activity-21",
  "type": "Activity",
  "number": "4.3",
  "title": "",
  "body": "  Create the following three matrices:   Is ?    "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "math-scalar.html#activity-22",
  "type": "Activity",
  "number": "4.4",
  "title": "",
  "body": "  Create the following three matrices:   Is ?    "
},
{
  "id": "activity-23",
  "level": "2",
  "url": "math-scalar.html#activity-23",
  "type": "Activity",
  "number": "4.5",
  "title": "",
  "body": "  Create the following three matrices:   Is ?    "
},
{
  "id": "activity-24",
  "level": "2",
  "url": "math-scalar.html#activity-24",
  "type": "Activity",
  "number": "4.6",
  "title": "",
  "body": "  Create the following three matrices:   Is ?    "
},
{
  "id": "activity-25",
  "level": "2",
  "url": "math-scalar.html#activity-25",
  "type": "Activity",
  "number": "4.7",
  "title": "",
  "body": "  Create the following three matrices:   Is ?    "
},
{
  "id": "math-solve",
  "level": "1",
  "url": "math-solve.html",
  "type": "Section",
  "number": "4.4",
  "title": "Matrix Inversion - First Steps",
  "body": " Matrix Inversion - First Steps  So far we have looked at addition, subtraction and multiplication of matrices. It would be quite natural to next study matrix division. But... Well, you can't simply divide by a matrix, can you?  The idea of division is really to have an operation that undoes multiplication. For example, starting with the number 5, multiplying it by 3 gets you to 15. To undo this operation we need to divide the 15 by 3 and we find ourselves back at 5.  matrix inverse Extrapolating this idea to matrices would mean to find an operation that can undo matrix multiplication. This will naturally be a bit more complicated than regular division of numbers since matrix multiplication is already a bit prickly to begin with. This is where the matrix inverse comes into the picture. Don't worry, MATLAB can do it all.  The matrix inverse is very useful in many situations, amongst them solving systems of equations.  Consider the following system of equations, where there are 3 unknowns and 3 equations. This means a unique solution exists (unless the equations are linearly dependent). We could solve this system by substitution for example, or we can put it into matrix form and solve with MATLAB!  5x + 3y + -9z = 21  8x + y + 2z = 13  3x + 6y + -2z = 81  Now let's put the system into matrix form:  A * x = b   In this form, matrix A and vector b contain known values and vector x contains the unknowns for which we are solving.   So ideally, we'd want to divide by the matrix A in order to solve for the vector x. But again, there is no such thing as division by a matrix. Instead, such a matrix equation can be solved using the matrix inverse of A, also denoted (if it exists). In the following equation, denotes the identity matrix (that is, a square matrix with ones along the entire diagonal and zeros elsewhere):   This means that if the matrix inverse of A exists then we can solve for like this:   "
},
{
  "id": "p-313",
  "level": "2",
  "url": "math-solve.html#p-313",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix inverse "
},
{
  "id": "math-identity",
  "level": "1",
  "url": "math-identity.html",
  "type": "Section",
  "number": "4.5",
  "title": "Inverse of a Matrix, Identity Matrix",
  "body": " Inverse of a Matrix, Identity Matrix  Given a square matrix A, the matrix B is the inverse of A if it satisfies the following equation:   where is the identity matrix.  The inverse of a matrix A is denoted . With the above definition we therefore have   In MATLAB there are several ways to find the matrix inverse. One of these is to simply write A^(-1) as you can see in the following example:  A = [8 5 3; 1 2 5; 2 9 4]; %3x3 matrix AI = A^(-1) %() are optional here   There is also an inverse function, inv() that returns the inverse of a matrix as well:  A = [8 5 3; 1 2 5; 2 9 4]; %3x3 matrix AI = inv(A) %() are optional here   We can check that inv() did indeed provide the inverse by checking whether returns the identity matrix:   It does! Note that there is simply round-off error present, resulting in the decimal notation.  "
},
{
  "id": "math-det",
  "level": "1",
  "url": "math-det.html",
  "type": "Section",
  "number": "4.6",
  "title": "Determinant of a Matrix",
  "body": " Determinant of a Matrix  matrix determinant  Not every matrix has an inverse. For example, consider the matrix . If you try to find its inverse in MATLAB you get an error message:  A = [1 1; 1 1]; B = inv(A)      Why does this matrix not have an inverse? Well, suppose an inverse B did exist. It would have to satisfy that A*B = I, so:   If you write out the matrix multiplication you obtain four equations, namely:   Clearly, these equations contradict each other and that's why the matrix A cannot have an inverse.  How can you tell whether a matrix has an inverse? That's where the determinant comes in. The determinant of a matrix is a function that computes a number associated with a square matrix. It turns out, this number tells you about the matrix being invertible.  For the inverse of a matrix to exist, the matrix must be square and its determinant must be non-zero.  The determinant of a matrix   is written as det(A) or |A|  is useful in determining whether a solution to a system of equations exists   Linear algebra teaches you how to calculate the determinant of a matrix by hand (for example, using Cramer's Rule.) Thankfully, MATLAB can also find the determinant of a matrix.  In MATLAB:    Since the determinant of A is nonzero, the matrix has an inverse:   Now let's take a look at what happens for a matrix whose determinant is zero (also called a singular matrix).          "
},
{
  "id": "p-337",
  "level": "2",
  "url": "math-det.html#p-337",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "determinant "
},
{
  "id": "math-system",
  "level": "1",
  "url": "math-system.html",
  "type": "Section",
  "number": "4.7",
  "title": "Solving System of Equations",
  "body": " Solving System of Equations  We already saw how MATLAB can be used to solve a system of equation by using the matrix inverse. Just to review:  Given a system of linear equations, for example  8x + 5y + 3z = 0  1x + 2y + 5z = 1  2x + 9y + 4z = 3  we put the system into matrix form:  A * x = b  Here, A is the matrix of coefficients and b is the right-hand side. If the matrix A has an inverse that we can solve for our unknown x via . In MATLAB:  A = [8 5 3; 1 2 5; 2 9 4]; % 3x3 matrix b = [0; 1; 3]; % 3x1 RHS x = A^-1 * b   This technique is actually not very good, especially for large matrices as it becomes slow and inaccurate. It is much better to solve systems of equations using Gaussian Elimination :   By hand, you manipulate the rows of this equation in a well-defined way (adding multiples of one equation to another) so as to arrive at a system that has only I*x on the left-hand side and the solution on the right.  To do so in MATLAB, we use the left division operator (I told you it would make sense eventually!):  A = [8 5 3; 1 2 5; 2 9 4]; % 3x3 matrix b = [0; 1; 3]; % 3x1 RHS x = A \\ b % Gaussian Elimination!   Gaussian elimination The left division operator is short-hand for solving the system using the numerical technique that we know as Gaussian elimination. It is much better to use for large systems, as it is faster and more accurate!  How much better?  On my computer, a system of 1000 equations and unknowns takes the following time to compute:  xi = A^-1 * b; %4.1049 seconds xg = A \\ b; %0.6152 seconds   So more than 6.6 times faster!    Solve the following system of three linear equations:     Please paste your MATLAB code in the answer box.       Try to understand the built-in function clock. What does it return? Use this function to find today’s date (store it in a variable today - i.e. an array of three integers in the order year, month, day). Furthermore, find the current time and store them in a variable time (an array of three integers: hour, minutes, seconds).     "
},
{
  "id": "p-353",
  "level": "2",
  "url": "math-system.html#p-353",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian Elimination "
},
{
  "id": "p-355",
  "level": "2",
  "url": "math-system.html#p-355",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left division operator "
},
{
  "id": "activity-26",
  "level": "2",
  "url": "math-system.html#activity-26",
  "type": "Activity",
  "number": "4.8",
  "title": "",
  "body": "  Solve the following system of three linear equations:     Please paste your MATLAB code in the answer box.    "
},
{
  "id": "activity-27",
  "level": "2",
  "url": "math-system.html#activity-27",
  "type": "Activity",
  "number": "4.9",
  "title": "",
  "body": "  Try to understand the built-in function clock. What does it return? Use this function to find today’s date (store it in a variable today - i.e. an array of three integers in the order year, month, day). Furthermore, find the current time and store them in a variable time (an array of three integers: hour, minutes, seconds).    "
},
{
  "id": "math-element",
  "level": "1",
  "url": "math-element.html",
  "type": "Section",
  "number": "4.8",
  "title": "Element-by-Element Operators",
  "body": " Element-by-Element Operators   element-by-element calculations It is also possible to do element-by-element calculations with arrays. For example, if you have two row vectors you may wish to compute the product of the elements of each vector, just element by element as described here:  and   Since both x and y are matrices we cannot multiply them using the linear algebra matrix multiplication (inner dimensions don't agree). We'd have to transpose one of the two vectors and then go from there.  Similarly, we may be interested in quotients instead or in exponentiation as shown here:     All of the these are called element-by-element operations and MATLAB can perform these easily (without having to write a loop as you would have to do in C!)  You might even consider matrices of the same size for which you'd like to perform operations element-by element:   You might wish to find   or   Let's now take a look at how to perform these element-by-element operations in MATLAB:   Element-by-Element Operators  For calculations which involve each element of an array or matrix, we use the element-by-element operators (or dot operators):   multiplication: .*  exponentiation: .^  right division: .\/  left division: .\\   Here are some examples:  A = [2 6 3; 5 8 4]; % 2x3 arrays B = [1 4 10; 3 2 7]; A.*B   What's wrong with multiplying the following two matrices A and B together?  A = [2 6 3; 5 8 4]; % 2x3 arrays B = [1 4 10; 3 2 7]; A*B % 2x3 2x3   Since we are working element-by-element, clearly the two matrices must have the same dimensions.  How can we square each element of a matrix using the element-by-element operators?  A = [2 6 3; 5 8 4]; % 2x3 arrays B = [1 4 10; 3 2 7]; A.^2 % square each element   Now, let's try raising each element of the matrix A to the power of elements in matrix B:     Dot Operator Example   dot operator One often uses the dot operators to compute the values of a function at many values of its argument(s). For example, suppose we wanted to graph the fifth order polynomial:   In order to do so we'll need to find the y-values for lots and lots of different x-values. In C, this would mean writing a loop over all of those x-values. In MATLAB, we can make use of element-by-element operations:  x = 0:0.1:100; % 1001 points from 0 to 100 y = x.^5 - 5*x.^4 + 10*x - 5; plot(x,y)   We must use dot operators here! Take a look at what happens if we don't...:     "
},
{
  "id": "p-371",
  "level": "2",
  "url": "math-element.html#p-371",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "element-by-element "
},
{
  "id": "p-388",
  "level": "2",
  "url": "math-element.html#p-388",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "We must use dot operators here! "
},
{
  "id": "math-function",
  "level": "1",
  "url": "math-function.html",
  "type": "Section",
  "number": "4.9",
  "title": "Built-In Functions",
  "body": " Built-In Functions  built-in functions   The built-in functions of MATLAB can operate on individual elements or on all elements of an array at once. For example, the cosine function cos() can be used to find the cosine of a whole bunch of numbers (arranged as a vector, for example) all at once. Take a look:  x = [0 pi\/4 pi\/2 3*pi\/4 pi]; y = cos(x)   The result of calling such a function with an array as argument is another array of the same size as the argument. Here is why this might be useful:  x = 0:pi\/24:3*pi; % 73 steps from 0 to 3pi y = cos(0.1*x).*cos(x); % the result is a 73-element vector plot(x,y)   In C you would have had to write a loop in order to individually evaluate the cosine function on all desired x-values as is demonstrated in the following code snippet:  #define N 73 #define PI 3.14159265 float x[N], y[N]; for (i=0;i<=73;i++) { x[i] = i*PI\/24; y[i] = cos(0.1*x[i]) * cos(x[i]); }  This feature of MATLAB, in which functions accept arrays as arguments and return arrays with the same dimensions and size is called vectorization. We will see later that you can write a for-loop just as in C, but it is significantly slower to execute than the vectorized equivalent. Use vectorization whenever possible!   Vector Functions  built-in functions vector  In addition to many MATLAB functions being vectorized, there are functions that operate on vectors and return a result that is not computed element-by-element but rather a function of the entire vector. Here are some examples:  mean(v) : returns the mean (average) of the elements in the vector v  median(v) : returns the median of the elements in the vector v  std(v) : returns the standard deviation of the elements in the vector v  sum(v) : returns the sum of the elements of the vector v  sort(v) : returns a new vector whose elements are those of v, arranged in ascending order  Some MATLAB functions can be called in multiple ways and will behave slightly differently depending on the call. For example:  d = max(v) : returns the largest element of the vector v (and stores this in d)  [d,n] = max(v) : returns both the largest element of the vector v (and stores this in d) as well as the index (location) of this element (which is then stored in the variable n)  d = min(v) : returns the smallest element of the vector v  [d,n] = min(v) : returns the smallest element as well as its index    Matrix Functions  built-in functions matrix  When you apply a vector function on an entire matrix, the function will operate on each column of the matrix (as if this column were a vector entry). Here are some examples, assuming that A is a matrix:  d = max(A) : returns a row vector containing the maximum element of each column of A  [d,n] = max(A) : returns two row vectors d and n, where d contains the largest elements and n their indices  Here is an example:  A = [1 2 3; 4 5 6; -5 3 20]; [d n] = max(A)    The min function works similarly:  d = min(A) : row vector containing minimum elements of A  [d,n] = min(A) : two row vectors containing smallest elements and indices  Here are some further functions that operate on arrays:  det(A) : returns determinant of the matrix A (a number)  inv(A) : returns the inverse of the invertible square matrix A (a matrix)  Also useful in linear algebra are the following functions:  dot(a,b) : returns the scalar product of two vectors a and b (works on row or column vectors), the result is a number  cross(a,b) : returns the cross product of two vectors, which each must have 3 elements, the result is a 3-element vector    Random Number Functions  Certain simulations in science and engineering require random numbers. MATLAB provides several functions that calculate random numbers.  built-in functions random number rand : single random number between 0 and 1  rand(1,n) : n-element row vector of random numbers from the interval [0,1]  rand(n) : n×n matrix of random numbers from the interval [0,1]  rand(m,n) : m×n matrix of random numbers from the interval [0,1]  randperm(n) : n-element row vector with a random permutation of the integers 1 to n  Here is an example:   Often you need random numbers distributed uniformly throughout an interval that is not 0 to 1, but a to b. This can be accomplished by using:  a + (b-a) * rand(1,n)    This will produce 20 uniformly distributed random numbers between 50 and 100, outputted into the default ans variable.  Sometimes you need normally distributed random numbers; in this case use randn instead. It has the same formats as rand but generates normally distributed numbers with a mean of 0 and standard deviation of 1. One can change both the mean and standard deviation as demonstrated here:  (stdv * randn(1,n)) + mean   This generates 50 random integers with a mean of 75 and a standard deviation of 13.   "
},
{
  "id": "math-practice",
  "level": "1",
  "url": "math-practice.html",
  "type": "Section",
  "number": "4.10",
  "title": "Practice Your Functions",
  "body": " Practice Your Functions    A large TV screen of height H = 50 ft is placed on the side wall of a tall building. The height from the street to the bottom of the screen is h = 130 ft. The best view of the screen is when the viewing angle, , is maximized. Use MATLAB to determine the distance x at which is a maximum.  To do so, define a vector x with elements ranging from 30 to 300 with spacing of 0.5. Use this vector to calculate the corresponding values of . Then use MATLAB’s built-in function max to find the value of x corresponding to the largest value of .        Use MATLAB to show that the sum of the infinite series   converges to 1. Do this by computing the sum for upper bounds N=10, 20, 30, and 40.  Hint: Create a vector with elements from 1 through N first and then use this vector to create another one whose elements are , for . Then add up the components of this vector.  Please paste your code into the textbox.     "
},
{
  "id": "activity-28",
  "level": "2",
  "url": "math-practice.html#activity-28",
  "type": "Activity",
  "number": "4.10",
  "title": "",
  "body": "  A large TV screen of height H = 50 ft is placed on the side wall of a tall building. The height from the street to the bottom of the screen is h = 130 ft. The best view of the screen is when the viewing angle, , is maximized. Use MATLAB to determine the distance x at which is a maximum.  To do so, define a vector x with elements ranging from 30 to 300 with spacing of 0.5. Use this vector to calculate the corresponding values of . Then use MATLAB’s built-in function max to find the value of x corresponding to the largest value of .     "
},
{
  "id": "activity-29",
  "level": "2",
  "url": "math-practice.html#activity-29",
  "type": "Activity",
  "number": "4.11",
  "title": "",
  "body": "  Use MATLAB to show that the sum of the infinite series   converges to 1. Do this by computing the sum for upper bounds N=10, 20, 30, and 40.  Hint: Create a vector with elements from 1 through N first and then use this vector to create another one whose elements are , for . Then add up the components of this vector.  Please paste your code into the textbox.    "
},
{
  "id": "math-worked-problem",
  "level": "1",
  "url": "math-worked-problem.html",
  "type": "Section",
  "number": "4.11",
  "title": "Practice Solving System of Equations",
  "body": " Practice Solving System of Equations  Let's practice solving a system of linear equations!    Electrical circuit   Electrical Circuit Problem    First, solve for the current through in the lumped circuit. What is the current through ?   To find all unknown currents, use Kirchoff's Voltage Law:   What are the equations for each current loop?         Rewrite the equations in matrix form:   Recall that we used to call the coefficient matrix A (not R) and the vector of unknowns x (not I). We used to call the right-hand side b (not V).       Put some numbers in for the known quantities:       Try solving this in MATLAB.   V1 = 20; V2 = 12; V3 = 40; % create voltages (V) R1 = 18; R2 = 10; R3 = 16; % create resistances R4 = 6; R5 = 15; R6 = 8; % (Ohms) R7 = 12; R8 = 14;   % create resistance matrix R  R = [-(R1+R2+R3) R2 R3 R2 -(R2+R4+R5+R7) R4 R7 R3 R4 -(R3+R4+R6) R6 0 R7 R6 -(R6+R7+R8)];  V = [-V1; 0; V2; -V3];      "
},
{
  "id": "figure-10",
  "level": "2",
  "url": "math-worked-problem.html#figure-10",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": "  Electrical circuit   Electrical Circuit Problem  "
},
{
  "id": "activity-30",
  "level": "2",
  "url": "math-worked-problem.html#activity-30",
  "type": "Activity",
  "number": "4.12",
  "title": "",
  "body": " First, solve for the current through in the lumped circuit. What is the current through ?   To find all unknown currents, use Kirchoff's Voltage Law:   What are the equations for each current loop?         Rewrite the equations in matrix form:   Recall that we used to call the coefficient matrix A (not R) and the vector of unknowns x (not I). We used to call the right-hand side b (not V).       Put some numbers in for the known quantities:       Try solving this in MATLAB.   V1 = 20; V2 = 12; V3 = 40; % create voltages (V) R1 = 18; R2 = 10; R3 = 16; % create resistances R4 = 6; R5 = 15; R6 = 8; % (Ohms) R7 = 12; R8 = 14;   % create resistance matrix R  R = [-(R1+R2+R3) R2 R3 R2 -(R2+R4+R5+R7) R4 R7 R3 R4 -(R3+R4+R6) R6 0 R7 R6 -(R6+R7+R8)];  V = [-V1; 0; V2; -V3];     "
},
{
  "id": "script-create",
  "level": "1",
  "url": "script-create.html",
  "type": "Section",
  "number": "5.1",
  "title": "Creating Script Files",
  "body": " Creating Script Files  Some notes about script files (M-files) to get us started:   script files A script file consists of a sequence of MATLAB commands.  Commands are executed in the order they are written just as if they were typed at the prompt.  Output (echoing) is still displayed to the Command Window.  Script files can be edited using any editor, i.e. your favorite - text edit, vim, Emacs, etc. Or you can use MATLAB's built-in editor (super convenient since the editor provides some additional functionality).    Editing Script Files  In MATLAB, script files are created and edited in the Editor\/Debugger Window.  From the MATLAB menu: Home > New > Script  Or use your own editor and: File > Open  Either way a new Editor\/Debugger Window will appear.  Try it out right now: open an empty file in the MATLAB editor and paste in the circuit code we created in the previous section:  V1 = 20; V2 = 12; V3 = 40; % create voltages (V) R1 = 18; R2 = 10; R3 = 16; % create resistances R4 = 6; R5 = 15; R6 = 8; % (Ohms) R7 = 12; R8 = 14; % create resistance matrix R R = [-(R1+R2+R3) R2 R3 R2 -(R2+R4+R5+R7) R4 R7 R3 R4 -(R3+R4+R6) R6 0 R7 R6 -(R6+R7+R8)]; V = [-V1; 0; V2; -V3]; I = R\\V; I(3)-I(4)  Save this code under the name circuit.m .    Running \/ Debugging Script Files  script files run There are many different ways to run your script file. The most straight-forward one from within the editor is to simply click on the run button in the MATLAB editor.    Window showing how to run a script file   Running a script file   You can also run a script file from the Command Window prompt. If you script file is named circuit.m , for example, either of the following lines would run the script file:  run circuit circuit  In any case, the .m extension is assumed.  As shown in the above image, it is possible to set breakpoints at which MATLAB will pause execution of the script file so that you can examine values of variables and make sure your code does what you expect it to do. It's a great way to debug your code. Give it a try!  You set a breakpoint by clicking on the space to the left of the relevant line in the editor. You delete a breakpoint by clicking on it again.   "
},
{
  "id": "figure-11",
  "level": "2",
  "url": "script-create.html#figure-11",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": "  Window showing how to run a script file   Running a script file  "
},
{
  "id": "script-fscanf",
  "level": "1",
  "url": "script-fscanf.html",
  "type": "Section",
  "number": "5.2",
  "title": "The <code class=\"code-inline tex2jax_ignore\">fscanf()<\/code> Command",
  "body": " The fscanf() Command  fscanf() There are multiple ways to customize a script file so as to respond to a user's needs. Since the script file shares the variable workspace with the command window, one way is to simply create a variable in the command window and assign it a certain value before running the script file. That value can then be used within the script file. But that's not a very clean way to go about this. A better method is to have the script ask for user input or read input from a file, for example via the fscanf() command.  The fscanf() command differs a bit from its C counterpart: The syntax is slightly different and in addition, in MATLAB it is vectorized.  Just as in C, before reading from a file it needs to be opened:   Once a file is open you can refer to it using the chosen variable (fid in the above example).  The default permission for opening a file is for reading ( 'r' ) and you do not need to spell this out although you could:   Once a file is open, you can read data from it using the fscanf() command. Again, there are multiple options. The most simple one is:   This command reads all of the data from the open text file (referred to by fid ) into a column vector A , with values from the file interpreted according to the given format specifier. If fscanf cannot match the format specifier to the data in the file (for example trying to interpret a character as a float), it reads only the portion that matches and then stops processing.  Let's take a look at an example. Suppose you have a file named 'numbers.txt' in your working directory with the following contents:   23.5 34.3 33.1   Then  fid = fopen('numbers.txt'); A = fscanf(fid, '%f')   When you are done reading from a file you should close it using   If you do not wish to read all of the data at once you can specify how much data to read and in what shape to store it:   This reads the file data into an array, A, whose dimensions are specified in size , and positions the file pointer after the last value read. The fscanf() function populates A column by column. In addition, size must be a positive integer or have the form [m n] , where m and n are positive integers that describe the shape of the matrix A.  Continuing on with the file 'numbers.txt' from above, here are a few more examples:  fid = fopen('numbers.txt'); A = fscanf(fid, '%f', 2) fclose(fid);   Here, we specified to only read two values from the file.  fid = fopen('numbers.txt'); A = fscanf(fid, '%f', [1 3]) fclose(fid);   We specified that we wanted to store the data in the form of a 1x3 matrix, which is row vector.  To sum things up:   The default permission for opening a file is 'r' .  format is the format specifier string, similar to C: '%lu %d %d %d'  size is an optional array indicating how many items to read from the file. The default is to read the whole file into a column vector. The resulting values are assigned to the variable A.     Let's say we wanted to read the following file, which I named 'numbers.txt' on my computer (it contains a few more numbers than the previous one):   23.5 34.3 33.1 63.9 234.0 34.2 54.3 34.2 67.9 234.3 22.5 34.7 78.5 57.4 44.0 22.4 54.3 64.7 34.5 65.3 77.2 23.5 54.7 32.4 43.5 34.2 44.4 43.0 22.1 45.2 344.5 42.3 76.8 234.1 11.2 22.3 45.2 34.5 32.1 42.6 33.2 12.3   Below are some examples that use the fscanf function to read (parts of) the file. Copy this code into a script file and run it line by line (use breakpoints and the step-by-step execution feature). Before each command, try to predict what it will do.   fname = 'numbers.txt'; fptr = fopen(fname); % could use 'r', but default is for reading anyway A = fscanf(fptr, '%f', 6); % read 6 elements into a vector A B = fscanf(fptr, '%f', [3, 4]); % read from where you are into a matrix % B with three rows and 4 columns (fills % up B column by column) C = fscanf(fptr, '%f'); % read from where you are to the end of % the file, store in vector C %C = fscanf(fptr, '%f', [3, inf]); % read from where you are to the end % of the file, store in a matrix of three % rows and as many columns as necessary fclose(fptr);   Now that you have studied the above examples, how could you use fscanf() to read all of the numbers in the file and store them in a matrix A so that the elements in A are arranged exactly as they are in the file 'numbers.txt' ?     "
},
{
  "id": "activity-31",
  "level": "2",
  "url": "script-fscanf.html#activity-31",
  "type": "Activity",
  "number": "5.1",
  "title": "",
  "body": "  Let's say we wanted to read the following file, which I named 'numbers.txt' on my computer (it contains a few more numbers than the previous one):   23.5 34.3 33.1 63.9 234.0 34.2 54.3 34.2 67.9 234.3 22.5 34.7 78.5 57.4 44.0 22.4 54.3 64.7 34.5 65.3 77.2 23.5 54.7 32.4 43.5 34.2 44.4 43.0 22.1 45.2 344.5 42.3 76.8 234.1 11.2 22.3 45.2 34.5 32.1 42.6 33.2 12.3   Below are some examples that use the fscanf function to read (parts of) the file. Copy this code into a script file and run it line by line (use breakpoints and the step-by-step execution feature). Before each command, try to predict what it will do.   fname = 'numbers.txt'; fptr = fopen(fname); % could use 'r', but default is for reading anyway A = fscanf(fptr, '%f', 6); % read 6 elements into a vector A B = fscanf(fptr, '%f', [3, 4]); % read from where you are into a matrix % B with three rows and 4 columns (fills % up B column by column) C = fscanf(fptr, '%f'); % read from where you are to the end of % the file, store in vector C %C = fscanf(fptr, '%f', [3, inf]); % read from where you are to the end % of the file, store in a matrix of three % rows and as many columns as necessary fclose(fptr);   Now that you have studied the above examples, how could you use fscanf() to read all of the numbers in the file and store them in a matrix A so that the elements in A are arranged exactly as they are in the file 'numbers.txt' ?    "
},
{
  "id": "script-import",
  "level": "1",
  "url": "script-import.html",
  "type": "Section",
  "number": "5.3",
  "title": "Import Data",
  "body": " Import Data  import data There are several ways to import data: MATLAB's Import Wizard, the load() command, or the fscanf() command we just studied. Let's take a closer look at the load() command.  Remember how difficult it was to use the fscanf() command to read tabular data into a variable and preserve the shape of the original table? The problem comes from the fact that MATLAB populates an array column-by-column (but data from the file is read row-by-row).  load() The load() command is less flexible than the fscanf() command but it makes it much easier to read from files whose data is a table. The load() command will import such data into a single array variable (if you don't specify a variable name then it will be the same as the filename). For example, if we want to load the data from our above file numbers.txt , we can use the load() command:   There is no need to open the file prior to loading its data, the load() command does it all. It is a very useful command for simple formats. You also do not need to close the file after loading the data.  You can specify the name of the variable in which the file's contents are stored:  fname='numbers.txt'; data = load(fname)   "
},
{
  "id": "script-input",
  "level": "1",
  "url": "script-input.html",
  "type": "Section",
  "number": "5.4",
  "title": "Input to Script File",
  "body": " Input to Script File  There are several ways to assign values to variables that are used in a script file:   Edit the script file   Assign values to the variables in the Command Window and then run the script as demonstrated below. In this example, the script is named doStuff.m . If this script processes data from a file whose name is stored in the variable filename then one way to change from which file the script reads is to assign a filename in the Command Window before running the script.  filename = 'numbers.txt' doStuff filename = 'more_numbers.txt' doStuff    Ask the user for input by using the input command:   This function is like a combination of the printf() and scanf() commands that we use in C. Take a look:   Enter number of files: 6        Inputting Strings  strings input By default, the input command expects a number to be entered. If you wish the user to enter characters or strings (arrays of characters) you need to tell the input function with the optional parameter 's'. Check out the following syntax:   Here's an example:   Enter filename: numbers.txt        The wind chill temperature, , is the air temperature felt on exposed skin due to wind. It is calculated by   where is the temperature in degrees Fahrenheit and is the wind speed in mi\/h.  Write a MATLAB program in a script file that asks the user to enter values for and and then calculates the wind chill temperature and displays the message \"The wind chill temperature is …\".  In order to output the message to the user you can use the disp() command (try it out!). We'll learn other ways to output data soon.  Please paste your code into the textbox:     "
},
{
  "id": "activity-32",
  "level": "2",
  "url": "script-input.html#activity-32",
  "type": "Activity",
  "number": "5.2",
  "title": "",
  "body": "  The wind chill temperature, , is the air temperature felt on exposed skin due to wind. It is calculated by   where is the temperature in degrees Fahrenheit and is the wind speed in mi\/h.  Write a MATLAB program in a script file that asks the user to enter values for and and then calculates the wind chill temperature and displays the message \"The wind chill temperature is …\".  In order to output the message to the user you can use the disp() command (try it out!). We'll learn other ways to output data soon.  Please paste your code into the textbox:    "
},
{
  "id": "script-output",
  "level": "1",
  "url": "script-output.html",
  "type": "Section",
  "number": "5.5",
  "title": "Output Commands",
  "body": " Output Commands  output fprintf() In addition to the automatic echoing that MATLAB performs, there are two commands which display output: disp() and fprintf() . Both commands can generate output to the screen, which is displayed in the Command Window, and the fprintf() command can also be used for output to a file.   disp() Command  output disp() The disp() command is used to display single variables without the variable name:  disp(variable) disp('some string')  Each call to disp() appears on a new line, meaning there is a built-in line break \\n .  Here is an example - suppose the following code is stored in a script file scores.m :  % Script file scores.m % Assumes that test data is available in the array tests ave = mean(tests); %compute test average disp('The average score was:') disp(ave);  Here is what happens when we execute this script file, for example by typing scores at the command prompt:   The average score was: 95    fprintf() Command  output fprintf() The fprintf() command is similar to its namesake in C and is used for formatted output - either to the screen or to a file. Note that in MATLAB there is no separate printf() command for output to the screen. Both cases - output tot the screen as well as output to a file - use the fprintf() command. Here is the syntax:  fprintf(fid, format string, variables)  Just like in C, the format string contains literal text, escape sequences, and format specifiers . We'll learn details of formatted output in the next section.   "
},
{
  "id": "script-format",
  "level": "1",
  "url": "script-format.html",
  "type": "Section",
  "number": "5.6",
  "title": "Formatted Output",
  "body": " Formatted Output  output format   Recall the general syntax of the fprintf() command:   Here, fid is optional and is used for output to a file instead of the screen. More on this topic below.  The format string contains literal text, escape sequences and format specifiers.  Escape sequences include   \\n : newline and carriage return  \\b : backspace  \\t : horizontal tab   Format specifiers follow this syntax:  %[flag][width][.precision]type  Note: the brackets [] are optional, i.e. %d without surrounding brackets is acceptable.  Flag   - : left-justified  + : signed values displayed with a + sign  0 : pad with leading zeros instead of spaces   Width   Minimum field width (will use wider if number won't fit)   Precision   for %e , %f number of digits to right of decimal place  for %g maximum number of significant figures  for %i , %d minimum number of digits --- pad rest with blanks or zeros   Type   e  E : lower\/upper case exponential notation (1.20500e_001 or 1.20500E+001)  f : fixed point notation (12.05000)  g  G : shorter of e or f (E or f)  i  d : integer   The fprintf() command is vectorized in MATLAB, so formatting commands are applied to all elements of arrays A1,...An in column order. Let's take a look at an example:  x = 0:6; % row vector of integers 0 to 6 y = sqrt(x); % row vector of square root of integers T = [x; y]; % 2x7 matrix; first row is x, second row is y fprintf('number sqrt\\n') fprintf(' %2d %5.2f\\n', T)  number sqrt 0 0.00 % for a matrix, fprintf() operates on each 1 1.00 % column, i.e. each column of matrix T. 2 1.41 3 1.73 4 2.00 5 2.24 6 2.45  This output may at first be surprising. Let's take a closer look. Here is what the matrix T looks like by itself:   When processing the fprintf() command, MATLAB reads through this matrix column by column and repeatedly applies the format specifiers until no elements are left. So the first %2d is applied to integer 0 (first element of the first column of T), the following %5.2f is applied to the element 0 in column 1, row 2 of T, then a new line is executed and since there are elements left in T, we start over again but this time with the second column of T. This process continues until the last column of T has been processed.  One might think at first sight that the following would produce a similar result:   But take a look at what happens:  0 1.00 2 3.00 4 5.00 6 0.00 1 1.41 1.732051e+00 2.00 2.236068e+00 2.45  Since both x and y are row vectors, MATLAB uses their entries column-by-column, which means first all of the entries of x (you can see them in the above output as 0, 1.00, 2, 3.00, 4, 5.00, 6) and then the entries of y. This is obviously not what we had intended.    Modify your script from last class so that it displays the following chart:  Temperature (F) Speed (mi\/h) 40 30 20 10 0 -10 -20 -30 -40 10 34 21 9 -4 -16 -28 -41 -53 -66 20 30 17 4 -9 ... 30 28 15 ... 40 . 50 . 60 .  Here is our script from last class:   T = input('Enter a temperature (F): '); v = input('Enter the wind speed (mph): '); TWC = 35.74 + .6215*T - 35.75*v^(.16) + .4275*T*v^(.16); disp('The wind chill temperature is ...'); disp(TWC);   Please paste your code into the submission box.     Rather than writing to the screen we can also use the fprintf() command to save output to a file , but first we must open the file:  The process of writing to a file is just like with C:   file_id = fopen('filename','permission');  fprintf(file_id, 'formatting string', vars);  fclose(file_id);   The file permission options are:   'w' : open for write (writes over exiting file or creates new)  'a' : append to (appends to end of existing file or creates new)  'r' : open for reading   "
},
{
  "id": "script-format-wind-chill",
  "level": "2",
  "url": "script-format.html#script-format-wind-chill",
  "type": "Activity",
  "number": "5.3",
  "title": "",
  "body": "  Modify your script from last class so that it displays the following chart:  Temperature (F) Speed (mi\/h) 40 30 20 10 0 -10 -20 -30 -40 10 34 21 9 -4 -16 -28 -41 -53 -66 20 30 17 4 -9 ... 30 28 15 ... 40 . 50 . 60 .  Here is our script from last class:   T = input('Enter a temperature (F): '); v = input('Enter the wind speed (mph): '); TWC = 35.74 + .6215*T - 35.75*v^(.16) + .4275*T*v^(.16); disp('The wind chill temperature is ...'); disp(TWC);   Please paste your code into the submission box.    "
},
{
  "id": "script-directory",
  "level": "1",
  "url": "script-directory.html",
  "type": "Section",
  "number": "5.7",
  "title": "Current Directory",
  "body": " Current Directory  current directory We previously learned all about directory structures and paths (relative and absolute). When you start MATLAB, the current directory is set to a default directory or the directory from which you started. When you run script files, the file must either be in the current directory or in the search path. It is possible to change both.    Window showing the current directory in MATLAB   Current directory in MATLAB   One can modify the current directory just like selecting files, or one can use the cd command, like in Linux:  cd('directory'); %relative or absolute    Window showing the current directory in MATLAB   Current directory in MATLAB   "
},
{
  "id": "figure-12",
  "level": "2",
  "url": "script-directory.html#figure-12",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": "  Window showing the current directory in MATLAB   Current directory in MATLAB  "
},
{
  "id": "figure-13",
  "level": "2",
  "url": "script-directory.html#figure-13",
  "type": "Figure",
  "number": "5.3",
  "title": "",
  "body": "  Window showing the current directory in MATLAB   Current directory in MATLAB  "
},
{
  "id": "script-search",
  "level": "1",
  "url": "script-search.html",
  "type": "Section",
  "number": "5.8",
  "title": "Search Path",
  "body": " Search Path  search path The search path is where MATLAB looks for script files and functions. One can modify the search path in two ways:    From the Command Window prompt with the path command:  path('newpath'); %this overwrites the existing path... path(path, 'newpath') %appends to the path path('newpath', path);  This is not really a good idea unless you know exactly what you are doing!    The better way is to use MATLAB's dialog box to change the search path To do so:  On the Home tab, in the Environment section, click Set Path.    Where to find the Set Path Dialog   Set Path Window   The Set Path dialog box will appear:    Set Path Dialog Box   Set Path Window   You can now add folders to the search path.    "
},
{
  "id": "figure-14",
  "level": "2",
  "url": "script-search.html#figure-14",
  "type": "Figure",
  "number": "5.4",
  "title": "",
  "body": "  Where to find the Set Path Dialog   Set Path Window  "
},
{
  "id": "figure-15",
  "level": "2",
  "url": "script-search.html#figure-15",
  "type": "Figure",
  "number": "5.5",
  "title": "",
  "body": "  Set Path Dialog Box   Set Path Window  "
},
{
  "id": "plots-intro",
  "level": "1",
  "url": "plots-intro.html",
  "type": "Section",
  "number": "6.1",
  "title": "Introduction to 2D Plots",
  "body": " Introduction to 2D Plots  The ability to make plots (figures) of your data (both two- and three-dimensional) is critical in modern scientific computing.  Plots are an extremely effective way to visualize information -- particularly in science and engineering.  plot MATLAB has very powerful and flexible built-in plotting capabilities which allow you to create a variety of two-dimensional plots including standard linear plots, logarithmic and semi-log plots, polar plots and histograms, as well as various three-dimensional surface and contour plots.  Here is an example of a very simple plot:    MATLAB 2D plot with simple curve and no labels   Simple 2D plot without labels   What is wrong with this plot? It needs labels and other information that will help the viewer interpret the plot correctly. Here is a better example:    MATLAB 2D plot with simple curves and labels   2D plots with labels explained   We will learn how to create such labeled plots in this chapter.  "
},
{
  "id": "figure-16",
  "level": "2",
  "url": "plots-intro.html#figure-16",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": "  MATLAB 2D plot with simple curve and no labels   Simple 2D plot without labels  "
},
{
  "id": "figure-17",
  "level": "2",
  "url": "plots-intro.html#figure-17",
  "type": "Figure",
  "number": "6.2",
  "title": "",
  "body": "  MATLAB 2D plot with simple curves and labels   2D plots with labels explained  "
},
{
  "id": "plots-create",
  "level": "1",
  "url": "plots-create.html",
  "type": "Section",
  "number": "6.2",
  "title": "Creating Plots",
  "body": " Creating Plots   plot simple The simplest plot is created using the plot() command:   where x and y are vectors of equal length. This creates a two-dimensional line plot of the data in y versus the corresponding values in x.  Each time the plot command is issued, the current plot is erased and the new plot is drawn.  All graphics are displayed in the Figure Window .  The default plot is a solid blue line of thickness 0.5 points which linearly interpolates the data (this means that lines are drawn between successive points in your data).  Many options are available to modify the look of a plot.  Here is an example of the default plot style:  x = [1 2 3 4 5.5 7 10]; % abscissa 1x7 y = [2 2.5 3.3 4.8 3.0 2.7 4.0]; % ordinate plot(x,y)   "
},
{
  "id": "p-541",
  "level": "2",
  "url": "plots-create.html#p-541",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Figure Window "
},
{
  "id": "p-542",
  "level": "2",
  "url": "plots-create.html#p-542",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly interpolates "
},
{
  "id": "plots-specifiers",
  "level": "1",
  "url": "plots-specifiers.html",
  "type": "Section",
  "number": "6.3",
  "title": "Line Specifiers",
  "body": " Line Specifiers   There are numerous options to change the look of the plot.   'line specifiers' define the style and color of the line and type of markers for a plot:   plot line specifiers  Plot Specifiers     Line Style    Specifier    Line Color    Specifier    Marker Type    Specifier     solid (default)   -   red   r   plus sign   +     dashed   --   green   g   circle   o     dotted   :   blue   b   asterisk   *     dash-dot   -.   cyan   c   point   .         magenta   m   square   s         yellow   y   diamond   d         black   k   five-pointed star   p         white   w   six-pointed star   h      The line specifiers are typed as a single string and can appear in any order in the string. Here are some examples:            "
},
{
  "id": "table-7",
  "level": "2",
  "url": "plots-specifiers.html#table-7",
  "type": "Table",
  "number": "6.3",
  "title": "Plot Specifiers",
  "body": "plot line specifiers  Plot Specifiers     Line Style    Specifier    Line Color    Specifier    Marker Type    Specifier     solid (default)   -   red   r   plus sign   +     dashed   --   green   g   circle   o     dotted   :   blue   b   asterisk   *     dash-dot   -.   cyan   c   point   .         magenta   m   square   s         yellow   y   diamond   d         black   k   five-pointed star   p         white   w   six-pointed star   h     "
},
{
  "id": "plots-properties",
  "level": "1",
  "url": "plots-properties.html",
  "type": "Section",
  "number": "6.4",
  "title": "Plot Properties",
  "body": " Plot Properties   Pairs of 'PropertyName' and 'PropertyValues' are used to control the size and thickness of the line and markers.  plot properties  Plot Property Options     Property Name    Property Value      linewidth   width of line, in points (0.5 default)     markersize   size of marker, in points     markeredgecolor   color of marker from specifier table     markerfacecolor   color of filled marker from table     linestyle   line style specifier from table     color   color of line from table     marker   marker specifier from table     plot(x,y,'-mo', 'linewidth',2, 'markersize',8, 'markeredgecolor','g',... 'markerfacecolor','y')   "
},
{
  "id": "table-8",
  "level": "2",
  "url": "plots-properties.html#table-8",
  "type": "Table",
  "number": "6.4",
  "title": "Plot Property Options",
  "body": "plot properties  Plot Property Options     Property Name    Property Value      linewidth   width of line, in points (0.5 default)     markersize   size of marker, in points     markeredgecolor   color of marker from specifier table     markerfacecolor   color of filled marker from table     linestyle   line style specifier from table     color   color of line from table     marker   marker specifier from table    "
},
{
  "id": "plots-functions",
  "level": "1",
  "url": "plots-functions.html",
  "type": "Section",
  "number": "6.5",
  "title": "Plotting Functions",
  "body": " Plotting Functions  plot functions abscissa Plotting a function requires that an array of abscissa values are created first. Next, you evaluate the function at all of these values to give you pairs of (x,y) coordinates to be plotted.   x = -2:0.3:4; y = 3.5.^(-0.5*x).*cos(6*x); plot(x,y)   The above plot looks rather edgy but should be looking smooth. What is the problem? MATLAB automatically connects subsequent points of the plot with lines. So if the points are too far apart from each other, the graph will look edgy. It is thus important for plotting a function to choose an array of appropriately spaced abscissa values. Below is a better choice for our example:   x = -2:0.01:4; y = 3.5.^(-0.5*x).*cos(6*x); plot(x,y)    Using fplot()  plot single variable Plotting a function of a single variable can be done using the fplot command:   function used to accept a string in which the function to be plotted was specified and so you may still encounter such code. Future releases of MATLAB will no longer accept such input.  We will learn more about functions in the chapter on functions, but for now you can simply accept the following syntax:  @(argument) function  For example,  @(x) x.^2  defines the function .  limits is either a two element vector specifying the domain of the argument or a four element vector specifying the domain of x and the limits of y .  'line specifiers' are the same as for the plot() command. Here is an example:     "
},
{
  "id": "plots-multiple",
  "level": "1",
  "url": "plots-multiple.html",
  "type": "Section",
  "number": "6.6",
  "title": "Plotting Multiple Curves",
  "body": " Plotting Multiple Curves  Frequently it is desirable to display more than one curve in a single plot. There are several ways in MATLAB to create such a figure. We will discuss three methods in this section:   Method 1: Plotting Pairs of Vectors  The plot command accepts more than one pair of vectors.  x = -2:0.01:4; y = 3.5.^(-0.5*x).*cos(6*x); u = x; v = y+0.5; t = x; h = y-0.5; plot(x,y, u,v, t,h)   This creates a single plot with curves of y vs. x, v vs. u, and h vs. t. Each curve is given a separate color to distinguish it.  Additionally, line specifiers for each curve are possible:      Method 2: Using the hold on Command  plot hold on \/ hold off The hold on and hold off commands allow control over whether the Figure Window is erased or not.  The standard usage is to first issue a plot command, then the hold on command, several more plot commands, and finally the hold off command.  The effect is that the first plot command sets up the axes and displays the first curve, the hold on command ensures that the rest of the plot commands go to the current figure until the hold off command is issued.  x = 0:pi\/24:3*pi; y1 = cos(x); y2 = sin(x); y3 = sin(x).*cos(x); plot(x,y1) hold on plot(x,y2, 'r') plot(x,y3, '-go') hold off     Method 3: Using the line() Command  plot line() You can also use the line() command, which adds a curve to the existing plot.  The difference between line() and plot() is that plot starts a new figure while line does not.  x = 0:pi\/24:3*pi; y1 = cos(x); y2 = sin(x); y3 = sin(x).*cos(x); plot(x,y1) line(x,y2,'color','r') line(x,y3,'color','g', 'linestyle','-', 'marker','o')  Must use PropertyName and PropertyValue      Plot the function   for x between -5 and 10 using a red solid line of linewidth 2. Can you find the coordinates of the maximum that occurs around x = 1? If so, mark this maximum on your plot with a green filled-in diamond. Be sure to make this diamond large enough to be easily seen.   Please paste your code into the textbox.     "
},
{
  "id": "p-568",
  "level": "2",
  "url": "plots-multiple.html#p-568",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PropertyName PropertyValue "
},
{
  "id": "activity-34",
  "level": "2",
  "url": "plots-multiple.html#activity-34",
  "type": "Activity",
  "number": "6.1",
  "title": "",
  "body": "  Plot the function   for x between -5 and 10 using a red solid line of linewidth 2. Can you find the coordinates of the maximum that occurs around x = 1? If so, mark this maximum on your plot with a green filled-in diamond. Be sure to make this diamond large enough to be easily seen.   Please paste your code into the textbox.    "
},
{
  "id": "plots-style",
  "level": "1",
  "url": "plots-style.html",
  "type": "Section",
  "number": "6.7",
  "title": "Plot Formatting and Style",
  "body": " Plot Formatting and Style  What are the major deficiencies of the plots that I have been showing?  Poor style! No axes labels, title, or other information that tells you what the data are that I am displaying.  The plot command gives you only a bare plot. There are two ways to add information to your plots: interactively and by using built-in commands , the latter being of most use in programming.   Interactive Method  After creating your plot, you can interactively add features to it, including axis labels, a title, a legend, a colorbar, text, lines, arrows, and more.  These changes that you make to your plot interactively are not saved .     Plot Formatting Commands  plot labels  Plot formatting commands can be used to add features to your plots without needing to interactively add them each time a plot is created.  Labels:        Text in labels can be formatted using latex commands. These are text modifiers that appear in the string, similar to escape sequences. Modifiers affect single characters or groups of characters that are bracketed {}.    latex Commands  Here are a few useful latex commands to get you started!  plot latex modifiers  Text Modifiers     Text Modifiers      \\bf   bold face text     \\it   italic text     \\rm   normal text     ^   superscript     _   subscript (underscore)     plot Greek symbols  Greek Symbols     Greek Symbols      \\alpha       \\sigma         \\beta       \\Delta         \\gamma       \\Gamma         \\theta       \\Lambda         \\pi       \\Omega         For example:  xlabel('{\\bf Frequency} (s^{-1})') ylabel('{\\bf Conductivity} (\\Omega^{-1} m^{-1})')     Legend  plot legend  With multiple graphs in a single plot it is often necessary to identify each graph in a legend .    Legend Locations     Legend Locations      'eastoutside'   outside right     'best'   least interference     'northeast'   upper right (default)     'northwest'   upper left     'southwest'   lower left     'southeast'   lower right    ...           Additional Text Properties  Several other properties of the text in the text command can be modified using PropertyName and PropertyValues .   plot text formatting  Text Formatting     Property Name    Effect      Rotation   orientation of text     Fontsize   size of font in points (10 default)     Color   color of text from table     Linewidth   width of line around text (0.5 default)     EdgeColor   color of line around text    and others...       text(1,-.5,'some text here!', 'Rotation',45) text(7,-.5,'or here!', 'Rotation',-45, 'Color','r')     Axes and Grid  When a plot is created the axes are scaled according to the minimum and maximum values over which the abscissa and ordinate ranges.  It is possible to change the range of values over which the data is plotted using the axis() command.  plot axis and grid  Axis and Grid Functions     Function    Effect      axis()   specify the ranges explicitly     axis equal   use the same scale for both x and y     axis square   make the plot square     axis tight   make limits exactly range of data     v = axis   gives you limits so that you can use them     grid on   turn on a grid     grid off   turn off the grid (default)     axis([-pi\/2,7*pi\/2, -1.5,1.5]) axis square grid on    "
},
{
  "id": "p-579",
  "level": "2",
  "url": "plots-style.html#p-579",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "text modifiers "
},
{
  "id": "table-9",
  "level": "2",
  "url": "plots-style.html#table-9",
  "type": "Table",
  "number": "6.5",
  "title": "Text Modifiers",
  "body": "plot latex modifiers  Text Modifiers     Text Modifiers      \\bf   bold face text     \\it   italic text     \\rm   normal text     ^   superscript     _   subscript (underscore)    "
},
{
  "id": "table-10",
  "level": "2",
  "url": "plots-style.html#table-10",
  "type": "Table",
  "number": "6.6",
  "title": "Greek Symbols",
  "body": "plot Greek symbols  Greek Symbols     Greek Symbols      \\alpha       \\sigma         \\beta       \\Delta         \\gamma       \\Gamma         \\theta       \\Lambda         \\pi       \\Omega        "
},
{
  "id": "p-582",
  "level": "2",
  "url": "plots-style.html#p-582",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "legend "
},
{
  "id": "table-11",
  "level": "2",
  "url": "plots-style.html#table-11",
  "type": "Table",
  "number": "6.7",
  "title": "Legend Locations",
  "body": " Legend Locations     Legend Locations      'eastoutside'   outside right     'best'   least interference     'northeast'   upper right (default)     'northwest'   upper left     'southwest'   lower left     'southeast'   lower right    ...      "
},
{
  "id": "p-583",
  "level": "2",
  "url": "plots-style.html#p-583",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PropertyName PropertyValues "
},
{
  "id": "table-12",
  "level": "2",
  "url": "plots-style.html#table-12",
  "type": "Table",
  "number": "6.8",
  "title": "Text Formatting",
  "body": "plot text formatting  Text Formatting     Property Name    Effect      Rotation   orientation of text     Fontsize   size of font in points (10 default)     Color   color of text from table     Linewidth   width of line around text (0.5 default)     EdgeColor   color of line around text    and others...      "
},
{
  "id": "table-13",
  "level": "2",
  "url": "plots-style.html#table-13",
  "type": "Table",
  "number": "6.9",
  "title": "Axis and Grid Functions",
  "body": "plot axis and grid  Axis and Grid Functions     Function    Effect      axis()   specify the ranges explicitly     axis equal   use the same scale for both x and y     axis square   make the plot square     axis tight   make limits exactly range of data     v = axis   gives you limits so that you can use them     grid on   turn on a grid     grid off   turn off the grid (default)    "
},
{
  "id": "plots-practice",
  "level": "1",
  "url": "plots-practice.html",
  "type": "Section",
  "number": "6.8",
  "title": "Practice Your Plots",
  "body": " Practice Your Plots    The Taylor series for is   Produce a figure similar to the one below (or nicer - you might use varying line styles if you wish), that contains the graph of the function along with graphs of the Taylor series expansion of with one, two, and five terms. Label the axes and display a legend.      "
},
{
  "id": "activity-35",
  "level": "2",
  "url": "plots-practice.html#activity-35",
  "type": "Activity",
  "number": "6.2",
  "title": "",
  "body": "  The Taylor series for is   Produce a figure similar to the one below (or nicer - you might use varying line styles if you wish), that contains the graph of the function along with graphs of the Taylor series expansion of with one, two, and five terms. Label the axes and display a legend.     "
},
{
  "id": "plots-subplot",
  "level": "1",
  "url": "plots-subplot.html",
  "type": "Section",
  "number": "6.9",
  "title": "Creating Subplots",
  "body": " Creating Subplots  It is often desirable to group several plots together in a single figure. Saves paper!  subplot() Use the subplot() command to set up the Plotting Window into rectangular sub windows.   This divides the region into an m x n array of rectangular plotting regions and makes the pth subplot active.    Example:  x = linspace(0.1,60,1000); y = 2.^(-0.2*x+10); subplot(2,2,1); plot(x,y); subplot(2,2,2); semilogy(x,y); subplot(2,2,3); semilogx(x,y); subplot(2,2,4); loglog(x,y);    Histograms  histogram  Histogram Functions     Function    Effect      hist(y)   divide into 10 bins     hist(y,nbins)   divides into nbins bins     hist(y,x)   vector of bin center locations     n = hist()   vector with number in each bin     [n,xout] = hist()   vector with bin center locations     scores = randn(1,200)*10 + 75; subplot(2,2,1); hist(scores) subplot(2,2,2); hist(scores,20) subplot(2,2,3); bins = 5:10:95; hist(scores,bins) subplot(2,2,4); bins = 3:3:97; hist(scores,bins)    "
},
{
  "id": "table-14",
  "level": "2",
  "url": "plots-subplot.html#table-14",
  "type": "Table",
  "number": "6.10",
  "title": "Histogram Functions",
  "body": "histogram  Histogram Functions     Function    Effect      hist(y)   divide into 10 bins     hist(y,nbins)   divides into nbins bins     hist(y,x)   vector of bin center locations     n = hist()   vector with number in each bin     [n,xout] = hist()   vector with bin center locations    "
},
{
  "id": "logic-operators",
  "level": "1",
  "url": "logic-operators.html",
  "type": "Section",
  "number": "7.1",
  "title": "Relational and Equality Operators",
  "body": " Relational and Equality Operators  Relational operators are important for making decisions as they allow us to compare values with each other. The following relational and equality operators share their syntax with in C, except for the negation ( not ) operator which is a tilde symbol ~ in MATLAB (recall that C uses an exclamation mark ! ):  operators relational and equality  Relational and Equality Operators     Operator    Operation      <   less than     >   greater than     <=   less than or equal to     >=   greater than or equal to     ==   equal to     ~=   not equal to (in C: != )     In MATLAB, logical true is 1 and logical false is 0. Recall that in C any value other than 0 is interpreted as true. In fact, MATLAB has a logical data type, and so the result of comparing two quantities is of that datatype:  a = 3; b = 4; a == b    If two arrays are compared (must be the same size), the result is an array of logical values from an element-by-element comparison of the two arrays. This is known as a Logical Vector .   Logical Vector  logical vector A logical vector is the result of a logical comparison with vectors.  When a logical vector is used to access array elements, only those corresponding to the logical true (1) value are selected.     This is not the same as accessing array elements with an array of numerical 0s and 1s! Take a look at how NOT TO DO THIS :    Array indices must be positive integers or logical values.    Logical Operators   There are two types of logical operators in MATLAB: scalar operands (like C) and array operands (which produce logical arrays).  logical vector comparison  Logical Operator Comparison     MATLAB      C-Programming      Scalar    Array      Scalar      &&    &   AND   &&      ||    |   OR   ||      ~    ~   NOT   !      Scalar logical operators work just like in C, operands must be scalar quantities and short-circuit evaluations apply.  If two arrays are compared (must be the same size), the result is an array of logical values from an element-by-element comparison of the two arrays.   "
},
{
  "id": "table-15",
  "level": "2",
  "url": "logic-operators.html#table-15",
  "type": "Table",
  "number": "7.1",
  "title": "Relational and Equality Operators",
  "body": "operators relational and equality  Relational and Equality Operators     Operator    Operation      <   less than     >   greater than     <=   less than or equal to     >=   greater than or equal to     ==   equal to     ~=   not equal to (in C: != )    "
},
{
  "id": "p-597",
  "level": "2",
  "url": "logic-operators.html#p-597",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Logical Vector "
},
{
  "id": "p-602",
  "level": "2",
  "url": "logic-operators.html#p-602",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar array "
},
{
  "id": "table-16",
  "level": "2",
  "url": "logic-operators.html#table-16",
  "type": "Table",
  "number": "7.2",
  "title": "Logical Operator Comparison",
  "body": "logical vector comparison  Logical Operator Comparison     MATLAB      C-Programming      Scalar    Array      Scalar      &&    &   AND   &&      ||    |   OR   ||      ~    ~   NOT   !     "
},
{
  "id": "logic-functions",
  "level": "1",
  "url": "logic-functions.html",
  "type": "Section",
  "number": "7.2",
  "title": "Built-In Logical Operator Functions",
  "body": " Built-In Logical Operator Functions  MATLAB has built-in functions that carry out logical operations.  built-in functions logical operator  Built-In Logical Operator Functions     Function    Operation      and(a,b)   equivalent to a & b      or(a,b)   equivalent to a | b      not(a)   equivalent to ~a      xor(a,b)   Exclusive OR (XOR)     all(a)   1 if all elements of a are true, else 0     any(a)   1 if any elements of a are true, else 0     find(a)   returns indices of nonzero elements     find(a>d)   returns indices of elements that are larger than d      Let's take a look at some examples:   The following command finds the indices of all elements that are positive:   Now that we have these indices we can use them to address the actual elements in the original vector:   You can use multiple operators in one expressions and once you do so you need to know which of these operators will get executed ahead of which others. This is called operator precedence. In the following table, precedence goes from top to bottom, meaning that operators above others in the table have higher precedence.  operator precedence  Operator Precedence     Operator    Operation      ()   parentheses     ^   exponentiation     ~   logical NOT     *  \/   multiplication and division     +  -   addition and subtraction     >  <  >=  <=  ==  ~=   relational and equality operators     &  &&   logical AND     |  ||   logical OR     =   assignment     "
},
{
  "id": "table-17",
  "level": "2",
  "url": "logic-functions.html#table-17",
  "type": "Table",
  "number": "7.3",
  "title": "Built-In Logical Operator Functions",
  "body": "built-in functions logical operator  Built-In Logical Operator Functions     Function    Operation      and(a,b)   equivalent to a & b      or(a,b)   equivalent to a | b      not(a)   equivalent to ~a      xor(a,b)   Exclusive OR (XOR)     all(a)   1 if all elements of a are true, else 0     any(a)   1 if any elements of a are true, else 0     find(a)   returns indices of nonzero elements     find(a>d)   returns indices of elements that are larger than d     "
},
{
  "id": "table-18",
  "level": "2",
  "url": "logic-functions.html#table-18",
  "type": "Table",
  "number": "7.4",
  "title": "Operator Precedence",
  "body": "operator precedence  Operator Precedence     Operator    Operation      ()   parentheses     ^   exponentiation     ~   logical NOT     *  \/   multiplication and division     +  -   addition and subtraction     >  <  >=  <=  ==  ~=   relational and equality operators     &  &&   logical AND     |  ||   logical OR     =   assignment    "
},
{
  "id": "logic-if",
  "level": "1",
  "url": "logic-if.html",
  "type": "Section",
  "number": "7.3",
  "title": "The <code class=\"code-inline tex2jax_ignore\">if-end<\/code> command",
  "body": " The if-end command  We'll now get into various ways to branch your code.   The if-end command syntax in its most straight-forward form is here:   if condition command command ... end   Here are some example conditions:   if (a < b) if (c >= 5) if (a == b) if (0 ~= debug) if (a ~= 0) if ((d < h) && (x > 7)) if ((age <= 21) || (IQ> 200))   Let's take a look at an example. Suppose you have created the following MATLAB script:   answer = input('How much chocolate have you had today (1-10)? '); if answer<5 disp('Oh no! Be sure to eat more chocolate!'); end   Here is what happens when you run this script:  How much chocolate have you had today (1-10)? 4 Oh no! Be sure to eat more chocolate!  Of course we might also wish for an else case and this is what the next section is about.  "
},
{
  "id": "logic-if-else",
  "level": "1",
  "url": "logic-if-else.html",
  "type": "Section",
  "number": "7.4",
  "title": "The <code class=\"code-inline tex2jax_ignore\">if-else-end<\/code> command",
  "body": " The if-else-end command  Here is the general syntax in MATLAB of the if-else-end command:   if condition command command ... else command command ... end   Let's get back to our previous example but expand it with an else case:   answer = input('How much chocolate have you had today (1-10)? '); if answer<5 disp('Oh no! Be sure to eat more chocolate!'); else disp('Good for you. But have some more anyway!'); end   Here is what happens when you run this script and the user enters a number at least 5:  How much chocolate have you had today (1-10)? 6 Good for you. But have some more anyway!  Of course the program still acts the same way as before for a user input of less than 5.  "
},
{
  "id": "logic-if-elseif",
  "level": "1",
  "url": "logic-if-elseif.html",
  "type": "Section",
  "number": "7.5",
  "title": "The <code class=\"code-inline tex2jax_ignore\">if-elseif-else-end<\/code> command",
  "body": " The if-elseif-else-end command  Of course there is also a way to account for multiple else cases. Here is the general syntax of the if-elseif-else-end command syntax:   if condition command command ... elseif command command ... else command command ... end   Back to our example! Here is the latest version of our script:   answer = input('How much chocolate have you had today (1-10)? '); if answer<5 disp('Oh no! Be sure to eat more chocolate!'); elseif answer<8 disp('Good for you. But have some more anyway!'); else disp('You are doing great! Maybe have one more piece?'); end   At this point it's probably rather clear to you what the output of this script file is, depending on the user's input. If not, just try it out! Or have some chocolate. Or both!  "
},
{
  "id": "logic-switch",
  "level": "1",
  "url": "logic-switch.html",
  "type": "Section",
  "number": "7.6",
  "title": "The <code class=\"code-inline tex2jax_ignore\">switch-case<\/code> command",
  "body": " The switch-case command  switch-case command The switch-case command in MATLAB is a more evolved version of the C switch command. For one, no break statements are needed at the end of each case as only the case that is entered is actually executed (and not all of the ones following it). Furthermore, multiple options can be combined into one case. And finally, the switch expression can be a scalar or a string.  A switch statement conditionally executes one set of statements from several choices. Each choice is given by a case statement. Here is the syntax:   switch expression % can be a scalar or string case value1 commands ... case {value2a, value2b, value2c} % only one needs to match commands ... otherwise % optional commands ... end % only first match is executed, % i.e., there is a built-in break   If there is more than one match, only the first one is executed.  Here is an example:   clear all; close all; letter = input('Enter a letter (A, J, a):', 's'); switch letter case 'J' disp('J') case {'A','a'} disp('A') otherwise disp('Did not find your letter!') end   Now, let's compare the syntax of switch statements in MATLAB and C.   MATLAB syntax:  C-Programming syntax:     switch expression case value1 commands ... case {value2a, value2b, value2c} commands ... otherwise commands ... end    switch (expression) { case const1: statements1; break; case const2: statements2; break; ... default: statements; }    "
},
{
  "id": "logic-for",
  "level": "1",
  "url": "logic-for.html",
  "type": "Section",
  "number": "7.7",
  "title": "The <code class=\"code-inline tex2jax_ignore\">for<\/code> loop",
  "body": " The for loop  for loop The MATLAB for loop repeats a given set of commands a specified number of times. MATLAB offers a few more options for the loop counter as compared to C. Take a look at these examples:  The for-end loop syntax:   for k = f:s:t % loop over all values of k from f to t in steps of s commands ... end for k = f:t % default step is 1 commands ... end for k = [7 9 -1 3 3 5] % can specify array of values: commands % loop repeats once for each value of the given vector ... end   As in C, you loops can be nested. Here is an example:  Recall the program we worked on in C to print a list of factorials:   #include <stdio.h> int main(void) { int N, i, fact; for (N=1; N<=10; N++) { fact = 1; for (i=1; i<=N; i++) { fact = fact*i; } printf(\"%d! = %d\\n\", N, fact); } return 0; }   This program computes and prints a list of the factorials from 1 to 10. We can translate this code into MATLAB:   for N = 1:10 fact = 1; for i = 1:N fact = fact*i; end fprintf('%d! = %d\\n', N, fact) end   But this is MATLAB! Of course we don't really need to calculate our own factorial since there is a built-in function for that:   for N = 1:10 fprintf('%d! = %d\\n', N, factorial(N)) end   And while we are at it, because MATLAB is vectorized we don't even need the loop:   N = 1:10; fprintf('%d! = %d\\n', [N; factorial(N)])   "
},
{
  "id": "logic-while",
  "level": "1",
  "url": "logic-while.html",
  "type": "Section",
  "number": "7.8",
  "title": "The <code class=\"code-inline tex2jax_ignore\">while<\/code> loop",
  "body": " The while loop  MATLAB also has a while loop whose syntax is given here:   while expression % use when number of loop iterations command % is not necessarily known command ... end   MATLAB can handle factorials of really large numbers quite easily. Here is code using a while loop that determines the first integer n whose factorial has at least 100 decimal places:   n = 1; fact = 1; while fact < 1e100 n = n + 1; fact = fact * n; end fprintf('%d! = %g\\n', n, fact)   Running this code yields:  70! = 1.19786e+100  There is no do-while loop as there is in C. So the only two types of loops are the for loop and the while loop. Fewer choices to make!  "
},
{
  "id": "logic-break",
  "level": "1",
  "url": "logic-break.html",
  "type": "Section",
  "number": "7.9",
  "title": "The <code class=\"code-inline tex2jax_ignore\">break<\/code> statement",
  "body": " The break statement  break command The break command needs to be used with utmost caution. Most good programs can and should be written without use of the break statement.  The break statement terminates the execution of a for or while loop. Statements in the loop after the break statement do not execute.  The break statement exits the loop completely. To only skip the rest of the instructions in the loop and begin the next iteration, use a continue statement.  The break statement is not defined outside of a for or while loop. Here is an example:   while (~done) if (first) first = 0; continue; elseif (broken) break; end commands ... end   What happens in nested loops?  In nested loops, break exits only from the loop in which it occurs. Control passes to the statement that follows the end of that loop.  "
},
{
  "id": "functions-intro",
  "level": "1",
  "url": "functions-intro.html",
  "type": "Section",
  "number": "8.1",
  "title": "Introduction to Functions",
  "body": " Introduction to Functions   In this chapter we'll learn about the different ways in which MATLAB allows us to encapsulate code into a function that can be called upon with different input parameters. We will see that there are several differences to how we write function in C.  The biggest difference is that MATLAB does not have pointers (yeah!). Rather, instead of passing variables which we would like to modify by reference (as pointers) to functions as we had to do in C, MATLAB allows us to have multiple return values (in the form of a vector) from a function.  We shall also see that the comments in our functions can also be used as a form of help within MATLAB.  Once we make sure the function works properly, we no longer have to worry about the details of how it works.  By using functions we can reuse code . Blocks of code (statements) that perform a specific task can be used with different variables ( inputs ) over and over again. You can therefore view a function as a black box that transforms inputs into outputs.   Function code can use all MATLAB programming features.  "
},
{
  "id": "functions-files",
  "level": "1",
  "url": "functions-files.html",
  "type": "Section",
  "number": "8.2",
  "title": "Introduction to Function Files",
  "body": " Introduction to Function Files  Function files are created and edited, like script files, in the Editor\/Debugger Window that MATLAB offers (although you could also write functions in any other editor if you wished). They are also saved with the extension .m, just like script files.  You can use your own user-defined functions just like any other MATLAB-defined functions by calling them with their name in any desired expression.  If you want to use your own functions in your code you need to make sure the function files are either located in your working directory or else in a directory that is included in your search path.  Mathematical expressions must be written according to the dimensions of the arguments (scalars, vectors, arrays): you need to decide whether to use linear algebra rules or element-by-element calculations .  Let's take a look at an example of a function file in MATLAB.  File: SphereVolArea.m   function[V,A] = SphereVolArea(radius) % SphereVolArea returns the volume and area of a sphere of radius r % % Inputs: % radius - radius of sphere % % Outputs: % V - volume of sphere % A - area of sphere % r2 = radius*radius; % radius squared, note the semicolon to prevent echoing r3 = r2*radius; % radius cubed V = 4\/3 * pi * r3; % assignment of output arguments A = 4 * pi * r2;   Let's look at the various components of the function file:   Function definition line : first line of the function (starts with \"function [V,A] ...\" in this example).  H1 line : first line of comments (starts with \"SphereVolArea returns...\" in this example)  Help text : the remaining comments at the beginning of the function  Function body : all remaining lines of the function  Assignment of output arguments : the lines of code where the outputted variables are assigned (the last two lines in this example, since V and A are the output variables in the function definition line)   The function definition line specifies the name of the function (which has to agree with the file name), the vector of return parameter(s), and the function's argument(s).  The H1 line is a short description of your function which contains key information that can be searched for using the MATLAB lookfor function.  lookfor some_word searches for some_word in all the H1 lines of the functions in your path.  Here is an example. Suppose the above SphereVolArea function file is in your working directory (or your search path). Then:   SphereVolArea - SphereVolArea returns the volume and area of a sphere of radius r xyzvchk - Check arguments to 3-D volume data routines. volume - Volume of the alpha shape volvec - Volume Visualization reducevolume - Reduce volume dataset. slice - Volumetric slice plot. subvolume - Extract subset of volume dataset. volumebounds - Returns x,y,z and color limits for volume data.  To specify that you with the lookfor function to search all text lines and not just the H1 line, use the optional parameter -all: lookfor -all some_word  The help text of a function is displayed when the user types: help function_name .   SphereVolArea returns the volume and area of a sphere of radius r. Inputs: radius - radius of sphere Outputs: V - volume of sphere A - area of sphere   sqrt Square root. sqrt(X) is the square root of the elements of X. Complex results are produced if X is not positive. See also sqrtm, realsqrt, hypot. Documentation for sqrt Other functions named sqrt  If you'd like to know some related functions you could use the lookfor function to find them:   sqrtm - Matrix square root. sqrtm_tbt - Square root of 2x2 matrix from block diagonal of Schur form. sqrtm_tri - Square root of quasi-upper triangular matrix. realsqrt - Real square root. sqrt - Square root. ...  "
},
{
  "id": "p-656",
  "level": "2",
  "url": "functions-files.html#p-656",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear algebra rules or element-by-element calculations "
},
{
  "id": "p-660",
  "level": "2",
  "url": "functions-files.html#p-660",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function definition line "
},
{
  "id": "p-661",
  "level": "2",
  "url": "functions-files.html#p-661",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "H1 line "
},
{
  "id": "p-665",
  "level": "2",
  "url": "functions-files.html#p-665",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "help text "
},
{
  "id": "functions-calling",
  "level": "1",
  "url": "functions-calling.html",
  "type": "Section",
  "number": "8.3",
  "title": "Calling a Function",
  "body": " Calling a Function  Let's now take a closer look at the function definition line and how to call functions in MATLAB.   The general syntax of the function definition line is:   function [output args] = function_name(input args)   An end statement is permitted but optional in a function  A function can have no, one or multiple input arguments and similarly, no, one or multiple output arguments. Here are some examples of the different forms that the function definition line can therefore take:   function trajectory(velo,hght,g) % no return value, three inputs function A = RectArea(length,width) % one return value, two inputs function [V,A] = SphereVolArea(radius) % two return values, one input function [mpay,tpay] = loan(amount,rate,years) % two returns, three inputs   Let's take a look at how to call the ShpereVolArea function:  rad = 45.4; [Vol Area] = SphereVolArea(rad)    The function returns to values and so both Vol and Area are assigned values as a result of calling this function.  Again, MATLAB has no pointers and so there is no need to pass output parameters as arguments to functions.  All variables are passed by value to functions; therefore any modifications within functions happen to copies of the function arguments and not to the original variables that live outside of the function.  All variables are local to the functions including input and output arguments (they are recognized only inside the function files) unless explicitly defined otherwise.  When a function file is executed a separate memory location is used for all variables that pertain to the function, i.e. one that is different than that used for script files and the workspace.  A function file can have variables with the same name as variables in the command window and workspace, and a function does NOT recognize variables defined elsewhere .  "
},
{
  "id": "p-668",
  "level": "2",
  "url": "functions-calling.html#p-668",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function definition line "
},
{
  "id": "p-675",
  "level": "2",
  "url": "functions-calling.html#p-675",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local "
},
{
  "id": "functions-globals",
  "level": "1",
  "url": "functions-globals.html",
  "type": "Section",
  "number": "8.4",
  "title": "Global Variables",
  "body": " Global Variables  It is possible to declare variables that have global scope ; that is, every function can see and modify their value. This is accomplished using the global command:   global variable_name(s)   For example:   global ThermalCond EarthRad NStudents   The variable must be declared global in every file that uses it . It needs to be declared in the Command Window and Workspace if it is to be used there.  The global declaration must appear before the variable is used .  The variable can then be assigned or reassigned any value in any of the locations it is declared .  Use global variables with caution. It's easy to forget what other parts of your code do to a variable. If you do choose to use global variables then it is recommended to declare these at the top of each file that uses them.  "
},
{
  "id": "p-678",
  "level": "2",
  "url": "functions-globals.html#p-678",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "global scope "
},
{
  "id": "functions-script",
  "level": "1",
  "url": "functions-script.html",
  "type": "Section",
  "number": "8.5",
  "title": "Script Files Versus Function Files",
  "body": " Script Files Versus Function Files   Both script and function files are saved with the same extensions ( .m ).  The first executable line in a function file must be the function definition line. MATLAB kindly pre-populates the editor window with the expected syntax if you ask to create a new function file.  Variables in a function file are local to the function (their scope is limited to the function) while variables in a script file are recognized in the Command Window.  Script files can use variables defined in the workspace.  Script files are simply sequences of MATLAB commands (statements).  Function files can accept data through input arguments and can return data through arguments.  When a function file is saved, the name of the file should be the same as the name of the function.   "
},
{
  "id": "functions-anonymous",
  "level": "1",
  "url": "functions-anonymous.html",
  "type": "Section",
  "number": "8.6",
  "title": "Anonymous Functions with Single Variable",
  "body": " Anonymous Functions with Single Variable  anonymous function Some functions are really too short to merit creating an entire function file for them. For that reason, simple mathematical functions can be declared as anonymous functions .  An anonymous function is a simple one-line user-defined function that does not require its own m-file. Here is the syntax:   name = @ (arg1, arg2, ..., argn) expr   name is the name by which you wish to refer to the function. The @ operator creates a so-called function handle , which is the way in which MATLAB stores functions. The arguments of the function are listed in parenthesis and expr is the expression that defines the function (and involves the arguments).  Examples:  cube = @ (x) x^3; ellipse = @ (x, y) 16*x^2 + 9*y^2;  This defines two functions; the first one cubes the input value, the second one depends on two input parameters. You can now evaluate these functions:   Your own functions can be used just like any other MATLAB function. In particular, you can use a function as an argument to another function:     Define a function  and evaluate at , and .    Here are some more examples:      Summing up, this is what you need to know about anonymous functions:   The expression can have several independent variables (arguments) .  The arguments can be named anything; typically you might use just a single letter. Any letter can be used for the independent variables except you should avoid i and j since these stand for the imaginary unit.  The expression can include built-in or user-defined functions .  You can use element-by-element or linear algebra operations so that array inputs become possible.  The anonymous function can be used as arguments to other functions .  Function handles provide means for using the function and passing it to other functions.  Anonymous functions can be defined anywhere, including inside a script file.    When and How to use Anonymous Functions   When the value of a relatively simple mathematical expression has to be determined many times in a program.  User-defined functions defined and written within the computer code, i.e. not in a separate file.  Can be defined in any part of MATLAB, i.e. Command Window, Script Files, Function Files.     Vectorized Anonymous Functions  anonymous function vectorized It is possible to write your anonymous functions so that they can also operate on vector or array input, just like the other MATLAB functions do. Let's take a look at an example. Recall our cube function above:   If you were to try to enter a vector for x you'd encounter an error message:  x = [2 3]; cube(x)   Error using ^ (line 51).        What we really meant was for each element of x to be cubed individually. For this to happen we need to change our definition of the function so as to use dot operators:   Note the subtle difference in the definition: The cube operation is now using the dot operator. Take a look:  x = [2 3]; cube(x)   Here is another example: if we wanted to redefine our above superfunk so as to allow array input would do so as follows:      Define a function   and evaluate it on a grid of values with       "
},
{
  "id": "p-684",
  "level": "2",
  "url": "functions-anonymous.html#p-684",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "anonymous functions "
},
{
  "id": "p-686",
  "level": "2",
  "url": "functions-anonymous.html#p-686",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "name @ operator function handle arguments expr "
},
{
  "id": "activity-36",
  "level": "2",
  "url": "functions-anonymous.html#activity-36",
  "type": "Activity",
  "number": "8.1",
  "title": "",
  "body": "  Define a function  and evaluate at , and .   "
},
{
  "id": "activity-37",
  "level": "2",
  "url": "functions-anonymous.html#activity-37",
  "type": "Activity",
  "number": "8.2",
  "title": "",
  "body": "  Define a function   and evaluate it on a grid of values with     "
},
{
  "id": "functions-anonymous-multiple",
  "level": "1",
  "url": "functions-anonymous-multiple.html",
  "type": "Section",
  "number": "8.7",
  "title": "Anonymous Functions with Multiple Arguments",
  "body": " Anonymous Functions with Multiple Arguments  As we saw before, anonymous functions can have multiple independent variables.  Here is an example: Suppose that A and B are points in the plane whose distance we wish to find. The points are given to us in polar coordinates and as you can see in this picture:   Using the law of cosines you can find the following formula for the distance d:   Here is how you would define this function in MATLAB:    A word of caution. The expression that defines the anonymous function can include pre-assigned MATLAB variables .   a = 2; b = 3; ellipse = @ (x, y) a*x^2 + b*y^2   IMPORTANT:  The values are captured when the function is defined, i.e. the function is NOT changed when new values are assigned to a and b .  "
},
{
  "id": "functions-example",
  "level": "1",
  "url": "functions-example.html",
  "type": "Section",
  "number": "8.8",
  "title": "Function Example: Projectile Motion",
  "body": " Function Example: Projectile Motion  Suppose a projectile is shot at an angle to the horizontal and with initial velocity . You wish to find the maximum height the projectile will reach as well as the distance (range) it will fly. You wish to do so on several different planets and so you need to take into consideration the acceleration due to gravity, g. Below is a picture describing the situation:   To solve this problem we separate the problem into x (horizontal) and y (vertical) components:  x-components: is the component of the initial velocity pointing in the horizontal direction. Neglecting wind resistance we can assume this to be constant over time so that the distance x flown after time t has passed is simply :    y-components: is the component of the initial velocity pointing in the vertical direction. The acceleration due to gravity changes this velocity so that at time t we have the remaining velocity .    The height of the projectile at time t is thus   The projectile reaches its maximum height when its motion changes from upward to downward, that is, when . Solving for t yields:   This yields a maximum height and distance flown of   Here is the MATLAB implementation which additionally plots the motion of the projectile:   function[hmax,rmax] = trajectory(v0,theta,g); % trajectory computes max height and dist. of a projectile % Inputs: % v0 - initial speed of projectile (m\/s) % theta - initial angle of projectile (degrees) % g - acceleration due to gravity (m\/s^2) % Outputs: % hmax - maximum altitude of projectile (m) % rmax - maximum range of projectile (m) v0x = v0*cos(theta*pi\/180); % convert to radians v0y = v0*sin(theta*pi\/180); % convert to radians tmax = v0y\/g; % time to reach apex hmax = v0y^2\/(2*g); % maximum altitude assigned ttot = 2*tmax; % total flight time rmax = v0x * ttot; % maximum range assigned tplot = linspace(0,ttot,200); % for plotting x = v0x * tplot; % ranges for plotting y = v0y * tplot -.5*g*tplot.^2; % altitudes for plotting plot(x,y); % trajectory plot xlabel('Distance (m)'); ylabel('Height (m)');   "
},
{
  "id": "functions-additional",
  "level": "1",
  "url": "functions-additional.html",
  "type": "Section",
  "number": "8.9",
  "title": "External Language Interface",
  "body": " External Language Interface  external language interface MATLAB provides several ways to integrate with other programming languages. For example, it is possible to integrate C (or C++) code into your MATLAB application. For details on how to accomplish this consult the MATLAB documentation:   One way to provide such integration is a M atlab E xecutable F ile ( MEX -File). This is a function, created in MATLAB, that calls a C\/C++ program and behaves just like a MATLAB script or function.  MEX files are native C or C++ files that are dynamically linked directly into the MATLAB application at runtime. They must be compiled for each hardware architecture on which they are to be run. MEX files have the potential to crash the MATLAB application, but rather large speed gains are possible, depending on the algorithm.  "
},
{
  "id": "functions-practice1",
  "level": "1",
  "url": "functions-practice1.html",
  "type": "Section",
  "number": "8.10",
  "title": "Practice Your Functions",
  "body": " Practice Your Functions    Write a user-defined function circleplot(x,y,R) that plots a circle with center and radius . Choose your axes such that the origin is visible within your plot and also so that the circle looks round (and not oval).  This function has no output parameters.  Please paste one solution per group into the textbox.       Write a user-defined function myprimes(m,n) that returns all prime numbers between the two input arguments and . The output argument should be a vector with the prime numbers. If the function is called with an error message should be displayed. If a negative number or a non-integer number is entered, an error message should be displayed as well.  Please paste one solution per group into the textbox.       Write a user-defined function CartToPolar(x,y) that converts the Cartesian coordinates to polar coordinates .  The function name and arguments should thus be   [r, theta] = CartToPolar(x,y)   Please paste one solution per group into the textbox.     "
},
{
  "id": "activity-38",
  "level": "2",
  "url": "functions-practice1.html#activity-38",
  "type": "Activity",
  "number": "8.3",
  "title": "",
  "body": "  Write a user-defined function circleplot(x,y,R) that plots a circle with center and radius . Choose your axes such that the origin is visible within your plot and also so that the circle looks round (and not oval).  This function has no output parameters.  Please paste one solution per group into the textbox.    "
},
{
  "id": "activity-39",
  "level": "2",
  "url": "functions-practice1.html#activity-39",
  "type": "Activity",
  "number": "8.4",
  "title": "",
  "body": "  Write a user-defined function myprimes(m,n) that returns all prime numbers between the two input arguments and . The output argument should be a vector with the prime numbers. If the function is called with an error message should be displayed. If a negative number or a non-integer number is entered, an error message should be displayed as well.  Please paste one solution per group into the textbox.    "
},
{
  "id": "activity-40",
  "level": "2",
  "url": "functions-practice1.html#activity-40",
  "type": "Activity",
  "number": "8.5",
  "title": "",
  "body": "  Write a user-defined function CartToPolar(x,y) that converts the Cartesian coordinates to polar coordinates .  The function name and arguments should thus be   [r, theta] = CartToPolar(x,y)   Please paste one solution per group into the textbox.    "
},
{
  "id": "functions-practice2",
  "level": "1",
  "url": "functions-practice2.html",
  "type": "Section",
  "number": "8.11",
  "title": "Practice Your Programming",
  "body": " Practice Your Programming    What Matlab programming language commands have you learned about?       Write a Matlab program in a script file that prompts the user to enter a positive integer, n, and displays all prime numbers less than or equal to n.  Challenge: A twin prime is a pair of prime numbers such that the difference between them is 2 (for example, 17 and 19). Write a Matlab program in a script file that finds all twin primes between 10 and 500. The program should display the results in a two-column table in which each row is a twin prime.  Please enter your solution (ONE per group - please identify group number) into the textbox.       Write a Matlab program that finds the solution of the equation using the bisection method.  To do so, plot the function first to determine an interval within which the solution is located. You thus need to choose and such that and have different signs (this can be done outside of your program).  Your program should now calculate a first estimate of a numerical solutions via . Determine whether the true solution is between and or between and by looking at , and , then replace or with to obtain a new (shorter) interval that contains the true solution and start over. Come up with a reasonable way to stop this process once your approximation is “good enough” and display the solution.  Note: The Matlab command   f = @(x) 8 - 4.5*(x-sin(x));   defines the function so that you can easily evaluate for different values of .  Please enter your solution (ONE per group - please identify group number) into the textbox.       The Sierpinski triangle can be displayed in Matlab by plotting points iteratively according to one of the following three rules which are selected randomly with equal probability:  Rule 1:  Rule 2:  Rule 3:  Write a Matlab program in a script file that calculates the x and y vectors and then plots y versus x as individual points (use plot(x,y,’^’) ). Start with and . Run the program four times with 10, 100, 1000 and 10000 iterations.  Please enter your solution (ONE per group - please identify group number) into the textbox.       Challenge : Plot the Mandelbrot set.  The Mandelbrot set is a subset of the complex plane (or the xy-plane) determined as follows: To check whether a point (x,y) (corresponding to the complex number ) belongs to the Mandelbrot set, one carries out the following calculation repeatedly (this is called iteration), starting with :   Thus, the following calculations are performed:   To find out whether the point c belongs to the Mandelbrot set one checks whether the sequence of z-values generated above stays inside the circle of radius 2 or not. Of course we’d have to look at all (infinitely many) z-values to be sure, but performing the first 100 iterations gives us a pretty good idea. After having calculated we thus ask the following:  Is inside the circle of radius 2, i.e. is its absolute value less than 2? If the answer is:   yes, then color the point c black (these are the points c that belong to the Mandelbrot set)  no, then color the point c white (or another color of your choice)   A good rectangle of c-values to look at is the one with real parts between -2.25 and 1.75 and imaginary parts between -1.5 and 1.5. You want to divide this viewing rectangle up into individual “pixels”, something like 800 by 600. The best way to do so is to have two 800x600 arrays - one for the x-values and one for the y-values. You can then simply create all c-values that you are interested in via (Matlab knows complex numbers!). You can ‘fill’ these arrays by hand (using a loop), or by using the Matlab meshgrid command.  Next you carry out the iteration: You can initialize z as an array of zeros of the same size as your array of c-values, then use a for loop to update 100 times.  Now assign the value 1 to those points that have escaped the circle of radius 2, and the value 2 to those that have remained within (these are the points in the Mandelbrot set). You can display this image using the Matlab image command. You’ll have to define a colormap (one with exactly two colors in it), for example via   blackwhite = [1 1 1;0 0 0]; colormap(blackwhite)   if you do want to use the two colors white (rgb 1 1 1) and black (rgb 0 0 0).  Please enter your solution (ONE per group - please identify group number) into the textbox.     "
},
{
  "id": "activity-41",
  "level": "2",
  "url": "functions-practice2.html#activity-41",
  "type": "Activity",
  "number": "8.6",
  "title": "",
  "body": "  What Matlab programming language commands have you learned about?    "
},
{
  "id": "activity-42",
  "level": "2",
  "url": "functions-practice2.html#activity-42",
  "type": "Activity",
  "number": "8.7",
  "title": "",
  "body": "  Write a Matlab program in a script file that prompts the user to enter a positive integer, n, and displays all prime numbers less than or equal to n.  Challenge: A twin prime is a pair of prime numbers such that the difference between them is 2 (for example, 17 and 19). Write a Matlab program in a script file that finds all twin primes between 10 and 500. The program should display the results in a two-column table in which each row is a twin prime.  Please enter your solution (ONE per group - please identify group number) into the textbox.    "
},
{
  "id": "activity-43",
  "level": "2",
  "url": "functions-practice2.html#activity-43",
  "type": "Activity",
  "number": "8.8",
  "title": "",
  "body": "  Write a Matlab program that finds the solution of the equation using the bisection method.  To do so, plot the function first to determine an interval within which the solution is located. You thus need to choose and such that and have different signs (this can be done outside of your program).  Your program should now calculate a first estimate of a numerical solutions via . Determine whether the true solution is between and or between and by looking at , and , then replace or with to obtain a new (shorter) interval that contains the true solution and start over. Come up with a reasonable way to stop this process once your approximation is “good enough” and display the solution.  Note: The Matlab command   f = @(x) 8 - 4.5*(x-sin(x));   defines the function so that you can easily evaluate for different values of .  Please enter your solution (ONE per group - please identify group number) into the textbox.    "
},
{
  "id": "activity-44",
  "level": "2",
  "url": "functions-practice2.html#activity-44",
  "type": "Activity",
  "number": "8.9",
  "title": "",
  "body": "  The Sierpinski triangle can be displayed in Matlab by plotting points iteratively according to one of the following three rules which are selected randomly with equal probability:  Rule 1:  Rule 2:  Rule 3:  Write a Matlab program in a script file that calculates the x and y vectors and then plots y versus x as individual points (use plot(x,y,’^’) ). Start with and . Run the program four times with 10, 100, 1000 and 10000 iterations.  Please enter your solution (ONE per group - please identify group number) into the textbox.    "
},
{
  "id": "activity-45",
  "level": "2",
  "url": "functions-practice2.html#activity-45",
  "type": "Activity",
  "number": "8.10",
  "title": "",
  "body": "  Challenge : Plot the Mandelbrot set.  The Mandelbrot set is a subset of the complex plane (or the xy-plane) determined as follows: To check whether a point (x,y) (corresponding to the complex number ) belongs to the Mandelbrot set, one carries out the following calculation repeatedly (this is called iteration), starting with :   Thus, the following calculations are performed:   To find out whether the point c belongs to the Mandelbrot set one checks whether the sequence of z-values generated above stays inside the circle of radius 2 or not. Of course we’d have to look at all (infinitely many) z-values to be sure, but performing the first 100 iterations gives us a pretty good idea. After having calculated we thus ask the following:  Is inside the circle of radius 2, i.e. is its absolute value less than 2? If the answer is:   yes, then color the point c black (these are the points c that belong to the Mandelbrot set)  no, then color the point c white (or another color of your choice)   A good rectangle of c-values to look at is the one with real parts between -2.25 and 1.75 and imaginary parts between -1.5 and 1.5. You want to divide this viewing rectangle up into individual “pixels”, something like 800 by 600. The best way to do so is to have two 800x600 arrays - one for the x-values and one for the y-values. You can then simply create all c-values that you are interested in via (Matlab knows complex numbers!). You can ‘fill’ these arrays by hand (using a loop), or by using the Matlab meshgrid command.  Next you carry out the iteration: You can initialize z as an array of zeros of the same size as your array of c-values, then use a for loop to update 100 times.  Now assign the value 1 to those points that have escaped the circle of radius 2, and the value 2 to those that have remained within (these are the points in the Mandelbrot set). You can display this image using the Matlab image command. You’ll have to define a colormap (one with exactly two colors in it), for example via   blackwhite = [1 1 1;0 0 0]; colormap(blackwhite)   if you do want to use the two colors white (rgb 1 1 1) and black (rgb 0 0 0).  Please enter your solution (ONE per group - please identify group number) into the textbox.    "
},
{
  "id": "polynomials-intro",
  "level": "1",
  "url": "polynomials-intro.html",
  "type": "Section",
  "number": "9.1",
  "title": "Introduction to Polynomials",
  "body": " Introduction to Polynomials  Polynomials are extremely useful functions used in many scientific and engineering applications. Polynomials can be evaluated efficiently and (think Taylor series approximation) can be used to approximate more complex functions.  polynomial A polynomial is simply a linear combination of integer powers of the independent variable :   Here, are called the coefficients and we will restrict these to real numbers. The highest power of x that occurs with a nonzero coefficient  is the degree or order of the polynomial.  Note that these coefficients (some of them could be zero) completely describe a unique degree polynomial.  Here are some of the computational benefits of working with polynomials:   Polynomials can be stored in very compact form (all you need to know are the coefficients).  Polynomials can easily be added, multiplied, integrated, and differentiated .  Polynomials can be used to approximate much more complicated functions.  Polynomials are continuous functions of which can be evaluated at any .   MATLAB has several built-in functions and features that allow us to easily work with polynomials. Each polynomial is stored simply as a vector of coefficients . Here is an example:  The polynomial is of order 5 and so we need to store 6 coefficients, namely:    In MATLAB, polynomials are represented by a row vector of their coefficients , from highest to lowest:   Returning to our example, we thus store the polynomial as   f = [1, -12.1, 40.59, -17.01, -71.95, 35.88]   Let's take a look at some more examples:   This polynomial is of degree 8 and thus needs to be stored as a 9-element row vector:   g = [1, 0, 0, 0, 0, 0, 0, 0, 1]     Why is it not sufficient to only store the non-zero coefficients?     Here is another example: . In MATLAB we store this function as:   h = [1, 0, -3, 0, 7, 0]     Express the polynomials    as row vectors of coefficients.  Please put your MATLAB code into the textbox.     "
},
{
  "id": "p-758",
  "level": "2",
  "url": "polynomials-intro.html#p-758",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integer powers "
},
{
  "id": "p-759",
  "level": "2",
  "url": "polynomials-intro.html#p-759",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficients highest power nonzero coefficient degree order "
},
{
  "id": "p-764",
  "level": "2",
  "url": "polynomials-intro.html#p-764",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row vector coefficients "
},
{
  "id": "activity-46",
  "level": "2",
  "url": "polynomials-intro.html#activity-46",
  "type": "Activity",
  "number": "9.1",
  "title": "",
  "body": "  Why is it not sufficient to only store the non-zero coefficients?    "
},
{
  "id": "activity-47",
  "level": "2",
  "url": "polynomials-intro.html#activity-47",
  "type": "Activity",
  "number": "9.2",
  "title": "",
  "body": "  Express the polynomials    as row vectors of coefficients.  Please put your MATLAB code into the textbox.    "
},
{
  "id": "polynomials-evaluate",
  "level": "1",
  "url": "polynomials-evaluate.html",
  "type": "Section",
  "number": "9.2",
  "title": "Evaluating Polynomials",
  "body": " Evaluating Polynomials  polynomial evaluate To evaluate a polynomial at a given x-value in MATLAB, use the polyval function ,   y = polyval(p,x)   Here, is a row vector of polynomial coefficients (that stores the desired polynomial), and is\/are the value(s) of the independent variable at which we wish to evaluate p. Here are some examples. Suppose we wanted to evaluate the polynomial at various x-values. We'd first define:   With this, we can evaluate:   Alternatively, we can use a variable at which to evaluate p:  x = 5; y = polyval(p,x)   Just like other functions in MATLAB, the polyval function is vectorized. This means that you can evaluate a polynomial at multiple x-values at once:  x = [1 3 5]; y = polyval(p,x)   Can you guess how we will make use of this to display the graph of a polynomial?  "
},
{
  "id": "p-774",
  "level": "2",
  "url": "polynomials-evaluate.html#p-774",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluate polyval function "
},
{
  "id": "polynomials-plot",
  "level": "1",
  "url": "polynomials-plot.html",
  "type": "Section",
  "number": "9.3",
  "title": "Plotting Polynomials",
  "body": " Plotting Polynomials  polynomial plot We plot a polynomial just like platting any other function: we evaluate the function at a collection of x-values and then use the plot command. Let's return to our previous example:   Here is how we plot this function from x = -1.5 to x = 6.7:   f = [1, -12.1, 40.59, -17.01, -71.95, 35.88]; x = -1.5:0.1:6.7; y = polyval(f,x); plot(x,y, 'linewidth', 2) xlabel('x'); ylabel('y = f(x)'); text(-1,120,'f(x) = x^5 - 12.1x^4 + 40.59x^3 - 17.01x^2 - 71.95x + 35.88');      Plot the polynomials    for between -2 and 2. Restrict your y-axis to values between -10 and 10.  Please put your MATLAB code into the textbox.     "
},
{
  "id": "activity-48",
  "level": "2",
  "url": "polynomials-plot.html#activity-48",
  "type": "Activity",
  "number": "9.3",
  "title": "",
  "body": "  Plot the polynomials    for between -2 and 2. Restrict your y-axis to values between -10 and 10.  Please put your MATLAB code into the textbox.    "
},
{
  "id": "polynomials-roots",
  "level": "1",
  "url": "polynomials-roots.html",
  "type": "Section",
  "number": "9.4",
  "title": "Root Finding",
  "body": " Root Finding  roots zeros The roots or zeros of a function, including polynomials, are the values of the argument at which the function evaluates to zero .   The Fundamental Theorem of Algebra states that an nth degree polynomial has n roots :   These roots are not necessarily distinct (some roots occur with higher multiplicity )  Not all roots are necessarily real (they can also be complex )   The root finding problem is one of the oldest in numerical approximation dating back to 1700 BC, yet it is still a topic of research.  There are many techniques and algorithms used to find (approximate) roots or zeros of functions: bisection, Newton's Method, secant method, Müller's Method .  In MATLAB, we can easily find the roots of a polynomial using the roots function :   r = roots(p)   Here, is a row vector of polynomial coefficients . The result is a column vector of the roots of the polynomial.  Example:  p = [1 -12.1 40.59 -17.015 -71.95 35.88];     Find the zeros (roots) of the polynomials    Please put your MATLAB code into the textbook.      Degenerate Roots  Consider the polynomial . This polynomial only has one x-value, at which it takes the value 0, namely x = 0. Since the graph of p does not cross the x-axis at x=0, this root is actually of multiplicity greater than 1 and is called a degenerate root. MATLAB figures this out and lists such roots multiple times in the vector of roots (according to multiplicity). Take a look:      Find a polynomial that has zeros at 0, 1 and 2.  Please express the polynomial as a MATLAB polynomial and put your vector into the textbox.     How did you accomplish this? Unless you have magic powers, most likely you multiplied together x, (x-1) and (x-2).  Note that the roots of a polynomial by themselves actually define the polynomial, up to multiplication by a scalar.  If the roots of a polynomial are known, MATLAB can actually construct the polynomial, that is, the coefficients of the polynomial, assuming that the leading coefficient equal 1. Here is an example: Suppose we wanted to find a polynomial with roots 6.5, 4, 2.3, 0.5 and -1.2. We know that the polynomial is given by   But in order to find the polynomial coefficients we'd actually have to multiply through. MATLAB does this for us:   Note that this is a column vector of the roots. The command poly finds the polynomial for us:    "
},
{
  "id": "p-785",
  "level": "2",
  "url": "polynomials-roots.html#p-785",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "roots zeros "
},
{
  "id": "p-787",
  "level": "2",
  "url": "polynomials-roots.html#p-787",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "root finding "
},
{
  "id": "p-788",
  "level": "2",
  "url": "polynomials-roots.html#p-788",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bisection, Newton's Method, secant method, Müller's Method "
},
{
  "id": "p-789",
  "level": "2",
  "url": "polynomials-roots.html#p-789",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "roots function "
},
{
  "id": "p-790",
  "level": "2",
  "url": "polynomials-roots.html#p-790",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row coefficients column roots "
},
{
  "id": "activity-49",
  "level": "2",
  "url": "polynomials-roots.html#activity-49",
  "type": "Activity",
  "number": "9.4",
  "title": "",
  "body": "  Find the zeros (roots) of the polynomials    Please put your MATLAB code into the textbook.    "
},
{
  "id": "p-794",
  "level": "2",
  "url": "polynomials-roots.html#p-794",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degenerate "
},
{
  "id": "activity-50",
  "level": "2",
  "url": "polynomials-roots.html#activity-50",
  "type": "Activity",
  "number": "9.5",
  "title": "",
  "body": "  Find a polynomial that has zeros at 0, 1 and 2.  Please express the polynomial as a MATLAB polynomial and put your vector into the textbox.    "
},
{
  "id": "p-801",
  "level": "2",
  "url": "polynomials-roots.html#p-801",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "poly "
},
{
  "id": "polynomials-add",
  "level": "1",
  "url": "polynomials-add.html",
  "type": "Section",
  "number": "9.5",
  "title": "Adding Polynomials",
  "body": " Adding Polynomials  polynomial add Adding polynomials is easy: you simply add terms of equal powers of x:   Then, if , we have   In MATLAB you thus simply add the corresponding vectors of coefficients:  p1 = [1 -3 1]; p2 = [3 0 2]; p = p1 + p2   The only thing you have to watch out for is polynomials of different orders . You must pad the lower order polynomial with zeros before adding them together since otherwise the vectors of coefficients wouldn't have the same length. Take a look:   Then, if , we have   Without padding the second polynomial this is what happens in MATLAB:  p1 = [1 -3 1]; p2 = [1 0]; p = p1 + p2   Instead, pad the vector p2 so that it has the same length as the vector p1:  p1 = [1 -3 1]; p2 = [0 1 0]; p = p1 + p2   "
},
{
  "id": "p-802",
  "level": "2",
  "url": "polynomials-add.html#p-802",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adding "
},
{
  "id": "p-805",
  "level": "2",
  "url": "polynomials-add.html#p-805",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pad "
},
{
  "id": "polynomials-multiply",
  "level": "1",
  "url": "polynomials-multiply.html",
  "type": "Section",
  "number": "9.6",
  "title": "Multiplying Polynomials",
  "body": " Multiplying Polynomials  polynomial multiply Multiplying polynomials is a lot of work when done 'by hand' since you need to multiply each term of the first polynomial with each term of the second polynomial. Example:   Then is found via   MATLAB can do this work for you, and the process is known as convolving :  p1 = [1 -3 0]; p2 = [1 -1]; p = conv(p1,p2)   The result of the conv function is a row vector of coefficients of the product of the two polynomial arguments. The two polynomials need not be of the same order.    Use MATLAB to multiply the polynomials and and plot the product in the same graph. Turn on the grid.    Please put your MATLAB code into the textbox.     "
},
{
  "id": "p-810",
  "level": "2",
  "url": "polynomials-multiply.html#p-810",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Multiplying "
},
{
  "id": "p-812",
  "level": "2",
  "url": "polynomials-multiply.html#p-812",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convolving "
},
{
  "id": "p-813",
  "level": "2",
  "url": "polynomials-multiply.html#p-813",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row coefficients "
},
{
  "id": "activity-51",
  "level": "2",
  "url": "polynomials-multiply.html#activity-51",
  "type": "Activity",
  "number": "9.6",
  "title": "",
  "body": "  Use MATLAB to multiply the polynomials and and plot the product in the same graph. Turn on the grid.    Please put your MATLAB code into the textbox.    "
},
{
  "id": "polynomials-divide",
  "level": "1",
  "url": "polynomials-divide.html",
  "type": "Section",
  "number": "9.7",
  "title": "Dividing Polynomials",
  "body": " Dividing Polynomials  polynomial divide Dividing polynomials is known in MATLAB as deconvolving .  Suppose you wanted to divide the polynomial by the polynomial . Do you remember how to do such a polynomial division by hand?   Don't worry, MATLAB can do all of this for you. Here is how:  p1 = [2 9 7 -6]; p2 = [1 3]; [q r] = deconv(p1, p2)    The deconv function returns two arguments: is a row vector of coefficients of the polynomial that results from the division and is a row vector of coefficients of the polynomial remainder (in the above example there is no remainder).    Divide the polynomial   by the polynomial   using MATLAB. Write out the solution as polynomial and remainder.  Please put the solution (polynomial and remainder) into the textbox.     "
},
{
  "id": "p-816",
  "level": "2",
  "url": "polynomials-divide.html#p-816",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dividing deconvolving "
},
{
  "id": "p-819",
  "level": "2",
  "url": "polynomials-divide.html#p-819",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row coefficients row coefficients "
},
{
  "id": "activity-52",
  "level": "2",
  "url": "polynomials-divide.html#activity-52",
  "type": "Activity",
  "number": "9.7",
  "title": "",
  "body": "  Divide the polynomial   by the polynomial   using MATLAB. Write out the solution as polynomial and remainder.  Please put the solution (polynomial and remainder) into the textbox.    "
},
{
  "id": "polynomials-derivatives",
  "level": "1",
  "url": "polynomials-derivatives.html",
  "type": "Section",
  "number": "9.8",
  "title": "Derivatives",
  "body": " Derivatives  polynomial derivative Derivatives of polynomials are quite simple to find - even by hand. Of course, MATLAB has a function to find derivatives, namely the polyder function. Not only can this function find the derivative of a polynomial, it can also find the derivative of the product or the quotient of two polynomials. Which of these is performed depends on how you call the function.  The most simple case is to simply find the derivative of a polynomial:   k = polyder(p)   Here, is a row vector of coefficients of the polynomial to be differentiated and is a row vector of coefficients of the resulting polynomial.  To find the derivative of the product of two polynomials, use:   k = polyder(p1, p2) % derivative of the product % of two polynomials   Of course, alternatively, you could use the conv function to fist multiply the polynomials and then the polyder function to take the derivative. But for large polynomials, letting the polyder function do all the work is more efficient.  Similarly, the polyder function can take the derivative of a quotient of polynomials (this is also known as a rational function). Since the result of this computation is most likely a quotient of two polynomials, the polyder function returns a numerator and a denominator polynomial coefficient vector:   [n d] = polyder(p1, p2) % derivative of the quotient % of two polynomials, result % is two polynomials - numerator % and denominator     For the functions    find the derivatives of the following functions using MATLAB:       Please put your MATLAB code into the textbox.     "
},
{
  "id": "p-824",
  "level": "2",
  "url": "polynomials-derivatives.html#p-824",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Derivatives "
},
{
  "id": "p-826",
  "level": "2",
  "url": "polynomials-derivatives.html#p-826",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row coefficients "
},
{
  "id": "activity-53",
  "level": "2",
  "url": "polynomials-derivatives.html#activity-53",
  "type": "Activity",
  "number": "9.8",
  "title": "",
  "body": "  For the functions    find the derivatives of the following functions using MATLAB:       Please put your MATLAB code into the textbox.    "
},
{
  "id": "interpolation-intro",
  "level": "1",
  "url": "interpolation-intro.html",
  "type": "Section",
  "number": "10.1",
  "title": "Introduction to Interpolation",
  "body": " Introduction to Interpolation   In engineering and science, one often finds oneself with a discrete number of data points (found by measuring or experimenting in some form), and one would like to estimate additional data points within the range of the known values. Interpolation is a way to estimate such additional data values between the known values.  How do you estimate the value of a function between data points?   Here are a few examples of how you could approach this interpolation problem:   Nearest value:  Linear interpolation:  Polynomial interpolation:        interpolation MATLAB has a built-in interpolating function called interp1 (the '1' indicates that we are talking about 1-dimensional data - there also is a function called interp2 which interpolates values of functions of two variables). Here is the syntax of the interp1 function:   yi = interp1(x,y,xi, 'method') % 'nearest' - closest value to xi % 'linear' - piecewise linear interpolation % 'spline' - piecewise cublic splines % 'pchip' - piecewise cubic Hermite polynomials   : monotonic vector (containing the x-values of the known data points in ascending order)  : vector of data values corresponding to the x-values (input data points)  : values at which to interpolate, can be a vector of same size as (independent variable)  'method': interpolation method to be used, chosen from those listed (see the MATLAB documentation for additional methods)  For 'nearest' and 'linear' , must be in the domain of .  For others, if is outside the domain then extrapolation is performed.   The interpolation methods offered by MATLAB each have different advantages and disadvantages, and none of them uses interpolating functions of degree higher than 3. This is so for good reason since it is not typically advantageous to choose a high order polynomial for interpolating your data. Take a look at the following data, for example. Suppose we wanted to estimate the value of the function at the dotted green line:   Now see what happens when we use a 9th degree polynomial to estimate the data point at the green dotted line. Do you think this is a good estimate?  This shows the dangers of higher order interpolating polynomials , particularly if your data is noisy .  "
},
{
  "id": "p-836",
  "level": "2",
  "url": "interpolation-intro.html#p-836",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nearest value: "
},
{
  "id": "p-837",
  "level": "2",
  "url": "interpolation-intro.html#p-837",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear interpolation: "
},
{
  "id": "p-838",
  "level": "2",
  "url": "interpolation-intro.html#p-838",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Polynomial interpolation: "
},
{
  "id": "p-845",
  "level": "2",
  "url": "interpolation-intro.html#p-845",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extrapolation "
},
{
  "id": "interpolation-fit",
  "level": "1",
  "url": "interpolation-fit.html",
  "type": "Section",
  "number": "10.2",
  "title": "Curve Fitting",
  "body": " Curve Fitting   curve fitting Another way to estimate values of a function between data points is curve fitting . Rather than simply looking at nearby data points you take into consideration all of your data points and try to fit one function to all data points at once as well as possible. You then evaluate that function at the desired additional point. You'll have to decide what type of function makes the most sense to fit your data, for example, a line, a polynomial of a certain degree, a sinusoidal, an exponential, etc. Context and information about the type of data you are collecting should help you decide what type of function would be best.  Take the below data points for example. Suppose again that we wanted to estimate the value of the function at the dotted green line:   We can see that probably a line is the best fit for this data. Observe the difference in the estimated data value at the dotted line if fitting a line versus fitting a high order polynomial.   Linear approximation:  9th order polynomial:       Curve fitting is the process to find a function of a given type (linear, cubic polynomial, sinusoidal, exponential, etc.) to fit the given data as well as possible. Context is incredibly important in deciding what type of curve to fit your data. Often polynomials are used to fit data.  The method of least squares is often used to decide which function (of a given type) is the best fit for the given data. For example, in order to fit a line to the above data we'd need to find the equation for which the sum of the squares of the differences between the y-values on the approximating line and the given y-data-values is at a minimum:   The line of best fit does not necessarily pass through any or all of the data points but it rather minimizes the error by which the data points are off the line.  Using the notation of the above picture, we need to find the slope and the y-intercept that minimize the sum of the squares of the residuals for the four given data points:    Note that the method of least squares can be used just as well to find higher order approximating polynomials.  MATLAB has a built-in function to fit an nth order polynomial to a set of data values:   p = polyfit(x,y,n)   Here, is a row vector of coefficients of the resulting polynomial, and , are the data vectors. The degree of the desired approximating polynomial is .  The degree of the polynomial must be at least one less than the number of data points since otherwise the resulting polynomial is no longer a curve fit, but rather an interpolating polynomial:  When Using a polynomial of degree to fit data points, the resulting polynomial will manage to actually go through all data points and thus forms an interpolating polynomial, not a curve fit. You can convince yourself that this is true by thinking about two data points: you can find a line (which is a degree 1 polynomial) to go exactly through the two points without any error. Similarly, you can find an degree polynomial that goes exactly through given data points.  "
},
{
  "id": "p-849",
  "level": "2",
  "url": "interpolation-fit.html#p-849",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curve fitting "
},
{
  "id": "p-852",
  "level": "2",
  "url": "interpolation-fit.html#p-852",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear approximation: "
},
{
  "id": "p-853",
  "level": "2",
  "url": "interpolation-fit.html#p-853",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "9th order polynomial: "
},
{
  "id": "p-854",
  "level": "2",
  "url": "interpolation-fit.html#p-854",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Curve fitting fit "
},
{
  "id": "p-855",
  "level": "2",
  "url": "interpolation-fit.html#p-855",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least squares best fit "
},
{
  "id": "p-860",
  "level": "2",
  "url": "interpolation-fit.html#p-860",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row coefficients "
},
{
  "id": "p-861",
  "level": "2",
  "url": "interpolation-fit.html#p-861",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree "
},
{
  "id": "interpolation-examples",
  "level": "1",
  "url": "interpolation-examples.html",
  "type": "Section",
  "number": "10.3",
  "title": "Curve Fitting Examples",
  "body": " Curve Fitting Examples  Let's start again with our set of data values and take a look at interpolating polynomials of various degrees for these data values:   Linear least-squares fit:   p = polyfit(x,y,1)    Quadratic least-squares fit:   p = polyfit(x,y,2)    Cubic least-squares fit:   p = polyfit(x,y,3)    Quartic least-squares fit:   p = polyfit(x,y,4)    Septic or Heptic least-squares fit:   p = polyfit(x,y,7)    Nonic least-squares fit:   p = polyfit(x,y,9)    Zooming out to show you a bit more of this curve:   "
},
{
  "id": "p-864",
  "level": "2",
  "url": "interpolation-examples.html#p-864",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear "
},
{
  "id": "p-865",
  "level": "2",
  "url": "interpolation-examples.html#p-865",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quadratic "
},
{
  "id": "p-866",
  "level": "2",
  "url": "interpolation-examples.html#p-866",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cubic "
},
{
  "id": "p-867",
  "level": "2",
  "url": "interpolation-examples.html#p-867",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quartic "
},
{
  "id": "p-868",
  "level": "2",
  "url": "interpolation-examples.html#p-868",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Septic Heptic "
},
{
  "id": "p-869",
  "level": "2",
  "url": "interpolation-examples.html#p-869",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nonic "
},
{
  "id": "interpolation-practice",
  "level": "1",
  "url": "interpolation-practice.html",
  "type": "Section",
  "number": "10.4",
  "title": "Practice Your Curve Fitting",
  "body": " Practice Your Curve Fitting    A set of seven points is given by:  .  Fit a polynomial of degree 3 to this data and plot this polynomial along with the seven points.  Challenge: Create six plots in one figure (use subplots) like the one above, but fitting polynomials of degrees 1, 2, 3, 4, 5, and 6 to the data.  Please put your MATLAB code into the textbox.       Given the previous data, use interpolation to approximate the y-value when using:   nearest  linear  spline interpolation   Please put your MATLAB code into the textbook.     "
},
{
  "id": "activity-54",
  "level": "2",
  "url": "interpolation-practice.html#activity-54",
  "type": "Activity",
  "number": "10.1",
  "title": "",
  "body": "  A set of seven points is given by:  .  Fit a polynomial of degree 3 to this data and plot this polynomial along with the seven points.  Challenge: Create six plots in one figure (use subplots) like the one above, but fitting polynomials of degrees 1, 2, 3, 4, 5, and 6 to the data.  Please put your MATLAB code into the textbox.    "
},
{
  "id": "activity-55",
  "level": "2",
  "url": "interpolation-practice.html#activity-55",
  "type": "Activity",
  "number": "10.2",
  "title": "",
  "body": "  Given the previous data, use interpolation to approximate the y-value when using:   nearest  linear  spline interpolation   Please put your MATLAB code into the textbook.    "
},
{
  "id": "plots3d-introduction",
  "level": "1",
  "url": "plots3d-introduction.html",
  "type": "Section",
  "number": "11.1",
  "title": "Introduction to 3D Plots",
  "body": " Introduction to 3D Plots  three-dimensional plot Three-dimensional (3D) plots are an extremely effective way to visualize data that depend on more than one variable.  MATLAB has quite sophisticated built-in 3D plotting and rendering capabilities. This chapter only scratches the surface of what is possible and only serves to spark your imagination of what is possible. We will simply introduce a number of features without going into any details. If you'd like to use any of the introduced capabilities, consult the MATLAB documentation for further details.  All of the same parameter control features of 2D plotting are available in 3D plotting.  In addition, there are several different styles of 3D plots to choose from in MATLAB.  "
},
{
  "id": "plots3d-line",
  "level": "1",
  "url": "plots3d-line.html",
  "type": "Section",
  "number": "11.2",
  "title": "Simple Line Plots",
  "body": " Simple Line Plots  Rather than being 2-dimensional, a curve can also be situated in space. Once way to describe such a curve is to specify a sequence of coordinates along that curve and plot all of those points. To do so we use the MATLAB plot3 command which works exactly like the plot command except for accounting for an extra z-coordinate.   plot3(x,y,z, 'line specifiers', 'PropertyName', ...property value)   must all be vectors of the same size.  Line specifiers and PropertyName\/property value pairs are optional and work just like in 2D plotting, see .  Here is a very simple example: To plot a line in space from the origin to the point you could use the following code:   x = 0:.1:1; y = x; z = x; plot3(x,y,z,'linewidth', '2', 'color', 'r') grid on   The grid command is helpful to the viewer in emphasizing the three-dimensional nature of the plot.   Most 3-dimensional curves are actually given in parametric form : x, y and z are functions of a parameter, t. Here is an example:   t = 0:0.1:6*pi; x = sqrt(t).*sin(2*t); y = sqrt(t).*cos(2*t); z = t;   Here, form a parametric curve. What does it look like? We'll use the plot3 command below to find out. But you can also think about this on your own first by only looking at the 2-dimensional curves x-versus-t, y-versus-t and x-versus y:   plot(x,t, y,t, 'r', 'linewidth',2); figure; plot(x,y,'g', 'linewidth', 2);       Having seen and thought about these curves will help you predict what the three-dimensional curve looks like. Of course, MATLAB can also do so:   t = 0:0.1:6*pi; x = sqrt(t).*sin(2*t); y = sqrt(t).*cos(2*t); z = t; plot3(x,y,z, 'linewidth', 2); xlabel('{\\bf X}'); ylabel('{\\bf Y}'); zlabel('{\\bf Z}'); grid on;    "
},
{
  "id": "p-887",
  "level": "2",
  "url": "plots3d-line.html#p-887",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric form "
},
{
  "id": "plots3d-view",
  "level": "1",
  "url": "plots3d-view.html",
  "type": "Section",
  "number": "11.3",
  "title": "Viewing Plots",
  "body": " Viewing Plots  It is possible to change the viewing point of your plot (this is the point in space from which you are looking at the plot). One way to do so is to simply rotate the plot using the Rotate 3D functionality provided under Tools in the figure window. Once you find a good viewing angle you can take note of the viewer's coordinates in order to be able to later on reproduce them using a typed command (namely the MATLAB view command ).   three-dimensional plot view The viewing point is given in terms of azimuth and elevation . Here is how these are defined:  three-dimensional plot azimuth Azimuth az is the angle (in degrees) in the x-y plane, measured from the negative y-axis to the projection of the line from the origin to the viewpoint onto the x-y plane. A picture says more than a hundred words, so take a look at the below picture. Some more details:   az is measured relative to the negative y axis direction  az is defined as positive in the counterclockwise direction   three-dimensional plot elevation Elevation el is the angle (in degrees) of elevation from the x-y plane. Again, look at the picture for details. Note that   positive value corresponds to opening an angle in the z-axis direction    Here are some examples of different view points for the image of the spiral we created in the previous section:    view(0,0); % or view([0,0]);    view(100,15);        The default angles are az = -37.5° and el = 30°.  "
},
{
  "id": "p-890",
  "level": "2",
  "url": "plots3d-view.html#p-890",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "view command "
},
{
  "id": "p-892",
  "level": "2",
  "url": "plots3d-view.html#p-892",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "az "
},
{
  "id": "p-893",
  "level": "2",
  "url": "plots3d-view.html#p-893",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "el "
},
{
  "id": "plots3d-surface",
  "level": "1",
  "url": "plots3d-surface.html",
  "type": "Section",
  "number": "11.4",
  "title": "Plotting Surfaces",
  "body": " Plotting Surfaces  So far we have focused on graphing curves in space. We'll now turn to surfaces and MATLAB's capabilities to visualize them. Many surfaces in three-dimensional space can be described as functions of two variables . Here is an example of a surface:   three-dimensional plot surfaces MATLAB has several built-in functions to plot surfaces. A surface is specified by its z-values on a grid of values. Here is what such a grid might look like:   We'll shortly learn how to easily create such a grid in MATLAB. Once this grid is created, here are the steps to display your surface. MATLAB offers several options to help the viewer visualize the 3-dimensional nature of the plot. Two of these options are mesh and surface plots. These 3D plots can be used to graph surfaces that are given in the following form:   where   and are the independent variables  z is the dependent variable   Within a given domain the value of can be calculated for any combination of and .  Mesh and surface plots are created in 3 steps:   create a grid in the x-y plane that covers the whole domain  calculate the value of z at each point of the grid  create a plot   Here are the details for these three steps:   Step 1  Create a grid in the x-y plane that covers the whole domain  The desired grid is a set of points in the x-y plane in the domain of the function. Each point on the grid has an x-coordinate and a y-coordinate:   We'll therefore need to create two matrices of the same size : one matrix that contains all of the x-coordinates of all points, and one matrix that contains all of the y-coordinates.   The density of the grid (number of points at which we'll compute the z-values) is user-defined.  Observe the following properties of the matrices X and Y:   Matrix X, which contains the x-coordinates of all the points, has identical rows.  Matrix Y, which contains the y-coordinates of all the points, has identical columns.   MATLAB offers the meshgrid command to help you create these matrices. All you need is a vector of the desired x-values in the grid and another vector of the desired y-values. The meshgrid function then creates the two matrices:   x = -10:2:4; y = 5:10; [X,Y] = meshgrid(x,y);     Step 2  Calculate the value of z at each point of the grid  Once you have created the matrices X and Y you can do element-by-element calculations with these matrices in order to compute, for each pair of (x,y) values, the corresponding z-coordinate.  Here is an example:   Z = 2.^(-1.5*sqrt(X.^2 + Y.^2)).*cos(0.5*Y).*sin(0.5*X);   The calculated dependent variable z is a also a matrix of the same size as both X and Y.    Step 3  Create a plot!  We'll now take a look at a number of ways to plot your surface.   mesh(X,Y,Z); % 3D surface, open mesh, color indicates height.    This clearly looks terrible! The mesh is not dense enough and the range of values too large. Here is a better version:   x = -3:.2:3; y = -4:.2:4; [X,Y] = meshgrid(x,y); Z = 2.^(-1.5*sqrt(X.^2 + Y.^2)).*cos(0.5*Y).*sin(0.5*X); mesh(X,Y,Z); % 3D surface, open mesh, color indicates height.    You can display a legend of colors, if you wish, using the built-in function colorbar :   colorbar % Turns on the colorbar    Below are a number of other options to display your surface:   meshz(X,Y,Z); % 3D surface, open mesh with curtain, color indicates height.     waterfall(X,Y,Z); % 3D surface, waterfall (lines of constant y).     contour(X,Y,Z,n); % n curves of constant Z value (replace n with a number of your choice).     contourf(X,Y,Z,n); colorbar; % 2D filled curves of constant Z value.     contour3(X,Y,Z,n); % 3D curves of constant Z value.     meshc(X,Y,Z); % Combined mesh and 2D contour.     surf(X,Y,Z); % 3D surface, filled mesh, color indicates height.     surfc(X,Y,Z); % Combined surface and 2D contour.     surfl(X,Y,Z); % Surface with lighting: color indicates intensity.     surfl(X,Y,Z); % Surface with lighting. shading flat; % Flat shading removes grid lines.     surfl(X,Y,Z); % Surface with lighting. shading interp; % Interpolated shading looks smoother.     surfl(X,Y,Z); % Surface with lighting. shading interp; % Interpolated shading looks smoother. colormap pink;     ribbon(Z); % Surface strips: color indicates strip.     "
},
{
  "id": "p-896",
  "level": "2",
  "url": "plots3d-surface.html#p-896",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "surfaces functions of two variables "
},
{
  "id": "p-908",
  "level": "2",
  "url": "plots3d-surface.html#p-908",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "meshgrid command "
},
{
  "id": "p-910",
  "level": "2",
  "url": "plots3d-surface.html#p-910",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "element-by-element "
},
{
  "id": "p-916",
  "level": "2",
  "url": "plots3d-surface.html#p-916",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "colorbar "
},
{
  "id": "index-page",
  "level": "1",
  "url": "index-page.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

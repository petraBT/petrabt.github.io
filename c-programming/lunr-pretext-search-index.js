var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
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
  "body": "   Introduction  Welcome to ENGS 20: Introduction to Scientific Computing!  From the Dartmouth course catalog:  This course introduces concepts and techniques for creating computational solutions to problems in engineering and science. The essentials of computer programming are developed using the C and MATLAB languages, with the goal of enabling the student to use the computer effectively in subsequent courses. Programming topics include problem decomposition, control structures, recursion, arrays and other data structures, file I\/O, graphics, and code libraries. Applications will be drawn from numerical solution of ordinary differential equations, root finding, matrix operations, searching and sorting, simulation, and data analysis. Good programming style and computational efficiency are emphasized. Although no previous programming experience is assumed, a significant time commitment is required.  Students planning to pursue the engineering sciences major are advised to take ENGS 20. Students considering the computer science major or majors modified with computer science should take COSC 1 and COSC 10.  This textbook contains the course materials for only the C-programming portion of the class, which generally is covered within the first seven weeks of the class. There are homework assignments, in-class activities, and various other materials in this textbook.  The easiest way to know which sections of this book are assigned for homework, or which will be explored during class, is to use the . There, all the sections are grouped into their respective class or pre-class . Be sure to complete all pre-class sections prior to the subsequent class meeting, as these are homework. On the other hand, if searching for a specific topic, the or the embedded search bar at the top of the page will be of use.  In the next chapter, , the various tools and features of this book will be introduced and explained.  "
},
{
  "id": "meta_frontmatter-toc",
  "level": "1",
  "url": "meta_frontmatter-toc.html",
  "type": "Preface",
  "number": "",
  "title": "Table of Contents",
  "body": " Table of Contents  located at the end of the book.  ------------------------------------Week 1------------------------------------    Pre-Class 1        Class 1            Pre-Class 2         Class 2           Pre-Class 3         Class 3         ------------------------------------Week 2------------------------------------    Pre-Class 1         Class 1             Pre-Class 2          Class 2         Pre-Class 3          Class 3          ------------------------------------Week 3------------------------------------    Pre-Class 1       Class 1                  Pre-Class 2        Class 2            Pre-Class 3       Class 3        ------------------------------------Week 4------------------------------------    Pre-Class 1      Class 1        Pre-Class 2       Class 2             Pre-Class 3       Class 3         ------------------------------------Week 5------------------------------------    Pre-Class 1      Class 1                Pre-Class 2       Class 2        Pre-Class 3       Class 3            ------------------------------------Week 6------------------------------------    Pre-Class 1       Class 1           Pre-Class 2       Class 2          Pre-Class 3        Class 3            ------------------------------------Week 7------------------------------------    Pre-Class 1      Class 1                  Off to MATLAB!     "
},
{
  "id": "gettingstarted-codewindows",
  "level": "1",
  "url": "gettingstarted-codewindows.html",
  "type": "Section",
  "number": "1.1",
  "title": "Code Windows",
  "body": " Code Windows  code windows Let's jump right on in. Take a look at the window below: we call this a code window since its purpose is for you to practice writing code. You'll soon see that these code windows come in all sorts of forms and shapes. Sometimes I'll give you some code to modify, sometimes I'll give you instructions on what code to write and sometimes I'll simply give you a blank code window in case you wish to try out some code on your own. Give it a try right now:  Feel free to press the Run button, make any change you wish, start from scratch using the Start fresh button, play around with the code in the window or anything else. Don't worry: you can't break anything! Just have fun.  \/* This is a Code Window. You will practice a lot of coding in such windows. If you press the \"Run\" button below the code will be executed and a message to you displayed. *\/ #include <stdio.h> int main(void) { printf(\"Welcome to C-Programming!\"); }  "
},
{
  "id": "p-230",
  "level": "2",
  "url": "gettingstarted-codewindows.html#p-230",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "code window "
},
{
  "id": "gettingstarted-codecasts",
  "level": "1",
  "url": "gettingstarted-codecasts.html",
  "type": "Section",
  "number": "1.2",
  "title": "Codecasts",
  "body": " Codecasts  Codecast Codecasts are basically interactive coding tutorials. Each Codecast explains a C-programming topic and shows some examples. What distinguishes a Codecast from a regular video is that you can pause the playback at any point and modify the code that you see on screen at that time. Not only can you modify the code but you can also try out the effects that these modifications have on your program by compiling and running the modified code. Don't worry! This will soon make more sense to you.  This brief video explains how Codecasts work:   Video Description    The Codecast platform is introduced  Interactive components are demonstrated  Code editing mode is shown      What is a Codecast?     "
},
{
  "id": "p-232",
  "level": "2",
  "url": "gettingstarted-codecasts.html#p-232",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Codecasts "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "gettingstarted-codecasts.html#figure-1",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " What is a Codecast?    "
},
{
  "id": "gettingstarted-submissions",
  "level": "1",
  "url": "gettingstarted-submissions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Submissions",
  "body": " Submissions  During class, you will regularly work on coding activities. Oftentimes, there will be opportunities for you to submit your code or responses. Out of class, you will watch videos and work through short examples, many of which contain student response questions. Here is a sneak-peak at what the different submission boxes for code, responses, etc. will look like, so that you know what to expect:   Code Submissions  At the end of coding activities in class, you may be prompted to submit your code. This will be done through a specific in-class response system that we use in class. In case you'd like to keep track of your submissions inside this book we'll provde text submission boxes of the following form for these purposes. Please note that your submissions will be saved on the particular device you use but will not be visible for anyone else or persist when you switch devices or browsers.    When you are done, please paste your code into the code submission box below.     Sometimes you will be asked for your entire code and other times you may be asked to only paste in a certain piece of it, so be sure to read the prompt closely. And remember, these in-class submissions show your active participation during class and give us a live view into how the class is doing with the material, so be sure to always submit what you have, even if it doesn't quite work correctly!    Text Submissions  In addition to submitting some of your code during class, text responses are sometimes collected as well. For these cases, you will see a very similar submission box as with Code Submissions in class. In case you wish to keep track of your responses here in this book we'll again provdide submission boxes as before:    Please paste your text submission into the box below.       Pre-Class Canvas Quiz Previews  Before each class meeting, there are short Canvas quizzes that are accompanied by Codecasts, videos, and other materials. While these questions must be submitted on Canvas to receive credit, the same questions are shown throughout this book in their respective sections, alongside the relative content. While you are able to type in answers in the question boxes, this is only for your personal reference: you can mark down notes to yourself here for when you answer the Canvas quizzes, but you must submit on Canvas to receive credit. Here is what an example quiz preview question looks like:   Check your understanding  Where do you need to submit your answers to the Canvas quiz questions, which are previewed in the textbook?     They must be submitted on Canvas    Great job!      They must NOT be submitted on Canvas    Not quite - try again!      They must be never be submitted on Canvas    Not quite - try again!     Why do you think we call them Canvas quizzes?     "
},
{
  "id": "example",
  "level": "2",
  "url": "gettingstarted-submissions.html#example",
  "type": "Activity",
  "number": "1.1",
  "title": "",
  "body": "  When you are done, please paste your code into the code submission box below.    "
},
{
  "id": "example-submission-no-output",
  "level": "2",
  "url": "gettingstarted-submissions.html#example-submission-no-output",
  "type": "Activity",
  "number": "1.2",
  "title": "",
  "body": "  Please paste your text submission into the box below.    "
},
{
  "id": "quiz-example",
  "level": "2",
  "url": "gettingstarted-submissions.html#quiz-example",
  "type": "Reading Question",
  "number": "1.3.3.1",
  "title": "Check your understanding.",
  "body": "Check your understanding  Where do you need to submit your answers to the Canvas quiz questions, which are previewed in the textbook?     They must be submitted on Canvas    Great job!      They must NOT be submitted on Canvas    Not quite - try again!      They must be never be submitted on Canvas    Not quite - try again!     Why do you think we call them Canvas quizzes?  "
},
{
  "id": "computers-vocabulary",
  "level": "1",
  "url": "computers-vocabulary.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introductory Vocabulary",
  "body": " Introductory Vocabulary  A computer is an object that is made up of hardware components as well as software to instruct the hardware what to do.   hardware Hardware: Computer hardware refers to the physical components that make up a computer system. Examples of hardware components are the motherboard, the Central Processing Unit (CPU), random access memory (RAM) to run programs, the computer's power supply, a video card, a hard drive to store information, peripherals (keyboard, mouse, screen, printer etc) so as to provide user interaction, and more.  software Software: The purpose of software is to instruct the hardware components what to do. Software is basically computer code that runs on the computer and includes the operating system as well as all the applications installed on the computer.  algorithm Algorithm: An algorithm is a sequence of instructions that provides a set of steps to follow in order to achieve a desired result.  program Program: A program is an algorithm that is implemented (written) in a certain programming language, for example the C-programming language.  program input Program Input: A program often needs input data that is supposed to be processed. Such data can be provided by the user or read from the hard disk for example.  program output Program Output: Finally, a program often presents the results of its work back to the user in the form of output data.   The following video explains these concepts:   Video Description    Computer vocabulary is explained  Examples of each term are given      Petra and Rémi explain Computers, Hardware, Software and Algorithms      Check your understanding!   Can you think of any examples of software that you have used recently?   Do you use word processing software? How about spreadsheets? Or graphics programs?    What are some examples of program input that you can think of? How are you currently controlling your computer?   Do you use a keyboard? A mouse? Other input devices?    "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "computers-vocabulary.html#figure-2",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " Petra and Rémi explain Computers, Hardware, Software and Algorithms    "
},
{
  "id": "computers-vocabulary-reading-question1",
  "level": "2",
  "url": "computers-vocabulary.html#computers-vocabulary-reading-question1",
  "type": "Reading Question",
  "number": "2.1.1",
  "title": "",
  "body": " Can you think of any examples of software that you have used recently?   Do you use word processing software? How about spreadsheets? Or graphics programs?  "
},
{
  "id": "computers-vocabulary-reading-question2",
  "level": "2",
  "url": "computers-vocabulary.html#computers-vocabulary-reading-question2",
  "type": "Reading Question",
  "number": "2.1.2",
  "title": "",
  "body": " What are some examples of program input that you can think of? How are you currently controlling your computer?   Do you use a keyboard? A mouse? Other input devices?  "
},
{
  "id": "firstprogram-hello-world",
  "level": "1",
  "url": "firstprogram-hello-world.html",
  "type": "Section",
  "number": "3.1",
  "title": "<code class=\"code-inline tex2jax_ignore\">Hello, World!<\/code>",
  "body": " Hello, World!  A Hello World program is a computer program that displays Hello, World! to the user. It is often the very first program students write when they are introduced to a new programming language.    Click on the Run button in the above code window to observe that this C-program indeed outputs Hello, World! to the screen. Now try the following modifications - don't worry, you can always return to the original program by clicking on Start Fresh .  If you haven't already, click Close in the window that displayed the Hello, World! message. Now modify the code so that the computer outputs a greeting to you instead of to the world when you hit Run again. For example, you could output Hello, Petra!  Delete the semicolon at the end of the printf(...); line. Then click Run . What happens? Put the semicolon back and run the code again to make sure you are back to normal.  Misspell printf on purpose. What happens?  Create a second printf() line, the first one saying Hello, World! , the second one displaying your personal greeting. What do you notice?  Add the two characters \\n at the end of the first printf() line, just before the closing quotation marks, so that the line now reads: printf(\"Hello, World!\\n\"); Run your code and observe the effect. The backslash \\ indicates that rather than text to be printed to the screen, a command follows. In this case, the \\n is the command to start a new line. Such a command, starting with a backslash, is also called an escape sequence .     "
},
{
  "id": "p-259",
  "level": "2",
  "url": "firstprogram-hello-world.html#p-259",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hello World "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "firstprogram-hello-world.html#activity-3",
  "type": "Activity",
  "number": "3.1",
  "title": "",
  "body": " Click on the Run button in the above code window to observe that this C-program indeed outputs Hello, World! to the screen. Now try the following modifications - don't worry, you can always return to the original program by clicking on Start Fresh .  If you haven't already, click Close in the window that displayed the Hello, World! message. Now modify the code so that the computer outputs a greeting to you instead of to the world when you hit Run again. For example, you could output Hello, Petra!  Delete the semicolon at the end of the printf(...); line. Then click Run . What happens? Put the semicolon back and run the code again to make sure you are back to normal.  Misspell printf on purpose. What happens?  Create a second printf() line, the first one saying Hello, World! , the second one displaying your personal greeting. What do you notice?  Add the two characters \\n at the end of the first printf() line, just before the closing quotation marks, so that the line now reads: printf(\"Hello, World!\\n\"); Run your code and observe the effect. The backslash \\ indicates that rather than text to be printed to the screen, a command follows. In this case, the \\n is the command to start a new line. Such a command, starting with a backslash, is also called an escape sequence .    "
},
{
  "id": "firstprogram-practice",
  "level": "1",
  "url": "firstprogram-practice.html",
  "type": "Section",
  "number": "3.2",
  "title": "First Practice",
  "body": " First Practice   Please modify the Hello, World program below so that instead of Hello, World! it displays the following on the screen:  I already know how to: - print text to the screen - start a new line - fix syntax errors  Be sure to print the words exactly as given above (case sensitive!) since otherwise our autograder will not grade your solution as correct.    Use the Run button as before to observe how your code is behaving. When you think your program performs correctly please press the check button to see whether it indeed does.  "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "firstprogram-practice.html#activity-4",
  "type": "Activity",
  "number": "3.2",
  "title": "",
  "body": " Please modify the Hello, World program below so that instead of Hello, World! it displays the following on the screen:  I already know how to: - print text to the screen - start a new line - fix syntax errors  Be sure to print the words exactly as given above (case sensitive!) since otherwise our autograder will not grade your solution as correct.  "
},
{
  "id": "firstprogram-special-characters",
  "level": "1",
  "url": "firstprogram-special-characters.html",
  "type": "Section",
  "number": "3.3",
  "title": "Printing Special Characters",
  "body": " Printing Special Characters  How do you print quotation marks to the screen?    Try printing Today is \"Monday\"! to the screen. What happens?  What is the correct way to print quotation marks?  Be adventurous and try out various ideas! You can't break anything.    quotation marks single Single quotes are printed using \\'  quotation marks double Double quotes are printed using \\\"     Within any string (deliminated by double quotes \" \" ), a double quote needs to be escaped , that is, preceded by a backslash. Single quotes are actually okay within strings, but it is also okay to escape them. If you'd like to use a single quote within something enclosed by single quotes however, then you need to escape that single quote (but double quotes are okay, surrounded by single quotes).    "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "firstprogram-special-characters.html#activity-5",
  "type": "Activity",
  "number": "3.3",
  "title": "",
  "body": " Try printing Today is \"Monday\"! to the screen. What happens?  What is the correct way to print quotation marks?  Be adventurous and try out various ideas! You can't break anything.    quotation marks single Single quotes are printed using \\'  quotation marks double Double quotes are printed using \\\"     Within any string (deliminated by double quotes \" \" ), a double quote needs to be escaped , that is, preceded by a backslash. Single quotes are actually okay within strings, but it is also okay to escape them. If you'd like to use a single quote within something enclosed by single quotes however, then you need to escape that single quote (but double quotes are okay, surrounded by single quotes).   "
},
{
  "id": "firstprogram-repetition",
  "level": "1",
  "url": "firstprogram-repetition.html",
  "type": "Section",
  "number": "3.4",
  "title": "Repetition: A Simple <code class=\"code-inline tex2jax_ignore\">for<\/code>-Loop",
  "body": " Repetition: A Simple for -Loop  Suppose you wanted to print the same line of text five times. Here is one way to do so:   But imagine how many times you'd have to type the same line if you wanted to print it 100 times! Or imagine wanting to make a change to all of those lines, for example wanting two exclamation marks at the end of each output line. Here is a more elegant solution: a so-called loop :   Try it out right now by hitting that Run button!  C actually supports multiple types of loops. This one is called a for -loop; we'll learn about the other types of loops later. We will also soon learn more about the use of the rather mysterious-looking i and the line int i; . For now, just think of i as something that can hold different values. In this particular example, i takes on values between 1 and 5, and for each value of i between 1 and 5 this loop prints out Hello, World! . That is, Hello, World! is printed exactly 5-times.    Try it out by clicking on the Run button in the above window and verify that the same line is indeed printed 5-times.  Now modify the code so that it prints Hello, World! 10-times.    You can place multiple statements into your loops:     Study the code  What do you think the above code will print to the screen? Will it print:     Hello World 3-times, then Today is Saturday 3-times?    Not quite...      Hello World. Today is Saturday. 3-times ?    Great job!      Something else?    Try again...      "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "firstprogram-repetition.html#activity-6",
  "type": "Activity",
  "number": "3.4",
  "title": "",
  "body": "  Try it out by clicking on the Run button in the above window and verify that the same line is indeed printed 5-times.  Now modify the code so that it prints Hello, World! 10-times.   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "firstprogram-repetition.html#exercise-4",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "Study the code.",
  "body": "Study the code  What do you think the above code will print to the screen? Will it print:     Hello World 3-times, then Today is Saturday 3-times?    Not quite...      Hello World. Today is Saturday. 3-times ?    Great job!      Something else?    Try again...    "
},
{
  "id": "firstprogram-multiple-repetitions",
  "level": "1",
  "url": "firstprogram-multiple-repetitions.html",
  "type": "Section",
  "number": "3.5",
  "title": "Multiple Repetitions",
  "body": " Multiple Repetitions  Give it a try now:    Can you figure out how to change the code in the window below so that it prints the following:  Hello, World! Hello, World! Hello, World! Today is Saturday. Today is Saturday.  Be sure to print the words exactly as given above since otherwise our autograder will not grade your solution as correct.   Run your code frequently using the Run button to quickly catch potential mistakes before they become huge issues. When you think your programs performs correctly, press the Check button to run the autograder tool.   "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "firstprogram-multiple-repetitions.html#activity-7",
  "type": "Activity",
  "number": "3.5",
  "title": "",
  "body": " Can you figure out how to change the code in the window below so that it prints the following:  Hello, World! Hello, World! Hello, World! Today is Saturday. Today is Saturday.  Be sure to print the words exactly as given above since otherwise our autograder will not grade your solution as correct.  "
},
{
  "id": "firstprogram-comments",
  "level": "1",
  "url": "firstprogram-comments.html",
  "type": "Section",
  "number": "3.6",
  "title": "Putting Comments in your Code",
  "body": " Putting Comments in your Code  comments It is important to put comments throughout your code, both for purposes of readability of your code and so that you yourself can remember what you were thinking when you wrote the code. There are two ways to do so, both of which are demonstrated in the code below:    Try putting a comment inside another comment, so something like \/*This is \/*comment inside a *\/ comment *\/ . What happens when you nest a comment inside another comment?  You cannot nest a comment inside another comment.  When the compiler finds the start of a comment, indicated by \/*, it simply ignores everything (including the potential start of another comment) until it gets to a comment ending symbol *\/. In the case of nested comments it will therefore not see the beginning of the comment nested inside the other comment and furthermore mistake the ending symbol of the inside comment for that of the outside comment.   "
},
{
  "id": "activity-8",
  "level": "2",
  "url": "firstprogram-comments.html#activity-8",
  "type": "Activity",
  "number": "3.6",
  "title": "",
  "body": " Try putting a comment inside another comment, so something like \/*This is \/*comment inside a *\/ comment *\/ . What happens when you nest a comment inside another comment?  You cannot nest a comment inside another comment.  When the compiler finds the start of a comment, indicated by \/*, it simply ignores everything (including the potential start of another comment) until it gets to a comment ending symbol *\/. In the case of nested comments it will therefore not see the beginning of the comment nested inside the other comment and furthermore mistake the ending symbol of the inside comment for that of the outside comment.  "
},
{
  "id": "firstprogram-summary",
  "level": "1",
  "url": "firstprogram-summary.html",
  "type": "Section",
  "number": "3.7",
  "title": "Summary",
  "body": " Summary    Take a moment and think about the following:   What was your main take-away from today's class?   What was the most confusing in today's class?      Here is what we have learned:    printf()  printf() is used to display a message to the screen. Example: printf(\"This will be displayed on the screen!\");    \\n starts a new line. Example: printf(\"Hello!\\nMy name is Petra!\");    Quotation marks need to be \"escaped\", as in: \\\" , \\' . Example: printf(\"She said: \\\"Today it\\'s Monday!\\\" \");    loops for  Loops are used to repeat instructions multiple times. Example: int i; for (i=0; i<3; i++) { printf(\"Hello! \"); printf(\"Hi!\\n\"); }   Comments are important throughout your code. Comments can be included in your code by enclosing them in \/* ... *\/ or by using \/\/ . Example: int main(void) { int i; \/* This is a comment. *\/ \/* This is also a comment. *\/ \/* A comment can go over multiple lines. *\/ for (i=0; i<3; i++) { printf(\"Hello! \"); \/\/ This comment ignores the remainder of the line. printf(\"Hi!\\n\"); } }    "
},
{
  "id": "activity-9",
  "level": "2",
  "url": "firstprogram-summary.html#activity-9",
  "type": "Activity",
  "number": "3.7",
  "title": "",
  "body": "  Take a moment and think about the following:   What was your main take-away from today's class?   What was the most confusing in today's class?     "
},
{
  "id": "variables-printing-numbers",
  "level": "1",
  "url": "variables-printing-numbers.html",
  "type": "Section",
  "number": "4.1",
  "title": "Printing Numbers",
  "body": " Printing Numbers  data type integers There are lots of different types of numbers: integers (whole numbers without any decimal places), rational numbers, irrational numbers, complex numbers, etc. No matter how large, a computer's amount of storage has limits. You can see that therefore it would be hard to store with 100% accuracy, a number with infinitely many decimal places such as . Moreover, different types of numbers are dealt with in different ways internally and that's why we discuss them separately. We start with whole numbers, also called integers , or int for short. Integers can be positive, negative, or zero and have no digits after the decimal point.  printf() format specifiers %d Up to this point, we have only printed words to the screen. In the following Codecast we'll learn how to print numbers to the screen using the printf() statement and the format specifier for integers.    Video Description    Using printf() to print integers  The %d format specifier is demonstrated  Multiple parameters are used in one printf() statement  NEW SYNTAX: the following will print \"Hello, 5\":  printf(\"Hello, %d\", 5);     What will be printed to the screen by the following program:  #include <stdio.h> int main(void) { printf(\"We need %d apples and %d cups sugar.\\n\", 10, 2); return(0); }     We need 10 apples and 2 cups of sugar.    Great job!      We need 10 apples and 10 cups of sugar.    Not quite - try again!      We need 2 apples and 2 cups of sugar.    Not quite - try again!      We need 2 apples and 10 cups of sugar.    Not quite - try again!      We need %d apples and %d cups of sugar.    Not quite - try again!     There is a one-to-one match between format specifiers and parameters.    "
},
{
  "id": "p-296",
  "level": "2",
  "url": "variables-printing-numbers.html#p-296",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integers "
},
{
  "id": "p-297",
  "level": "2",
  "url": "variables-printing-numbers.html#p-297",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "format specifier "
},
{
  "id": "quiz-printing-1",
  "level": "2",
  "url": "variables-printing-numbers.html#quiz-printing-1",
  "type": "Reading Question",
  "number": "4.1.1",
  "title": "",
  "body": " What will be printed to the screen by the following program:  #include <stdio.h> int main(void) { printf(\"We need %d apples and %d cups sugar.\\n\", 10, 2); return(0); }     We need 10 apples and 2 cups of sugar.    Great job!      We need 10 apples and 10 cups of sugar.    Not quite - try again!      We need 2 apples and 2 cups of sugar.    Not quite - try again!      We need 2 apples and 10 cups of sugar.    Not quite - try again!      We need %d apples and %d cups of sugar.    Not quite - try again!     There is a one-to-one match between format specifiers and parameters.  "
},
{
  "id": "variables-calculations",
  "level": "1",
  "url": "variables-calculations.html",
  "type": "Section",
  "number": "4.2",
  "title": "Simple Calculations",
  "body": " Simple Calculations  calculations Simple calculations are straight-forward to perform in C with results easily printed to the screen. We'll learn how this is done in the next Codecast:    Video Description    Integer addition, subtraction, and multiplication  Parentheses  Order of operation  NEW SYNTAX: the following will print \"Result = 15\"  printf(\"Result = %d\", 5+10);     Please complete the code below so that it prints the following computation to the screen:  5*8+2*8 = (5+2)*8 = 56   When your program performs correctly you'll be given a keyword to enter in Canvas. Please enter the keyword exactly as given to you (without the quotation marks).    "
},
{
  "id": "quiz-printing-2",
  "level": "2",
  "url": "variables-calculations.html#quiz-printing-2",
  "type": "Reading Question",
  "number": "4.2.1",
  "title": "",
  "body": " Please complete the code below so that it prints the following computation to the screen:  5*8+2*8 = (5+2)*8 = 56   When your program performs correctly you'll be given a keyword to enter in Canvas. Please enter the keyword exactly as given to you (without the quotation marks).  "
},
{
  "id": "variables-intro",
  "level": "1",
  "url": "variables-intro.html",
  "type": "Section",
  "number": "4.3",
  "title": "Introduction to Variables",
  "body": " Introduction to Variables  variables declare variables initialize We'll now introduce the concept of a variable. As mentioned earlier, you can think of a variable as a storage location with a name associated to it by which you can refer to the contents of the storage location. A fundamental aspect of working with variables in C is that you need to decide and tell the computer up front what type of data (integer, character, etc) you wish to store in it. We call this process declaring the variable. Furthermore, it is good practice to assign a value to a variable right at the outset (we call this initializing ) so that your variable holds a value that you control. If you try to use a variable that has not been declared, you will receive an error message from the compiler. Using a variable that has been declared but not initialized (not assigned a value) will lead to unpredictable results.    Can you deduce why uninitialized variables may give unpredictable results? What, if anything, do you think a variable that you have declared but not initialized contains?     How can we store numbers and recall them at different places in a program?    Video Description    Creating (declaring) variables  Assigning values to variables  Using variables  NEW SYNTAX: int myNum; creates an integer variable named \"myNum\"  NEW SYNTAX: myNum = 5; stores the integer \"5\" in the variable \"myNum\"       What will be printed to the screen by the following program:  #include <stdio.h> int main(void) { int money; money = 5; printf(\"I have %d dollars; that equals %d quarters.\\n\", money, 4*money); return 0; }     I have 5 dollars; that equals 20 quarters.    Great job!      I have %d dollars; that equals %d quarters.    Not quite - try again!      I have 5 dollars; that equals 4*5 quarters.    Not quite - try again!      I have 20 dollars; that equals 5 quarters.    Not quite - try again!     There is a one-to-one match between format specifiers and parameters.    "
},
{
  "id": "p-310",
  "level": "2",
  "url": "variables-intro.html#p-310",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "declaring initializing "
},
{
  "id": "activity-variables-intro",
  "level": "2",
  "url": "variables-intro.html#activity-variables-intro",
  "type": "Investigate",
  "number": "4.1",
  "title": "",
  "body": "  Can you deduce why uninitialized variables may give unpredictable results? What, if anything, do you think a variable that you have declared but not initialized contains?    "
},
{
  "id": "quiz-variables-1",
  "level": "2",
  "url": "variables-intro.html#quiz-variables-1",
  "type": "Reading Question",
  "number": "4.3.1",
  "title": "",
  "body": " What will be printed to the screen by the following program:  #include <stdio.h> int main(void) { int money; money = 5; printf(\"I have %d dollars; that equals %d quarters.\\n\", money, 4*money); return 0; }     I have 5 dollars; that equals 20 quarters.    Great job!      I have %d dollars; that equals %d quarters.    Not quite - try again!      I have 5 dollars; that equals 4*5 quarters.    Not quite - try again!      I have 20 dollars; that equals 5 quarters.    Not quite - try again!     There is a one-to-one match between format specifiers and parameters.  "
},
{
  "id": "variables-changing",
  "level": "1",
  "url": "variables-changing.html",
  "type": "Section",
  "number": "4.4",
  "title": "Modifying Variables",
  "body": " Modifying Variables  variables update After declaring and initializing a variable, the stored value is not set in stone. It can be updated!  Next, we'll learn how to modify the value of a variable in a program.    Video Description    Assignment statements in C  Variable values can be updated  NEW SYNTAX: myNum = myNum - 3; will decrease the stored value of \"myNum\" by 3       Suppose you declare and initialize a variable at the beginning of your program as follows:  int var; var = 10;  What is the value of the variable var after the line  var = var + 20;  has been executed?      Correct      Not quite - try again!       Continuing from the question above, your program now contains the next line:  var = var - 5;  What is the value of var after this statement?      Correct      Not quite - try again!       Finally, your program contains the two lines:  var = 100; var = var+50;  What is the value of var after these two lines have been executed?      Correct      Not quite - try again!       "
},
{
  "id": "quiz-variables-2",
  "level": "2",
  "url": "variables-changing.html#quiz-variables-2",
  "type": "Reading Question",
  "number": "4.4.1",
  "title": "",
  "body": " Suppose you declare and initialize a variable at the beginning of your program as follows:  int var; var = 10;  What is the value of the variable var after the line  var = var + 20;  has been executed?      Correct      Not quite - try again!     "
},
{
  "id": "quiz-variables-3",
  "level": "2",
  "url": "variables-changing.html#quiz-variables-3",
  "type": "Reading Question",
  "number": "4.4.2",
  "title": "",
  "body": " Continuing from the question above, your program now contains the next line:  var = var - 5;  What is the value of var after this statement?      Correct      Not quite - try again!     "
},
{
  "id": "quiz-variables-4",
  "level": "2",
  "url": "variables-changing.html#quiz-variables-4",
  "type": "Reading Question",
  "number": "4.4.3",
  "title": "",
  "body": " Finally, your program contains the two lines:  var = 100; var = var+50;  What is the value of var after these two lines have been executed?      Correct      Not quite - try again!     "
},
{
  "id": "variables-initializing",
  "level": "1",
  "url": "variables-initializing.html",
  "type": "Section",
  "number": "4.5",
  "title": "Initializing Variables",
  "body": " Initializing Variables  It is very important to always initialize your variables (that is, give initial values to your variables, even if you plan to change those values immediately). In the following video we discuss two ways to do so.   variables initialize separately Separate declaration and initialization: int cash; cash = 20;   variables initialize simultaneously Declaration and initialization in one statement: int cash = 20;        Video Description    Separate declaration and initialization for a variable  Declaring and initializing a variable in one line  NEW SYNTAX: int money = 30; declares an integer variable named \"money\" and stores the value 30 in it       Which of the following variable declaration and initialization statements is equivalent to:  int money; money = 20;     int money = 20;    Great job!      money = int 20;    Not quite - try again!      int 20;    Not quite - try again!      int money 20;    Not quite - try again!     Scroll up to the top of this page for the correct syntax.    Find an equivalent variable declaration and initialization statement to:  int apples; apples = 4;     int apples = 4;    Great job!      apples = 4 int;    Not quite - try again!      int 4;    Not quite - try again!      nt apples 4;    Not quite - try again!     Scroll up to the top of this page for the correct syntax.    "
},
{
  "id": "quiz-variables-5",
  "level": "2",
  "url": "variables-initializing.html#quiz-variables-5",
  "type": "Reading Question",
  "number": "4.5.1",
  "title": "",
  "body": " Which of the following variable declaration and initialization statements is equivalent to:  int money; money = 20;     int money = 20;    Great job!      money = int 20;    Not quite - try again!      int 20;    Not quite - try again!      int money 20;    Not quite - try again!     Scroll up to the top of this page for the correct syntax.  "
},
{
  "id": "quiz-variables-6",
  "level": "2",
  "url": "variables-initializing.html#quiz-variables-6",
  "type": "Reading Question",
  "number": "4.5.2",
  "title": "",
  "body": " Find an equivalent variable declaration and initialization statement to:  int apples; apples = 4;     int apples = 4;    Great job!      apples = 4 int;    Not quite - try again!      int 4;    Not quite - try again!      nt apples 4;    Not quite - try again!     Scroll up to the top of this page for the correct syntax.  "
},
{
  "id": "variables-errors",
  "level": "1",
  "url": "variables-errors.html",
  "type": "Section",
  "number": "4.6",
  "title": "Common Variable Errors",
  "body": " Common Variable Errors  variables errors We all make mistakes. In coding there are several types of errors we are all prone to. Some are akin to spelling or grammar errors (we call them syntax errors) and some are of logical nature, for example. It can be helpful to think about potential errors before getting started so that you can be on the lookout. Let's look at some common errors in working with variables.  The following three activities present erroneous code. Can you spot the error and fix it? Don't be afraid to play around and try out multiple solutions. You cannot break anything! Remember that you can always go back to the original problem by clicking on the Start fresh button.   Fix Me!    You'd like to print your age to the screen. What is wrong with the following code? Can you fix it?  If you'd like our autograder to check your program for correctness, please do not change the printf() statement.   What was wrong with the given code?  Please paste your text submission into the box below.       Fix me too...!    Again, you'd like to print your age to the screen. And again, something is wrong with the following code. Can you fix it?  If you'd like our autograder to check your program for correctness, please do not change the printf() statement.   What was wrong with the given code?  Please paste your text submission into the box below.       Fix me three...!    Another error! You'd like to print your age to the screen. And again, something is wrong with the following code. Can you fix it?  If you'd like our autograder to check your program for correctness, please do not change the printf statement.   What was wrong with the given code?  Please paste your text submission into the box below.       Summary  Here is what we have learned:   Variable names can only contain letters, numbers and the underscore character _ .  Variable names must start with a letter or an underscore _ .  Variable names are case sensitive.  Variables need to be initialized (assigned a value) BEFORE they are used.    "
},
{
  "id": "activity-4-6-1-Fix_Me_1",
  "level": "2",
  "url": "variables-errors.html#activity-4-6-1-Fix_Me_1",
  "type": "Activity",
  "number": "4.2",
  "title": "",
  "body": "  You'd like to print your age to the screen. What is wrong with the following code? Can you fix it?  If you'd like our autograder to check your program for correctness, please do not change the printf() statement.   What was wrong with the given code?  Please paste your text submission into the box below.    "
},
{
  "id": "activity-4-6-2-Fix_Me_2",
  "level": "2",
  "url": "variables-errors.html#activity-4-6-2-Fix_Me_2",
  "type": "Activity",
  "number": "4.3",
  "title": "",
  "body": "  Again, you'd like to print your age to the screen. And again, something is wrong with the following code. Can you fix it?  If you'd like our autograder to check your program for correctness, please do not change the printf() statement.   What was wrong with the given code?  Please paste your text submission into the box below.    "
},
{
  "id": "activity-4-6-3-Fix_Me_3",
  "level": "2",
  "url": "variables-errors.html#activity-4-6-3-Fix_Me_3",
  "type": "Activity",
  "number": "4.4",
  "title": "",
  "body": "  Another error! You'd like to print your age to the screen. And again, something is wrong with the following code. Can you fix it?  If you'd like our autograder to check your program for correctness, please do not change the printf statement.   What was wrong with the given code?  Please paste your text submission into the box below.    "
},
{
  "id": "variables-loop-practice",
  "level": "1",
  "url": "variables-loop-practice.html",
  "type": "Section",
  "number": "4.7",
  "title": "Using Variables in Loops: Practice!",
  "body": " Using Variables in Loops: Practice!    Please print a multiplication table (for multiplication by 7) to the screen, in the following form:  1 x 7 = 7 2 x 7 = 14 3 x 7 = 21 4 x 7 = 28 5 x 7 = 35 6 x 7 = 42 7 x 7 = 49 8 x 7 = 56 9 x 7 = 63 10 x 7 = 70  Be sure to use a loop here, do not write 10 printf() statements...  As a reminder, here is the format of a for -loop that runs 10 times:  int i; \/* a variable, for example by the name of i, is needed *\/ for (i=1; i<=10; i++) { \/* code that needs to be repeated goes here *\/ } Through this loop, the variable i successively gets assigned values from 1 to 10. In the first run through the loop i has the value 1, in the next run-through that value is increased to 2, then to 3, all the way up to and including 10.  When you are done, please put your code into the box below:       How could you easily change the output of this program, so that instead of each line reading i x 7 , where i is that incrementing variable, it prints as 7 x i ? Or, what if you wanted to print a multiplication table for a different number, instead of 7? Try out some of these changes if you have time!    "
},
{
  "id": "activity-4-7-1-Practice_Your_Loops",
  "level": "2",
  "url": "variables-loop-practice.html#activity-4-7-1-Practice_Your_Loops",
  "type": "Activity",
  "number": "4.5",
  "title": "",
  "body": "  Please print a multiplication table (for multiplication by 7) to the screen, in the following form:  1 x 7 = 7 2 x 7 = 14 3 x 7 = 21 4 x 7 = 28 5 x 7 = 35 6 x 7 = 42 7 x 7 = 49 8 x 7 = 56 9 x 7 = 63 10 x 7 = 70  Be sure to use a loop here, do not write 10 printf() statements...  As a reminder, here is the format of a for -loop that runs 10 times:  int i; \/* a variable, for example by the name of i, is needed *\/ for (i=1; i<=10; i++) { \/* code that needs to be repeated goes here *\/ } Through this loop, the variable i successively gets assigned values from 1 to 10. In the first run through the loop i has the value 1, in the next run-through that value is increased to 2, then to 3, all the way up to and including 10.  When you are done, please put your code into the box below:    "
},
{
  "id": "investigation-2",
  "level": "2",
  "url": "variables-loop-practice.html#investigation-2",
  "type": "Investigate",
  "number": "4.6",
  "title": "",
  "body": "  How could you easily change the output of this program, so that instead of each line reading i x 7 , where i is that incrementing variable, it prints as 7 x i ? Or, what if you wanted to print a multiplication table for a different number, instead of 7? Try out some of these changes if you have time!   "
},
{
  "id": "variables-user-input",
  "level": "1",
  "url": "variables-user-input.html",
  "type": "Section",
  "number": "4.8",
  "title": "User Input Using <code class=\"code-inline tex2jax_ignore\">scanf()<\/code>",
  "body": " User Input Using scanf()  scanf() It is possible to have the user (the person sitting in front of the computer screen) modify the value of a variable while the program is running! To do so the user needs to enter a value (this is typically done by typing on the keyboard) and your program needs to be ready to accept such an input value and store it in a variable. The C-command to accomplish this is scanf() .  The following code asks the user for their age, has them enter it and then prints it out. You'll notice the strange ampersand (&) character in front of the variable in which we are storing the user input. We'll explain this a bit later - for now: don't worry.   Try it out by hitting the Run button! When prompted, enter your age.  You can read multiple entries with one scanf() statement if you wish (or you can simply use multiple scanf() statements in a row):   Let's get back to our multiplication table. Rather than printing the x7 table, in this next example, we'll have the user enter which multiplication table to print:    Adding User Input   Please write a program that adds integers, entered by the user.  First, ask the user to enter the number of integers they wish to add. Next, use a for -loop that runs the desired number of times, and in which you continually ask the user to enter another number that then gets added to the sum.  When the loop terminates, print the result to the screen.  Here is a sample session, with simulated user input in bold:   How many numbers do you wish to add?  5  Please enter number 1:  7  Please enter number 2:  13  Please enter number 3:  4  Please enter number 4:  -3  Please enter number 5:  9  The numbers you entered add up to 30.    When you are done, please copy the code you added into the box below:     "
},
{
  "id": "activity-4-8-1-Adding_User_Input",
  "level": "2",
  "url": "variables-user-input.html#activity-4-8-1-Adding_User_Input",
  "type": "Activity",
  "number": "4.7",
  "title": "Adding User Input.",
  "body": " Adding User Input   Please write a program that adds integers, entered by the user.  First, ask the user to enter the number of integers they wish to add. Next, use a for -loop that runs the desired number of times, and in which you continually ask the user to enter another number that then gets added to the sum.  When the loop terminates, print the result to the screen.  Here is a sample session, with simulated user input in bold:   How many numbers do you wish to add?  5  Please enter number 1:  7  Please enter number 2:  13  Please enter number 3:  4  Please enter number 4:  -3  Please enter number 5:  9  The numbers you entered add up to 30.    When you are done, please copy the code you added into the box below:    "
},
{
  "id": "variables-char-datatype",
  "level": "1",
  "url": "variables-char-datatype.html",
  "type": "Section",
  "number": "4.9",
  "title": "The <code class=\"code-inline tex2jax_ignore\">char<\/code> Datatype",
  "body": " The char Datatype  So far we have only stored integer numbers in variables.   data type characters You can also store letters or symbols in variables (in computer speak these are called characters ).   format specifiers %c The datatype to store a character is called char , the format specifier is %c   Here is an example:    printf Practice   Write a program that prints out ENGS 20 using the following printf() statement:  printf(\"%c%c%cS 20\\n\", letter1, letter2, letter3);  Please do not make any changes to the printf statement since the autograder will not function correctly if you do.   When you are done, please put your code into the box below:      Reading characters from the user input  You can use scanf() to read a character from the user input:      What do you think would happen if you tried to use the scanf() function to read a character, but you use the format specifier for an integer-type variable, %d ? Will it work or fail?    Take your best guess, and then feel free to try it out in the code window above    It does not work!    Since our scanf() statement in the code window above has &letter as the destination where the scanned input is to be stored, the scanf() function knows that &letter was declared as a char , so it expects the complementary %c format specifier.    "
},
{
  "id": "p-382",
  "level": "2",
  "url": "variables-char-datatype.html#p-382",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characters "
},
{
  "id": "activity-4-9-1-printf_Practice",
  "level": "2",
  "url": "variables-char-datatype.html#activity-4-9-1-printf_Practice",
  "type": "Activity",
  "number": "4.8",
  "title": "<code class=\"code-inline tex2jax_ignore\">printf<\/code> Practice.",
  "body": " printf Practice   Write a program that prints out ENGS 20 using the following printf() statement:  printf(\"%c%c%cS 20\\n\", letter1, letter2, letter3);  Please do not make any changes to the printf statement since the autograder will not function correctly if you do.   When you are done, please put your code into the box below:    "
},
{
  "id": "investigation-3",
  "level": "2",
  "url": "variables-char-datatype.html#investigation-3",
  "type": "Investigate",
  "number": "4.9",
  "title": "",
  "body": "  What do you think would happen if you tried to use the scanf() function to read a character, but you use the format specifier for an integer-type variable, %d ? Will it work or fail?    Take your best guess, and then feel free to try it out in the code window above    It does not work!    Since our scanf() statement in the code window above has &letter as the destination where the scanned input is to be stored, the scanf() function knows that &letter was declared as a char , so it expects the complementary %c format specifier.   "
},
{
  "id": "variables-float-datatype",
  "level": "1",
  "url": "variables-float-datatype.html",
  "type": "Section",
  "number": "4.10",
  "title": "The <code class=\"code-inline tex2jax_ignore\">float<\/code> Datatype",
  "body": " The float Datatype   data type floats Storing decimal numbers takes up more computer memory than storing integers because of all those decimal places. The more precision you are looking for the more space it takes up. Although today's computers come with plenty of memory, it is prudent to only use up what you really need.  C has several data types to store decimal numbers: float , double and long double . They have increasing precision. We'll mostly use the type float .   format specifiers %f The format specifier for a float is %f .  While internally, numbers are always stored with the precision dictated by the number's data type, for visualization purposes you can specify the number of decimal places to display using %.1f (one decimal place), %.2f (two decimal places), etc.  By default (if using simply %f ) floats are displayed with 6 decimal places.     What happens if the precision of the format specifier exceeds that of the number being displayed? For example, if the user enters 1.77 in the code window above, but the code specifies the output to have four decimal places, %.4f , what will happen?    Try it out above to see what happens, then see if you can guess why that happens!    "
},
{
  "id": "investigation-4",
  "level": "2",
  "url": "variables-float-datatype.html#investigation-4",
  "type": "Investigate",
  "number": "4.10",
  "title": "",
  "body": "  What happens if the precision of the format specifier exceeds that of the number being displayed? For example, if the user enters 1.77 in the code window above, but the code specifies the output to have four decimal places, %.4f , what will happen?    Try it out above to see what happens, then see if you can guess why that happens!   "
},
{
  "id": "variables-division",
  "level": "1",
  "url": "variables-division.html",
  "type": "Section",
  "number": "4.11",
  "title": "Division",
  "body": " Division  Get ready to be surprised. But don't worry, we'll explain everything soon!   Intro to Division in C    Try to predict what the output of the following program will be:   Which of the following do you think will be printed to the screen?      5 \/ 3 = 1    Correct! Do you have any idea why this might be happening?      5 \/ 3 = 1.666667    Unfortunately, this is not what happens...      5 \/ 3 = 1.67    Unfortunately, this is not what happens...      5 \/ 3 = 2    Not quite - try again!      5 \/ 3 = 1.7    Not quite - try again!        Your Turn!   Click on the Run button in the window below to reveal the integer division behavior that C exhibits. Next, change the data types of some of the variables (use float instead of int) and observe the outcome. What do you notice?     Summary of division behavior in C:  Following are the results of various examples of division in C. Notice the effect that the types of numbers being divided have on the quotient. Are there patterns? Why is this happening?   5\/2 = 2  5.0\/2 = 2.5  5\/2.0 = 2.5  5.0\/2.0 = 2.5     "
},
{
  "id": "activity-variables-division",
  "level": "2",
  "url": "variables-division.html#activity-variables-division",
  "type": "Activity",
  "number": "4.11",
  "title": "",
  "body": "  Try to predict what the output of the following program will be:   Which of the following do you think will be printed to the screen?      5 \/ 3 = 1    Correct! Do you have any idea why this might be happening?      5 \/ 3 = 1.666667    Unfortunately, this is not what happens...      5 \/ 3 = 1.67    Unfortunately, this is not what happens...      5 \/ 3 = 2    Not quite - try again!      5 \/ 3 = 1.7    Not quite - try again!     "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "variables-division.html#activity-17",
  "type": "Activity",
  "number": "4.12",
  "title": "",
  "body": " Click on the Run button in the window below to reveal the integer division behavior that C exhibits. Next, change the data types of some of the variables (use float instead of int) and observe the outcome. What do you notice?   "
},
{
  "id": "variables-summary",
  "level": "1",
  "url": "variables-summary.html",
  "type": "Section",
  "number": "4.12",
  "title": "Summary",
  "body": " Summary  Here is what we have learned in this chapter:   Integer numbers can be stored efficiently in the int datatype, characters in the char datatype and floating point numbers in the float datatype.  The format specifiers for these datatypes are %d , %c and %f .  To read user input into these datatypes, use: scanf(\"%d\", &age); scanf(\"%c\", &letter); scanf(\"%f\", &height);   "
},
{
  "id": "integers-intro",
  "level": "1",
  "url": "integers-intro.html",
  "type": "Section",
  "number": "5.1",
  "title": "Digital Representation of Integers",
  "body": " Digital Representation of Integers  division Previously, we learned that in C, the computer thinks that 5\/2=2 . But why is this the case?  More specifically, we noticed the following division behaviors in C:   5\/2 = 2  5.0\/2 = 2.5  5\/2.0 = 2.5  5.0\/2.0 = 2.5     Why is this behavior with division happening?  Please enter your answer into the box below.      Why is this behavior with division happening?  Please enter your answer into the box below.     This will make much more sense to you once you understand how numbers are actually stored inside the computer.  "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "integers-intro.html#activity-18",
  "type": "Activity",
  "number": "5.1",
  "title": "",
  "body": "  Why is this behavior with division happening?  Please enter your answer into the box below.   "
},
{
  "id": "activity-5-1-1-DivisionBehavior",
  "level": "2",
  "url": "integers-intro.html#activity-5-1-1-DivisionBehavior",
  "type": "Activity",
  "number": "5.2",
  "title": "",
  "body": "  Why is this behavior with division happening?  Please enter your answer into the box below.    "
},
{
  "id": "integers-positive",
  "level": "1",
  "url": "integers-positive.html",
  "type": "Section",
  "number": "5.2",
  "title": "Storing Positive Integers",
  "body": " Storing Positive Integers  digital representation integers Computers speak in binary, which is how integers are stored in memory.  Let's start by reviewing binary numbers:   Video Description    Computers only speak in binary  Binary can only include 0s and 1s  8 bits = 1 byte  Binary is a base-2 system      binary      What is the decimal value of 01000001 ?    65    Remember from the video above that binary is base-2, with the least significant bit as the right-most digit, which has a place value of . Moving left, the the place values are , , , etc. Only those digits that are 1 contribute their place value to the number, so for this binary number, we interpret it as    Computers \"speak\" in binary (base-2) only, which includes only 1s and 0s.   Bit : one b inary dig it (0 or 1)  Byte : number of bits used to represent a character, almost always 8 bits  Word : natural unit of memory for a given computer design; unit of data that can pass across the bus to or from main memory at one time   For example, in the 8-digit binary number 01100110 , the left-most bit is the M ost S ignificant B it, and the right-most bit is the L east S ignificant B it.  In decimal (base-10), the number 135 can be represented as:   where is the \"hundreds\" place, is the \"tens\" place, and is the \"ones\" place.  Instead of base-10, what if we have base- b ?    : base (binary: 2, decimal: 10, ...)  : digits (binary: 0-1, decimal: 0-9, in general 0-(b-1))  : position of \"most significant digit\" (MSD)   Special case: base (binary) -- note: in binary there are only two different digits: 0 and 1   Note: Digits have different weights (place values)     Find the decimal value of each of the following binary numbers:   00110001    11111110    10011001         Correct!      Incorrect. Be sure to review the video before you try again!        Correct!      Incorrect. Be sure to review the video before you try again!        Correct!      Incorrect. Be sure to review the video before you try again!       How many bits are there in one byte?      Correct! There are 8 bits in one byte.      Incorrect. Be sure to review the video before you try again!       Next, we'll learn how to convert between different binary and decimal representations:   Video Description    How to convert from decimal to binary  By repeatedly dividing by 2, the remainder (0 or 1) represents digits of the binary number  The remainders are written from right-to-left  The same method works for any other base as well        What is the remainder when dividing 50 by 3?    2    3x16 = 48, meaning that 3 can go into 50 sixteen times. The remainder, or leftover amount, is then 50-48=2.    How do we convert from one base to another?  In particular, how do we find the binary representation (base-2) of a decimal number (base-10)?  Example: What is 135 decimal in binary or base-2 ?  Hint: The easiest way to do this is to divide the number by 2 repeatedly and keep track of the remainder.  135 \/2 = 67 R1 * 2^0 67 \/2 = 33 R1 * 2^1 33 \/2 = 16 R1 * 2^2 16 \/2 = 8 R0 * 2^3 8 \/2 = 4 R0 * 2^4 4 \/2 = 2 R0 * 2^5 2 \/2 = 1 R0 * 2^6 1 \/2 = 0 R1 * 2^7 135 -> 1000 0111  Does it work? 128 + 4 + 2 + 1 = 135  and... does this work for any base?  Example: what does the algorithm say 135 is in... base-10?  135 \/10 = 13 R5 * 10^0 LSD 13 \/10 = 1 R3 * 10^1 1 \/10 = 0 R1 * 10^2 MSD 135 -> 135  Not very surprising...  There are other ways to find the binary representation of a number.  Recall the binary place values:   So...  135 = 1 * 128 + 7 7 = 0 * 64 + 0 * 32 + 0 * 16 + 0 * 8 + 1 * 4 + 3 3 = 1 * 2 + 1 1 = 1 * 1 135 = 1 * 128 + 0 * 64 + 0 * 32 + 0 * 16 + 0 * 8 + 1 * 4 + 1 * 2 + 1 * 1  Thus 135 is 10000111 in binary.    What is the remainder when dividing 36 by 15?      Correct!      Incorrect. Be sure to review the video before you try again!       Find the 8-bit binary representation of the decimal number 222:      Correct!      Incorrect. Be sure to review the video before you try again!       "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "integers-positive.html#figure-3",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": " binary   "
},
{
  "id": "investigation-5",
  "level": "2",
  "url": "integers-positive.html#investigation-5",
  "type": "Investigate",
  "number": "5.3",
  "title": "",
  "body": "  What is the decimal value of 01000001 ?    65    Remember from the video above that binary is base-2, with the least significant bit as the right-most digit, which has a place value of . Moving left, the the place values are , , , etc. Only those digits that are 1 contribute their place value to the number, so for this binary number, we interpret it as   "
},
{
  "id": "quiz-integers-1",
  "level": "2",
  "url": "integers-positive.html#quiz-integers-1",
  "type": "Reading Question",
  "number": "5.2.1",
  "title": "",
  "body": " Find the decimal value of each of the following binary numbers:   00110001    11111110    10011001         Correct!      Incorrect. Be sure to review the video before you try again!        Correct!      Incorrect. Be sure to review the video before you try again!        Correct!      Incorrect. Be sure to review the video before you try again!     "
},
{
  "id": "quiz-integers-2",
  "level": "2",
  "url": "integers-positive.html#quiz-integers-2",
  "type": "Reading Question",
  "number": "5.2.2",
  "title": "",
  "body": " How many bits are there in one byte?      Correct! There are 8 bits in one byte.      Incorrect. Be sure to review the video before you try again!     "
},
{
  "id": "investigation-6",
  "level": "2",
  "url": "integers-positive.html#investigation-6",
  "type": "Investigate",
  "number": "5.4",
  "title": "",
  "body": "  What is the remainder when dividing 50 by 3?    2    3x16 = 48, meaning that 3 can go into 50 sixteen times. The remainder, or leftover amount, is then 50-48=2.   "
},
{
  "id": "quiz-integers-3",
  "level": "2",
  "url": "integers-positive.html#quiz-integers-3",
  "type": "Reading Question",
  "number": "5.2.1",
  "title": "",
  "body": " What is the remainder when dividing 36 by 15?      Correct!      Incorrect. Be sure to review the video before you try again!     "
},
{
  "id": "quiz-integers-4",
  "level": "2",
  "url": "integers-positive.html#quiz-integers-4",
  "type": "Reading Question",
  "number": "5.2.2",
  "title": "",
  "body": " Find the 8-bit binary representation of the decimal number 222:      Correct!      Incorrect. Be sure to review the video before you try again!     "
},
{
  "id": "integers-negative",
  "level": "1",
  "url": "integers-negative.html",
  "type": "Section",
  "number": "5.3",
  "title": "Storing Negative Integers",
  "body": " Storing Negative Integers  Now we know how positive integers can be stored in the computer. How about negative integers? There actually are several different options. The following video describes the signed magnitude representation of negative numbers:   Video Description    binary signed magnitude In signed magnitude representation the most significant bit is interpreted as a sign (negative or positive)  0 is negative, 1 is positive  In an 8-bit number, only 7 bits remain for the magnitude of the number  Binary adding does not work in a straight-forward manner in this representation        Does the binary number 10000001 represent the same decimal number in both unsigned binary and signed magnitude binary?    Try converting the binary number to decimal, following the rules of each binary representation method.    No, they are different decimal numbers!    In unsigned binary, 10000001 represents  In signed magnitude binary, 10000001 represents since the most significant bit (the left-most bit) is \"1\", which denotes a negative number in this binary representation. Thus, that one binary number represents 129 in binary and -1 in signed magnitude, which are definitely different!    We have been representing positive integers as binary numbers, what about negative integers?  Several strategies are possible:  The most obvious is known as signed magnitude , which uses the most significant bit (MSB) for the sign: 0 for + and 1 for - .  For an 8-bit binary number:   This allows for a range from -127 to 127 to be represented.  For an n-bit binary number: to   Adding in Binary  How do you add binary numbers?  Recall addition in the decimal system :  1 79 79 + 106 + 106 ______ --> ______ 185 185  Notice how we \"carry\" the one from the ones digits (shown on the right above)? We add similarly in binary, following these rules:  1 + 0 = 01 1 + 1 = 10  Here's an example of adding in binary (with \"carrying\" the ones shown on the right again):  1 111 01001111 01001111 + 01101010 + 01101010 ___________ --> ___________ 10111001 10111001  We can check that this binary addition aligns with decimal addition, as 79 + 106 = 185 (as shown above).    Adding in Signed Magnitude  How about adding numbers in binary when using the signed magnitude representation of integers?  Adding two positive numbers:  00001101 (13 decimal) + 01100100 (100 decimal) ___________ 01110001 (113 decimal)  Adding a positive and a negative number:  00001101 (13 decimal) + 11100100 (-100 decimal) ___________ 11110001 (-113 decimal)  Addition does not work with signed magnitude numbers!     What is the 8-bit representation of the decimal number -63, if the signed magnitude representation is used?     Binary Two's Complement  We noticed in the last video that arithmetic is not straight forward in the signed magnitude representation of negative numbers. We therefore introduce a different way to store negative integers, namely the binary two's complement representation. While this representation may seem cumbersome at first, the point is really to fix the problems we observed with binary addition when negative numbers are involved. The binary two's complement representation allows for the same process to be used in adding integers internally inside the computer, regardless of whether the numbers are positive or negative. This process is typically hard-wired in the computer's processor which makes for super fast execution time.   Video Description    Addition works in binary 2's compliment  binary two's complement To represent negative integers, find the binary of the magnitude first, then swap all 0s and 1s and finally add 1  Calculating the range of numbers that can be represented      Addition does not work with signed magnitude numbers.  Solution: use an alternative for representing signed integers known as binary 2's complement .  Idea: Store negative integers in such a way that when summed with its complement (positive number) the result is zero.  Rules for writing the 2's complement of a number:   Write down the binary representation of the magnitude  Positive integers stay the same   Negative integers:   Change all 0s to 1s and all 1s to 0s  Add 1        2's Complement Example  Decimal:  13 + -100 ________ -87  Step 1: magnitude  13 --> 00001101 -100 --> 01100100  Steps 2 and 3a: binary complement  00001101 --> stays the same 01100100 --> 10011011  Steps 2 and 3b: add 1  00001101 --> stays the same 10011011 --> 10011100  Add!  00001101 + 10011011 ___________ 10101001  Did it work? Is this the 2's complement of -87?  We need a way to decode a 2's complement number...    Decoding 2's Complement Numbers    All 2's complement numbers that are negative have MSB 'set' (negative) -- shown in blue  Add values of the places which are zero: (64 + 16 + 4 + 2) -- shown in pink  Add one to the result   So the binary 2's complement number 10101001 is:  -(64 + 16 + 4 + 2 + 1) = -87  So, addition with 2's complement integers works!  Whats the range of numbers you can represent when using the binary 2's complement?  8-bit 2's complement numbers range: -128 to 127  n-bit 2's complement numbers: to  Food for thought: why is not represented in 2's complement?     What is the 8-bit binary 2's complement representation of the number 63 (careful: this is a positive number... what do positive numbers look like in 2's complement?)    What is the 8-bit binary 2's complement representation of the number -63     Counting in Binary Two's Complement  Finally, let's take a look at what happens when counting beyond the largest possible number in binary 2's complement.   Video Description    What happens when you exceed the binary range?  The decimal representation becomes negative!      More food for thought: start at 0, keep adding 1. What happens?  Decimal Binary Two's Complement 0 00000000 1 00000001 2 00000010 3 00000011 . . . . . . 126 01111110 127 01111111 +1 ?????  What is the decimal value of this 2's complement number?  1111111 <-- carrying the ones 127 01111111 + 1 + 00000001 ______ ___________ ??? 10000000   MSB is 'set', so the number is negative  Add values of the places which are zero: 64 + 32 + 16 + 8 + 4 + 2 + 1 = 127  Add 1 to the result   Thus, the result is -128.     What is the decimal value of the 8-bit binary 2's complement number 10101010 ?    "
},
{
  "id": "p-465",
  "level": "2",
  "url": "integers-negative.html#p-465",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "signed magnitude "
},
{
  "id": "investigation-7",
  "level": "2",
  "url": "integers-negative.html#investigation-7",
  "type": "Investigate",
  "number": "5.5",
  "title": "",
  "body": "  Does the binary number 10000001 represent the same decimal number in both unsigned binary and signed magnitude binary?    Try converting the binary number to decimal, following the rules of each binary representation method.    No, they are different decimal numbers!    In unsigned binary, 10000001 represents  In signed magnitude binary, 10000001 represents since the most significant bit (the left-most bit) is \"1\", which denotes a negative number in this binary representation. Thus, that one binary number represents 129 in binary and -1 in signed magnitude, which are definitely different!   "
},
{
  "id": "p-474",
  "level": "2",
  "url": "integers-negative.html#p-474",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "signed magnitude "
},
{
  "id": "p-479",
  "level": "2",
  "url": "integers-negative.html#p-479",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decimal system "
},
{
  "id": "quiz-integers-5",
  "level": "2",
  "url": "integers-negative.html#quiz-integers-5",
  "type": "Reading Question",
  "number": "5.3.3.1",
  "title": "",
  "body": " What is the 8-bit representation of the decimal number -63, if the signed magnitude representation is used?  "
},
{
  "id": "p-488",
  "level": "2",
  "url": "integers-negative.html#p-488",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary two's complement "
},
{
  "id": "p-491",
  "level": "2",
  "url": "integers-negative.html#p-491",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary 2's complement "
},
{
  "id": "quiz-integers-6",
  "level": "2",
  "url": "integers-negative.html#quiz-integers-6",
  "type": "Reading Question",
  "number": "5.3.7.1",
  "title": "",
  "body": " What is the 8-bit binary 2's complement representation of the number 63 (careful: this is a positive number... what do positive numbers look like in 2's complement?)  "
},
{
  "id": "quiz-integers-7",
  "level": "2",
  "url": "integers-negative.html#quiz-integers-7",
  "type": "Reading Question",
  "number": "5.3.7.2",
  "title": "",
  "body": " What is the 8-bit binary 2's complement representation of the number -63  "
},
{
  "id": "quiz-integers-8",
  "level": "2",
  "url": "integers-negative.html#quiz-integers-8",
  "type": "Reading Question",
  "number": "5.3.9.1",
  "title": "",
  "body": " What is the decimal value of the 8-bit binary 2's complement number 10101010 ?  "
},
{
  "id": "integers-hex",
  "level": "1",
  "url": "integers-hex.html",
  "type": "Section",
  "number": "5.4",
  "title": "Hexadecimal Numbers",
  "body": " Hexadecimal Numbers  And finally, a brief excursion into hexadecimal numbers:   Video Description    hexadecimal Hexadecimal is base-16 and it is shorter to write in hexadecimal than binary  It is very easy to convert between hexadecimal and binary  Hexadecimal digits are 0-9, A-F (10-15)  Hexadecimal numbers are preceded by 0x  Converting between base-2, -10, and -16       Please convert the decimal number 20,000 into hexadecimal.  0x4E20   Binary is the native number system of the computer, but it is often convenient for us to talk in the hexadecimal number system (HEX), that is, in base-16 .  HEX digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F (0-15)  Example: 0xAC means \"A\" * + \"C\" * = 10 * 16 + 12 * 1 = 172 in decimal  The \"0x\" indicates that what follows is in hex  Another example: 0x57 means 5 * + 7 * = 87 in decimal   Why Use Hexadecimal?  Binary numbers can be REALLY long (used in memory location addressing for example.)   Need: easy shorthand for binary   Solution: HEX  Condense 4 bits (binary digits) into 1 hexadecimal digit  Example: 1011 binary = 11 decimal = B hexadecimal     2-byte words (16 bits) can then be written as four HEX digits   We want powers of 2 (binary) for easy conversion.  Alternative?   Octal (digits 0-7)  Condenses 3 bits into one     Decimal to Hexadecimal  We already know how this works: keep dividing by 16, record the remainders in reverse order!  23,597 \/16 = 1,474 R13 (D) * 16^0 LSD 1,474 \/16 = 92 R2 * 16^1 | 92 \/16 = 5 R12 (C) * 16^2 V 5 \/16 = 0 R5 * 16^3 MSD 23,597 -> 0x5C2D    Binary to Hexadecimal and Decimal  We can go directly from binary to decimal, or via hex.  Example: 16-bit binary integer  0101 1100 0010 1101 = 23,597 Decimal 5 C (12) 2 D (13) = 0x5C2D HEX 16^3 16^2 16^1 16^0 (HEX place values)     Decimal  Remember: precede hexadecimal number with 0x in order to avoid confusion with decimal number 0x5C2D   Hexadecimal to decimal: best done via binary!  0x15A9 2-byte hexadecimal (base-16) number  Hex-to-binary: each hex digit is 4 binary digits  1 5 10 9 0x15A9 0001 0101 1010 1001  MSB is 0, so decimal value is the same for unsigned, signed-magnitude, and 2's complement representations  Binary-to-decimal:  =5545    Another Example  0xB5A9 2-byte hexadecimal (base-16) number  Hex-to-binary:  11 5 10 9 0xB5A9 1011 0101 1010 1001  Now MSB is 1, so decimal value depends on which representation we use...  Binary-to-decimal:  Unsigned:  Signed magnitude:  2's complement:   "
},
{
  "id": "activity-20",
  "level": "2",
  "url": "integers-hex.html#activity-20",
  "type": "Activity",
  "number": "5.6",
  "title": "",
  "body": " Please convert the decimal number 20,000 into hexadecimal.  0x4E20  "
},
{
  "id": "p-520",
  "level": "2",
  "url": "integers-hex.html#p-520",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Binary hexadecimal base-16 "
},
{
  "id": "p-538",
  "level": "2",
  "url": "integers-hex.html#p-538",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hexadecimal to decimal: best done via binary! "
},
{
  "id": "integers-summary",
  "level": "1",
  "url": "integers-summary.html",
  "type": "Section",
  "number": "5.5",
  "title": "Summary",
  "body": " Summary  In this chapter we covered the following topics:   Binary numbers  Converting between base-10 and base-2  Digital representation of negative numbers   Three ways a binary number can be interpreted:  Unsigned integer  Signed magnitude representation  Binary 2's complement representation     Hexadecimal as short-hand for binary   "
},
{
  "id": "floats-intro",
  "level": "1",
  "url": "floats-intro.html",
  "type": "Section",
  "number": "6.1",
  "title": "Digital Representation of Floats",
  "body": " Digital Representation of Floats  Recall the funny division behavior we notice in the C programming language when using integers. Feel free to play around in this code window to refresh your memory and experiment in order to analyze this behavior.     Here is a quick review question: Using integer arithmetic, what is the result of 15\/4?     3    Correct!      4    Not quite - try again!      3.75    Not quite - try again!      0.75    Not quite - try again!     In an integer division only the integer part of the result is accounted for.    Another quick review question: In the C programming language, what is the result of 19\/2.0?     9.5    Correct!      9    Not quite - try again!      10    Not quite - try again!      9R1    Not quite - try again!     By writing 2.0 instead of 2 in the computation, the data type in which the operation is performed is automatically cast to a floating point which means that the result can also be a floating point number.    And another review question: Suppose that a and b are variables of type int , a has the value 8, b has the value 6. In the C programming language, what is the value of (a+b)\/3 ?     4    Correct!      5    Not quite - try again!      4.6    Not quite - try again!      4.67    Not quite - try again!     Because of the data types of a and b, an integer division is performed here.    So far we have learned how integers (positive and negative) are stored in the computer's memory. How about decimal numbers, also known as floats?  In this next video you'll find out how floats are stored in memory!   Video Description    Storing floats in memory  digital representation floats Floats take up 4 bytes of memory  Double (more precise) take up 8 bytes      How are real numbers (floats) represented\/stored in the computer?  Example: -5,032.4235  Write in scientific notation (decimal):   where - is the sign, 5.0324235 is the \"mantissa\", and 3 is the exponent.  In binary, this representation takes on the following form:   where number = sign * 1.mantissa * 2^exponent   Special cases:   Smallest possible exponent --> number = 0  Largest possible exponent --> number = NaN (infinity)   Float : range of numbers varies, but ANSI minimum is to  Double : often 8 bytes  Note: can declare  long double --- not necessarily different from  double    The binary representation of the decimal number 0.75 is 0.11 (which basically stands for ). In scientific notation, this binary number would be written as: Suppose now that 0.75 is stored (in the binary representation) as a float. In this representation, choose the correct option for the following components of the float:    sign: (choose from positive \/ negative \/ zero)  mantissa: (choose from 11 \/ 1 \/ -1 \/ -11)  exponent: (choose from 11 \/ 1 \/ -1 \/ -11)        Indeed, 0.75 is a positive number.      The sign refers to the entire number (not just the mantissa).        Indeed, the mantissa here is just 1 (the 1. part of 1.1 is assumed).      The mantissa is the number after the 1., in front of the exponential.        Indeed, the exponent here is -1.      The exponent is the power to which 2 is raised here.       "
},
{
  "id": "quiz-floatchar-1",
  "level": "2",
  "url": "floats-intro.html#quiz-floatchar-1",
  "type": "Reading Question",
  "number": "6.1.1",
  "title": "",
  "body": " Here is a quick review question: Using integer arithmetic, what is the result of 15\/4?     3    Correct!      4    Not quite - try again!      3.75    Not quite - try again!      0.75    Not quite - try again!     In an integer division only the integer part of the result is accounted for.  "
},
{
  "id": "quiz-floatchar-2",
  "level": "2",
  "url": "floats-intro.html#quiz-floatchar-2",
  "type": "Reading Question",
  "number": "6.1.2",
  "title": "",
  "body": " Another quick review question: In the C programming language, what is the result of 19\/2.0?     9.5    Correct!      9    Not quite - try again!      10    Not quite - try again!      9R1    Not quite - try again!     By writing 2.0 instead of 2 in the computation, the data type in which the operation is performed is automatically cast to a floating point which means that the result can also be a floating point number.  "
},
{
  "id": "quiz-floatchar-3",
  "level": "2",
  "url": "floats-intro.html#quiz-floatchar-3",
  "type": "Reading Question",
  "number": "6.1.3",
  "title": "",
  "body": " And another review question: Suppose that a and b are variables of type int , a has the value 8, b has the value 6. In the C programming language, what is the value of (a+b)\/3 ?     4    Correct!      5    Not quite - try again!      4.6    Not quite - try again!      4.67    Not quite - try again!     Because of the data types of a and b, an integer division is performed here.  "
},
{
  "id": "quiz-floatchar-5",
  "level": "2",
  "url": "floats-intro.html#quiz-floatchar-5",
  "type": "Reading Question",
  "number": "6.1.1",
  "title": "",
  "body": " The binary representation of the decimal number 0.75 is 0.11 (which basically stands for ). In scientific notation, this binary number would be written as: Suppose now that 0.75 is stored (in the binary representation) as a float. In this representation, choose the correct option for the following components of the float:    sign: (choose from positive \/ negative \/ zero)  mantissa: (choose from 11 \/ 1 \/ -1 \/ -11)  exponent: (choose from 11 \/ 1 \/ -1 \/ -11)        Indeed, 0.75 is a positive number.      The sign refers to the entire number (not just the mantissa).        Indeed, the mantissa here is just 1 (the 1. part of 1.1 is assumed).      The mantissa is the number after the 1., in front of the exponential.        Indeed, the exponent here is -1.      The exponent is the power to which 2 is raised here.     "
},
{
  "id": "floats-int-to-float",
  "level": "1",
  "url": "floats-int-to-float.html",
  "type": "Section",
  "number": "6.2",
  "title": "Converting Integers to Floats",
  "body": " Converting Integers to Floats  casting int-to-float Casting an integer to a float effectively changes the data type of the stored value from an int to a foat . Whereas the integer 5 is represented in the computer's memory using binary 2's complement for example, when you write (float)5 this resulting number is stored as mantissa and exponent in the way we just learned.   What do you think happens the the value of the number when you cast an int to a float ? Are digits beyond the decimal point added on?   Please paste your text submission into the box below, then select Run to submit it:      Does the datatype of a variable change when you cast or is it just the number itself that is stored differently inside the computer? For example, if and are variables of type int , where a has the value 12, b has the value 4, what is the data type of the variable a after the operation ((float)a+b)\/3 is performed?     int    Correct!      float    Not quite - try again!      long    Not quite - try again!      floating int    Not quite - try again!     Does the data type of a change in this process?    "
},
{
  "id": "p-608",
  "level": "2",
  "url": "floats-int-to-float.html#p-608",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Casting "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "floats-int-to-float.html#activity-21",
  "type": "Activity",
  "number": "6.1",
  "title": "",
  "body": " What do you think happens the the value of the number when you cast an int to a float ? Are digits beyond the decimal point added on?   Please paste your text submission into the box below, then select Run to submit it:   "
},
{
  "id": "quiz-floatchar-4",
  "level": "2",
  "url": "floats-int-to-float.html#quiz-floatchar-4",
  "type": "Reading Question",
  "number": "6.2.1",
  "title": "",
  "body": " Does the datatype of a variable change when you cast or is it just the number itself that is stored differently inside the computer? For example, if and are variables of type int , where a has the value 12, b has the value 4, what is the data type of the variable a after the operation ((float)a+b)\/3 is performed?     int    Correct!      float    Not quite - try again!      long    Not quite - try again!      floating int    Not quite - try again!     Does the data type of a change in this process?  "
},
{
  "id": "floats-float-to-int",
  "level": "1",
  "url": "floats-float-to-int.html",
  "type": "Section",
  "number": "6.3",
  "title": "Converting Floats to Integers",
  "body": " Converting Floats to Integers  casting float-to-int Casting a float to an integer sets the data type for that stored float as an int now, which means that instead of using mantissa and exponent to store the number, the binary 2's complement is used. What happens if the original float had decimal places after the decimal point? Will they get lost? Will rounding occur? Try it out:     When you cast a float to an int , which of the following happens?      Decimals are simply cut off.    Correct!      The float is rounded down.    Not quite - try again!      The float is rounded up.    Not quite - try again!      I can't tell.    Not quite - try again!      Just use the code window above to play around. Don't be afraid! You can't break anything!    "
},
{
  "id": "p-621",
  "level": "2",
  "url": "floats-float-to-int.html#p-621",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Casting "
},
{
  "id": "activity-6-3-1-Float-to-Int",
  "level": "2",
  "url": "floats-float-to-int.html#activity-6-3-1-Float-to-Int",
  "type": "Activity",
  "number": "6.2",
  "title": "",
  "body": "  When you cast a float to an int , which of the following happens?      Decimals are simply cut off.    Correct!      The float is rounded down.    Not quite - try again!      The float is rounded up.    Not quite - try again!      I can't tell.    Not quite - try again!      Just use the code window above to play around. Don't be afraid! You can't break anything!   "
},
{
  "id": "floats-average",
  "level": "1",
  "url": "floats-average.html",
  "type": "Section",
  "number": "6.4",
  "title": "Averages",
  "body": " Averages  average At this point, we have already learned all the tools needed to calculate the average of a set of numbers!    Write a C program that finds the average of integers, entered by the user. First, the user should be asked to enter the number of integers they wish to average, then they should be asked to enter those integers and their average should be calculated.  Here is a sample run of your program (with simulated user input ):   How many integers do you wish to average?  3  Please enter an integer:  8  Please enter an integer:  12  Please enter an integer:  101  The average is 40.333333.   Recall that the average needs to be of type float, please store it in the variable ave which has already been declared for your convenience.   When you are done, please paste your code into the box below:     "
},
{
  "id": "activity-6-4-1-Averages",
  "level": "2",
  "url": "floats-average.html#activity-6-4-1-Averages",
  "type": "Activity",
  "number": "6.3",
  "title": "",
  "body": "  Write a C program that finds the average of integers, entered by the user. First, the user should be asked to enter the number of integers they wish to average, then they should be asked to enter those integers and their average should be calculated.  Here is a sample run of your program (with simulated user input ):   How many integers do you wish to average?  3  Please enter an integer:  8  Please enter an integer:  12  Please enter an integer:  101  The average is 40.333333.   Recall that the average needs to be of type float, please store it in the variable ave which has already been declared for your convenience.   When you are done, please paste your code into the box below:    "
},
{
  "id": "floats-remainder",
  "level": "1",
  "url": "floats-remainder.html",
  "type": "Section",
  "number": "6.5",
  "title": "Remainders",
  "body": " Remainders  remainder A remainder is the amount that remains after division takes place. The mathematical operation that produces this remainder is called the modulo operation . Note that this is the fractional remainder, not a decimal value, so the result of the modulo operation should always be an integer. For example, the remainder when dividing 29 by 3 is 2 since 3 goes into 29 just 9 times and 29 - 9*3 = 2.  Suppose we want to know the remainder of the division of one integer by another. Can we do this with our current programming knowledge?     What is the remainder of 15\/6?    3    Try it out in the code window above! We can check that the answer is 3, since we can see how many times 6 goes into 15.  15-6=9 9-6=3 6 doesn't go into 3, so 3 is the remainder.    "
},
{
  "id": "p-637",
  "level": "2",
  "url": "floats-remainder.html#p-637",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "modulo operation "
},
{
  "id": "investigation-8",
  "level": "2",
  "url": "floats-remainder.html#investigation-8",
  "type": "Investigate",
  "number": "6.4",
  "title": "",
  "body": "  What is the remainder of 15\/6?    3    Try it out in the code window above! We can check that the answer is 3, since we can see how many times 6 goes into 15.  15-6=9 9-6=3 6 doesn't go into 3, so 3 is the remainder.   "
},
{
  "id": "floats-summary",
  "level": "1",
  "url": "floats-summary.html",
  "type": "Section",
  "number": "6.6",
  "title": "Summary",
  "body": " Summary  Here is what we covered in this chapter:  Digital representation of floats using mantissa and exponent   Converting (casting) between data types   Example:  int a = 3; int b = 4; float ave; ave = ((float) a)\/((float) b);         Modulo operation to find the remainder in integer division   Example:  8%5 = 3          "
},
{
  "id": "chars-intro",
  "level": "1",
  "url": "chars-intro.html",
  "type": "Section",
  "number": "7.1",
  "title": "Digital Representation of Characters",
  "body": " Digital Representation of Characters  How are characters (letters and symbols) stored in the computer's memory?  In this next video you'll find out.   Video Description    digital representation characters Each character is assigned in a unique number (its ASCII code)  Instead of storing the character directly in memory, its ASCII code (an integer) is stored. We already know how integers are stored!  The %c format specifier interprets the ASCII code and displays the corresponding character when used in a printf() statement  For example, the ASCII code of \"X\" is the number \"88\", which is \"01011000\" in binary. So \"X\" is stored as 01011000 in the computer's memory      Each character (a, b, ..., A, B, ...), number (0-9), and symbol (*,&!%@) is represented by a 1-byte code:    ASCII Table (Bronson, Appendix B)   Example:  ASCII code for X is 88. In HEX: 0x58  In binary, the character X is represented in memory by 1 byte (8 bits): 01011000    Find the 8-bit binary representation of the letter a (lower case), if the ASCII code is used, as described in the video.     01100001    Correct!      10010111    Not quite - try again!      01100101    Not quite - try again!      00100000    Not quite - try again!     Look at the above table and convert the hexadecimal code into binary.    "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "chars-intro.html#figure-4",
  "type": "Figure",
  "number": "7.1",
  "title": "",
  "body": "  ASCII Table (Bronson, Appendix B)  "
},
{
  "id": "quiz-floatchar-6",
  "level": "2",
  "url": "chars-intro.html#quiz-floatchar-6",
  "type": "Reading Question",
  "number": "7.1.1",
  "title": "",
  "body": " Find the 8-bit binary representation of the letter a (lower case), if the ASCII code is used, as described in the video.     01100001    Correct!      10010111    Not quite - try again!      01100101    Not quite - try again!      00100000    Not quite - try again!     Look at the above table and convert the hexadecimal code into binary.  "
},
{
  "id": "chars-ascii",
  "level": "1",
  "url": "chars-ascii.html",
  "type": "Section",
  "number": "7.2",
  "title": "Characters and the ASCII code",
  "body": " Characters and the ASCII code  ASCII code Recall that characters are stored in the computer's memory as numbers, namely the ASCII codes corresponding to the characters. Check this out:     Please find the ASCII codes for 'a', 'A', 'd', 'D', 's', 'S', 'u', 'U'.  Do you notice any patterns with their ASCII codes?  Please type your answer below.     "
},
{
  "id": "activity-7-2-1-ASCII-pattern",
  "level": "2",
  "url": "chars-ascii.html#activity-7-2-1-ASCII-pattern",
  "type": "Activity",
  "number": "7.1",
  "title": "",
  "body": "  Please find the ASCII codes for 'a', 'A', 'd', 'D', 's', 'S', 'u', 'U'.  Do you notice any patterns with their ASCII codes?  Please type your answer below.    "
},
{
  "id": "chars-cases",
  "level": "1",
  "url": "chars-cases.html",
  "type": "Section",
  "number": "7.3",
  "title": "Upper- and Lower-Case Chars",
  "body": " Upper- and Lower-Case Chars  uppercase lowercase Each letter in our alphabet has a lower-case and an upper-case version. Since we may be interested in converting from upper- to lower-case or from lower- to upper-case it is beneficial for us to examine whether there might be a pattern between the two ASCII codes that correspond to the lower- and upper-case versions of a given letter.  Have you found the pattern? If not, go back to the previous code window and keep experimenting until you do. Or take a close look at the ASCII table.    Using the pattern you found, write a C program that first asks the user to enter a lowercase letter and then converts that letter to the corresponding uppercase letter and prints the letter (with no other text) out to the screen.   What line of code did you add?     "
},
{
  "id": "activity-7-3-1-UpperLowerCaseChars",
  "level": "2",
  "url": "chars-cases.html#activity-7-3-1-UpperLowerCaseChars",
  "type": "Activity",
  "number": "7.2",
  "title": "",
  "body": "  Using the pattern you found, write a C program that first asks the user to enter a lowercase letter and then converts that letter to the corresponding uppercase letter and prints the letter (with no other text) out to the screen.   What line of code did you add?    "
},
{
  "id": "chars-summary",
  "level": "1",
  "url": "chars-summary.html",
  "type": "Section",
  "number": "7.4",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Representing characters in memory  The ASCII code  Printing characters and their ASCII codes  Converting between upper- and lower-case characters   "
},
{
  "id": "prefixes-intro",
  "level": "1",
  "url": "prefixes-intro.html",
  "type": "Section",
  "number": "8.1",
  "title": "Prefixes",
  "body": " Prefixes  byte prefixes With different variables using up different amounts of space in memory and with storing (sometimes large amounts of) data comes the need for conventions to talk about the size of different amounts of data.  In this video you'll learn about prefixes such as exa, peta, etc.   Video Description    Different prefix conventions exist for computers, including the following:  Kilo, Mega, Giga, Tera, Peta, Exa, Zetta, Yotta  Kibi, Mebi, Gibi, Tebi, Pebi, Exbi, Zebi, Yobi  the \"Apple Convention\"  For example, a kilobyte (KB) is 1024 ( ) bytes, but in Apple Convention, it is 1000 ( ) bytes       Prefixes     Prefix    Size    Reference     byte  B  8 bits  (1)  1 character (ASCII)    Kilo  KB  1024 bytes     1\/4 page of text    Mega  MB  1,048,576 bytes     1\/4 song MP3    Giga  GB  1,073,741,824 bytes     Old iPod    Tera  TB  1.099 bytes     Affordable storage    Peta  PB  1.125 bytes     SDSC HD    Exa  EB  1.153 bytes         Zetta  ZB  1.181 bytes     0.36 ZB = 1g of DNA    Yotta  YB  1.209 bytes     Avogadro's Number     It was estimated (in 2005) that the total amount of printed material in the world is about 5 EB.  Avogadro's Number: number of carbon-12 atoms in 12 grams of carbon-12 ~ ~  1 YB = 2.01 * Avogadro's Number  Note the difference between   and   1999 International Electrotechnical Commission (IEC) Amendment to include new base-2 prefixes:   Amended Prefixes     Prefix    Size     kibibyte  KiB   = 1,024 bytes    mebibyte  MiB       gibibyte  GiB       tebibyte  TiB       pebibyte  PiB       exibyte  EiB       zebibyte  ZiB       yobibyte  YiB        100 TB ~ 90.9 TiB ~ 10% error  2009: Snow Leopard --- 1kB = 1000 bytes    What are the potential benefits of each of these prefix conventions? Why do you think there is more than one convention?      Find the difference between 3 Mebibyes and 3 Megabytes (in the Apple convention) and express this difference as a percentage of the 3 Megabytes. What is this percent error, rounded to the nearest whole number? Please enter the percentage number only, not the % sign.    "
},
{
  "id": "table-1",
  "level": "2",
  "url": "prefixes-intro.html#table-1",
  "type": "Table",
  "number": "8.1",
  "title": "Prefixes",
  "body": " Prefixes     Prefix    Size    Reference     byte  B  8 bits  (1)  1 character (ASCII)    Kilo  KB  1024 bytes     1\/4 page of text    Mega  MB  1,048,576 bytes     1\/4 song MP3    Giga  GB  1,073,741,824 bytes     Old iPod    Tera  TB  1.099 bytes     Affordable storage    Peta  PB  1.125 bytes     SDSC HD    Exa  EB  1.153 bytes         Zetta  ZB  1.181 bytes     0.36 ZB = 1g of DNA    Yotta  YB  1.209 bytes     Avogadro's Number    "
},
{
  "id": "table-2",
  "level": "2",
  "url": "prefixes-intro.html#table-2",
  "type": "Table",
  "number": "8.2",
  "title": "Amended Prefixes",
  "body": " Amended Prefixes     Prefix    Size     kibibyte  KiB   = 1,024 bytes    mebibyte  MiB       gibibyte  GiB       tebibyte  TiB       pebibyte  PiB       exibyte  EiB       zebibyte  ZiB       yobibyte  YiB       "
},
{
  "id": "investigation-9",
  "level": "2",
  "url": "prefixes-intro.html#investigation-9",
  "type": "Investigate",
  "number": "8.1",
  "title": "",
  "body": "  What are the potential benefits of each of these prefix conventions? Why do you think there is more than one convention?   "
},
{
  "id": "quiz-prefix-1",
  "level": "2",
  "url": "prefixes-intro.html#quiz-prefix-1",
  "type": "Reading Question",
  "number": "8.1.1",
  "title": "",
  "body": " Find the difference between 3 Mebibyes and 3 Megabytes (in the Apple convention) and express this difference as a percentage of the 3 Megabytes. What is this percent error, rounded to the nearest whole number? Please enter the percentage number only, not the % sign.  "
},
{
  "id": "prefixes-summary",
  "level": "1",
  "url": "prefixes-summary.html",
  "type": "Section",
  "number": "8.2",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Memory prefixes and conventions   "
},
{
  "id": "branching-if",
  "level": "1",
  "url": "branching-if.html",
  "type": "Section",
  "number": "9.1",
  "title": "<code class=\"code-inline tex2jax_ignore\">if<\/code> Statements",
  "body": " if Statements   branching if We are ready for a really important and powerful new concept: the ability to create computer instructions that are executed only if certain conditions are met. Let's take a look.    Video Description    Branching using the if statement is introduced  Branching can be used to execute code only in the case that some condition is true (or false)  NEW SYNTAX: if (something is true) { do this }; will check if the statement in parenthesis is true, and if so, will execute the statement(s) within curly brackets       Which of the following shows the correct syntax for an if statement?     if (cloudy) printf(\"It's not sunny :-(\");    Correct      printf(\"It's not sunny :-(\") if (cloudy);    Not quite - try again!      if (cloudy) printf(\"It's not sunny :-(\")    Not quite - try again!      if cloudy printf(\"It's not sunny :-(\");    Not quite - try again!     Review the video if you are stumped.    "
},
{
  "id": "quiz-branching-1",
  "level": "2",
  "url": "branching-if.html#quiz-branching-1",
  "type": "Reading Question",
  "number": "9.1.1",
  "title": "",
  "body": " Which of the following shows the correct syntax for an if statement?     if (cloudy) printf(\"It's not sunny :-(\");    Correct      printf(\"It's not sunny :-(\") if (cloudy);    Not quite - try again!      if (cloudy) printf(\"It's not sunny :-(\")    Not quite - try again!      if cloudy printf(\"It's not sunny :-(\");    Not quite - try again!     Review the video if you are stumped.  "
},
{
  "id": "branching-if-else",
  "level": "1",
  "url": "branching-if-else.html",
  "type": "Section",
  "number": "9.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">if - else<\/code> Statements",
  "body": " if - else Statements   branching if - else Next, we'll see how to perform another action in case the condition is not met.    Video Description    The if-else statement is introduced  If the condition for the if statement is not met, then the code in the else statement will be executed instead  NEW SYNTAX: if (something is true) {do this};  else {do this};       What is the output of the following piece of code, assuming that n is a variable of type int that has the value 1:  if (n) printf(\"You win!\"); else printf(\"Ooops!\");     You win!    Correct      Ooops!    Not quite - try again!      You win! Ooops!    Not quite - try again!      This does not generate any output.    Not quite - try again!     Watch out for little details such as the semicolon at the end of the statement or the parentheses surrounding the condition.    "
},
{
  "id": "quiz-branching-2",
  "level": "2",
  "url": "branching-if-else.html#quiz-branching-2",
  "type": "Reading Question",
  "number": "9.2.1",
  "title": "",
  "body": " What is the output of the following piece of code, assuming that n is a variable of type int that has the value 1:  if (n) printf(\"You win!\"); else printf(\"Ooops!\");     You win!    Correct      Ooops!    Not quite - try again!      You win! Ooops!    Not quite - try again!      This does not generate any output.    Not quite - try again!     Watch out for little details such as the semicolon at the end of the statement or the parentheses surrounding the condition.  "
},
{
  "id": "branching-operators",
  "level": "1",
  "url": "branching-operators.html",
  "type": "Section",
  "number": "9.3",
  "title": "Relational and Equality Operators",
  "body": " Relational and Equality Operators  We have already learned about several operators for numbers:   arithmetic  + , - , * addition, subtraction, and multiplication (integers and floats)  \/ integer division for integers and floating point division for floats  % remainder (modulus) of an integer division   Next, we'll learn about relational and equality operators that serve to compare the values of two quantities:    calculations relational operators  < , > less than and greater than operators  <= , >= less than or equal to, greater than or equal to  != not equal to   calculations equality operators  == equal to (note the double equal sign; the single equal sign = has already been 'used up' for our assignment operator)     Which of the following variables would C interpret as \"true\"? For example, if each variable was placed in the following code's if statement as \"variable\", would the program output \"True\" or \"False\"?   int a = -1  char b = 'b'  float c = 0.0  int d = 4000   if (variable){ printf(\"True\") } else{ printf(\"False\") }    C will interpret the variables a , b , and d as \"True\", and the variable c as \"False\"    In C, any nonzero integer or float is interpreted as true, as well as any character.    A true logical relation evaluates to 1, whereas a false relation evaluates to 0. Examples:   Suppose x has the value 3.5. Then (x <= 5.0) evaluates to 1.  Suppose next that x has the value 7. Then (x <= 5.0) evaluates to 0.  (age == 30) evaluates to 1 if indeed age has the value 30, otherwise it evaluates to 0.   Note: Instead of (x <= 5.0) you could also write (5.0 >= x) , and instead of (age == 30) you could just as well write (30 == age) .    Does the following statement, which is comparing two characters, evaluate to true or false , according to C?  ('A' > 'a')      False    Recall that characters are really stored as their ASCII codes in memory. Therefore, when comparing characters, C really compares their ASCII codes. In this case, we have 'A'=65 and 'a'=97. Sure enough, 65 is not greater than 97, so the above statement evaluates to false .    Let's look at an example.    Video Description    Logic expressions resulting from comparing variable values  Producing true\/false relations  Using if-else based on true\/false values of logic statements  Example: an if statement can include a logic statement such as (x>5) , and it will then execute code if this logic statement evaluates to true       You are writing a C program that calculates the price of a rental car, depending on how many miles the user wants to drive. If the user drives less than 50 miles then the price of the car is a flat fee of $40. If on the other hand the user drives 50 or more miles, then the cost is computed as $0.70 per mile plus a handling fee of $5.  Please complete the following C program: After the user has entered the number of miles they wish to drive, the program should output the price of the rental car in dollars (with two decimal places).   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "investigation-10",
  "level": "2",
  "url": "branching-operators.html#investigation-10",
  "type": "Investigate",
  "number": "9.1",
  "title": "",
  "body": "  Which of the following variables would C interpret as \"true\"? For example, if each variable was placed in the following code's if statement as \"variable\", would the program output \"True\" or \"False\"?   int a = -1  char b = 'b'  float c = 0.0  int d = 4000   if (variable){ printf(\"True\") } else{ printf(\"False\") }    C will interpret the variables a , b , and d as \"True\", and the variable c as \"False\"    In C, any nonzero integer or float is interpreted as true, as well as any character.   "
},
{
  "id": "investigation-11",
  "level": "2",
  "url": "branching-operators.html#investigation-11",
  "type": "Investigate",
  "number": "9.2",
  "title": "",
  "body": "  Does the following statement, which is comparing two characters, evaluate to true or false , according to C?  ('A' > 'a')      False    Recall that characters are really stored as their ASCII codes in memory. Therefore, when comparing characters, C really compares their ASCII codes. In this case, we have 'A'=65 and 'a'=97. Sure enough, 65 is not greater than 97, so the above statement evaluates to false .   "
},
{
  "id": "quiz-branching-3",
  "level": "2",
  "url": "branching-operators.html#quiz-branching-3",
  "type": "Reading Question",
  "number": "9.3.1",
  "title": "",
  "body": " You are writing a C program that calculates the price of a rental car, depending on how many miles the user wants to drive. If the user drives less than 50 miles then the price of the car is a flat fee of $40. If on the other hand the user drives 50 or more miles, then the cost is computed as $0.70 per mile plus a handling fee of $5.  Please complete the following C program: After the user has entered the number of miles they wish to drive, the program should output the price of the rental car in dollars (with two decimal places).   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "branching-if-else-practice",
  "level": "1",
  "url": "branching-if-else-practice.html",
  "type": "Section",
  "number": "9.4",
  "title": "<code class=\"code-inline tex2jax_ignore\">if - else<\/code> Statement Practice",
  "body": " if - else Statement Practice  You are staying at a youth hostel that has the funniest pricing policy:  In order to encourage people to arrive early they charge more, the later you arrive on your day of check-in. You can arrive at any time between noon and midnight on the day of check-in, but the later you arrive, the more expensive the night will be.    Write a C-program that reads from the user the hour of arrival (between 0 - meaning noon - and 12 - meaning midnight) and that then outputs the price to pay for the night.  The cost for the night is a $10 base fee plus $5 for every hour you arrive past noon. So if you arrive at noon, the total cost is only $10, if you arrive at 1pm, the price goes up to $15, etc. Thankfully the total price is capped at $57, so even if you arrive at 11pm, the price will be $57.   When you are done, please paste the lines of code you added to make this program work into the box below:     "
},
{
  "id": "activity-9-4-1-if_else_Statement_Practice",
  "level": "2",
  "url": "branching-if-else-practice.html#activity-9-4-1-if_else_Statement_Practice",
  "type": "Activity",
  "number": "9.3",
  "title": "",
  "body": "  Write a C-program that reads from the user the hour of arrival (between 0 - meaning noon - and 12 - meaning midnight) and that then outputs the price to pay for the night.  The cost for the night is a $10 base fee plus $5 for every hour you arrive past noon. So if you arrive at noon, the total cost is only $10, if you arrive at 1pm, the price goes up to $15, etc. Thankfully the total price is capped at $57, so even if you arrive at 11pm, the price will be $57.   When you are done, please paste the lines of code you added to make this program work into the box below:    "
},
{
  "id": "branching-advanced",
  "level": "1",
  "url": "branching-advanced.html",
  "type": "Section",
  "number": "9.5",
  "title": "<code class=\"code-inline tex2jax_ignore\">if - else-if - else<\/code> Statements",
  "body": " if - else-if - else Statements  What if there are more than two cases, amongst which we'd like to distinguish?  Take a look at the following example:   branching if - else-if - else      Complete the following C program: After the user has entered a number, assign a score (use the variable \"score\" which has already been defined for this purpose) to the user input as follows: If the user enters a number less than 10 the score should be -1, if the user enters a number greater than 20 the score should be 1, and if the user enters a number between 10 and 20 the score should be 0. Then print the user's score to the screen.   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "branching-advanced.html#figure-5",
  "type": "Figure",
  "number": "9.1",
  "title": "",
  "body": " branching if - else-if - else   "
},
{
  "id": "quiz-branching-4",
  "level": "2",
  "url": "branching-advanced.html#quiz-branching-4",
  "type": "Reading Question",
  "number": "9.5.1",
  "title": "",
  "body": " Complete the following C program: After the user has entered a number, assign a score (use the variable \"score\" which has already been defined for this purpose) to the user input as follows: If the user enters a number less than 10 the score should be -1, if the user enters a number greater than 20 the score should be 1, and if the user enters a number between 10 and 20 the score should be 0. Then print the user's score to the screen.   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "branching-multiple",
  "level": "1",
  "url": "branching-multiple.html",
  "type": "Section",
  "number": "9.6",
  "title": "Combining Multiple Logic Statements",
  "body": " Combining Multiple Logic Statements  Sometimes you may want to check whether several statements are true at the same time, or whether at least one of several statements is true, or whether something is not true, etc. We'll take a look at how do do this in C now.  logic AND The way to write the logical AND in C is with two ampersand signs: &&   logic OR The way to write the logical OR in C is with two vertical bars: ||   logic NOT The way to negate a condition in C is to put an exclamation mark in front of it: !(...)     Zero is the value which C interprets as false. How could you use a logical operator so that C would interpret anything except zero as false, such as in an if statement?    Use an exclamation mark to negate a condition.    By using an exclamation mark in front of the condition in our if statement, C will interpret the condition as the opposite of whatever it normally would be. For example, if our simple if statement was as follows:  int var; \/*see below for our example values of var*\/ if (!var){ print(\"True\"); }else{ printf(\"False\"); }  then, if var = 0 which is originally false, !var would be true.  Similarly, if var = 1 which is originally true, !var would thus be false.    "
},
{
  "id": "investigation-12",
  "level": "2",
  "url": "branching-multiple.html#investigation-12",
  "type": "Investigate",
  "number": "9.4",
  "title": "",
  "body": "  Zero is the value which C interprets as false. How could you use a logical operator so that C would interpret anything except zero as false, such as in an if statement?    Use an exclamation mark to negate a condition.    By using an exclamation mark in front of the condition in our if statement, C will interpret the condition as the opposite of whatever it normally would be. For example, if our simple if statement was as follows:  int var; \/*see below for our example values of var*\/ if (!var){ print(\"True\"); }else{ printf(\"False\"); }  then, if var = 0 which is originally false, !var would be true.  Similarly, if var = 1 which is originally true, !var would thus be false.   "
},
{
  "id": "branching-practice",
  "level": "1",
  "url": "branching-practice.html",
  "type": "Section",
  "number": "9.7",
  "title": "Practice Your Logic Statements!",
  "body": " Practice Your Logic Statements!   Days of the Month   You'd like to print the ordinal day of the month (i.e. 1st, 2nd, 3rd) in the following form based on the cardinal input provided (i.e. 1, 2, 3).  \"Today is the 2nd day of the month.\"  \"Today is the 21st day of the month.\"  Complete the following C-program so that it will accomplish this task.      Constant or Vowel?    Write a C program that reads from the user input a letter and that prints out whether this letter is a vowel or a consonant.  For example, if the user input is 'b', the program's output should be:  \"The letter b is a consonant.\"  If, on the other hand, the user input is 'E', for example, then the program's output should be:  \"The letter E is a vowel.\"   When you are done, please put your code you added into the code submission box below:      "
},
{
  "id": "activity-27",
  "level": "2",
  "url": "branching-practice.html#activity-27",
  "type": "Activity",
  "number": "9.5",
  "title": "",
  "body": " You'd like to print the ordinal day of the month (i.e. 1st, 2nd, 3rd) in the following form based on the cardinal input provided (i.e. 1, 2, 3).  \"Today is the 2nd day of the month.\"  \"Today is the 21st day of the month.\"  Complete the following C-program so that it will accomplish this task.   "
},
{
  "id": "activity-9-7-2-Constant_or_Vowel-no-output",
  "level": "2",
  "url": "branching-practice.html#activity-9-7-2-Constant_or_Vowel-no-output",
  "type": "Activity",
  "number": "9.6",
  "title": "",
  "body": "  Write a C program that reads from the user input a letter and that prints out whether this letter is a vowel or a consonant.  For example, if the user input is 'b', the program's output should be:  \"The letter b is a consonant.\"  If, on the other hand, the user input is 'E', for example, then the program's output should be:  \"The letter E is a vowel.\"   When you are done, please put your code you added into the code submission box below:    "
},
{
  "id": "branching-evaluating",
  "level": "1",
  "url": "branching-evaluating.html",
  "type": "Section",
  "number": "9.8",
  "title": "Evaluating Logic Statements",
  "body": " Evaluating Logic Statements  logic evaluate Now that we can write more complicated logical expressions involving multiple operators, in what order do these get evaluated?    Take a look at the program below for example. What is its output? Try to figure this out first by only thinking about the program and not yet running it.   What do you think the output will be?    )  \"Huh??? False???\"    Correct      \"True\"    Not quite. Try again!      \"True Huh??? False???\"    Not quite. Try again!      "
},
{
  "id": "activity-29",
  "level": "2",
  "url": "branching-evaluating.html#activity-29",
  "type": "Activity",
  "number": "9.7",
  "title": "",
  "body": "  Take a look at the program below for example. What is its output? Try to figure this out first by only thinking about the program and not yet running it.   What do you think the output will be?    )  \"Huh??? False???\"    Correct      \"True\"    Not quite. Try again!      \"True Huh??? False???\"    Not quite. Try again!     "
},
{
  "id": "branching-operator",
  "level": "1",
  "url": "branching-operator.html",
  "type": "Section",
  "number": "9.9",
  "title": "Operator Precedence",
  "body": " Operator Precedence  Now that we know several logic and arithmetic operators, we need to know the order in which the computer will evaluate a more complex expression.  More advanced operator precedences are introduced in .   Video Description    Logic expressions are evaluated from left to right  There is a hierarchy of precedence in C operators  operator precedence logic precedence For example, unary operators, such as + and - take precedence over equality operators, such as == and !=        Suppose that variables a, b, and c of type int have been declared and assigned the values:  a=3  b=4  c=5  What is the value of the logic expression:  (a + b > c) && (c - b == a)      "
},
{
  "id": "quiz-logic-1",
  "level": "2",
  "url": "branching-operator.html#quiz-logic-1",
  "type": "Reading Question",
  "number": "9.9.1",
  "title": "",
  "body": " Suppose that variables a, b, and c of type int have been declared and assigned the values:  a=3  b=4  c=5  What is the value of the logic expression:  (a + b > c) && (c - b == a)    "
},
{
  "id": "branching-flag",
  "level": "1",
  "url": "branching-flag.html",
  "type": "Section",
  "number": "9.10",
  "title": "The Idea of a Flag",
  "body": " The Idea of a Flag   boolean behavior (true\/false)  flag Despite the fact that the C-programming language does not have a boolean data type, we can simulate boolean (true\/false) behavior using an integer-type variable. This is often called a flag.   Video Description    Idea of a flag variable  Symbolizing true\/false in code  For example: use an integer variable with value of 1 to symbolize true and a value of 0 to symbolize false        What are some scenarios where it would be useful to have a true\/false variable? Any past activities come to mind?      What is the value of the variable d once the following code has been executed:  int d, num; num = 17; d = ((17%3)==0);    "
},
{
  "id": "investigation-13",
  "level": "2",
  "url": "branching-flag.html#investigation-13",
  "type": "Investigate",
  "number": "9.8",
  "title": "",
  "body": "  What are some scenarios where it would be useful to have a true\/false variable? Any past activities come to mind?   "
},
{
  "id": "quiz-logic-2",
  "level": "2",
  "url": "branching-flag.html#quiz-logic-2",
  "type": "Reading Question",
  "number": "9.10.1",
  "title": "",
  "body": " What is the value of the variable d once the following code has been executed:  int d, num; num = 17; d = ((17%3)==0);  "
},
{
  "id": "branching-logic",
  "level": "1",
  "url": "branching-logic.html",
  "type": "Section",
  "number": "9.11",
  "title": "Logical Expressions in English",
  "body": " Logical Expressions in English  logic expressions We use logical expressions in our language every day. But the way we do so may not translate readily into computer-speak without some extra attention. Remember: computers aren't humans. They cannot interpret what we might mean. They can only follow predefined rules.   Video Description    How to translate logical statements in English to logical expressions that the computer will interpret in the intended way  For example: in English, \"x and y are greater than z\" would translate to C as (x>z)&&(y>z)        Which of the following is the correct logical expression that corresponds to the statement that \"Neither A nor B is negative\" ?   )  !(A<0 || B<0)    Correct      !(A||B)<0    Not quite. Try again!      !A||!B<0    Not quite. Try again!      A<0 || B<0    Not quite. Try again!      "
},
{
  "id": "quiz-logic-3",
  "level": "2",
  "url": "branching-logic.html#quiz-logic-3",
  "type": "Reading Question",
  "number": "9.11.1",
  "title": "",
  "body": " Which of the following is the correct logical expression that corresponds to the statement that \"Neither A nor B is negative\" ?   )  !(A<0 || B<0)    Correct      !(A||B)<0    Not quite. Try again!      !A||!B<0    Not quite. Try again!      A<0 || B<0    Not quite. Try again!    "
},
{
  "id": "branching-negate",
  "level": "1",
  "url": "branching-negate.html",
  "type": "Section",
  "number": "9.12",
  "title": "Negating Logical Expressions",
  "body": " Negating Logical Expressions   logic negate  logic De Morgan's laws  logic truth tables Sometimes you might want to check whether a certain logical expression is NOT true, rather than finding out whether it is true. There are several ways to do so.   Video Description    Negating logical expressions  Truth tables  De Morgan's laws:  Law 1:  !(A && B) == !A || !B  Law 2:  !(A || B) == !A && !B      Which of the following is equivalent to !(A<0 || B<0) ?   )  A>=0 && B>=0    Correct      A>=0 || B>=0    Not quite. Try again!      !A<0 || !B<0    Not quite. Try again!      !A<0 && !B<0    Not quite. Try again!      "
},
{
  "id": "quiz-logic-4",
  "level": "2",
  "url": "branching-negate.html#quiz-logic-4",
  "type": "Reading Question",
  "number": "9.12.1",
  "title": "",
  "body": " Which of the following is equivalent to !(A<0 || B<0) ?   )  A>=0 && B>=0    Correct      A>=0 || B>=0    Not quite. Try again!      !A<0 || !B<0    Not quite. Try again!      !A<0 && !B<0    Not quite. Try again!    "
},
{
  "id": "branching-summary",
  "level": "1",
  "url": "branching-summary.html",
  "type": "Section",
  "number": "9.13",
  "title": "Summary",
  "body": " Summary  Various ways to use branching statements in C:   if (condition){ statement; }  if (condition){ statement1; statement2; ... }  if (condition){ statement(s); } else { statement(s); }  if (condition){ statement(s); } else if (other condition){ statement(s); } else if (yet another condition){ statements(s); } else { statement(s); }  There can be as many if-else cases as you would like.  The final else statement can be omitted if that makes sense.   Several conditions can be combined with logic operators:   && is the logical AND  || is the logical OR  ! is the logical NOT  DeMorgan 1: !(A && B) == (!A) || (!B)  DeMorgan 2: !(A || B) == (!A) && (!B)   Relational and equality operators are:   < less than  > greater than  <= less than or equal  >= greater than or equal  == equal  != not equal   A few extra topics when it comes to branching and logic expressions in coding:   Operator precedence in logic expressions  Using a \"flag\" variable to represent true\/false  Translating logical expressions from English to C  Negating logical expressions   "
},
{
  "id": "adv-branching-switch",
  "level": "1",
  "url": "adv-branching-switch.html",
  "type": "Section",
  "number": "10.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\">switch()<\/code> Statement",
  "body": " The switch() Statement  switch() The switch() statement is a selection control structure that allows one of several alternatives to be executed, depending on the value a variable takes. To be more precise, a switch() statement allows a variable to be compared to a list of values. Each value is called a case. If the variable equals a value from the list then the instructions following that particular case are executed.  Let's take a look at an example:    switch() Statement Practice    Please complete the program below so that it prints out the correct month, depending on the value of the variable month . For example, if month=3 , the program should print  We are in the month of March.  Your program should use a switch() statement.   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-10-1-1-switch_Statement_Practice",
  "level": "2",
  "url": "adv-branching-switch.html#activity-10-1-1-switch_Statement_Practice",
  "type": "Activity",
  "number": "10.1",
  "title": "",
  "body": "  Please complete the program below so that it prints out the correct month, depending on the value of the variable month . For example, if month=3 , the program should print  We are in the month of March.  Your program should use a switch() statement.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "adv-branching-for-if",
  "level": "1",
  "url": "adv-branching-for-if.html",
  "type": "Section",
  "number": "10.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">for<\/code> and <code class=\"code-inline tex2jax_ignore\">if<\/code> together",
  "body": " for and if together  nesting for and if You can nest an if statement inside a loop or a loop inside an if statement.  Take a look at the following example which prints out those numbers between 0 and 29 that are divisible by 3. Make sure to try to understand how the code accomplishes this task.     Is there a difference between the two following scenarios, if the same statements are used within each element?   Nesting an if statement within a loop  Nesting a loop within an if statement     Yes! They can produce quite different results!    Here is just one example of how the same statements placed in different orders can produce vastly different results:   int i = 0; int a = 5; for (i=0; i<11; i++){ if (a<i){ printf(\"%d \", i); } }  int i = 0; int a = 5; if (a<i){ for (i=0; i<11; i++){ printf(\"%d \", i); } }   The first example program will output \"6 7 8 9 10\", whereas the second example program will have no output. Try it out yourself to see! So, of course, order does matter when coding, and it is important to be mindful of the potential errors you can encounter if reversing the order of certain statement, such as above!    "
},
{
  "id": "investigation-14",
  "level": "2",
  "url": "adv-branching-for-if.html#investigation-14",
  "type": "Investigate",
  "number": "10.2",
  "title": "",
  "body": "  Is there a difference between the two following scenarios, if the same statements are used within each element?   Nesting an if statement within a loop  Nesting a loop within an if statement     Yes! They can produce quite different results!    Here is just one example of how the same statements placed in different orders can produce vastly different results:   int i = 0; int a = 5; for (i=0; i<11; i++){ if (a<i){ printf(\"%d \", i); } }  int i = 0; int a = 5; if (a<i){ for (i=0; i<11; i++){ printf(\"%d \", i); } }   The first example program will output \"6 7 8 9 10\", whereas the second example program will have no output. Try it out yourself to see! So, of course, order does matter when coding, and it is important to be mindful of the potential errors you can encounter if reversing the order of certain statement, such as above!   "
},
{
  "id": "adv-branching-nested",
  "level": "1",
  "url": "adv-branching-nested.html",
  "type": "Section",
  "number": "10.3",
  "title": "Nested Loops",
  "body": " Nested Loops  nesting loops You can also nest one loop inside another loop.    What does this print? Be sure to read through the code and pretend you are the computer in order to determine what will happen. Do not simply run the code (that's why there is no Run button). Get out a piece of paper and trace through the code.   "
},
{
  "id": "activity-31",
  "level": "2",
  "url": "adv-branching-nested.html#activity-31",
  "type": "Activity",
  "number": "10.3",
  "title": "",
  "body": "  What does this print? Be sure to read through the code and pretend you are the computer in order to determine what will happen. Do not simply run the code (that's why there is no Run button). Get out a piece of paper and trace through the code.  "
},
{
  "id": "adv-branching-practice",
  "level": "1",
  "url": "adv-branching-practice.html",
  "type": "Section",
  "number": "10.4",
  "title": "Practice Your Advanced Branching!",
  "body": " Practice Your Advanced Branching!   Practice 1   Okay, you can try this out now. Does the the output of the program agree with what you thought would happen? If not, do you see why? Do you have questions?      Practice 2   Let's try this again with another example. Again, do not simply run the code but rather trace through the code as if you were the computer. What is the output of the following program?     "
},
{
  "id": "activity-32",
  "level": "2",
  "url": "adv-branching-practice.html#activity-32",
  "type": "Activity",
  "number": "10.4",
  "title": "",
  "body": " Okay, you can try this out now. Does the the output of the program agree with what you thought would happen? If not, do you see why? Do you have questions?   "
},
{
  "id": "activity-33",
  "level": "2",
  "url": "adv-branching-practice.html#activity-33",
  "type": "Activity",
  "number": "10.5",
  "title": "",
  "body": " Let's try this again with another example. Again, do not simply run the code but rather trace through the code as if you were the computer. What is the output of the following program?   "
},
{
  "id": "adv-branching-practice2",
  "level": "1",
  "url": "adv-branching-practice2.html",
  "type": "Section",
  "number": "10.5",
  "title": "Continue to Practice Your Advanced Branching!",
  "body": " Continue to Practice Your Advanced Branching!   Practice 3   Okay, time to try it out. Take a look at the output of the program. Is this what you came up with? If not, do you understand the difference? Please ask questions if anything is unclear.      Practice 4  Your turn!    Below is a program that calculates the factorial of a number, for example, when N=5, N! = 5*4*3*2*1 = 120.  Modify this program so that it prints a list of the factorials from 1! to 10!, that is something like:  1! = 1 2! = 2 3! = 6 4! = 24 5! = 120 6! = 720 ...  Your program should use nested loops to accomplish this task.   When you are done, please put your code into the code submission box below:      "
},
{
  "id": "activity-34",
  "level": "2",
  "url": "adv-branching-practice2.html#activity-34",
  "type": "Activity",
  "number": "10.6",
  "title": "",
  "body": " Okay, time to try it out. Take a look at the output of the program. Is this what you came up with? If not, do you understand the difference? Please ask questions if anything is unclear.   "
},
{
  "id": "activity-10-4-4-Adv_Branching_Practice_4",
  "level": "2",
  "url": "adv-branching-practice2.html#activity-10-4-4-Adv_Branching_Practice_4",
  "type": "Activity",
  "number": "10.7",
  "title": "",
  "body": "  Below is a program that calculates the factorial of a number, for example, when N=5, N! = 5*4*3*2*1 = 120.  Modify this program so that it prints a list of the factorials from 1! to 10!, that is something like:  1! = 1 2! = 2 3! = 6 4! = 24 5! = 120 6! = 720 ...  Your program should use nested loops to accomplish this task.   When you are done, please put your code into the code submission box below:    "
},
{
  "id": "adv-branching-errors",
  "level": "1",
  "url": "adv-branching-errors.html",
  "type": "Section",
  "number": "10.6",
  "title": "Common Errors With Branching",
  "body": " Common Errors With Branching   Practice 5   What's wrong here? Why is this not printing a list of factorials? Can you fix it?      Practice 6   What's wrong with this now?  You'd like to print out a rectangle of stars that is 8 stars wide and 3 stars tall, just as in the output below:  ******** ******** ********  Something is wrong with your code however. Can you fix it?      Practice 7   What's wrong with this code? Why is it not printing the equation you expect?   What is wrong here?    "
},
{
  "id": "activity-36",
  "level": "2",
  "url": "adv-branching-errors.html#activity-36",
  "type": "Activity",
  "number": "10.8",
  "title": "",
  "body": " What's wrong here? Why is this not printing a list of factorials? Can you fix it?   "
},
{
  "id": "activity-37",
  "level": "2",
  "url": "adv-branching-errors.html#activity-37",
  "type": "Activity",
  "number": "10.9",
  "title": "",
  "body": " What's wrong with this now?  You'd like to print out a rectangle of stars that is 8 stars wide and 3 stars tall, just as in the output below:  ******** ******** ********  Something is wrong with your code however. Can you fix it?   "
},
{
  "id": "activity-38",
  "level": "2",
  "url": "adv-branching-errors.html#activity-38",
  "type": "Activity",
  "number": "10.10",
  "title": "",
  "body": " What's wrong with this code? Why is it not printing the equation you expect?   What is wrong here?  "
},
{
  "id": "adv-branching-summary",
  "level": "1",
  "url": "adv-branching-summary.html",
  "type": "Section",
  "number": "10.7",
  "title": "Summary",
  "body": " Summary  Today, we learned about:   Syntax of the switch() statement   You can nest loops inside loops. Just make sure to:  Use a new loop counter for each loop  Remember your curly braces     You can nest if statements inside loops or loops inside if statements.   "
},
{
  "id": "format-io",
  "level": "1",
  "url": "format-io.html",
  "type": "Section",
  "number": "11.1",
  "title": "Formatted Input and Output",
  "body": " Formatted Input and Output  We have already seen and used the printf() and the scanf() statements. Both have additional options that come in handy when trying to produce nicely formatted output.   Video Description    Each data type comes with its own format specifier, for example %d for integers, %f for floating point numbers and %c for individual characters. We will get to know other format specifiers as we discover other data types.  Each format specifier in the format string must correspond to a variable of the same data type in a printf() statement.  escape sequences Escape sequences start with a backslash \\ and are used to send special formatting instructions to the computer within a format string. For example, when used within a printf() statement, \\n is used to start a new line in the output, \\b creates a backspace (moves the cursor one space to the left) and \\\" renders a double quotation mark.      format specifiers other      How do you print the sentence She said \"yes\" to my suggestion. using the printf() command? Feel free to use the window below to try out some commands.    )  printf(\"She said \\\"yes\\\" to my suggestion.\");    Correct      printf(\"She said \"yes\" to my suggestion.\");    Not quite. Try again!      printf(\"She said \"\"yes\"\" to my suggestion.\");    Not quite. Try again!      printf(\"She said 'yes' to my suggestion.\");    Not quite. Try again!      What happens when you don’t have enough variables to match the number of format specifiers in your format string? For example, what happens when you type:  int age = 34; printf(\"I am %d years old and weight %f pounds.\", age);  Feel free to quickly write a program to try this out.    )  The compiler will give a warning, but the program will run and print something.    Correct      The program will compile but crash at runtime.    Not quite. Try again!      The compiler automatically substitutes the correct value for the missing variable.    Not quite. Try again!      The compiler will abort with an error message.    Not quite. Try again!      Sometimes it is useful to use additional formatting options that are available for format specifiers in order to control the output more precisely.   Video Description    Output using format specifiers can be formatted, using the syntax:  %[flag][width][.precision][type_mod]type  Parameters in brackets [] are optional.  format flag The [flag] can take on values such as - , + , 0 etc. For example, - (as in %-d ) will cause the numerical output to be left-justified.  format precision The [.precision] option can be used to specify, for a floating point number, the number of digits after the decimal point to be displayed. For example, %.3f will print three digits after the decimal point.  format width The [width] option can be used to prescribe the number of spaces that the printed number will take up. The [flag] can determine how these numbers appear (i.e. left-justified).        What is the output of  printf(\"a = %05d\\n\", 35);  You should first think about this and try to figure out the answer by hand. Then feel free to use the window below to write a program to verify your answer. This time you have to write the entire program by yourself (hint: get started by copying and pasting from a previous program.)    )  a = 00035    Correct      35    Not quite. Try again!      00035    Not quite. Try again!      a = 0535    Not quite. Try again!      What happens when you use the format specifier %f to print out an integer? (feel free to write a short C program to try this out).    )  The compiler will give a warning and output will most likely be incorrect.    Correct      No answer text provided.    Not quite. Try again!      The compiler will notice and abort the compilation with an error message.    Not quite. Try again!      The integer is automatically converted to a float and printed out correctly.    Not quite. Try again!      "
},
{
  "id": "figure-6",
  "level": "2",
  "url": "format-io.html#figure-6",
  "type": "Figure",
  "number": "11.1",
  "title": "",
  "body": " format specifiers other   "
},
{
  "id": "quiz-format-1",
  "level": "2",
  "url": "format-io.html#quiz-format-1",
  "type": "Reading Question",
  "number": "11.1.1",
  "title": "",
  "body": " How do you print the sentence She said \"yes\" to my suggestion. using the printf() command? Feel free to use the window below to try out some commands.    )  printf(\"She said \\\"yes\\\" to my suggestion.\");    Correct      printf(\"She said \"yes\" to my suggestion.\");    Not quite. Try again!      printf(\"She said \"\"yes\"\" to my suggestion.\");    Not quite. Try again!      printf(\"She said 'yes' to my suggestion.\");    Not quite. Try again!    "
},
{
  "id": "quiz-format-2",
  "level": "2",
  "url": "format-io.html#quiz-format-2",
  "type": "Reading Question",
  "number": "11.1.2",
  "title": "",
  "body": " What happens when you don’t have enough variables to match the number of format specifiers in your format string? For example, what happens when you type:  int age = 34; printf(\"I am %d years old and weight %f pounds.\", age);  Feel free to quickly write a program to try this out.    )  The compiler will give a warning, but the program will run and print something.    Correct      The program will compile but crash at runtime.    Not quite. Try again!      The compiler automatically substitutes the correct value for the missing variable.    Not quite. Try again!      The compiler will abort with an error message.    Not quite. Try again!    "
},
{
  "id": "quiz-format-3",
  "level": "2",
  "url": "format-io.html#quiz-format-3",
  "type": "Reading Question",
  "number": "11.1.1",
  "title": "",
  "body": " What is the output of  printf(\"a = %05d\\n\", 35);  You should first think about this and try to figure out the answer by hand. Then feel free to use the window below to write a program to verify your answer. This time you have to write the entire program by yourself (hint: get started by copying and pasting from a previous program.)    )  a = 00035    Correct      35    Not quite. Try again!      00035    Not quite. Try again!      a = 0535    Not quite. Try again!    "
},
{
  "id": "quiz-format-4",
  "level": "2",
  "url": "format-io.html#quiz-format-4",
  "type": "Reading Question",
  "number": "11.1.2",
  "title": "",
  "body": " What happens when you use the format specifier %f to print out an integer? (feel free to write a short C program to try this out).    )  The compiler will give a warning and output will most likely be incorrect.    Correct      No answer text provided.    Not quite. Try again!      The compiler will notice and abort the compilation with an error message.    Not quite. Try again!      The integer is automatically converted to a float and printed out correctly.    Not quite. Try again!    "
},
{
  "id": "format-scanf",
  "level": "1",
  "url": "format-scanf.html",
  "type": "Section",
  "number": "11.2",
  "title": "Understanding <code class=\"code-inline tex2jax_ignore\">scanf()<\/code>",
  "body": " Understanding scanf()  Next, let's understand the scanf() function in more detail.   Video Description    The scanf() function is used to scan user input  NEW SYNTAX: the following will scan for a user-inputted integer and store it in the already-declared variable named \"input\"  scanf(\"%d\", &input);    scanf()      What is the correct way to have the user input an integer and store it in the variable age ?  Feel free to use the window below to try out some commands.    )  scanf(\"%d\", &age);    Correct      scanf(\"%d\", age);    Not quite. Try again!      scanf(\"%age\", &d);    Not quite. Try again!      scanf(\"&age\");    Not quite. Try again!      "
},
{
  "id": "figure-7",
  "level": "2",
  "url": "format-scanf.html#figure-7",
  "type": "Figure",
  "number": "11.2",
  "title": "",
  "body": " scanf()   "
},
{
  "id": "quiz-format-5",
  "level": "2",
  "url": "format-scanf.html#quiz-format-5",
  "type": "Reading Question",
  "number": "11.2.1",
  "title": "",
  "body": " What is the correct way to have the user input an integer and store it in the variable age ?  Feel free to use the window below to try out some commands.    )  scanf(\"%d\", &age);    Correct      scanf(\"%d\", age);    Not quite. Try again!      scanf(\"%age\", &d);    Not quite. Try again!      scanf(\"&age\");    Not quite. Try again!    "
},
{
  "id": "format-style",
  "level": "1",
  "url": "format-style.html",
  "type": "Section",
  "number": "11.3",
  "title": "Program Style",
  "body": " Program Style  program style Style, which is how you format your source code, is an important consideration when writing computer programs. In the following Codecast, we will explore ways to craft easy-to-read code and why style is so important. Considerations such as indentation, where to place line breaks, grouping pieces of code together, choice of variable names, where to place comments are all part of coding style.    Video Description    Best practices for the style of your code  i.e. consistent spacing, line breaks, indentation, and variable-naming conventions       Time for some reflection:  Do you think your current style when coding is clean and easy-to-read, such as the example shown in the Codecast above, or do you think there's some room for improvement?    Either way, think about the example from the Codecast when you work on your next coding assignments. Great style will become increasingly important as the complexity of your code increases!      "
},
{
  "id": "investigation-15",
  "level": "2",
  "url": "format-style.html#investigation-15",
  "type": "Investigate",
  "number": "11.1",
  "title": "",
  "body": "  Time for some reflection:  Do you think your current style when coding is clean and easy-to-read, such as the example shown in the Codecast above, or do you think there's some room for improvement?    Either way, think about the example from the Codecast when you work on your next coding assignments. Great style will become increasingly important as the complexity of your code increases!   "
},
{
  "id": "format-summary",
  "level": "1",
  "url": "format-summary.html",
  "type": "Section",
  "number": "11.4",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Format specifiers in format strings, for example %d , %f , %c along with optional parameters  Formatted output, i.e. width, precision, etc.  The scanf() function in detail  Styling your code itself   "
},
{
  "id": "functions-single",
  "level": "1",
  "url": "functions-single.html",
  "type": "Section",
  "number": "12.1",
  "title": "Single Functions",
  "body": " Single Functions  You have already seen the use of a function in C, namely the main() function! We don't tend to think of main() as a function but it is indeed one.  functions Functions allow you to group a bunch of statements together that can be called upon to execute at any point in your code. Depending on the type of function you write, you can pass information to the function and it can return information back to you.  Here is a first example of a function in C:    Video Description    Writing functions  Calling functions  NEW SYNTAX: the following is the function prototype for a function that takes in two integers, x and y, and returns one integer (this return integer could be anything but we are going to return the sum of x and y).   int sum (int x, int y);   NEW SYNTAX: the body (that is, the set of instructions to be executed when calling the function) of the function \"sum\" comes after the main function ends. This is called the function definition and it starts out the same way as the prototype, except for the semi-colon ; at the end of the prototype. After that initial line come curly brackets {} , which enclose the (potentially) multi-line body of the function.   int sum (int x, int y){ };   NEW SYNTAX: to call the new function in the main function, the following is used (and the variable names are arbitrary)   c = sum(a,b)      Please add the correct prototype for the square() function to the program below:   When your program performs correctly you'll be given a keyword to enter in Canvas.    Write a function divide() that takes two floats as arguments and returns a float, namely the first number divided by the second. Obviously, you shouldn't be dividing by zero...  You may assume that your function is not called with such input.   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "quiz-functions-1",
  "level": "2",
  "url": "functions-single.html#quiz-functions-1",
  "type": "Reading Question",
  "number": "12.1.1",
  "title": "",
  "body": " Please add the correct prototype for the square() function to the program below:   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "quiz-functions-2",
  "level": "2",
  "url": "functions-single.html#quiz-functions-2",
  "type": "Reading Question",
  "number": "12.1.2",
  "title": "",
  "body": " Write a function divide() that takes two floats as arguments and returns a float, namely the first number divided by the second. Obviously, you shouldn't be dividing by zero...  You may assume that your function is not called with such input.   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "functions-multiple",
  "level": "1",
  "url": "functions-multiple.html",
  "type": "Section",
  "number": "12.2",
  "title": "Multiple Functions",
  "body": " Multiple Functions  functions multiple It is possible (and quite normal) to have multiple functions in your C code! By splitting up your code into functions, debugging can become much easier, your code will be more readable, it will be easier for you to remember what you had in mind, ... but more on that later. For now, let's take a look at an example that involves multiple functions:    Video Description    You can write multiple functions for your code  List the function prototypes above the main function  Include the function bodies below the main function  Call each function using the same syntax as before       What are some of the advantages of using functions (choose all that apply)?     easy modification of code    Correct      abstraction    Correct      ability to reuse code without having to copy and paste    Correct      there are no advantages    Not quite. Try again!      Given the following function definition, which is the correct function call, given that a variable a of type int has been declared?  int myaddition(int x, int y) { return(x+y); }  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  a = myaddition(3,5);    Correct      a = myaddition(3,5)    Not quite. Try again!      int a = myaddition(3,5)    Not quite. Try again!      a = myaddition(3.0,5.0);    Not quite. Try again!      "
},
{
  "id": "quiz-functions-3",
  "level": "2",
  "url": "functions-multiple.html#quiz-functions-3",
  "type": "Reading Question",
  "number": "12.2.1",
  "title": "",
  "body": " What are some of the advantages of using functions (choose all that apply)?     easy modification of code    Correct      abstraction    Correct      ability to reuse code without having to copy and paste    Correct      there are no advantages    Not quite. Try again!    "
},
{
  "id": "quiz-functions-4",
  "level": "2",
  "url": "functions-multiple.html#quiz-functions-4",
  "type": "Reading Question",
  "number": "12.2.2",
  "title": "",
  "body": " Given the following function definition, which is the correct function call, given that a variable a of type int has been declared?  int myaddition(int x, int y) { return(x+y); }  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  a = myaddition(3,5);    Correct      a = myaddition(3,5)    Not quite. Try again!      int a = myaddition(3,5)    Not quite. Try again!      a = myaddition(3.0,5.0);    Not quite. Try again!    "
},
{
  "id": "functions-practice",
  "level": "1",
  "url": "functions-practice.html",
  "type": "Section",
  "number": "12.3",
  "title": "Practice Your Functions!",
  "body": " Practice Your Functions!  The best way to get more comfortable with functions is to simply practice writing code. So here we go!   Functions: Your Turn!   Write a C program that converts temperature from Fahrenheit to Celsius or from Celsius to Fahrenheit, depending on user input. Here is a sample session:   Please enter a temperature:  45 F  45 degrees Fahrenheit correspond to approximately 7.2 degrees Celsius.   And another sample session:   Please enter a temperature:  28 C  28 degrees Celsius correspond to approximately 82.4 degrees Fahrenheit.   The overall structure of the program is provided for you below. Your program should use functions for the temperature conversions: one for Fahrenheit to Celsius, and another for Celsius to Fahrenheit.      Another One!   Write a function factorial() that accepts an integer as an argument and returns an integer, namely the factorial of the argument. A test program has already been provided for you below; you only need to write the function itself and add the prototype and the function call to the program.     "
},
{
  "id": "activity-39",
  "level": "2",
  "url": "functions-practice.html#activity-39",
  "type": "Activity",
  "number": "12.1",
  "title": "",
  "body": " Write a C program that converts temperature from Fahrenheit to Celsius or from Celsius to Fahrenheit, depending on user input. Here is a sample session:   Please enter a temperature:  45 F  45 degrees Fahrenheit correspond to approximately 7.2 degrees Celsius.   And another sample session:   Please enter a temperature:  28 C  28 degrees Celsius correspond to approximately 82.4 degrees Fahrenheit.   The overall structure of the program is provided for you below. Your program should use functions for the temperature conversions: one for Fahrenheit to Celsius, and another for Celsius to Fahrenheit.   "
},
{
  "id": "activity-40",
  "level": "2",
  "url": "functions-practice.html#activity-40",
  "type": "Activity",
  "number": "12.2",
  "title": "",
  "body": " Write a function factorial() that accepts an integer as an argument and returns an integer, namely the factorial of the argument. A test program has already been provided for you below; you only need to write the function itself and add the prototype and the function call to the program.   "
},
{
  "id": "functions-recursion",
  "level": "1",
  "url": "functions-recursion.html",
  "type": "Section",
  "number": "12.4",
  "title": "Recursion",
  "body": " Recursion  functions recursion It is possible for a function to call itself! While this might sound like a strange idea, the concept of a function calling itself can make for some really cool features. We call this recursion . Let's take a look at an example. Please pretend to be the computer as you study the code in the below window.  What does the function factorial() do? Try to answer this question 'by hand' first, by going through the code in your head for multiple different user inputs. Once you think you have an idea, hit the Run button to see what the computer does. Is this what you thought would happen? Why or why not?   "
},
{
  "id": "p-924",
  "level": "2",
  "url": "functions-recursion.html#p-924",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursion "
},
{
  "id": "function-recursion-practice",
  "level": "1",
  "url": "function-recursion-practice.html",
  "type": "Section",
  "number": "12.5",
  "title": "Practice Your Recursion!",
  "body": " Practice Your Recursion!  Pick one of the three options below to try!   Practice 1   Write a function sum() that takes an integer n as an argument and recursively finds the sum of the numbers from 1 through n .  The function should return that sum. The function sum() should not use any loops!  The main function is already given to you so that you can focus on the recursive function sum() . Example output:  \"The sum of the numbers from 1 through 10 equals 55.\"      Practice 2   Write a recursive function sumOfDigits() that computes and returns the sum of the digits of an integer number that's been passed to the function. Your function should not use any loops!  The main function is already given to you so that you can focus on the recursive function sumOfDigits() . Example output:  \"The sum of the digits of the number 132436 equals 19.\"      Practice 3   Write a recursive function fib() that takes an integer argument n and returns the nth Fibonacci number. Your function should not use any loops! Recall that the first and second Fibonacci numbers are 0 and 1, whereas each subsequent Fibonacci number is the sum of the two previous ones. For example, here are the first 10 Fibonacci numbers:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.  The main function is already given to you so that you can focus on the recursive function fib() .  Example output:  \"The 9th Fibonacci number is 21.\"     "
},
{
  "id": "activity-41",
  "level": "2",
  "url": "function-recursion-practice.html#activity-41",
  "type": "Activity",
  "number": "12.3",
  "title": "",
  "body": " Write a function sum() that takes an integer n as an argument and recursively finds the sum of the numbers from 1 through n .  The function should return that sum. The function sum() should not use any loops!  The main function is already given to you so that you can focus on the recursive function sum() . Example output:  \"The sum of the numbers from 1 through 10 equals 55.\"   "
},
{
  "id": "activity-42",
  "level": "2",
  "url": "function-recursion-practice.html#activity-42",
  "type": "Activity",
  "number": "12.4",
  "title": "",
  "body": " Write a recursive function sumOfDigits() that computes and returns the sum of the digits of an integer number that's been passed to the function. Your function should not use any loops!  The main function is already given to you so that you can focus on the recursive function sumOfDigits() . Example output:  \"The sum of the digits of the number 132436 equals 19.\"   "
},
{
  "id": "activity-43",
  "level": "2",
  "url": "function-recursion-practice.html#activity-43",
  "type": "Activity",
  "number": "12.5",
  "title": "",
  "body": " Write a recursive function fib() that takes an integer argument n and returns the nth Fibonacci number. Your function should not use any loops! Recall that the first and second Fibonacci numbers are 0 and 1, whereas each subsequent Fibonacci number is the sum of the two previous ones. For example, here are the first 10 Fibonacci numbers:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.  The main function is already given to you so that you can focus on the recursive function fib() .  Example output:  \"The 9th Fibonacci number is 21.\"   "
},
{
  "id": "functions-summary",
  "level": "1",
  "url": "functions-summary.html",
  "type": "Section",
  "number": "12.6",
  "title": "Summary",
  "body": " Summary  In this chapter, we learned about the following topics:   Writing and calling functions  Function prototypes  Passing arguments to functions  Returning a value from a function  Writing recursive functions   "
},
{
  "id": "loops-while",
  "level": "1",
  "url": "loops-while.html",
  "type": "Section",
  "number": "13.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\">while<\/code> Loop",
  "body": " The while Loop  Remember our program, using a for -loop, to compute the factorial of a number? Essentially, it went like this:  N = 5; fac = 1; for (i=1; i<=N; i++) { fac = fac * i; }  loops while C has three different types of loops. Sometimes we want to loop through a section of code, but we do not know how many times we want it to execute. Maybe we want it to repeat the code while a certain condition is true, or maybe while that condition is not met. In these sorts of cases, a while -loop will come in handy!    Video Description    The while loop allows code to be repeated \"while\" some condition is satisfied  Computing the factorial of a number using a while loop  NEW SYNTAX:  while (condition) { do this };     Quick review on for -loops:  What is the final value of x (i.e. the value of x after the loop has terminated) when the following code is run:  int x; for(x=0; x<5; x++) { printf(\"x = %d\\n\", x); }    How many times does the following loop get executed, assuming that i is an integer type variable initialized with the value 8:  while (i>0) { printf(\"i = %d\\n\", i); i = i-1; }  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.   Please enter your answer (the number only, no words) in the box below.    What is the value of n after the loop terminates, assuming that before starting the loop, n has the value 19:  while (n<10) n = n+1;  Code window for your convenience. Remember to work the correct answer out \"by hand\" first before verifying it using the code window.   Please enter your answer (the number only, no words) in the box below.    You'd like to add up all of the scores you have received so far on your assignments. Please write a C program that uses a while loop to repeatedly ask the user to enter a score, and that adds up all of these scores until the user enters -1 to finish. Obviously, the -1 should not be added to your final tally.  Finally, print the calculated sum.  Note: scores entered could be negative (you may not have experienced this, but the old SATs actually had negative scores for guessing incorrectly...). Just -1 is not an actual score in this particular exercise and forces the loop to terminate.   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "quiz-loops-1",
  "level": "2",
  "url": "loops-while.html#quiz-loops-1",
  "type": "Reading Question",
  "number": "13.1.1",
  "title": "",
  "body": " Quick review on for -loops:  What is the final value of x (i.e. the value of x after the loop has terminated) when the following code is run:  int x; for(x=0; x<5; x++) { printf(\"x = %d\\n\", x); }  "
},
{
  "id": "quiz-loops-2",
  "level": "2",
  "url": "loops-while.html#quiz-loops-2",
  "type": "Reading Question",
  "number": "13.1.2",
  "title": "",
  "body": " How many times does the following loop get executed, assuming that i is an integer type variable initialized with the value 8:  while (i>0) { printf(\"i = %d\\n\", i); i = i-1; }  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.   Please enter your answer (the number only, no words) in the box below.  "
},
{
  "id": "quiz-loops-3",
  "level": "2",
  "url": "loops-while.html#quiz-loops-3",
  "type": "Reading Question",
  "number": "13.1.3",
  "title": "",
  "body": " What is the value of n after the loop terminates, assuming that before starting the loop, n has the value 19:  while (n<10) n = n+1;  Code window for your convenience. Remember to work the correct answer out \"by hand\" first before verifying it using the code window.   Please enter your answer (the number only, no words) in the box below.  "
},
{
  "id": "quiz-loops-4",
  "level": "2",
  "url": "loops-while.html#quiz-loops-4",
  "type": "Reading Question",
  "number": "13.1.4",
  "title": "",
  "body": " You'd like to add up all of the scores you have received so far on your assignments. Please write a C program that uses a while loop to repeatedly ask the user to enter a score, and that adds up all of these scores until the user enters -1 to finish. Obviously, the -1 should not be added to your final tally.  Finally, print the calculated sum.  Note: scores entered could be negative (you may not have experienced this, but the old SATs actually had negative scores for guessing incorrectly...). Just -1 is not an actual score in this particular exercise and forces the loop to terminate.   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "loops-for-while",
  "level": "1",
  "url": "loops-for-while.html",
  "type": "Section",
  "number": "13.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">for<\/code> vs. <code class=\"code-inline tex2jax_ignore\">while<\/code> Loops",
  "body": " for vs. while Loops  Though for - and while -loops can accomplish the same tasks, both have certain benefits and drawbacks. Here, we compare the syntaxes of both loops and discuss situations and scenarios in which one loop is preferable over the other.  for -loop syntax:  for (initialization; loop run condition; update) { statements...; }  At the very start of the loop (before any kind of repetition is entered) the initialization statement is executed. This happens exactly once. At the start of every repetition the loop condition is checked. If it evaluates to true then the actual loop statements are executed once. Afterwards, the update statement is executed and next, the loop run condition is checked again. If still true, the loop statements are executed again, etc.  Example:  for (i=10; i>5; i--) { printf(\"i = %d\\n\", i); }  In this example, i is initialized with the value 10 right before the start of the loop. Next, the logic statement i>5 is evaluated, and since 10 is indeed greater than 5, the loop is entered. The printf() statement prints i = 10 to the screen. Next, the update statement i-- is executed, decreasing the value of i to 9. The loop condition is checked (9 is still greater than 5) and so i = 9 is printed to the screen. i is next decreased to 8, loop condition checked, etc. This continues on until i = 6 is printed to the screen. When i is next decreased to 5, the check of the loop condition evaluates to false since 5 is not greater than 5. The loop terminates with the loop counter having the value 5.  while -loop syntax:  while (condition) { statements...; }  At the start of every run through the loop, the condition is checked and only if it evaluates to true are the statements in the loop body executed. It is the programmer's job to build in an update condition into these statements so that eventually the loop condition will evaluate to false, causing the loop to terminate. It is really easy to forget to do this, leading to a never-ending loop...  Example:  i=10; while (i>5) { printf(\"i = %d\\n\", i); i--; }  This loop generates the exact same output as the above for loop. Notice that you have to explicitly initialize i on your own before the loop and program the update condition i--; as part of the loop body.  In general:   loops for vs. while Use a for -loop when you have a known number of iterations.  loops for vs. while Use a while -loop when you have an unspecified number of iterations.     Would a for - or while -loop be more efficient to implement in the following scenario?  In your program, you want to use a loop to continuously get input from the user, and you want to continue to take in user input until a certain integer is entered.    A while -loop    Though this task could technically be accomplished with either type of loop, a while -loop would be more efficient to use, since you don't know how many times the user will input information before that certain \"stop\" integer is entered. With a for -loop, you'd have to prescribe a certain number of iterations through the loop, but you don't know this number up front! A while -loop does not need to be told how many times to iterate, rather it can simply run until it finds that certain \"stop\" integer being entered.    Clearly, the following would be difficult to accomplish with a for -loop. We are asking the user to enter a positive number, and in case they accidentally put in a negative number, have them repeat the input.   In the previous example, we had to type the scanf() statement twice: once to read the user input and then one more time in case they entered something negative by accident. This is not the most elegant code (though perfectly acceptable). So there is a third kind of loop that helps in such a case, the do-while -loop:   Unlike our previous two types of loops, a do-while loop is guaranteed to execute its loop body at least once since it doesn't get around to checking the loop condition until after execution of the loop body.    What differences between while -loops and do-while -loops do you notice? Are there any similarities in their syntaxes?    We'll look into the do-while -loop in the next section!    "
},
{
  "id": "investigation-16",
  "level": "2",
  "url": "loops-for-while.html#investigation-16",
  "type": "Investigate",
  "number": "13.1",
  "title": "",
  "body": "  Would a for - or while -loop be more efficient to implement in the following scenario?  In your program, you want to use a loop to continuously get input from the user, and you want to continue to take in user input until a certain integer is entered.    A while -loop    Though this task could technically be accomplished with either type of loop, a while -loop would be more efficient to use, since you don't know how many times the user will input information before that certain \"stop\" integer is entered. With a for -loop, you'd have to prescribe a certain number of iterations through the loop, but you don't know this number up front! A while -loop does not need to be told how many times to iterate, rather it can simply run until it finds that certain \"stop\" integer being entered.   "
},
{
  "id": "investigation-17",
  "level": "2",
  "url": "loops-for-while.html#investigation-17",
  "type": "Investigate",
  "number": "13.2",
  "title": "",
  "body": "  What differences between while -loops and do-while -loops do you notice? Are there any similarities in their syntaxes?    We'll look into the do-while -loop in the next section!   "
},
{
  "id": "loops-do-while",
  "level": "1",
  "url": "loops-do-while.html",
  "type": "Section",
  "number": "13.3",
  "title": "The <code class=\"code-inline tex2jax_ignore\">do-while<\/code>-Loop",
  "body": " The do-while -Loop  loops do-while The do-while -loop is similar in nature to the while -loop, in the sense that the code within both loops will execute so long as a certain condition is satisfied. The slight difference between the two types of loops is that in a while -loop, the condition is tested before the statements within the loop are executed, whereas in a do-while -loop, the code inside the loop executes once before the condition is ever tested.  Therefore, even if the condition to continue the loop is never met, the do-while -loop will still execute the loop's statements once, but the while -loop will not execute at all.   Try out the features of the do-while -loop in the code window below. Test what happens if you edit the code so the condition of the loop is NOT met. Change the loop from a do-while -to a while -loop, and see if it produces the same results!    loops do-while  #include <stdio.h> int main(void) { int i = 1; do { printf(\"Hello, World!\\n\"); i++; } while (i < 5); return (0); }    "
},
{
  "id": "activity-44",
  "level": "2",
  "url": "loops-do-while.html#activity-44",
  "type": "Activity",
  "number": "13.3",
  "title": "",
  "body": " Try out the features of the do-while -loop in the code window below. Test what happens if you edit the code so the condition of the loop is NOT met. Change the loop from a do-while -to a while -loop, and see if it produces the same results!    loops do-while  #include <stdio.h> int main(void) { int i = 1; do { printf(\"Hello, World!\\n\"); i++; } while (i < 5); return (0); }   "
},
{
  "id": "loops-compound",
  "level": "1",
  "url": "loops-compound.html",
  "type": "Section",
  "number": "13.4",
  "title": "Compound Assignment Operators",
  "body": " Compound Assignment Operators  loops operators compound assignment ( i=i+1 )  In programming we often update the values of variables using statements such as:  i = i + 1;  fac = fac * i;  num = num - 1;  These common coding tasks, where a certain operation (i.e. addition, subtraction, etc.) is being done to one variable itself (so the variable appears on both sides of the assignment operation), can be written in a shorthand using compound assignment operators .  In the first example above, we want to increment i by one, meaning we take the old value of i , add one to it, and store the new value back in i . However, we can achieve the same result using a compound assignment operator!  In the following video, we'll learn about this shorthand notation for such variable updates.    Video Description    Shorthand notation for increments and decrements  i.e. += , -= , *= , \/= , %=  NEW SYNTAX: i+=1 will increase i by 1 (shorthand for i = i + 1)       Please complete the following program by creating a loop that adds up the numbers from n to 2n (have the user enter the number n). Save the result of this addition in the variable sum (which has already been declared) and print it out. Be sure to declare any other additional variables you might need for your loop.   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "p-977",
  "level": "2",
  "url": "loops-compound.html#p-977",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "compound assignment operators "
},
{
  "id": "quiz-loops-5",
  "level": "2",
  "url": "loops-compound.html#quiz-loops-5",
  "type": "Reading Question",
  "number": "13.4.1",
  "title": "",
  "body": " Please complete the following program by creating a loop that adds up the numbers from n to 2n (have the user enter the number n). Save the result of this addition in the variable sum (which has already been declared) and print it out. Be sure to declare any other additional variables you might need for your loop.   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "loops-operators",
  "level": "1",
  "url": "loops-operators.html",
  "type": "Section",
  "number": "13.5",
  "title": "Increment \/ Decrement Operators",
  "body": " Increment \/ Decrement Operators  loops operators shorthand  Certain incremental and decrement statements, such as the following, are so commonly used in C, especially when working with loops, that there is even a shorthand for the shorthand!  i += 1;  i -= 1;  Because of their ubiquitousness, there is yet another shorthand notation just for these operations of adding one to or subtracting one from a variable!    Do you remember what the following is shorthand notation for:  i += 1;      i = i + 1;    Remember: i += 1; is a compound assignment operation that we just learned about in the previous section!    In the following video, we'll take a look at the shorthand notation that shortens the already short compound assignment operators += and += :    Video Description    Shorthand notation for incrementing and decrementing the same variable  i.e. i++; , ++i  i.e. i--; , --i  Pre- and post-fix notation: the location of ++ or -- either before or after the variable to be modified determines the timing of the update relative to other instructions that are part of the same statement.  NEW SYNTAX: i++ , for example, is equivalent to i = i + 1       What does the following code print to the screen?  int i = 5; i++; printf(\"%d \", i); printf(\"%d \", i++); printf(\"%d \", i--); printf(\"%d \", --i);   )  6 6 7 5    Correct      6 7 6 5    Not quite. Try again!      6 7 6 6    Not quite. Try again!      5 5 4 4    Not quite. Try again!      5 6 5 4    Not quite. Try again!      "
},
{
  "id": "investigation-18",
  "level": "2",
  "url": "loops-operators.html#investigation-18",
  "type": "Investigate",
  "number": "13.4",
  "title": "",
  "body": "  Do you remember what the following is shorthand notation for:  i += 1;      i = i + 1;    Remember: i += 1; is a compound assignment operation that we just learned about in the previous section!   "
},
{
  "id": "quiz-loops-6",
  "level": "2",
  "url": "loops-operators.html#quiz-loops-6",
  "type": "Reading Question",
  "number": "13.5.1",
  "title": "",
  "body": " What does the following code print to the screen?  int i = 5; i++; printf(\"%d \", i); printf(\"%d \", i++); printf(\"%d \", i--); printf(\"%d \", --i);   )  6 6 7 5    Correct      6 7 6 5    Not quite. Try again!      6 7 6 6    Not quite. Try again!      5 5 4 4    Not quite. Try again!      5 6 5 4    Not quite. Try again!    "
},
{
  "id": "loops-operators-practice",
  "level": "1",
  "url": "loops-operators-practice.html",
  "type": "Section",
  "number": "13.6",
  "title": "Increment \/ Decrement Practice",
  "body": " Increment \/ Decrement Practice   Increment Practice   Do you remember what this code prints to the screen?      Predict the Result   Now look at the part that is commented out - basically the same printf() statements as above, but this time all in one line. What do you expect this to print to the screen?  Be sure to think about this first, before actually running the code.      Try It Out!   Okay, now you can hit the Run button. Is this what you predicted?   What happened?    "
},
{
  "id": "activity-45",
  "level": "2",
  "url": "loops-operators-practice.html#activity-45",
  "type": "Activity",
  "number": "13.5",
  "title": "",
  "body": " Do you remember what this code prints to the screen?   "
},
{
  "id": "activity-46",
  "level": "2",
  "url": "loops-operators-practice.html#activity-46",
  "type": "Activity",
  "number": "13.6",
  "title": "",
  "body": " Now look at the part that is commented out - basically the same printf() statements as above, but this time all in one line. What do you expect this to print to the screen?  Be sure to think about this first, before actually running the code.   "
},
{
  "id": "activity-47",
  "level": "2",
  "url": "loops-operators-practice.html#activity-47",
  "type": "Activity",
  "number": "13.7",
  "title": "",
  "body": " Okay, now you can hit the Run button. Is this what you predicted?   What happened?  "
},
{
  "id": "loops-fun",
  "level": "1",
  "url": "loops-fun.html",
  "type": "Section",
  "number": "13.7",
  "title": "Fun With Loops!",
  "body": " Fun With Loops!  Remember: the best way to learn to code is to write code! So let's practice our loops. Pick one of the following prompts. And most importantly: have fun! If you get done early, pick another one!   Option 1    Write a program that prompts the user to enter a positive integer n and then computes the sum of the numbers from 1 through n . For example, if the user enters 5, then your program's output should be:  \"The sum of the numbers from 1 through 5 equals 15.\"  A quick way to check that your program works is to ensure that the sum of the numbers from 1 to n equals .  Write two versions of this program: One using a while -loop, and another one using a for -loop.   When you are done, please paste your code into the code submission box below:       Option 2    Write a program that continuously asks the user to enter a nonzero number and adds up all of the numbers entered. The program should terminate when the user enters a zero and then print out the total sum.  Here is a sample run of the program:   Please enter a number:  5  Please enter a number:  11  Please enter a number:  -3  Please enter a number:  0  The numbers you entered add up to 13.    When you are done, please paste the code you  added  into the code submission box below:       Option 3    Write a program that prompts the user for two numbers p and q , then calculates the greatest common divisor of p and q . You may do so using the \"brute force\" method: If q   p , for example, you simply check each of the divisors q, q-1, q-2, ..., 1 , until you find one that divides both p and q .  Challenge: implement the Euclidean algorithm!   When you are done, please paste the code you  added  into the code submission box below:       Option 4    Write a program that determines whether a number entered by the user is prime (again, you may use the brute force method, going through all possible divisors 2, 3, 4, , n ).  (You only really need to check factors up to .)   When you are done, please paste the code you  added  into the code submission box below:      "
},
{
  "id": "activity-13-7-1_Fun_With_Loops_1",
  "level": "2",
  "url": "loops-fun.html#activity-13-7-1_Fun_With_Loops_1",
  "type": "Activity",
  "number": "13.8",
  "title": "",
  "body": "  Write a program that prompts the user to enter a positive integer n and then computes the sum of the numbers from 1 through n . For example, if the user enters 5, then your program's output should be:  \"The sum of the numbers from 1 through 5 equals 15.\"  A quick way to check that your program works is to ensure that the sum of the numbers from 1 to n equals .  Write two versions of this program: One using a while -loop, and another one using a for -loop.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-13-7-2-Fun_With_Loops_2-no-output",
  "level": "2",
  "url": "loops-fun.html#activity-13-7-2-Fun_With_Loops_2-no-output",
  "type": "Activity",
  "number": "13.9",
  "title": "",
  "body": "  Write a program that continuously asks the user to enter a nonzero number and adds up all of the numbers entered. The program should terminate when the user enters a zero and then print out the total sum.  Here is a sample run of the program:   Please enter a number:  5  Please enter a number:  11  Please enter a number:  -3  Please enter a number:  0  The numbers you entered add up to 13.    When you are done, please paste the code you  added  into the code submission box below:    "
},
{
  "id": "activity-13-7-3-Fun_With_Loops_3-no-output",
  "level": "2",
  "url": "loops-fun.html#activity-13-7-3-Fun_With_Loops_3-no-output",
  "type": "Activity",
  "number": "13.10",
  "title": "",
  "body": "  Write a program that prompts the user for two numbers p and q , then calculates the greatest common divisor of p and q . You may do so using the \"brute force\" method: If q   p , for example, you simply check each of the divisors q, q-1, q-2, ..., 1 , until you find one that divides both p and q .  Challenge: implement the Euclidean algorithm!   When you are done, please paste the code you  added  into the code submission box below:    "
},
{
  "id": "activity-13-7-4-Fun_With_Loops_4-no-output",
  "level": "2",
  "url": "loops-fun.html#activity-13-7-4-Fun_With_Loops_4-no-output",
  "type": "Activity",
  "number": "13.11",
  "title": "",
  "body": "  Write a program that determines whether a number entered by the user is prime (again, you may use the brute force method, going through all possible divisors 2, 3, 4, , n ).  (You only really need to check factors up to .)   When you are done, please paste the code you  added  into the code submission box below:    "
},
{
  "id": "loops-summary",
  "level": "1",
  "url": "loops-summary.html",
  "type": "Section",
  "number": "13.8",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   An in-depth look at how the for -loop really works  The while -loop  The do-while -loop  Compound assignment operators  Increment and decrement operators  Lots of loop practice   "
},
{
  "id": "linux-editor",
  "level": "1",
  "url": "linux-editor.html",
  "type": "Section",
  "number": "14.1",
  "title": "Install Software On Your Computer",
  "body": " Install Software On Your Computer  Three pieces of software are needed to get your computer set up for Linux and our next class meeting. Don't worry, you'll only need to go through these steps once, so don't cut corners and skip anything this time!   Install Dartmouth's Virtual Private Network  Linux VPN To connect to our server-based coding environment, you must first connect to Dartmouth's network. This can be accomplished by using a Virtual Private Network (VPN), which allows you to extend Dartmouth's private network across the internet to where you are currently located. Please follow the VPN installation instructions pertaining to your operating system.    Install an Editor and Compile \"On The Server\"  Linux install Now, once you have the VPN client running and connected to Dartmouth, you need to install a certain editor on your computer in order to use our server-based coding environment. This is actually not really necessary but will make subsequent steps much simpler for you. Please follow the installation instructions to get your computer prepared. Be sure to follow ALL of the instructions. You will even write and compile your first program (\"hello word\", again...).    Install Thayer Shares  Please read about the Thayer Shares system here . Next, please install the connection software appropriate for your computer. To do so, follow these installation instructions .     Did you install all necessary software on your computer and write the \"hello, world\" program on the server?  Enter yes or no:    What is the command prompt you see when you log onto the Thayer School engs20 server?   )  ~$    Correct      ~\/    Not quite. Try again!      $$    Not quite. Try again!      \/$    Not quite. Try again!      When logged into the Thayer School engs20 server, what does the command \"clear\" do?   )  It clears several lines and puts the command prompt at the top of the screen.    Correct      It erases the command history.    Not quite. Try again!      It cleans the operating system.    Not quite. Try again!      It prints out multiple empty lines and puts the command prompt at the bottom of the screen.    Not quite. Try again!      "
},
{
  "id": "quiz-linux-1",
  "level": "2",
  "url": "linux-editor.html#quiz-linux-1",
  "type": "Reading Question",
  "number": "14.1.4.1",
  "title": "",
  "body": " Did you install all necessary software on your computer and write the \"hello, world\" program on the server?  Enter yes or no:  "
},
{
  "id": "quiz-linux-2",
  "level": "2",
  "url": "linux-editor.html#quiz-linux-2",
  "type": "Reading Question",
  "number": "14.1.4.2",
  "title": "",
  "body": " What is the command prompt you see when you log onto the Thayer School engs20 server?   )  ~$    Correct      ~\/    Not quite. Try again!      $$    Not quite. Try again!      \/$    Not quite. Try again!    "
},
{
  "id": "quiz-linux-3",
  "level": "2",
  "url": "linux-editor.html#quiz-linux-3",
  "type": "Reading Question",
  "number": "14.1.4.3",
  "title": "",
  "body": " When logged into the Thayer School engs20 server, what does the command \"clear\" do?   )  It clears several lines and puts the command prompt at the top of the screen.    Correct      It erases the command history.    Not quite. Try again!      It cleans the operating system.    Not quite. Try again!      It prints out multiple empty lines and puts the command prompt at the bottom of the screen.    Not quite. Try again!    "
},
{
  "id": "linux-intro",
  "level": "1",
  "url": "linux-intro.html",
  "type": "Section",
  "number": "14.2",
  "title": "Introduction to Linux",
  "body": " Introduction to Linux  Linux is an operating system. Here are some quick facts about Linux:   Linux was developed by Linus Torvalds who was at the time a student at the University of Helsinki in Finland. Torvalds' M.Sc. thesis was titled Linux: A Portable Operating System .  The prototype for Linux was released in 1991, when Torvalds was 21 years old, with version 1.0 following in 1994. What Torvalds had in mind with this operating system is encapsulated well in his prototype announcement: \"Hello everybody out there using minix - I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones. (...) I'll get something practical within a few months, and I'd like to know what features most people would want. Any suggestions are welcome, but I won't promise I'll implement them :-) Linus (torvalds@kruuna.helsinki.fi)\"  While a server-based operating system (namely Unix) already existed at the time, Unix is expensive proprietary software that at the time only ran on special expensive hardware. Torwalds' goal was to create a free, Unix-like operating system that can run on PC hardware.  To this day, Linux is distributed under a license prohibiting commercial distribution.  By now, Linux has been ported to more computer hardware platforms than any other operating system (servers, mainframe computers, supercomputers, desktop computers, Chrome OS, also runs on embedded systems including smartphones and tablet computers running Android, DVR devices, network routers, TVs, video game consoles, smartwatches.)   One thing that will be a bit unfamiliar and take getting used to is the fact that graphical user interfaces did not yet exist when Linux was invented. A computer mouse was not a thing yet either. As such, rather than double clicking on a folder in order to advance into the folder, you'd issue a command with with your keyboard into a so-called terminal window whose purpose it is to interpret the commands you type.  Despite the fact that by now, graphical user interfaces do exist for Linux, it'll be beneficial for us to learn about the typed commands. To make things a bit easier we'll explore such commands both in the graphical user interface as well as in the terminal window.  Thus, to help you get acquainted with Linux we'll follow along some of the commands using a file browser. For this purpose, please navigate to your workspace folder inside your engs20 folder on Thayer Shares .  In case you don't know how to get there, the next two subsections include detailed instructions for how to do so on a PC or Mac :   Navigating to your Workspace Folder on a PC   Connect to your Home folder on Thayer Shares :   Then, navigate to your workspace directory (engs20 workspace):      You should now see the hello.c program you created earlier:      Navigating to your Workspace Folder on a Mac   Connect to your Home folder on Thayer Shares :      Then, navigate to your workspace directory (engs20 workspace):      You should now see the hello.c program you created earlier:     "
},
{
  "id": "linux-terminal",
  "level": "1",
  "url": "linux-terminal.html",
  "type": "Section",
  "number": "14.3",
  "title": "Connect to Server via Terminal Window",
  "body": " Connect to Server via Terminal Window  To connect to the ENGS20 Server via a Terminal Window, please click on the following link. Once the window opens in a new tab, wait until you are prompted to enter your Dartmouth password, and then do so.  CLICK HERE  On your screen, please arrange the windows showing the terminal and the file browser, so that you can see both at the same time.    Arranging Terminal Window and File Browser   Arranging Terminal Window and File Browser   "
},
{
  "id": "figure-9",
  "level": "2",
  "url": "linux-terminal.html#figure-9",
  "type": "Figure",
  "number": "14.1",
  "title": "",
  "body": "  Arranging Terminal Window and File Browser   Arranging Terminal Window and File Browser  "
},
{
  "id": "linux-files",
  "level": "1",
  "url": "linux-files.html",
  "type": "Section",
  "number": "14.4",
  "title": "Linux File System",
  "body": " Linux File System   Navigation Commands  To begin exploring how to find your files using typed commands in Linux, we must learn how to navigate between folders using only typed commands.  The first command we will study is ls . This command lists the content of a directory. You of course are familiar with how to accomplish the equivalent in a file browser: you simply click on the folder icon and automatically are shown the files inside the folder.   Try it out by typing ls in your terminal window. What happens?   Switches can be added to a command to modify its behavior. For ls , switches include:   -l : long listing (type ls -l into the terminal window to try it out)  -t : sorts by date (type ls -t )  -a : show all files, even those that are hidden by the operating system (type ls -a )   You can also combine several switches in arbitrary order:   -lta : shows a long listing, sorted by date, of all files (type ls -lta )  See for more switches and description of ls    Now, try typing ls engs20 into the terminal window. What do you see? How would you accomplish this in the file browser?   The next command we will discuss is cd . This command is used to change the directory in which you find yourself.   Try it out by typing cd engs20 , then type ls . Now, your file browser and terminal are both pointing to the same directory.   How do we return to the parent directory , which is the directory in which engs20 is located?   Type cd .. , then type ls to verify that we are back to where we started. How would you do this in the file browser?  What are all these other directories and where in the file system are we to begin with?     Hierarchical File System  The Linux file system is hierarchical and is pretty much organized like a tree. The start of the file system is called its root directory: \/ . Type cd \/ , then type ls . You should see something like the following:   Where did engs20 go? Don't worry, we'll find it!    Expanded Hierarchical File System  Can you find your engs20 folder now?    Now that you know where it is located, what Linux commands do you type in the terminal window to get you back into the engs20 folder?    "
},
{
  "id": "activity-52",
  "level": "2",
  "url": "linux-files.html#activity-52",
  "type": "Activity",
  "number": "14.1",
  "title": "",
  "body": " Try it out by typing ls in your terminal window. What happens?  "
},
{
  "id": "activity-53",
  "level": "2",
  "url": "linux-files.html#activity-53",
  "type": "Activity",
  "number": "14.2",
  "title": "",
  "body": " Now, try typing ls engs20 into the terminal window. What do you see? How would you accomplish this in the file browser?  "
},
{
  "id": "activity-54",
  "level": "2",
  "url": "linux-files.html#activity-54",
  "type": "Activity",
  "number": "14.3",
  "title": "",
  "body": " Try it out by typing cd engs20 , then type ls . Now, your file browser and terminal are both pointing to the same directory.  "
},
{
  "id": "activity-55",
  "level": "2",
  "url": "linux-files.html#activity-55",
  "type": "Activity",
  "number": "14.4",
  "title": "",
  "body": " Type cd .. , then type ls to verify that we are back to where we started. How would you do this in the file browser?  What are all these other directories and where in the file system are we to begin with?  "
},
{
  "id": "activity-56",
  "level": "2",
  "url": "linux-files.html#activity-56",
  "type": "Activity",
  "number": "14.5",
  "title": "",
  "body": " Now that you know where it is located, what Linux commands do you type in the terminal window to get you back into the engs20 folder?  "
},
{
  "id": "linux-directories",
  "level": "1",
  "url": "linux-directories.html",
  "type": "Section",
  "number": "14.5",
  "title": "Making and Using Directories",
  "body": " Making and Using Directories   The Home Directory  The ~ (tilde) symbol is a quick way (sort of a short-hand) for specifying your home directory. Every user has a home directory and each user's home directory is their own (not accessible to others).  On the engs20 servers, you are the user Your NetID , and your home directory is:  \/thayerfs\/home\/Your_NetID  Thus, the ~ stands for that exact path on the engs20 servers. Try it out: type cd ~ and then ls to verify that you are indeed back in your home directory.     Print the Working Directory  Got lost in your filesystem? Type pwd to p rint the w orking d irectory (that is the directory that you are currently in).  You can also look at your prompt in terminal to find out where you are. Or you could simply type cd with nothing after it, and you will be brought to your home directory. Or cd ~ as we just learned.    Make a New Directory  The command mkdir creates a new directory, and it will only work in a directory for which you have write permission .   Change into your workspace directory by typing cd or cd ~ to change into your home directory, then cd engs20 , followed by cd workspace to be brought into the workspace directory.  Now, type mkdir LA1 to create a directory for Long Assignment 1. Note: Linux is case sensitive! So la1 is totally different from LA1 .  Type ls to verify that you have created a new directory named LA1 in your workspace directory. Verify that you see the directory in your file browser as well.    "
},
{
  "id": "activity-57",
  "level": "2",
  "url": "linux-directories.html#activity-57",
  "type": "Activity",
  "number": "14.6",
  "title": "",
  "body": " Change into your workspace directory by typing cd or cd ~ to change into your home directory, then cd engs20 , followed by cd workspace to be brought into the workspace directory.  Now, type mkdir LA1 to create a directory for Long Assignment 1. Note: Linux is case sensitive! So la1 is totally different from LA1 .  Type ls to verify that you have created a new directory named LA1 in your workspace directory. Verify that you see the directory in your file browser as well.  "
},
{
  "id": "linux-remove-file",
  "level": "1",
  "url": "linux-remove-file.html",
  "type": "Section",
  "number": "14.6",
  "title": "Remove a File",
  "body": " Remove a File  The command rm removes (deletes) a file.  CAUTION : rm does not check whether you actually mean to remove a file... It'll simply go ahead and do so.   In the Linux window below , change into the directory ~\/engs20 (from your home directory, type cd engs20 ). Then, type ls . Now, delete the file \"toBeDeleted.txt\" by typing rm toBeDeleted.txt . Type ls and observe that the file is now gone.  There must be a waste basket somewhere? Where is the trash folder? Where did the file \"toBeDeleted.txt\" go?    "
},
{
  "id": "activity-58",
  "level": "2",
  "url": "linux-remove-file.html#activity-58",
  "type": "Activity",
  "number": "14.7",
  "title": "",
  "body": " In the Linux window below , change into the directory ~\/engs20 (from your home directory, type cd engs20 ). Then, type ls . Now, delete the file \"toBeDeleted.txt\" by typing rm toBeDeleted.txt . Type ls and observe that the file is now gone.  There must be a waste basket somewhere? Where is the trash folder? Where did the file \"toBeDeleted.txt\" go?   "
},
{
  "id": "linux_display-file",
  "level": "1",
  "url": "linux_display-file.html",
  "type": "Section",
  "number": "14.7",
  "title": "Display File Contents",
  "body": " Display File Contents  Linux provides a convenient way to peek into a file without going through the hassle of opening it in an editor. This is somewhat similar to the preview pane that pops up in your file browser when you click on or hover over a file with your mouse.  The command less displays contents of a file, one screen-full at a time. Once you see the first screen-full you can navigate through the file's contents either using your cursor keys or advance by the page via the following:   Space Bar advances one page  Ctrl+b goes back one page  q exits the less program and returns you to the command prompt    In the Practice Linux Window below, there is a file named \"lookAtMe.txt\" in the directory engs20 , which itself is located in your home directory. Which one of the words below is hidden in the file \"lookAtMe.txt\"?   Chocolate  Cookies  Coffee  Coconuts     "
},
{
  "id": "activity-59",
  "level": "2",
  "url": "linux_display-file.html#activity-59",
  "type": "Activity",
  "number": "14.8",
  "title": "",
  "body": " In the Practice Linux Window below, there is a file named \"lookAtMe.txt\" in the directory engs20 , which itself is located in your home directory. Which one of the words below is hidden in the file \"lookAtMe.txt\"?   Chocolate  Cookies  Coffee  Coconuts    "
},
{
  "id": "linux-move-file",
  "level": "1",
  "url": "linux-move-file.html",
  "type": "Section",
  "number": "14.8",
  "title": "Move a File",
  "body": " Move a File  The command mv moves a file (as in take it from one location and relocate the file to another location). It is the command-line analog of drag-and-drop.   In the Practice Linux Window below, verify that there is a file named \"myLongAssignment.c\" inside the engs20 folder. Then, type:  mv ~\/engs20\/myLongAssignment.c ~\/engs20\/workspace\/LA1  If you are already in the engs20 folder, you could type:  mv myLongAssignment.c workspace\/LA1  Now, check that \"myLongAssignment.c\" no longer resides in ~\/engs20 but has moved to ~\/engs20\/workspace\/LA1 .  You can also rename a file using mv . Navigate into the folder ~\/engs20\/workspace\/LA1 and type mv myLongAssignment.c myLA.c . Type ls to verify the name change.    "
},
{
  "id": "activity-60",
  "level": "2",
  "url": "linux-move-file.html#activity-60",
  "type": "Activity",
  "number": "14.9",
  "title": "",
  "body": " In the Practice Linux Window below, verify that there is a file named \"myLongAssignment.c\" inside the engs20 folder. Then, type:  mv ~\/engs20\/myLongAssignment.c ~\/engs20\/workspace\/LA1  If you are already in the engs20 folder, you could type:  mv myLongAssignment.c workspace\/LA1  Now, check that \"myLongAssignment.c\" no longer resides in ~\/engs20 but has moved to ~\/engs20\/workspace\/LA1 .  You can also rename a file using mv . Navigate into the folder ~\/engs20\/workspace\/LA1 and type mv myLongAssignment.c myLA.c . Type ls to verify the name change.   "
},
{
  "id": "linux-copy-file",
  "level": "1",
  "url": "linux-copy-file.html",
  "type": "Section",
  "number": "14.9",
  "title": "Copy a File",
  "body": " Copy a File  The command cp makes a copy of a file, so you'll have two independent copies of the same file.   In the Practice Linux Window below, copy the file ~\/engs20\/workspace\/hello.c to the folder ~\/ens20\/workspace\/LA1 What is the code to do so?    "
},
{
  "id": "activity-61",
  "level": "2",
  "url": "linux-copy-file.html#activity-61",
  "type": "Activity",
  "number": "14.10",
  "title": "",
  "body": " In the Practice Linux Window below, copy the file ~\/engs20\/workspace\/hello.c to the folder ~\/ens20\/workspace\/LA1 What is the code to do so?   "
},
{
  "id": "linux-compile",
  "level": "1",
  "url": "linux-compile.html",
  "type": "Section",
  "number": "14.10",
  "title": "Compiling Code",
  "body": " Compiling Code   In the server window below, enter your Dartmouth password when prompted. You'll find yourself back on the ENGS20 server. This is thus no longer a practice coding window but rather the real deal. So do not randomly delete files; you are now in your own space on the server with your own responsibilities.  Navigate to your workspace directory ( cd engs20\/workspace ), then type ls . You should see your \"hello.c\" program there.  Type compile hello.c , which will translate your code into machine language. The compiler names the resulting executable program \"hello\". In order to run this code, type hello (the name of the executable file resulting from compiling \"hello.c\").  Open your editor (NotePad++ on a PC or BBEdit on a Mac) and establish a connection to the ENGS20 server. Next, open \"hello.c\" in your editor. Make a change to your code, such as printing out your pet's name, and save the changes on the server.  Verify in the code window below that your code has indeed changed (hint: use the less command). Now, recompile and run your code to observe your printed changes.    "
},
{
  "id": "activity-62",
  "level": "2",
  "url": "linux-compile.html#activity-62",
  "type": "Activity",
  "number": "14.11",
  "title": "",
  "body": " In the server window below, enter your Dartmouth password when prompted. You'll find yourself back on the ENGS20 server. This is thus no longer a practice coding window but rather the real deal. So do not randomly delete files; you are now in your own space on the server with your own responsibilities.  Navigate to your workspace directory ( cd engs20\/workspace ), then type ls . You should see your \"hello.c\" program there.  Type compile hello.c , which will translate your code into machine language. The compiler names the resulting executable program \"hello\". In order to run this code, type hello (the name of the executable file resulting from compiling \"hello.c\").  Open your editor (NotePad++ on a PC or BBEdit on a Mac) and establish a connection to the ENGS20 server. Next, open \"hello.c\" in your editor. Make a change to your code, such as printing out your pet's name, and save the changes on the server.  Verify in the code window below that your code has indeed changed (hint: use the less command). Now, recompile and run your code to observe your printed changes.   "
},
{
  "id": "linux-languages",
  "level": "1",
  "url": "linux-languages.html",
  "type": "Section",
  "number": "14.11",
  "title": "Computer Languages",
  "body": " Computer Languages  languages How did we choose the computer languages studied in this class? Why C? Why Matlab? Watch this video to find out:   Video Description    Computer languages  Low-level versus high-level languages  Steps to translating into machine language  Compiled versus interpreted languages        Let's start with a review question...  You just wrote the following program:  #include <stdio.h> int myrecursion(int i, int j); int main(void) { int a; a = myrecursion(24,7); printf(\"%d\\n\", a); return(0); } int myrecursion(int i, int j) { if (i>j) return myrecursion(i-j, j); else return(i); }  What is the value of the variable a that is printed to the screen at the end of the program? Choose one: 3 \/ 7 \/ 10 \/ 17 \/ 24  How many times is the function myrecursion() called during execution of this program? Choose one: 1 time \/ 2 times \/ 3 times \/ 4 times \/ 5 times  Feel free to use the window below to experiment. You may want to add some printf() statements inside the recursive function to be able to track its behavior. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.   Enter your two answers, separated by a comma, i.e.  30, 8 times :    Please arrange the following computer languages from lowest to highest level:  C, machine language, assembly language, MATLAB, Java      "
},
{
  "id": "quiz-languages-1",
  "level": "2",
  "url": "linux-languages.html#quiz-languages-1",
  "type": "Reading Question",
  "number": "14.11.1",
  "title": "",
  "body": " Let's start with a review question...  You just wrote the following program:  #include <stdio.h> int myrecursion(int i, int j); int main(void) { int a; a = myrecursion(24,7); printf(\"%d\\n\", a); return(0); } int myrecursion(int i, int j) { if (i>j) return myrecursion(i-j, j); else return(i); }  What is the value of the variable a that is printed to the screen at the end of the program? Choose one: 3 \/ 7 \/ 10 \/ 17 \/ 24  How many times is the function myrecursion() called during execution of this program? Choose one: 1 time \/ 2 times \/ 3 times \/ 4 times \/ 5 times  Feel free to use the window below to experiment. You may want to add some printf() statements inside the recursive function to be able to track its behavior. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.   Enter your two answers, separated by a comma, i.e.  30, 8 times :  "
},
{
  "id": "quiz-languages-2",
  "level": "2",
  "url": "linux-languages.html#quiz-languages-2",
  "type": "Reading Question",
  "number": "14.11.2",
  "title": "",
  "body": " Please arrange the following computer languages from lowest to highest level:  C, machine language, assembly language, MATLAB, Java    "
},
{
  "id": "linux-cheat-sheet",
  "level": "1",
  "url": "linux-cheat-sheet.html",
  "type": "Section",
  "number": "14.12",
  "title": "List of Linux Commands",
  "body": " List of Linux Commands  Linux commands  The Linux operating system provides a wealth of commands that are extremely useful. Below you will find some of the most commonly used commands that will be useful in this course, along with descriptions and information on how and when to use them.  ls :  lists content of a directory   switches modify behavior:  -l : long listing  -t : sort by date  -a : show all files  -S : sort by size  -r : sort in reverse order  -lta : long, sorted by date, all files  man ls :gives information on ls and all possible switches       cd :  changes working directory  cd .. moves up a directory  . is the current directory, .. is one directory up, etc.     can change to a directory with path  i.e. cd ~\/engs20\/workspace     cd ~ or simply cd changes to home directory    pwd :  prints working directory  alternatively, looks at your command prompt to determine your current location    mkdir :   creates a new directory  will only work in a directory for which you have write permission       rm :   removes (deletes) a file  does not check whether you mean it  demonstrate in a shell and file browser with a test file to delete       rmdir :  removes a directory, provided it contains no files or directories    less :  displays contents of a file, one screen-full at a time  space bar advances one page  Ctrl+b goes back one page  q quits less and returns you to the command prompt    mv :  moves a file to a new location  can also use mv to simply rename a file    cp :  makes an independent copy of a file    man :   tells you about the a given command and its switches (options)  i.e. man cp       "
},
{
  "id": "linux-summary",
  "level": "1",
  "url": "linux-summary.html",
  "type": "Section",
  "number": "14.13",
  "title": "Summary",
  "body": " Summary  In this chapter, we learned about the following topics:   Introduction to Linux and its file system  How to install an editor and other necessary software on your computer in order to work on the engs20 servers to compile code  Practice working on the engs20 servers   "
},
{
  "id": "files-intro",
  "level": "1",
  "url": "files-intro.html",
  "type": "Section",
  "number": "15.1",
  "title": "File I\/O Overview",
  "body": " File I\/O Overview  So far, the only way in which we have been able to supply data to our code is via interaction with the user at runtime. We call such program use \"interactive\" the user supplies input.  Input to a program can also come from a data file and this is sometimes called batch mode  a data file provides input to the code.  A data file  is stored somewhere and accessed by your program. The storage location could be your hard disk, a CD-ROM (remember those?), a flash drive, etc.  In C, there are three steps that are necessary to execute in the following order when attempting to read from or write to a file:   Open file  Read\/write to\/from file  Close file   We will now learn about each of these steps in detail.    What do you think are some benefits gained from receiving input from a data file as opposed to interactive user input?    There are many! We'll explore the benefits throughout this chapter and beyond.    "
},
{
  "id": "investigation-19",
  "level": "2",
  "url": "files-intro.html#investigation-19",
  "type": "Investigate",
  "number": "15.1",
  "title": "",
  "body": "  What do you think are some benefits gained from receiving input from a data file as opposed to interactive user input?    There are many! We'll explore the benefits throughout this chapter and beyond.   "
},
{
  "id": "files-read",
  "level": "1",
  "url": "files-read.html",
  "type": "Section",
  "number": "15.2",
  "title": "Reading from a File",
  "body": " Reading from a File  file fopen() file read This program demonstrates how to open a file, read numbers from the file and then close the file.  How do we know how many numbers are stored in the file? In this particular example, we are told that there are 10 numbers stored in the file. Later, we will learn how to figure this information out on our own. Here is what the file looks like:  9 56 3 8 -11 0 -45 55 2 78    Your Turn: Calculating the Average of the Numbers Read from the File  Now, suppose we wanted to find the average of the numbers read from the same file as above.   Use the code window below to find that average!     "
},
{
  "id": "activity-63",
  "level": "2",
  "url": "files-read.html#activity-63",
  "type": "Activity",
  "number": "15.2",
  "title": "",
  "body": " Use the code window below to find that average!   "
},
{
  "id": "files-read-practice",
  "level": "1",
  "url": "files-read-practice.html",
  "type": "Section",
  "number": "15.3",
  "title": "Practice Reading from Files",
  "body": " Practice Reading from Files  Now that you have seen an example of how to read numbers from a file and find their average it's time to practice some more. Pick one of the following options:   Option 1    Modify the program we just wrote so that it also computes the standard deviation of the numbers in the file.  Hint: To do so, you'll first have to find the average (as we did before). Then, you have to reset the file by closing it and re-opening it, then you can read the file again and compute the standard deviation using the following:   For each number you read from the file, subtract the average and square the result.  You need to find the average of those squared differences.  Take the square root of that average squared difference and you are done!    When you are done, please paste your code into the code submission box below:       Option 2    Modify the program we just wrote so that, instead of finding the average of the numbers in the file, it finds the largest number in the file.   When you are done, please paste your code into the code submission box below:       Option 3    Modify the program we just wrote so that instead of reading numbers, it reads characters from the file my_second_file.txt . Print out the characters you read from the file one next to the other.  As before, for now we are telling you how many characters are in the file, namely 9. So that you know what to expect, here is what the contents of the file looks like:  chocolate   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-15-4-1-Practice_Reading_From_Files_1",
  "level": "2",
  "url": "files-read-practice.html#activity-15-4-1-Practice_Reading_From_Files_1",
  "type": "Activity",
  "number": "15.3",
  "title": "",
  "body": "  Modify the program we just wrote so that it also computes the standard deviation of the numbers in the file.  Hint: To do so, you'll first have to find the average (as we did before). Then, you have to reset the file by closing it and re-opening it, then you can read the file again and compute the standard deviation using the following:   For each number you read from the file, subtract the average and square the result.  You need to find the average of those squared differences.  Take the square root of that average squared difference and you are done!    When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-15-4-2-Practice_Reading_From_Files_2",
  "level": "2",
  "url": "files-read-practice.html#activity-15-4-2-Practice_Reading_From_Files_2",
  "type": "Activity",
  "number": "15.4",
  "title": "",
  "body": "  Modify the program we just wrote so that, instead of finding the average of the numbers in the file, it finds the largest number in the file.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-15-4-3-Practice_Reading_From_Files_3",
  "level": "2",
  "url": "files-read-practice.html#activity-15-4-3-Practice_Reading_From_Files_3",
  "type": "Activity",
  "number": "15.5",
  "title": "",
  "body": "  Modify the program we just wrote so that instead of reading numbers, it reads characters from the file my_second_file.txt . Print out the characters you read from the file one next to the other.  As before, for now we are telling you how many characters are in the file, namely 9. So that you know what to expect, here is what the contents of the file looks like:  chocolate   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "files-read-efficient",
  "level": "1",
  "url": "files-read-efficient.html",
  "type": "Section",
  "number": "15.4",
  "title": "More Efficient File Reading",
  "body": " More Efficient File Reading  file EOF file fscanf() Normally, we won't know how many numbers are in a file before we open it, so how do we know when to stop reading from the file? It turns out, the fscanf() function actually tells us when we reach the end of the file via a return value of EOF. This is so important that I'll say it again: It is the the return value of the fscanf() function through which we'll know when the end of the file has been reached. It is not the value that was read. This is a super common cause for confusion so be sure to ask lots of questions and make sure you understand the difference. To sum up: Instead of using a for loop to read from the file, from now on we'll simply keep reading until we reach the end of the file, indicated by the return value of EOF of the fscanf() function.  Let's look at how this is done. This time, the file simply contains the following numbers:  6 3 -55 4 67 299 -4 -7 -3  Pretend you don't know how many numbers there are in the file.   Notice how the fscanf() function communicates with us in two ways: Values read from the file are transmitted to us via the variables (with ampersands in front of them) that appear inside the parentheses (in this case we call the variable num ). On the other hand, the return value (which we store in the variable result here) signifies whether the end of the file has been reached. When this is the case, the return value equals EOF .  It is actually not even necessary to store the return value of the fscanf() function in a separate variable as we see in the even more compact way of writing the code below. But if you are more comfortable in using the extra variable then by all means, please do!  Here is a very efficient way to accomplish file reading until the end of the file:   "
},
{
  "id": "files-exist",
  "level": "1",
  "url": "files-exist.html",
  "type": "Section",
  "number": "15.5",
  "title": "Check Whether a File Exists",
  "body": " Check Whether a File Exists  How do we know whether our file is actually open? What if we misspelled the filename for example? Or what if something went wrong during opening of the file? Or what if the file doesn't even exist (but we thought it did)?  file check if exists We use the fact that fopen() returns a special value if it is not able to open the file for some reason. That special value is a NULL pointer .    In , we learned that C interprets variables with the value of zero as false. Do you think that a null pointer will be interpreted as true or false?    False    There are only a few types and values of variables in C that are interpreted as false, and a null pointer is one of them!     Note that in the case where the file isn't actually open (indicated by fopen() returning a value of NULL ) there is no need to close the file. In fact, even attempting to close the file in this case would lead to a runtime error: feel free to try it out!  "
},
{
  "id": "investigation-20",
  "level": "2",
  "url": "files-exist.html#investigation-20",
  "type": "Investigate",
  "number": "15.6",
  "title": "",
  "body": "  In , we learned that C interprets variables with the value of zero as false. Do you think that a null pointer will be interpreted as true or false?    False    There are only a few types and values of variables in C that are interpreted as false, and a null pointer is one of them!   "
},
{
  "id": "files-read-server",
  "level": "1",
  "url": "files-read-server.html",
  "type": "Section",
  "number": "15.6",
  "title": "Reading from a File on the Server",
  "body": " Reading from a File on the Server  So far all files to practice reading from have been provided for you via our convenient code windows. But if you wanted to read from a file that you yourself provide we'd reach the limitations of our code windows. Such work has to be done on the Thayer School servers (or with a C compiler installed on your computer). Let's practice file reading on the Thayer School servers. Recall that in order to work on the Thayer School servers you need to be connected to the Dartmouth Secure Network via a VPN connection. If you haven't already, be sure to start VPN.  Let's go back to our first file reading example (see the code window below) and make it work on the servers. To do so, we need to save the code on the server: let's call the program fileRead0.c , and we also need to save the data file on the server (that is the file containing the numbers): let's call that file my_first_file.txt . You can put the same numbers into the file that are in the file in the code window or you can pick any other 10 integer numbers and place them into a file.   Be sure to save both the source code and the data file inside the same directory. Then, log onto the server, navigate to the directory with these files, compile the source code using the command compile fileRead0.c and then run the code by simply typing fileRead0 at the command prompt.  "
},
{
  "id": "files-write",
  "level": "1",
  "url": "files-write.html",
  "type": "Section",
  "number": "15.7",
  "title": "Writing to a File",
  "body": " Writing to a File  So far we have read data from files. It is just as easy to write data to a file. The main differences to reading are:   file write Use \"w\" (as in writing) in the fopen() statement instead of \"r\" (as in reading).  file fprintf() Use fprintf() to write to the file instead of fscanf() to read from the file.   When writing to a file, the first step is to open the file using:  fopen(filename, \"w\");  Note that if the file does not exist prior to this command then it will be created . If it does exist already, then the existing file will be overwritten without any warning (you might lose important data this way!!).  Another way to write to a file is to open it for appending :  fopen(filename, \"a\");  This appends data to the file at its end (if the file exists) and otherwise creates a new file. Take a look at this example:   "
},
{
  "id": "files-summary",
  "level": "1",
  "url": "files-summary.html",
  "type": "Section",
  "number": "15.8",
  "title": "Summary",
  "body": " Summary  In this chapter, we studied the following topics:   How to open a file - either for reading or for writing  How to write data to a file  How to read data from a file  How to check whether we have reached the end of a file  How to check whether a file exists \/ is actually open for reading.  How to close a file   "
},
{
  "id": "debug-software",
  "level": "1",
  "url": "debug-software.html",
  "type": "Section",
  "number": "16.1",
  "title": "Software Development",
  "body": " Software Development  Now that our programs are starting to get more complex (and the first longer assignment is coming up), it's time to think more carefully about how to organize your mind and your program to accomplish more complicated tasks.   Video Description    Software development method  software development Specify the problem requirements, analyze the problem, design the algorithm        Quick review: On your hard drive you have a file named \"my_grades.txt\", in which you store all of your course grades (as floats) for the purpose of calculating your GPA. You have already declared a variable ifile via  FILE *ifile;  and now wish to open the file my_grades.txt for reading. Which of the following commands should you use?   )  ifile = fopen(\"my_grades.txt\", \"r\");    Correct      fopen(ifile, \"my_grades.txt\", \"r\");    Not quite. Try again!      fopen(\"my_grades.txt\", \"w\");    Not quite. Try again!      ifile = fopen(my_grades.txt, \"a\");    Not quite. Try again!      As in the previous question, you have a file named \"my_grades.txt\" on your hard drive, in which you store all of your course grades (as floats) for the purpose of calculating your GPA. You have already declared a variable myfile of type FILE * and a variable num of type float via  FILE *myfile; float num = 3.7;  You wish to add the new grade (stored in num) to the end of the file. Please select the appropriate commands from the list below and put them into the correct order:    myfile = fopen(\"my_grades.txt\", \"a\");    fprintf(myfile, \"%f\", num);    fclose(myfile);    fscanf(myfile, \"%f\", &num);    myfile = fprintf(\"%f\", num);    myfile = fopen(\"my_grades.txt\", \"w\");     Please select six steps from the following list and arrange them in the correct order for creating a computer program.    State the problem clearly    Identify input, outputs, and constraints    On paper, design the algorithm to solve the problem    Write the code to implement your algorithm    Test and verify the completed program    Maintain and update the program    Talk to your dog    Have a cup of coffee    Go for a walk     "
},
{
  "id": "quiz-debug-1",
  "level": "2",
  "url": "debug-software.html#quiz-debug-1",
  "type": "Reading Question",
  "number": "16.1.1",
  "title": "",
  "body": " Quick review: On your hard drive you have a file named \"my_grades.txt\", in which you store all of your course grades (as floats) for the purpose of calculating your GPA. You have already declared a variable ifile via  FILE *ifile;  and now wish to open the file my_grades.txt for reading. Which of the following commands should you use?   )  ifile = fopen(\"my_grades.txt\", \"r\");    Correct      fopen(ifile, \"my_grades.txt\", \"r\");    Not quite. Try again!      fopen(\"my_grades.txt\", \"w\");    Not quite. Try again!      ifile = fopen(my_grades.txt, \"a\");    Not quite. Try again!    "
},
{
  "id": "quiz-debug-2",
  "level": "2",
  "url": "debug-software.html#quiz-debug-2",
  "type": "Reading Question",
  "number": "16.1.2",
  "title": "",
  "body": " As in the previous question, you have a file named \"my_grades.txt\" on your hard drive, in which you store all of your course grades (as floats) for the purpose of calculating your GPA. You have already declared a variable myfile of type FILE * and a variable num of type float via  FILE *myfile; float num = 3.7;  You wish to add the new grade (stored in num) to the end of the file. Please select the appropriate commands from the list below and put them into the correct order:    myfile = fopen(\"my_grades.txt\", \"a\");    fprintf(myfile, \"%f\", num);    fclose(myfile);    fscanf(myfile, \"%f\", &num);    myfile = fprintf(\"%f\", num);    myfile = fopen(\"my_grades.txt\", \"w\");   "
},
{
  "id": "quiz-debug-3",
  "level": "2",
  "url": "debug-software.html#quiz-debug-3",
  "type": "Reading Question",
  "number": "16.1.3",
  "title": "",
  "body": " Please select six steps from the following list and arrange them in the correct order for creating a computer program.    State the problem clearly    Identify input, outputs, and constraints    On paper, design the algorithm to solve the problem    Write the code to implement your algorithm    Test and verify the completed program    Maintain and update the program    Talk to your dog    Have a cup of coffee    Go for a walk   "
},
{
  "id": "debug-code",
  "level": "1",
  "url": "debug-code.html",
  "type": "Section",
  "number": "16.2",
  "title": "Debugging Code",
  "body": " Debugging Code  debug The next thing that happens once you write more complicated programs, is that you make mistakes (\"bugs\"). You therefore need strategies to \"debug\" your program.  If you program compiles and runs but doesn't do what you had intended for it to do then one great strategy is to sprinkle your code with printf() statements that leave a trail of how the program executes and allow you to track the values of important variables along the way. This strategy makes it easier to pinpoint where in your code things are starting to go wrong.    Video Description    Using printf() statements to debug code  Insert them into your code to see what the value of a variable is at a certain point, or even to make sure your code is reaching a certain place (you would be surprised...)       Which of the three printf() statements in the code below is the most useful in debugging this faulty loop?  #include <stdio.h> int main(void) { int N, i, sum; printf(\"Good Morning!\\n\"); \/* printf() statement #1 *\/ i=1; N=10; sum=0; while (i <= N) { printf(\"i = %d, sum = %d.\") \/* printf() statement #2 *\/ sum += N; i--; } printf(\"The sum from 1 to %d equals %d.\\n\", N, sum); \/* printf() statement #3 *\/ return(0); }   )  printf() statement #2    Correct      printf() statement #1    Not quite. Try again!      printf() statement #3    Not quite. Try again!      You want to add up the numbers from 0 to 9 and write the following code to do so. What (if anything) is wrong with this code?  int i; int sum=0; for (i=0; i<10; i--) { sum = sum+i; } printf(\"The sum of the number from 0 to 9 equals %d\\n\", sum);   )  The instruction i-- should be i++    Correct      There is nothing wrong with this code.    Not quite. Try again!      One needs to use a while -loop here instead of a for -loop.    Not quite. Try again!      The variable i needs to be initialized.    Not quite. Try again!      "
},
{
  "id": "quiz-debug-4",
  "level": "2",
  "url": "debug-code.html#quiz-debug-4",
  "type": "Reading Question",
  "number": "16.2.1",
  "title": "",
  "body": " Which of the three printf() statements in the code below is the most useful in debugging this faulty loop?  #include <stdio.h> int main(void) { int N, i, sum; printf(\"Good Morning!\\n\"); \/* printf() statement #1 *\/ i=1; N=10; sum=0; while (i <= N) { printf(\"i = %d, sum = %d.\") \/* printf() statement #2 *\/ sum += N; i--; } printf(\"The sum from 1 to %d equals %d.\\n\", N, sum); \/* printf() statement #3 *\/ return(0); }   )  printf() statement #2    Correct      printf() statement #1    Not quite. Try again!      printf() statement #3    Not quite. Try again!    "
},
{
  "id": "quiz-debug-5",
  "level": "2",
  "url": "debug-code.html#quiz-debug-5",
  "type": "Reading Question",
  "number": "16.2.2",
  "title": "",
  "body": " You want to add up the numbers from 0 to 9 and write the following code to do so. What (if anything) is wrong with this code?  int i; int sum=0; for (i=0; i<10; i--) { sum = sum+i; } printf(\"The sum of the number from 0 to 9 equals %d\\n\", sum);   )  The instruction i-- should be i++    Correct      There is nothing wrong with this code.    Not quite. Try again!      One needs to use a while -loop here instead of a for -loop.    Not quite. Try again!      The variable i needs to be initialized.    Not quite. Try again!    "
},
{
  "id": "debug-conditional",
  "level": "1",
  "url": "debug-conditional.html",
  "type": "Section",
  "number": "16.3",
  "title": "Conditional Compilation",
  "body": " Conditional Compilation  printf() statements are a quick and easy way to trace the path of execution of a program.  But...  It can be tedious to insert and delete printf statements when code is being debugged. (After all, we don't want debug statements flashing by all the time.)  Of course you can comment out  (\/* *\/) the printf() statements after code is debugged. But it can still be a bit tedious (yet, it's my preferred method...).  There is another way however:  debug conditional You can conditionally include debugging lines (such as printf() statements) by instructing the preprocessor to either include them or to not do so. Any line that starts with a hash mark ( # ) is meant for and interpreted by the preprocessor. In fact, we have already seen the preprocessor at work with our #include statements! Therefore, when using preprocessor directives to conditionally include debug statements then it is the preprocessor that does the work!    Video Description    Using preprocessor directives, determine whether your debugging printf() statements will be included in your compiled code or not  For example, #ifdef DEBUG followed by a printf() will include that printf() statement only if you #define DEBUG at the top of the code     Preprocessor directives:  #if (condition)  #ifdef or #if defined  #elif (condition)  #else (branch statement for preprocessor!)  #endif     What is the output of the following code, once it has been compiled and run:  #define DEBUG . . . #ifdef DEBUG printf(\"No idea what's wrong.\"); #else printf(\"All good!\"); #endif   )  No idea what's wrong.    Correct      No idea what's wrong. All good!    Not quite. Try again!      All good!    Not quite. Try again!      You could even be fancier and allow for different levels of debugging:    Video Description    Using preprocessor directives such as #define to conditionally include printf() debug statements in your compiled code  Defining different levels of debugging to conditionally choose what aspects of the code to debug  debug layered For example, #if (DEBUG > 1) will include the following statement only if you #define DEBUG as a value greater than 1       What is the output of the following code?  #define DEBUG 1 #include <stdio.h> int main(void) { int N, i, sum; i = 1; #if (DEBUG >=2) printf(\"It's a beautiful day! \"); #elif (DEBUG >=1) printf(\"It's sunny! \"); #elif (DEBUG >=0) printf(\"Not too bad! \"); #else printf(\"Huh...! \"); #endif }   )  It's sunny!    Correct      Huh...!    Not quite. Try again!      Not too bad!    Not quite. Try again!      It's sunny! Not too bad!    Not quite. Try again!      It's a beautiful day!    Not quite. Try again!      It's a beautiful day! It's sunny!    Not quite. Try again!      Not too bad! huh...! >   Not quite. Try again!      Please correct the following loop, which is supposed to add up the numbers from 1 to n:   When your program performs correctly you'll be given a keyword to enter in Canvas.    Please correct the following loop, which is supposed to add up the numbers from 1 to n:   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "quiz-debug-6",
  "level": "2",
  "url": "debug-conditional.html#quiz-debug-6",
  "type": "Reading Question",
  "number": "16.3.1",
  "title": "",
  "body": " What is the output of the following code, once it has been compiled and run:  #define DEBUG . . . #ifdef DEBUG printf(\"No idea what's wrong.\"); #else printf(\"All good!\"); #endif   )  No idea what's wrong.    Correct      No idea what's wrong. All good!    Not quite. Try again!      All good!    Not quite. Try again!    "
},
{
  "id": "quiz-debug-7",
  "level": "2",
  "url": "debug-conditional.html#quiz-debug-7",
  "type": "Reading Question",
  "number": "16.3.1",
  "title": "",
  "body": " What is the output of the following code?  #define DEBUG 1 #include <stdio.h> int main(void) { int N, i, sum; i = 1; #if (DEBUG >=2) printf(\"It's a beautiful day! \"); #elif (DEBUG >=1) printf(\"It's sunny! \"); #elif (DEBUG >=0) printf(\"Not too bad! \"); #else printf(\"Huh...! \"); #endif }   )  It's sunny!    Correct      Huh...!    Not quite. Try again!      Not too bad!    Not quite. Try again!      It's sunny! Not too bad!    Not quite. Try again!      It's a beautiful day!    Not quite. Try again!      It's a beautiful day! It's sunny!    Not quite. Try again!      Not too bad! huh...! >   Not quite. Try again!    "
},
{
  "id": "quiz-debug-8",
  "level": "2",
  "url": "debug-conditional.html#quiz-debug-8",
  "type": "Reading Question",
  "number": "16.3.2",
  "title": "",
  "body": " Please correct the following loop, which is supposed to add up the numbers from 1 to n:   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "quiz-debug-9",
  "level": "2",
  "url": "debug-conditional.html#quiz-debug-9",
  "type": "Reading Question",
  "number": "16.3.3",
  "title": "",
  "body": " Please correct the following loop, which is supposed to add up the numbers from 1 to n:   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "debug-practice",
  "level": "1",
  "url": "debug-practice.html",
  "type": "Section",
  "number": "16.4",
  "title": "Debugging Practice",
  "body": " Debugging Practice  Please try to fix all three of the below problems. While these will run in the code window, it may be easier to debug these when running and compiling on the server. Your choice!   Fix Me: 1   What is wrong with this program? Add appropriate debug statements to the code to find out.      Fix Me: 2   What's wrong here? Add appropriate debug statements to the code to find out.      Fix Me: 3   What is wrong with the following program? Add appropriate debug statements to the code to find out.     "
},
{
  "id": "activity-67",
  "level": "2",
  "url": "debug-practice.html#activity-67",
  "type": "Activity",
  "number": "16.1",
  "title": "",
  "body": " What is wrong with this program? Add appropriate debug statements to the code to find out.   "
},
{
  "id": "activity-68",
  "level": "2",
  "url": "debug-practice.html#activity-68",
  "type": "Activity",
  "number": "16.2",
  "title": "",
  "body": " What's wrong here? Add appropriate debug statements to the code to find out.   "
},
{
  "id": "activity-69",
  "level": "2",
  "url": "debug-practice.html#activity-69",
  "type": "Activity",
  "number": "16.3",
  "title": "",
  "body": " What is wrong with the following program? Add appropriate debug statements to the code to find out.   "
},
{
  "id": "debug-test",
  "level": "1",
  "url": "debug-test.html",
  "type": "Section",
  "number": "16.5",
  "title": "Test Your Knowledge!",
  "body": " Test Your Knowledge!   Try to figure out what this program does by looking at it and tracing (in your head or on paper) it rather than running it. Pretend you are the computer! Once you think you know what it does, run the program by using your own editor, saving on the server and compiling there.     Try It Out!   Now, give it a try in the code window below. But make sure you've made your guess already!     "
},
{
  "id": "activity-70",
  "level": "2",
  "url": "debug-test.html#activity-70",
  "type": "Activity",
  "number": "16.4",
  "title": "",
  "body": " Try to figure out what this program does by looking at it and tracing (in your head or on paper) it rather than running it. Pretend you are the computer! Once you think you know what it does, run the program by using your own editor, saving on the server and compiling there.   "
},
{
  "id": "activity-71",
  "level": "2",
  "url": "debug-test.html#activity-71",
  "type": "Activity",
  "number": "16.5",
  "title": "",
  "body": " Now, give it a try in the code window below. But make sure you've made your guess already!   "
},
{
  "id": "debug-barcode",
  "level": "1",
  "url": "debug-barcode.html",
  "type": "Section",
  "number": "16.6",
  "title": "Back to File I\/O",
  "body": " Back to File I\/O  Here is our overarching goal:  Write a barcode (UPC) checksum program: Read 12 digits of a barcode from a file. (The first digit indicates the type of product being identified, the next five identify the manufacturer, the next five identify the product, and the last digit (12th digit) is a check digit).  Next, compute the proper check digit: Sum the first, third, fifth, seventh, ninth and eleventh digits, and multiply the result by 3. Next, sum the second, fourth, sixth, eighth, and tenth digits. Add this new sum to the first result. Finally, fin d the smallest number that needs to be added to this total to make it equal a multiple of 10. This number is the check digit.  Print the computed check digit as well as the one read from file.  Here is an example:   Sample Barcode     Your first task: Check by hand if the calculated check digit equals the check digit in the image.  Do the calculations agree with the barcode?   Yes!  No...   Write a C program that reads 12 integers from the file sampleBarcode.txt . Your program should perform the following tasks:   print the barcode to the screen  computes the check digit  compares the computed check digit with the actual check digit  print a message to the screen indicating whether the barcode was correctly read.   The code window below contains a file \"sampleBarcode.txt\" . If you'd rather work on the server then you need to create your own such file and fill it with 12 integers.   When you are done, please paste your code into the code submission box below:      Optional: Make it fancier!    In your previous program, build in a check as to whether the file from which you are reading exists.  Write a C program that asks the user to enter a 12-digit barcode and that saves this barcode in a file (you may choose the filename). Note that you'll have to write this program in your own editor and compile on the server since we cannot write to files from code windows.     "
},
{
  "id": "activity-16-6-1-Barcode_File_IO",
  "level": "2",
  "url": "debug-barcode.html#activity-16-6-1-Barcode_File_IO",
  "type": "Activity",
  "number": "16.6",
  "title": "",
  "body": "  Your first task: Check by hand if the calculated check digit equals the check digit in the image.  Do the calculations agree with the barcode?   Yes!  No...   Write a C program that reads 12 integers from the file sampleBarcode.txt . Your program should perform the following tasks:   print the barcode to the screen  computes the check digit  compares the computed check digit with the actual check digit  print a message to the screen indicating whether the barcode was correctly read.   The code window below contains a file \"sampleBarcode.txt\" . If you'd rather work on the server then you need to create your own such file and fill it with 12 integers.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-73",
  "level": "2",
  "url": "debug-barcode.html#activity-73",
  "type": "Activity",
  "number": "16.7",
  "title": "",
  "body": "  In your previous program, build in a check as to whether the file from which you are reading exists.  Write a C program that asks the user to enter a 12-digit barcode and that saves this barcode in a file (you may choose the filename). Note that you'll have to write this program in your own editor and compile on the server since we cannot write to files from code windows.   "
},
{
  "id": "debug-summary",
  "level": "1",
  "url": "debug-summary.html",
  "type": "Section",
  "number": "16.7",
  "title": "Summary",
  "body": " Summary  In this chapter, we worked with the following topics:   Debugging strategies  Conditional compilation  More practice with file I\/O   "
},
{
  "id": "array-integer",
  "level": "1",
  "url": "array-integer.html",
  "type": "Section",
  "number": "17.1",
  "title": "Arrays of Integers",
  "body": " Arrays of Integers  Up to this point we have been using singular data types, such as  int i, j, k;  float x, y, z;  double u, v, w;  Often situations arise in which it is more natural to store a collection of values together in a single variable  .  array integer We will first focus on storing integers in an array. For example, we may wish to store all students' grades on an exam or the coordinates for an object or the values of a function at regular intervals, etc.  An array (think of a collection of data items of the same type ) is just what we need to accomplish this efficiently.    Video Description    Declaring arrays of integers  Assigning values to arrays  array declare NEW SYNTAX: int array[3]; creates a variable named array and reserves space to hold three integers  array initialize NEW SYNTAX: array[0] = 16; initializes the first entry in the array with the value \"16\"  Arrays in C are zero-based       How much space is reserved with the following declaration:  int numbers[10];   )  space for 10 integers    Correct      space for 1 integer    Not quite. Try again!      space for 9 integers    Not quite. Try again!      space for 11 integers    Not quite. Try again!      space for 12 integers    Not quite. Try again!      Now that we know how to create these arrays, how do we actually use them?     Video Description    Arrays and for -loops  Reading values from the user input into an array  NEW SYNTAX: you can fill the array using a for -loop, where you use the following line to fill each array element   scanf(\"%d\", &array[i]);      After the declaration  int num[50];  what is the value of num[5] ?   )  random    Correct      5    Not quite. Try again!      0    Not quite. Try again!      4    Not quite. Try again!      6    Not quite. Try again!      "
},
{
  "id": "quiz-array-1",
  "level": "2",
  "url": "array-integer.html#quiz-array-1",
  "type": "Reading Question",
  "number": "17.1.1",
  "title": "",
  "body": " How much space is reserved with the following declaration:  int numbers[10];   )  space for 10 integers    Correct      space for 1 integer    Not quite. Try again!      space for 9 integers    Not quite. Try again!      space for 11 integers    Not quite. Try again!      space for 12 integers    Not quite. Try again!    "
},
{
  "id": "quiz-array-2",
  "level": "2",
  "url": "array-integer.html#quiz-array-2",
  "type": "Reading Question",
  "number": "17.1.1",
  "title": "",
  "body": " After the declaration  int num[50];  what is the value of num[5] ?   )  random    Correct      5    Not quite. Try again!      0    Not quite. Try again!      4    Not quite. Try again!      6    Not quite. Try again!    "
},
{
  "id": "array-other",
  "level": "1",
  "url": "array-other.html",
  "type": "Section",
  "number": "17.2",
  "title": "Arrays of Other Data Types",
  "body": " Arrays of Other Data Types  array other data types Arrays are not limited to just holding integers, rather they can hold other data types as well, such as floats. The only limitation is that all data stored in a given array must be of the same data type, so all could be integers or all could be floats or all could be characters, etc.    Video Description    Arrays can hold other types of data, such as floats  For example, declare the array as float array[3]  To fill the float array using scanf() , be sure to use %f as your format specifier       Which declaration reserves space for 10 floats?   )  float num[10];    Correct      float(10) num;    Not quite. Try again!      float num(10);    Not quite. Try again!      float[10] num;    Not quite. Try again!      "
},
{
  "id": "quiz-array-3",
  "level": "2",
  "url": "array-other.html#quiz-array-3",
  "type": "Reading Question",
  "number": "17.2.1",
  "title": "",
  "body": " Which declaration reserves space for 10 floats?   )  float num[10];    Correct      float(10) num;    Not quite. Try again!      float num(10);    Not quite. Try again!      float[10] num;    Not quite. Try again!    "
},
{
  "id": "array-initialize",
  "level": "1",
  "url": "array-initialize.html",
  "type": "Section",
  "number": "17.3",
  "title": "Initializing Arrays",
  "body": " Initializing Arrays  array initialize We must initialize any variable before using it. The same holds true for arrays. The various methods are discussed in the Codecast below.    Video Description    Various methods to initialize arrays    int yourGrades[4] = {100, 99,100, 94};  int badGrades[] = {2, 5, 3, 1};    Using a for -loop as previously discussed       Which of the following is correct?   )  int num[] = {1, 2, 3, 4, 5};    Correct      int num = {1, 2, 3, 4, 5};    Not quite. Try again!      num[4] = int{1,2, 3, 4, 5};    Not quite. Try again!      num[4]=int{1};    Not quite. Try again!      Please declare and initialize an array of five integers and store the values 2, 7, 4, 9, -5 in the array (in this order). You should name your array \"arr\" and not modify any of the code to print out the array's contents. Be sure to declare any additional variables needed.   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "quiz-array-4",
  "level": "2",
  "url": "array-initialize.html#quiz-array-4",
  "type": "Reading Question",
  "number": "17.3.1",
  "title": "",
  "body": " Which of the following is correct?   )  int num[] = {1, 2, 3, 4, 5};    Correct      int num = {1, 2, 3, 4, 5};    Not quite. Try again!      num[4] = int{1,2, 3, 4, 5};    Not quite. Try again!      num[4]=int{1};    Not quite. Try again!    "
},
{
  "id": "quiz-array-5",
  "level": "2",
  "url": "array-initialize.html#quiz-array-5",
  "type": "Reading Question",
  "number": "17.3.2",
  "title": "",
  "body": " Please declare and initialize an array of five integers and store the values 2, 7, 4, 9, -5 in the array (in this order). You should name your array \"arr\" and not modify any of the code to print out the array's contents. Be sure to declare any additional variables needed.   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "array-practice",
  "level": "1",
  "url": "array-practice.html",
  "type": "Section",
  "number": "17.4",
  "title": "Array Practice",
  "body": " Array Practice  Time to practice working with arrays. Remember that practice (which automatically includes making lots of mistakes) is the best way to learn. Please pick and solve at least one of the following problems. If you get done early be sure to move on to one of the other problems!   Option 1    Write a program that does the following: Declare an array of 10 integer values and have the user enter 10 integers which you save in the array (you should use a loop here). Next, print out all 10 values the user has entered.  For example, if the user entered 45, -34, 5, 0, 1, 100, -55, ... then the output should be:  1. 45 2. -34 3. 5 4. 0 5. 1 6. 100 7. -55 ...  Challenge: Write the program so that the number '10' above could be easily replaced with any other integer value (for example 15, or 20, etc), by changing only one value in your program. Hint: use #define .    When you are done, please paste your code into the code submission box below:       Option 2    Write a program that declares an array of 100 floats. Fill this array with the square roots of the numbers 1 - 100 and print the result in the following form:  The square root of 1 equals 1.00000. The square root of 2 equals 1.41421. The square root of 3 equal 1.732051. ...  Note: In order to be able to use the square root function, sqrt() , you need to include the header file for the mathematics library using the command  #include <math.h>  at the top of your program where the other #include directives are located.   When you are done, please paste your code into the code submission box below:       Option 3    Write a program that prompts the user to type in a sentence, and that reads the sentence, character by character, and stores it in an array of characters. Stop reading, when the array is full or the character read is \\n . Next, print out the sentence in reverse.  Here is a sample output:   Enter a sentence:  I love programming.  Reverse: .gnimmargorp evol I    When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-17-4-1-Array_Practice_1",
  "level": "2",
  "url": "array-practice.html#activity-17-4-1-Array_Practice_1",
  "type": "Activity",
  "number": "17.1",
  "title": "",
  "body": "  Write a program that does the following: Declare an array of 10 integer values and have the user enter 10 integers which you save in the array (you should use a loop here). Next, print out all 10 values the user has entered.  For example, if the user entered 45, -34, 5, 0, 1, 100, -55, ... then the output should be:  1. 45 2. -34 3. 5 4. 0 5. 1 6. 100 7. -55 ...  Challenge: Write the program so that the number '10' above could be easily replaced with any other integer value (for example 15, or 20, etc), by changing only one value in your program. Hint: use #define .    When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-17-4-2-Array_Practice_2",
  "level": "2",
  "url": "array-practice.html#activity-17-4-2-Array_Practice_2",
  "type": "Activity",
  "number": "17.2",
  "title": "",
  "body": "  Write a program that declares an array of 100 floats. Fill this array with the square roots of the numbers 1 - 100 and print the result in the following form:  The square root of 1 equals 1.00000. The square root of 2 equals 1.41421. The square root of 3 equal 1.732051. ...  Note: In order to be able to use the square root function, sqrt() , you need to include the header file for the mathematics library using the command  #include <math.h>  at the top of your program where the other #include directives are located.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-17-4-3-Array_Practice_3",
  "level": "2",
  "url": "array-practice.html#activity-17-4-3-Array_Practice_3",
  "type": "Activity",
  "number": "17.3",
  "title": "",
  "body": "  Write a program that prompts the user to type in a sentence, and that reads the sentence, character by character, and stores it in an array of characters. Stop reading, when the array is full or the character read is \\n . Next, print out the sentence in reverse.  Here is a sample output:   Enter a sentence:  I love programming.  Reverse: .gnimmargorp evol I    When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "array-advanced",
  "level": "1",
  "url": "array-advanced.html",
  "type": "Section",
  "number": "17.5",
  "title": "Advanced Array Practice",
  "body": " Advanced Array Practice  More practice? Yes! I don't have to remind you that practice makes perfect, right? Please pick and solve at least one of the following problems:   Option 1    Write a program that prompts the user to enter the weight of a letter and that tells the user the postage necessary to mail this letter with the US Postal Service.  Here is a sample output:   How much does your letter weigh (in ounces):  5.5  The postage is 203 cents.   Note: You can start with the code given below. Postage is calculated based on the next higher weight in the chart.   When you are done, please paste your code into the code submission box below:       Option 2    Write a C-program that finds the largest integer stored in an array of integers. You can write your code so that the array values are entered by the user, or you may simply hardcore an integer array for test purposes as is done below.   When you are done, please paste your code into the code submission box below:       Option 3    Write a C program that finds the average of integer numbers stored in an array. You may have the user enter the array values, or you can simply hard-code the array for testing purposes as is done below.   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-17-5-1-Adv_Array_Practice_1",
  "level": "2",
  "url": "array-advanced.html#activity-17-5-1-Adv_Array_Practice_1",
  "type": "Activity",
  "number": "17.4",
  "title": "",
  "body": "  Write a program that prompts the user to enter the weight of a letter and that tells the user the postage necessary to mail this letter with the US Postal Service.  Here is a sample output:   How much does your letter weigh (in ounces):  5.5  The postage is 203 cents.   Note: You can start with the code given below. Postage is calculated based on the next higher weight in the chart.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-17-5-2-Adv_Array_Practice_2",
  "level": "2",
  "url": "array-advanced.html#activity-17-5-2-Adv_Array_Practice_2",
  "type": "Activity",
  "number": "17.5",
  "title": "",
  "body": "  Write a C-program that finds the largest integer stored in an array of integers. You can write your code so that the array values are entered by the user, or you may simply hardcore an integer array for test purposes as is done below.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-17-5-3-Adv_Array_Practice_3",
  "level": "2",
  "url": "array-advanced.html#activity-17-5-3-Adv_Array_Practice_3",
  "type": "Activity",
  "number": "17.6",
  "title": "",
  "body": "  Write a C program that finds the average of integer numbers stored in an array. You may have the user enter the array values, or you can simply hard-code the array for testing purposes as is done below.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "array-summary",
  "level": "1",
  "url": "array-summary.html",
  "type": "Section",
  "number": "17.6",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Arrays of various data types  Initializing arrays  Computations involving arrays  Arrays of ints, floats, chars  Finding the largest number in an array  Finding the average of numbers in an array   "
},
{
  "id": "memory-space",
  "level": "1",
  "url": "memory-space.html",
  "type": "Section",
  "number": "18.1",
  "title": "Space Needed to Store Variables",
  "body": " Space Needed to Store Variables  We already have a pretty good idea that different data types take up different amounts of space in memory. For example, to store a character ( char ) all we need to do is store its ASCII code which, when represented in binary, fits into one byte. On the other hand, most integers (for example the number 999) need more than one byte to store them in binary 2's complement. And recall that floats are stored in scientific notation as mantissa and exponent - lots of memory needed there. Let's see how we can make this more precise.    Video Description    memory Use sizeof() to see how much space different variable-types take up in memory  Example:   printf(\"%zu\", sizeof(float));      Assuming that a variable of type double occupies 8 bytes in memory, how much space will be occupied by the variable doubleArray declared as follows:  double doubleArray[3];   8 bytes  24 bytes  32 bytes  3 bytes     "
},
{
  "id": "quiz-memory-1",
  "level": "2",
  "url": "memory-space.html#quiz-memory-1",
  "type": "Reading Question",
  "number": "18.1.1",
  "title": "",
  "body": " Assuming that a variable of type double occupies 8 bytes in memory, how much space will be occupied by the variable doubleArray declared as follows:  double doubleArray[3];   8 bytes  24 bytes  32 bytes  3 bytes   "
},
{
  "id": "memory-stack",
  "level": "1",
  "url": "memory-stack.html",
  "type": "Section",
  "number": "18.2",
  "title": "The Stack",
  "body": " The Stack  memory the stack The stack is a special region in your computer's memory that stores temporary variables created by each function (and this includes the main() function). The word \"stack\" actually more accurately describes the way the storage of variables is organized.  We won't really go into details here, but a few things of interest are:   Every time a function (including main() ) declares a new variable, it is \"pushed\" onto the stack.  When a function terminates, all of the variables pushed onto the stack by that function, are deleted (also called \"freed\"). Once a stack variable is freed, that particular space in memory becomes available for other stack variables and you no longer have access to the freed variables.   Later on we will learn about another way to find space in memory for things you'd like to store (the so-called \"heap\"). The advantage of using the stack to store variables is that you do not have to manage this memory: the CPU is in charge.     Video Description    Array elements are stored adjacently in memory  The address of a variable points to where it is stored in memory  The address of an array points to the first array element in memory          "
},
{
  "id": "memory-functions",
  "level": "1",
  "url": "memory-functions.html",
  "type": "Section",
  "number": "18.3",
  "title": "Functions And The Stack",
  "body": " Functions And The Stack  Now that we have a basic understanding of how variables in the main() function are stored in the stack, what happens if we introduce new variables in a different function? How do the variables in various functions interact with one another in the computer's memory?  In the following video, we will explore how functions and their variables interact with memory:    Video Description    When passing a variable by value to a function, only the value (that is, what is stored in the variable) is known inside the function but not where the original variable is stored in memory.  memory functions As a result, changing the value of a variable inside a function will not change the variable outside of the function, if it was passed by value  Example of passing by value: Suppose you have variables a,b with a=3 and b=5 . Then the call myFunction(a, b) passes the numbers 3 and 5 to myFunction() but not the locations where a and b are stored.       Suppose you have defined a function “add” as follows:  int add (int a, int b) { int sum; a = 2; sum = a+b; return(sum); }  In your main program, you have declared integer variables a and b and given them the values a = 9 and b = 3 . You then call the function add(a,b) . What is the value it returns?  I'll give you a window to try things out in, but you definitely should  think this through first by hand before you use the computer to verify your answer . I really want you to think about this first. That's why you'll need to write the entire program if you want to use the window below.     Suppose you have defined a function “add” as follows (this is almost the same function as in the previous question):  int add (int a, int b) { int sum; a = 10; sum = a+b; return(sum); }  In your main program, you have declared integer variables a and b and given them the values a = 2 and b = 4 . You then call the function add(a,b) . What is the value of the variable a in your main program after execution of the function add() ?  Another window to try things out... As before, I really want you to think about this first. That's why you'll need to write the entire program if you want to use the window below.     "
},
{
  "id": "quiz-memory-2",
  "level": "2",
  "url": "memory-functions.html#quiz-memory-2",
  "type": "Reading Question",
  "number": "18.3.1",
  "title": "",
  "body": " Suppose you have defined a function “add” as follows:  int add (int a, int b) { int sum; a = 2; sum = a+b; return(sum); }  In your main program, you have declared integer variables a and b and given them the values a = 9 and b = 3 . You then call the function add(a,b) . What is the value it returns?  I'll give you a window to try things out in, but you definitely should  think this through first by hand before you use the computer to verify your answer . I really want you to think about this first. That's why you'll need to write the entire program if you want to use the window below.   "
},
{
  "id": "quiz-memory-3",
  "level": "2",
  "url": "memory-functions.html#quiz-memory-3",
  "type": "Reading Question",
  "number": "18.3.2",
  "title": "",
  "body": " Suppose you have defined a function “add” as follows (this is almost the same function as in the previous question):  int add (int a, int b) { int sum; a = 10; sum = a+b; return(sum); }  In your main program, you have declared integer variables a and b and given them the values a = 2 and b = 4 . You then call the function add(a,b) . What is the value of the variable a in your main program after execution of the function add() ?  Another window to try things out... As before, I really want you to think about this first. That's why you'll need to write the entire program if you want to use the window below.   "
},
{
  "id": "memory-scope",
  "level": "1",
  "url": "memory-scope.html",
  "type": "Section",
  "number": "18.4",
  "title": "The Scope of a Variable",
  "body": " The Scope of a Variable  With the introduction of functions to our programs, we need to understand the area in which variable names are meaningful.  variables scope The scope of a variable refers to those parts of your code in which it has meaning and therefore can be used. For example, a variable declared inside a function can only be used inside that function and is not known elsewhere in your code. Try it out!   In the following code window, we explore what happens if two functions use the same names for their variables. What do you expect will be the values of a and b in each of the functions?   After running the code, did the values in each function surprise you? How did they compare to what you initially expected?    It Gets Worse...   Now, what happens if we start mixing up variable names between functions? Everything should be fine, right?  What do you think the below code will print? It is really important and beneficial for your learning to think about this first and to try to run through the code in your head. That's why there is no Run button!      Okay... Here is the Run button...  If you have really thought this through, now hit the Run button and compare. Is this what you expected? Why or why not? Be sure to ask questions!    "
},
{
  "id": "activity-80",
  "level": "2",
  "url": "memory-scope.html#activity-80",
  "type": "Activity",
  "number": "18.1",
  "title": "",
  "body": " In the following code window, we explore what happens if two functions use the same names for their variables. What do you expect will be the values of a and b in each of the functions?   After running the code, did the values in each function surprise you? How did they compare to what you initially expected?  "
},
{
  "id": "activity-81",
  "level": "2",
  "url": "memory-scope.html#activity-81",
  "type": "Activity",
  "number": "18.2",
  "title": "",
  "body": " Now, what happens if we start mixing up variable names between functions? Everything should be fine, right?  What do you think the below code will print? It is really important and beneficial for your learning to think about this first and to try to run through the code in your head. That's why there is no Run button!   "
},
{
  "id": "memory-bad-variables",
  "level": "1",
  "url": "memory-bad-variables.html",
  "type": "Section",
  "number": "18.5",
  "title": "Bad Variable Names",
  "body": " Bad Variable Names  variables naming convention Here is a really nasty example. Don't ever write code with variable names like this! In the code, towards the right-hand side, comments are there to help you tell the scope of the variables and functions.   all: global scope - can be used anywhere (in main and functions)  main: scope is the main function, not known elsewhere  one: scope is function one  two: scope is function two  the function one cannot be called from the function two because of a conflict: in function two , there is a variable parameter that is called one and so this is what the function two will 'think of' when it 'sees' one .  So, function one can be called from main and it can be called from within itself, but it cannot be called from two .    "
},
{
  "id": "memory-update",
  "level": "1",
  "url": "memory-update.html",
  "type": "Section",
  "number": "18.6",
  "title": "First Look at Modifying Arrays with Functions",
  "body": " First Look at Modifying Arrays with Functions  Modifying the value of a variable inside a function isn't quite as easy as it sounds. The techniques that we know of so far cannot accomplish this task (other than via using the return value of a function) as we can see via the function1() example below. We'll learn soon how to do this however!  But now look at function2() . Given what we learned from function1() we'd expect the array variable in our main function not to get modified via the attempted change inside function2. See what happens though...   "
},
{
  "id": "memory-arrays",
  "level": "1",
  "url": "memory-arrays.html",
  "type": "Section",
  "number": "18.7",
  "title": "Practice Modifying Arrays with Functions",
  "body": " Practice Modifying Arrays with Functions    Write a function enterValues() in which you ask the user to enter values to be stored in the array that is passed into the function. You can assume that the constant N holds the size of the array. Call your function from within main() with array as the argument.   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-18-7-1-Practice_Modifying_Arrays_With_Functions",
  "level": "2",
  "url": "memory-arrays.html#activity-18-7-1-Practice_Modifying_Arrays_With_Functions",
  "type": "Activity",
  "number": "18.3",
  "title": "",
  "body": "  Write a function enterValues() in which you ask the user to enter values to be stored in the array that is passed into the function. You can assume that the constant N holds the size of the array. Call your function from within main() with array as the argument.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "memory-roundoff",
  "level": "1",
  "url": "memory-roundoff.html",
  "type": "Section",
  "number": "18.8",
  "title": "Roundoff Error",
  "body": " Roundoff Error  roundoff error Roundoff error is the difference between an approximation of a number used in computation and its exact (correct) value. This comes from the computer's inability to represent some numbers exactly. What may come as a bit of a surprise at first is the fact that there are some rather simple numbers that the computer can't get right when using the standard ways to store them and not just the obvious candidates such as or . We'll see examples below and also why this is happening.  Integers can be represented exactly, but only if they fall into a certain range , depending on the amount of memory used by the data type. Certain floating-point numbers may also be represented exactly, depending on the way floats are represented in the computer in question. Many floating-point numbers cannot be represented exactly.  For example, the decimal number , when expressed in binary (only powers of 2 allowed!), is (it is periodic with repeating forever). Since we can only store a mantissa of a finite width, roundoff will occur no matter how much space is allotted to the data type used.  On the other hand, , and so the binary representation is . This number will be accurately represented. Give it a try!   "
},
{
  "id": "memory-rounding",
  "level": "1",
  "url": "memory-rounding.html",
  "type": "Section",
  "number": "18.9",
  "title": "Rounding in C",
  "body": " Rounding in C  C supports several functions to help with rounding (such as rounding up, rounding down, just rounding, etc). You need to  #include <math.h>  in order to use them. Here are some of the functions at your disposal:    rounding  Rounding Functions in C        Function    Prototype    Description      floor()    double floor(double x);    Returns the nearest integer which is less than or equal to the argument passed to this function.      round()    double round (double x);    Returns the nearest integer value of the argument passed to this function.      lround()    long lround (double x);    Returns the nearest integer value of the argument passed to this function.      ceil()    double ceil (double x);    Returns the nearest integer value which is greater than or equal to the argument passed to this function.        Why might it be useful to have both a round() and an lround() function?   "
},
{
  "id": "table-3",
  "level": "2",
  "url": "memory-rounding.html#table-3",
  "type": "Table",
  "number": "18.1",
  "title": "Rounding Functions in C",
  "body": " rounding  Rounding Functions in C        Function    Prototype    Description      floor()    double floor(double x);    Returns the nearest integer which is less than or equal to the argument passed to this function.      round()    double round (double x);    Returns the nearest integer value of the argument passed to this function.      lround()    long lround (double x);    Returns the nearest integer value of the argument passed to this function.      ceil()    double ceil (double x);    Returns the nearest integer value which is greater than or equal to the argument passed to this function.     "
},
{
  "id": "activity-83",
  "level": "2",
  "url": "memory-rounding.html#activity-83",
  "type": "Activity",
  "number": "18.4",
  "title": "",
  "body": " Why might it be useful to have both a round() and an lround() function?  "
},
{
  "id": "memory-rounding-practice",
  "level": "1",
  "url": "memory-rounding-practice.html",
  "type": "Section",
  "number": "18.10",
  "title": "Practice Your Rounding!",
  "body": " Practice Your Rounding!    Write a function roundToTwo() that rounds off a floating point value to two decimal places. For example, 5.567 should be rounded to 5.67 and 5.534 should become 5.53.  The prototype for this function should be  double roundToTwo(double);  Please complete the code below.  Challenge: Round to n decimal places (you'll have to pass an additional integer n to the function).   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-18-10-1-Practice_Your_Rounding",
  "level": "2",
  "url": "memory-rounding-practice.html#activity-18-10-1-Practice_Your_Rounding",
  "type": "Activity",
  "number": "18.5",
  "title": "",
  "body": "  Write a function roundToTwo() that rounds off a floating point value to two decimal places. For example, 5.567 should be rounded to 5.67 and 5.534 should become 5.53.  The prototype for this function should be  double roundToTwo(double);  Please complete the code below.  Challenge: Round to n decimal places (you'll have to pass an additional integer n to the function).   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "memory-overflow",
  "level": "1",
  "url": "memory-overflow.html",
  "type": "Section",
  "number": "18.11",
  "title": "Overflow",
  "body": " Overflow  overflow Overflow occurs when a value that you attempt to store in memory is larger than the datatype being used allows.    Remember the binary 2's complement representation of integers?  Using the sizeof() function, please find out how many bits in memory are used to store an integer on our system (recall that the sizeof() function returns the number of bytes ), then use that information to compute the largest integer that can be represented on our system (assuming binary 2's complement is used). Next, please print out this integer as well as the number you obtain when you add 1 to this integer.   If you are done, please modify your code to perform similarly for the data types short and long .  When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-18-11-1-Memory_Overflow",
  "level": "2",
  "url": "memory-overflow.html#activity-18-11-1-Memory_Overflow",
  "type": "Activity",
  "number": "18.6",
  "title": "",
  "body": "  Remember the binary 2's complement representation of integers?  Using the sizeof() function, please find out how many bits in memory are used to store an integer on our system (recall that the sizeof() function returns the number of bytes ), then use that information to compute the largest integer that can be represented on our system (assuming binary 2's complement is used). Next, please print out this integer as well as the number you obtain when you add 1 to this integer.   If you are done, please modify your code to perform similarly for the data types short and long .  When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "memory-summary",
  "level": "1",
  "url": "memory-summary.html",
  "type": "Section",
  "number": "18.12",
  "title": "Summary",
  "body": " Summary  In this chapter, we learned that:   For each function call, there is a separate area in memory created for the parameters passed to the function and for the function's local variables.  Variables declared in functions are known as local variables. That is, their scope is limited to the duration of the function being executed.  Each variable is stored in form and using a number of bytes that is pre-defined and compiler-dependent. This means that roundoff errors can (and will) occur and that there are limits to the size of numbers that can be represented in a given data type.   "
},
{
  "id": "pointers-address",
  "level": "1",
  "url": "pointers-address.html",
  "type": "Section",
  "number": "19.1",
  "title": "The Address of a Variable",
  "body": " The Address of a Variable  memory address Let's learn about the address of a variable (the location where it is stored in memory) and why this is an important piece of information to have in the C programming language.    Video Description    pointer address variables address The address of a variable has a datatype that depends on the datatype of the variable itself. For example, the address of an int has datatype int * (also called integer pointer). Example: int *addr; declares a pointer named \"addr\"  Use & to get the address of a variable. Example: *addr = &myVar stores the address of myVar in *addr  To print an address, use %p as the format specifier          "
},
{
  "id": "pointers-dereference",
  "level": "1",
  "url": "pointers-dereference.html",
  "type": "Section",
  "number": "19.2",
  "title": "Dereferencing a Pointer",
  "body": " Dereferencing a Pointer  pointer dereference We will now explore how the concept of pointers (addresses) can be used to modify the value of a variable inside a function, despite the fact that the variable's scope does not extend to that function.    Video Description    Passing variables to functions \"by reference\" (via their address)  To change a variable's value whose address is stored in var , use *var = *var + 10; , which (for example) would add 10 to the value of original variable passed to the function by reference  functions pointers Passing a variable to a function by reference allows the variable to be used and updated in the function       You want to write a function that increases the integer value stored in a variable num by one. Given the following function definition, what is the correct function call? Assume that a variable num of type int has been declared and initialized.  void increasebyone(int *a) { *a = *a + 1; }  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  increasebyone(&num);    Correct      increasebyone(*num);    Not quite. Try again!      increasebyone(num);    Not quite. Try again!      num = increasebyone(&num);    Not quite. Try again!      What does the following piece of code do?  float num = 5.0; float *pointer; pointer = &num; *pointer = *pointer + 1.0; printf(\"%f\", *pointer);   )  This code prints out the number 6.000000 to the default output.    Correct      This code prints out the address of the variable pointer to the default output.    Not quite. Try again!      This code prints out the number 5.000000 to the default output.    Not quite. Try again!      This code prints the address of the variable num to the default output.    Not quite. Try again!      "
},
{
  "id": "quiz-pointers-1",
  "level": "2",
  "url": "pointers-dereference.html#quiz-pointers-1",
  "type": "Reading Question",
  "number": "19.2.1",
  "title": "",
  "body": " You want to write a function that increases the integer value stored in a variable num by one. Given the following function definition, what is the correct function call? Assume that a variable num of type int has been declared and initialized.  void increasebyone(int *a) { *a = *a + 1; }  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  increasebyone(&num);    Correct      increasebyone(*num);    Not quite. Try again!      increasebyone(num);    Not quite. Try again!      num = increasebyone(&num);    Not quite. Try again!    "
},
{
  "id": "quiz-pointers-2",
  "level": "2",
  "url": "pointers-dereference.html#quiz-pointers-2",
  "type": "Reading Question",
  "number": "19.2.2",
  "title": "",
  "body": " What does the following piece of code do?  float num = 5.0; float *pointer; pointer = &num; *pointer = *pointer + 1.0; printf(\"%f\", *pointer);   )  This code prints out the number 6.000000 to the default output.    Correct      This code prints out the address of the variable pointer to the default output.    Not quite. Try again!      This code prints out the number 5.000000 to the default output.    Not quite. Try again!      This code prints the address of the variable num to the default output.    Not quite. Try again!    "
},
{
  "id": "pointers-example",
  "level": "1",
  "url": "pointers-example.html",
  "type": "Section",
  "number": "19.3",
  "title": "Pointer Example",
  "body": " Pointer Example  Here is an example of how to use pointers in order to have a function modify a variable outside of its scope.    Video Description    Instead of having a function return a value to a variable outside the function, the function can return nothing (i.e. void function) and update the variable by dereferencing the pointer  For example, *resultptr = z; will update the value of the variable whose address is resultptr with the value in z       Challenge: Please write a function that converts a time given in minutes to hours and minutes. For example, 162 minutes should be converted to 2 hours and 42 minutes, whereas 59 minutes should be 0 hours and 59 minutes. The prototype and main function have been written already; all you have to do is write the function.   When your program performs correctly you'll be given a keyword to enter in Canvas.    "
},
{
  "id": "quiz-pointers-3",
  "level": "2",
  "url": "pointers-example.html#quiz-pointers-3",
  "type": "Reading Question",
  "number": "19.3.1",
  "title": "",
  "body": " Challenge: Please write a function that converts a time given in minutes to hours and minutes. For example, 162 minutes should be converted to 2 hours and 42 minutes, whereas 59 minutes should be 0 hours and 59 minutes. The prototype and main function have been written already; all you have to do is write the function.   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "pointers-intro-frac-calc",
  "level": "1",
  "url": "pointers-intro-frac-calc.html",
  "type": "Section",
  "number": "19.4",
  "title": "Intro to the Fraction Calculator",
  "body": " Intro to the Fraction Calculator  fraction calculator Today, we will all be jointly working on a fraction calculator, that is a calculator that can solve simple fraction problems such as adding, subtracting, multiplying and dividing fractions .  When tackling a bigger programming challenge such as this it's important to plan ahead!  Here is a first (rather coarse) breakdown of our Fraction Calculator:   Get a fraction problem from the user  Compute the result  Display the result  Continue (y\/n)?     How can we further break down \"Get a fraction problem from the user\"?    Here is one way to break it into smaller pieces:   Get a fraction  Get an operator  Get a fraction      How can we further break down \"Get a fraction\"?   "
},
{
  "id": "activity-86",
  "level": "2",
  "url": "pointers-intro-frac-calc.html#activity-86",
  "type": "Activity",
  "number": "19.1",
  "title": "",
  "body": "  How can we further break down \"Get a fraction problem from the user\"?    Here is one way to break it into smaller pieces:   Get a fraction  Get an operator  Get a fraction    "
},
{
  "id": "activity-87",
  "level": "2",
  "url": "pointers-intro-frac-calc.html#activity-87",
  "type": "Activity",
  "number": "19.2",
  "title": "",
  "body": " How can we further break down \"Get a fraction\"?  "
},
{
  "id": "pointers-design",
  "level": "1",
  "url": "pointers-design.html",
  "type": "Section",
  "number": "19.5",
  "title": "Top-Down Design",
  "body": " Top-Down Design  design top-down Top-Down Design is a method for solving problems in which the problem is broken down into smaller sub-problems , which are solved (perhaps by breaking into sub-sub-problems...) to derive a solution to the main problem.  This is the technique you should use for any problem!  Functions are ideal for this purpose and reinforce this type of solution strategy.    How can implementing a top-down design method while coding potentially lead to an easier debugging process?    While there could be many reasons, one benefit of the top-down design method is that by working in smaller, more tangible pieces of code, it can be easier to see if a certain task is functioning correctly. Once you see that your small bits of code (e.g. functions) are working as planned, then after linking them together, you are more likely to have a successful code than if you blindly wrote it all with no intermediate testing.    "
},
{
  "id": "investigation-21",
  "level": "2",
  "url": "pointers-design.html#investigation-21",
  "type": "Investigate",
  "number": "19.3",
  "title": "",
  "body": "  How can implementing a top-down design method while coding potentially lead to an easier debugging process?    While there could be many reasons, one benefit of the top-down design method is that by working in smaller, more tangible pieces of code, it can be easier to see if a certain task is functioning correctly. Once you see that your small bits of code (e.g. functions) are working as planned, then after linking them together, you are more likely to have a successful code than if you blindly wrote it all with no intermediate testing.   "
},
{
  "id": "pointers-bottom-up-testing",
  "level": "1",
  "url": "pointers-bottom-up-testing.html",
  "type": "Section",
  "number": "19.6",
  "title": "Bottom-Up Testing",
  "body": " Bottom-Up Testing  testing bottom-up When working on a small sub-sub-problem of a big program via a function it is important to test the function extensively before making it part of the bigger program.  To do so, one simply writes a so-called driver , that is, a main function whose purpose it is to call your new function in order to check whether if works correctly.  Suppose, for example, you are writing the function simplify() that simplifies a fraction. Here is a sample driver to test this function:  int main(void) { int numer = 50; int denom = 10; printf(\"original: %d\/%d\\n\", numer, denom); simplify(&numer, &denom); printf(\"simplified: %d\/%d\\n\", numer, denom); }  There is no point in making this fancy: you'll discard it later!    What should your driver do to the function you are testing?    Provide it with some test inputs!    Using your driver, you'll want to ensure that given certain inputs, your function outputs expected results. Whether you pass an integer, some floats, an array, or potentially nothing (if it's a void function), the return value(s) or output from the function should match what you expect. If not, you will know something needs fixing...    "
},
{
  "id": "investigation-22",
  "level": "2",
  "url": "pointers-bottom-up-testing.html#investigation-22",
  "type": "Investigate",
  "number": "19.4",
  "title": "",
  "body": "  What should your driver do to the function you are testing?    Provide it with some test inputs!    Using your driver, you'll want to ensure that given certain inputs, your function outputs expected results. Whether you pass an integer, some floats, an array, or potentially nothing (if it's a void function), the return value(s) or output from the function should match what you expect. If not, you will know something needs fixing...   "
},
{
  "id": "pointers-top-down-testing",
  "level": "1",
  "url": "pointers-top-down-testing.html",
  "type": "Section",
  "number": "19.7",
  "title": "Top-Down Testing",
  "body": " Top-Down Testing  Sometimes you might want to test the flow of control of a program, but you haven't written all of your functions yet.  testing top-down In this situation we use something called a stub . A stub is a skeleton function that consists of header info (comments), tracing messages ( printf() ) and assignment of output parameters (but not necessarily the actual values).  Example:  Suppose you wanted to check the flow of our fraction calculator, but you haven't written the simplify() function yet. So here is what you could write instead of your simplify function:  \/* *********************** STUB ************************* * given a fraction numer\/denom determine a simplified * fraction and return as output parameters ****************************************************** *\/ int simplify(int *numer, int *denom) { printf(\"Entering simplify() with %d\/%d\\n\", *numer, *denom); *numer = *numer; \/* not really neccessary, is it *\/ *denom = *denom; printf(\"Exiting simplify() with %d\/%d\\n\", *numer, *denom); return 0; }  Eventually you'll replace this stub with the real function.  "
},
{
  "id": "pointers-frac-calc",
  "level": "1",
  "url": "pointers-frac-calc.html",
  "type": "Section",
  "number": "19.8",
  "title": "The Fraction Calculator",
  "body": " The Fraction Calculator  fraction calculator  We'll use a Google Doc to share all of the pieces of code that different groups are writing. Please follow the link given below.  We'll furthermore be working on the Thayer School servers for this problem, although you are welcome to use the code window provided below for some code development and testing.  Here are the prototypes for the fraction calculator:  void getFraction(int *num, int *denom); void getOp(char *operation); void simplify(int *num, int *denom); void addFractions(int n1, int d1, int n2, int d2, int *num, int *denom); void multiplyFractions(int n1, int d1, int n2, int d2, int *num, int *denom); int computeResult(int n1, int d1, char op, int n2, int d2, int *num, int *denom); void printEverything(int n1, int d1, char op, int n2, int d2, int num, int denom);   Please sign in with your group in the Google Doc below. Once your group is finished, please paste it into the correct location of the Google Doc for the whole class to see.   "
},
{
  "id": "pointers-arrays",
  "level": "1",
  "url": "pointers-arrays.html",
  "type": "Section",
  "number": "19.9",
  "title": "Arrays and Pointers",
  "body": " Arrays and Pointers  pointer array array address Given an array variable such as int myArray[6]; what exactly does the variable myArray itself store (if we don't add in the brackets to refer to a specific element)? It turns out, myArray holds the address of the zeroth element of the array ! That is, myArray is a pointer of type int . So:  myArray == &myArray[0]  pointer arithmetic But it gets even better than that: The computer can do arithmetic, giving us the ability to easily find the address of myArray[1] or myArray[2] , for example:  myArray + 1 == &myArray[1]  myArray + 2 == &myArray[2]  This is called pointer arithmetic. So by adding 1 to the address myArray , the computer automatically locates the address of the next array element, &myArray[1] .  Watch the video to find out more.    Video Description    The array variable itself holds the address of the zeroth element of the array  Adding \"1\" to the pointer of an array will update the address to the next element of the array  i.e. *array = 3 , *(array+1)=10 will update the first (the zeroth, truthfully speaking) number in the array as 3 and the next as 10       Let's start with a review question!  What is the output of the following program:  #include <stdio.h> void swap (char *x, char *y); int main(void) { char c = 'P'; char d = 'T'; printf(\"%c%c \", c, d); swap(&c, &d); printf(\"%c%c\", c, d); return 0; } void swap (char *x, char *y) { char temp; temp = *x; *x = *y; *y = temp; }   )  PT TP    Correct      PT xy    Not quite. Try again!      PT PT    Not quite. Try again!      PT yx    Not quite. Try again!      None of the above    Not quite. Try again!      Suppose you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  What is *(numbers+4) ?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  0    Correct      -1    Not quite. Try again!      7    Not quite. Try again!      -11    Not quite. Try again!      10    Not quite. Try again!      5    Not quite. Try again!      None of the above    Not quite. Try again!      Suppose you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  What is *numbers+4 ? Notice that the only difference to the previous question is the omission of parenthesis.  You really need to think about this first before just trying it out. Really! Anyway, here is the code window for you to try out some code.    )  9    Correct      5    Not quite. Try again!      7    Not quite. Try again!      4    Not quite. Try again!      0    Not quite. Try again!      -1    Not quite. Try again!      Suppose (again...) you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  What is numbers[10]?   )  Random and depends on what is at that memory location    Correct      5    Not quite. Try again!      This will cause a crash of your program    Not quite. Try again!      The compiler sets this to zero    Not quite. Try again!      -11    Not quite. Try again!      Suppose (for the last time) you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  You have furthermore declared a pointer via  int *ptr;  and initialized it via  ptr = numbers + 2;  What is *(++ptr) ?  You want to try this out, right? Remember... Think first!    )  10    Correct      -11    Not quite. Try again!      5    Not quite. Try again!      0    Not quite. Try again!      -1    Not quite. Try again!      7    Not quite. Try again!      "
},
{
  "id": "quiz-arithmetic-1",
  "level": "2",
  "url": "pointers-arrays.html#quiz-arithmetic-1",
  "type": "Reading Question",
  "number": "19.9.1",
  "title": "",
  "body": " Let's start with a review question!  What is the output of the following program:  #include <stdio.h> void swap (char *x, char *y); int main(void) { char c = 'P'; char d = 'T'; printf(\"%c%c \", c, d); swap(&c, &d); printf(\"%c%c\", c, d); return 0; } void swap (char *x, char *y) { char temp; temp = *x; *x = *y; *y = temp; }   )  PT TP    Correct      PT xy    Not quite. Try again!      PT PT    Not quite. Try again!      PT yx    Not quite. Try again!      None of the above    Not quite. Try again!    "
},
{
  "id": "quiz-arithmetic-2",
  "level": "2",
  "url": "pointers-arrays.html#quiz-arithmetic-2",
  "type": "Reading Question",
  "number": "19.9.2",
  "title": "",
  "body": " Suppose you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  What is *(numbers+4) ?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  0    Correct      -1    Not quite. Try again!      7    Not quite. Try again!      -11    Not quite. Try again!      10    Not quite. Try again!      5    Not quite. Try again!      None of the above    Not quite. Try again!    "
},
{
  "id": "quiz-arithmetic-3",
  "level": "2",
  "url": "pointers-arrays.html#quiz-arithmetic-3",
  "type": "Reading Question",
  "number": "19.9.3",
  "title": "",
  "body": " Suppose you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  What is *numbers+4 ? Notice that the only difference to the previous question is the omission of parenthesis.  You really need to think about this first before just trying it out. Really! Anyway, here is the code window for you to try out some code.    )  9    Correct      5    Not quite. Try again!      7    Not quite. Try again!      4    Not quite. Try again!      0    Not quite. Try again!      -1    Not quite. Try again!    "
},
{
  "id": "quiz-arithmetic-4",
  "level": "2",
  "url": "pointers-arrays.html#quiz-arithmetic-4",
  "type": "Reading Question",
  "number": "19.9.4",
  "title": "",
  "body": " Suppose (again...) you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  What is numbers[10]?   )  Random and depends on what is at that memory location    Correct      5    Not quite. Try again!      This will cause a crash of your program    Not quite. Try again!      The compiler sets this to zero    Not quite. Try again!      -11    Not quite. Try again!    "
},
{
  "id": "quiz-arithmetic-5",
  "level": "2",
  "url": "pointers-arrays.html#quiz-arithmetic-5",
  "type": "Reading Question",
  "number": "19.9.5",
  "title": "",
  "body": " Suppose (for the last time) you have declared an array of integers by typing  int numbers[] = {5, -1, 7, 10, 0, -11};  You have furthermore declared a pointer via  int *ptr;  and initialized it via  ptr = numbers + 2;  What is *(++ptr) ?  You want to try this out, right? Remember... Think first!    )  10    Correct      -11    Not quite. Try again!      5    Not quite. Try again!      0    Not quite. Try again!      -1    Not quite. Try again!      7    Not quite. Try again!    "
},
{
  "id": "pointers-functions",
  "level": "1",
  "url": "pointers-functions.html",
  "type": "Section",
  "number": "19.10",
  "title": "Passing Arrays to Functions",
  "body": " Passing Arrays to Functions  array pass-to-functions In the following video you will learn how to pass arrays to functions so that within the function you can use as well as modify values stored in the array.    Video Description    When passing arrays to functions, an & is not needed, since the name of the array is already a pointer to its first element  Arrays can then be modified and used in functions using their pointer name in the function, such as ptr[i]       Suppose an array of integers has been declared using the declaration  int num[50];  Next, x integers are stored in this array (where x is no larger than 50). The array is to be passed to a function sum which is to add up the x integers stored in the array. What should you be passing to the function sum?   )  The number x of integers stored in the array and a pointer to the first element of num.    Correct      A pointer to the first element of num.    Not quite. Try again!      num[0]    Not quite. Try again!      The 50 elements of num, stored as individual integers.    Not quite. Try again!      Suppose a function sum has been defined as follows:  int sum(int n, int array[]) { int i; int result = 0; for (i=0; i<n; i++) result += array[i]; return(result); }  Suppose furthermore that in your main function an array num has been declared and initialized with the following:  int num[]={4,2,7,5,8,9,4,2,4,6};  What is the correct function call of sum() , using this array?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  sum(10, num);    Correct      sum(10, num[0]);    Not quite. Try again!      sum(10, array[0]);    Not quite. Try again!      sum(10, *num);    Not quite. Try again!      sum(10, array);    Not quite. Try again!      "
},
{
  "id": "quiz-arrayfunction-1",
  "level": "2",
  "url": "pointers-functions.html#quiz-arrayfunction-1",
  "type": "Reading Question",
  "number": "19.10.1",
  "title": "",
  "body": " Suppose an array of integers has been declared using the declaration  int num[50];  Next, x integers are stored in this array (where x is no larger than 50). The array is to be passed to a function sum which is to add up the x integers stored in the array. What should you be passing to the function sum?   )  The number x of integers stored in the array and a pointer to the first element of num.    Correct      A pointer to the first element of num.    Not quite. Try again!      num[0]    Not quite. Try again!      The 50 elements of num, stored as individual integers.    Not quite. Try again!    "
},
{
  "id": "quiz-arrayfunction-2",
  "level": "2",
  "url": "pointers-functions.html#quiz-arrayfunction-2",
  "type": "Reading Question",
  "number": "19.10.2",
  "title": "",
  "body": " Suppose a function sum has been defined as follows:  int sum(int n, int array[]) { int i; int result = 0; for (i=0; i<n; i++) result += array[i]; return(result); }  Suppose furthermore that in your main function an array num has been declared and initialized with the following:  int num[]={4,2,7,5,8,9,4,2,4,6};  What is the correct function call of sum() , using this array?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  sum(10, num);    Correct      sum(10, num[0]);    Not quite. Try again!      sum(10, array[0]);    Not quite. Try again!      sum(10, *num);    Not quite. Try again!      sum(10, array);    Not quite. Try again!    "
},
{
  "id": "pointers-functions-practice",
  "level": "1",
  "url": "pointers-functions-practice.html",
  "type": "Section",
  "number": "19.11",
  "title": "Practice Passing Arrays to Functions",
  "body": " Practice Passing Arrays to Functions  Time to practice! Please pick and solve at least one of the following problems. If you get done early please pick another problem!   Option 1    Write a program that does the following: Declare an array of 10 integer values and pass the array to a function in which you have the user enter 10 integers which you save in the array (you should use a loop here). Next, use a second function to print out all 10 values the user has entered.  For example, if the user entered 45, -34, 5, 0, 1, 100, -55,... then the output should be:  1. 45 2. -34 3. 5 4. 0 5. 1 6. 100 7. -55 ...  Does this problem look familiar? You have worked on this before, just not using functions. Below is the code we wrote previously for this problem.   When you are done, please paste your code into the code submission box below:       Option 2    Write a program that declares an array of 100 floats. Then call a function, to which you pass the array, which fills the array with the square roots of the numbers 1 - 100. Next, call another function to print the numbers stored in the array in the following form:  The square root of 1 equals 1.00000. The square root of 2 equals 1.41421. The square root of 3 equal 1.732051. ...  Note: In order to be able to use the square root function ( sqrt() ), you need to include the header file for the mathematics library using the command  #include <math.h>  at the top of your program where the other #include directives are located.  Does this problem look familiar? You have worked on this before, just not using functions. Below is the code we wrote previously for this problem.   When you are done, please paste your code into the code submission box below:       Option 3    Write a program that prompts the user to type in a sentence, and that reads the sentence, character by character, and stores it in an array of characters. Stop reading, when the array is full or the character read is \\n . Next, print out the sentence in reverse. Your program should use two functions: one function to read from the user input the relevant sentence, and another function to print the sentence in reverse. You'll also need to think about passing along the length of the sentence entered by the user.  Here is a sample output:   Enter a sentence:  I love programming.  Reverse: .gnimmargorp evol I   Does this problem look familiar? You have worked on this before, just not using functions. Below is the code we wrote previously for this problem.   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-19-11-1-Passing_Arrays_To_Functions_1",
  "level": "2",
  "url": "pointers-functions-practice.html#activity-19-11-1-Passing_Arrays_To_Functions_1",
  "type": "Activity",
  "number": "19.5",
  "title": "",
  "body": "  Write a program that does the following: Declare an array of 10 integer values and pass the array to a function in which you have the user enter 10 integers which you save in the array (you should use a loop here). Next, use a second function to print out all 10 values the user has entered.  For example, if the user entered 45, -34, 5, 0, 1, 100, -55,... then the output should be:  1. 45 2. -34 3. 5 4. 0 5. 1 6. 100 7. -55 ...  Does this problem look familiar? You have worked on this before, just not using functions. Below is the code we wrote previously for this problem.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-19-11-2-Passing_Arrays_To_Functions_2",
  "level": "2",
  "url": "pointers-functions-practice.html#activity-19-11-2-Passing_Arrays_To_Functions_2",
  "type": "Activity",
  "number": "19.6",
  "title": "",
  "body": "  Write a program that declares an array of 100 floats. Then call a function, to which you pass the array, which fills the array with the square roots of the numbers 1 - 100. Next, call another function to print the numbers stored in the array in the following form:  The square root of 1 equals 1.00000. The square root of 2 equals 1.41421. The square root of 3 equal 1.732051. ...  Note: In order to be able to use the square root function ( sqrt() ), you need to include the header file for the mathematics library using the command  #include <math.h>  at the top of your program where the other #include directives are located.  Does this problem look familiar? You have worked on this before, just not using functions. Below is the code we wrote previously for this problem.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-19-11-3-Passing_Arrays_To_Functions_3",
  "level": "2",
  "url": "pointers-functions-practice.html#activity-19-11-3-Passing_Arrays_To_Functions_3",
  "type": "Activity",
  "number": "19.7",
  "title": "",
  "body": "  Write a program that prompts the user to type in a sentence, and that reads the sentence, character by character, and stores it in an array of characters. Stop reading, when the array is full or the character read is \\n . Next, print out the sentence in reverse. Your program should use two functions: one function to read from the user input the relevant sentence, and another function to print the sentence in reverse. You'll also need to think about passing along the length of the sentence entered by the user.  Here is a sample output:   Enter a sentence:  I love programming.  Reverse: .gnimmargorp evol I   Does this problem look familiar? You have worked on this before, just not using functions. Below is the code we wrote previously for this problem.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "pointers-arithmetic",
  "level": "1",
  "url": "pointers-arithmetic.html",
  "type": "Section",
  "number": "19.12",
  "title": "Arrays, Functions, and Pointer Arithmetic",
  "body": " Arrays, Functions, and Pointer Arithmetic  More practice! Remember: practice makes perfect. Please pick and solve at least one of the following problems:   Option 1    Write a program that prompts the user to enter the weight of a letter and that tells the user the postage necessary to mail this letter with the US Postal Service.  Here is a sample output:   How much does your letter weigh (in ounces):  5.5  The postage is 203 cents.   Note: You can start with the code given below. Postage is calculated based on the next higher weight in the chart.  Your program should use a function, to which you pass the two relevant arrays along with their sizes, as well as the weight entered by the user, and which returns the corresponding postage. The final version of your program should use pointer arithmetic .  Does this problem look familiar? You have worked on this before, just not using functions or pointer arithmetic. Below is the code we wrote previously for this problem.   When you are done, please put your code into the code submission box below:       Option 2    Write a C-program that finds the largest integer stored in an array of integers. You can write your code so that the array values are entered by the user (use a function for this), or you may simply hardcode an integer array for test purposes. For the main task you should definitely use a function, to which you pass the array as well as its size, and which returns the largest integer stored in the array. Your function should not access any array elements using [] , but rather you should use pointer arithmetic .  Does this problem look familiar? You have worked on this before, just not using functions or pointer arithmetic. Below is the code we wrote previously for this problem.   When you are done, please put your code into the code submission box below:       Option 3    Write a C program that finds the average of integer numbers stored in an array. You may have the user enter the array values via a function, or you can simply hard-code the array for testing purposes. For the main task you should definitely use a function to which you pass the array as well as its size, and which returns the average of the numbers stored in the array. Your function should use pointer arithmetic .  Does this problem look familiar? You have worked on this before, just not using functions or pointer arithmetic. Below is the code we wrote previously for this problem.   When you are done, please put your code into the code submission box below:      "
},
{
  "id": "activity-19-12-1-Option_1",
  "level": "2",
  "url": "pointers-arithmetic.html#activity-19-12-1-Option_1",
  "type": "Activity",
  "number": "19.8",
  "title": "",
  "body": "  Write a program that prompts the user to enter the weight of a letter and that tells the user the postage necessary to mail this letter with the US Postal Service.  Here is a sample output:   How much does your letter weigh (in ounces):  5.5  The postage is 203 cents.   Note: You can start with the code given below. Postage is calculated based on the next higher weight in the chart.  Your program should use a function, to which you pass the two relevant arrays along with their sizes, as well as the weight entered by the user, and which returns the corresponding postage. The final version of your program should use pointer arithmetic .  Does this problem look familiar? You have worked on this before, just not using functions or pointer arithmetic. Below is the code we wrote previously for this problem.   When you are done, please put your code into the code submission box below:    "
},
{
  "id": "activity-19-12-2-Option_2",
  "level": "2",
  "url": "pointers-arithmetic.html#activity-19-12-2-Option_2",
  "type": "Activity",
  "number": "19.9",
  "title": "",
  "body": "  Write a C-program that finds the largest integer stored in an array of integers. You can write your code so that the array values are entered by the user (use a function for this), or you may simply hardcode an integer array for test purposes. For the main task you should definitely use a function, to which you pass the array as well as its size, and which returns the largest integer stored in the array. Your function should not access any array elements using [] , but rather you should use pointer arithmetic .  Does this problem look familiar? You have worked on this before, just not using functions or pointer arithmetic. Below is the code we wrote previously for this problem.   When you are done, please put your code into the code submission box below:    "
},
{
  "id": "activity-19-12-3-Option_3",
  "level": "2",
  "url": "pointers-arithmetic.html#activity-19-12-3-Option_3",
  "type": "Activity",
  "number": "19.10",
  "title": "",
  "body": "  Write a C program that finds the average of integer numbers stored in an array. You may have the user enter the array values via a function, or you can simply hard-code the array for testing purposes. For the main task you should definitely use a function to which you pass the array as well as its size, and which returns the average of the numbers stored in the array. Your function should use pointer arithmetic .  Does this problem look familiar? You have worked on this before, just not using functions or pointer arithmetic. Below is the code we wrote previously for this problem.   When you are done, please put your code into the code submission box below:    "
},
{
  "id": "pointers-summary",
  "level": "1",
  "url": "pointers-summary.html",
  "type": "Section",
  "number": "19.13",
  "title": "Summary",
  "body": " Summary  In this chapter we studied pointers (addresses of variables) and how they can help with writing better code. We covered:   The address of a variable  Dereferencing a pointer  Arrays and pointers  Passing arrays to functions  Arrays don't know their own sizes  Using pointer arithmetic to access array elements   Pointers make it possible to break up a large problem into many small sub-problems. Summary of designing and testing methods discussed in this chapter:   Top-Down Design is used to break down larger problems into manageable pieces.  Bottom-Up Testing is used to test the individual pieces.  Top-Down Testing is used to check the flow of your program.   "
},
{
  "id": "strings-intro",
  "level": "1",
  "url": "strings-intro.html",
  "type": "Section",
  "number": "20.1",
  "title": "Declaring and Initializing Strings",
  "body": " Declaring and Initializing Strings  strings Suppose you wanted to store a name (for example \"Petra\") in the computer's memory. Of course you could simply declare five individual characters and assign the letters of the name to them. But that's not very convenient and we already know that an array of characters would be a much better option. We could then simply use a loop to print out all of the characters one-by-one. The only slight issue would be that we'd have to keep track of the length of the name somewhere in order to be able to tell the loop how many times to run. Not a huge deal really, and we are already used to doing so for other arrays.  But C actually provides some additional functionality for storing so-called strings that makes it unnecessary to separately keep track of the length of the string. How? An extra character (the null terminator \\0 ) is placed after the last character in the array in order to indicate the end of the string. And so:  A string is an array of type char that is terminated with the null character \\0 . By the way, the null terminator (character) is the character in the ASCII table with ASCII code 0.  We have already been using string constants (that cannot be changed), for example:  printf(\"This is a string constant.\\n\");  But it is very useful to have variables that can hold strings (for example, filenames). In the following example we use a variable of type string (so really, an array of characters), to hold a first name and a last name. You can see from the example how you can initialize such a variable at declaration time . Sadly things won't be quite as easy elsewhere in our code but more on that later.     How much space is allocated in memory for the string firstName if each char uses 1 byte?    6 bytes    The contents of this string include the name we are storing, \"Petra\", followed by the null character \\0 which signifies the termination of the string. Each character uses 1 byte, so together we have 5 bytes for the name plus one for the null character. That adds up to 6 bytes total!  Feel free to check this logic using the sizeof() function and the %zu format specifier, as discussed in .    "
},
{
  "id": "investigation-23",
  "level": "2",
  "url": "strings-intro.html#investigation-23",
  "type": "Investigate",
  "number": "20.1",
  "title": "",
  "body": "  How much space is allocated in memory for the string firstName if each char uses 1 byte?    6 bytes    The contents of this string include the name we are storing, \"Petra\", followed by the null character \\0 which signifies the termination of the string. Each character uses 1 byte, so together we have 5 bytes for the name plus one for the null character. That adds up to 6 bytes total!  Feel free to check this logic using the sizeof() function and the %zu format specifier, as discussed in .   "
},
{
  "id": "strings-assign",
  "level": "1",
  "url": "strings-assign.html",
  "type": "Section",
  "number": "20.2",
  "title": "Assign a New Value",
  "body": " Assign a New Value  strings update Just like the variables we have previously worked with, strings can also be updated after they are initialized.   Can you assign a new string value to firstName in the code? For example, can you use the following line?  firstName = \"Alex\";   Please paste your text submission into the box below, then select Run to submit it:      We declare strings as arrays of type char , so is it possible to include numbers within these strings? For example, could we declare the following string?  char firstName[] = \"Simon1234\";      Yes, numbers can be included!    Numbers are characters too, so they can be included in strings. This logic is not reversible, however, so you cannot include letters within a numerical array (such as an integer array).  Try it out above by declaring a string with numbers in it and an integer array with letters in it.    "
},
{
  "id": "activity-20-1-1-New_String_Value-no-output",
  "level": "2",
  "url": "strings-assign.html#activity-20-1-1-New_String_Value-no-output",
  "type": "Activity",
  "number": "20.2",
  "title": "",
  "body": " Can you assign a new string value to firstName in the code? For example, can you use the following line?  firstName = \"Alex\";   Please paste your text submission into the box below, then select Run to submit it:   "
},
{
  "id": "investigation-24",
  "level": "2",
  "url": "strings-assign.html#investigation-24",
  "type": "Investigate",
  "number": "20.3",
  "title": "",
  "body": "  We declare strings as arrays of type char , so is it possible to include numbers within these strings? For example, could we declare the following string?  char firstName[] = \"Simon1234\";      Yes, numbers can be included!    Numbers are characters too, so they can be included in strings. This logic is not reversible, however, so you cannot include letters within a numerical array (such as an integer array).  Try it out above by declaring a string with numbers in it and an integer array with letters in it.   "
},
{
  "id": "strings-library",
  "level": "1",
  "url": "strings-library.html",
  "type": "Section",
  "number": "20.3",
  "title": "The String Library",
  "body": " The String Library  strings library libraries string We just saw that we cannot update the value of a string with a simple assignment operation (as in firstName = \"Alex\" ) in our code. Only during the declaration phase is it possible to initialize using this method (as in char firstName[20] = \"Alex\"; ).  Thankfully, C comes with a whole library of functions to help in our work with strings, the C string library . It provides many useful functions that allow us to work with strings. In order to use functions from this library we need to tell the computer that we'll be doing so with the following line at the top of our code:  #include <string.h>  The following example shows how we can use the string library to update the value of a string within our code:   "
},
{
  "id": "strings-practice",
  "level": "1",
  "url": "strings-practice.html",
  "type": "Section",
  "number": "20.4",
  "title": "Practice Your Strings!",
  "body": " Practice Your Strings!   Take a look at the code and then hit the Run button. Is that the output you expected? What is going on with the code here?   Please paste your text submission into the box below, then select Run to submit it:    "
},
{
  "id": "activity-20-4-1-String_Practice-no-output",
  "level": "2",
  "url": "strings-practice.html#activity-20-4-1-String_Practice-no-output",
  "type": "Activity",
  "number": "20.4",
  "title": "",
  "body": " Take a look at the code and then hit the Run button. Is that the output you expected? What is going on with the code here?   Please paste your text submission into the box below, then select Run to submit it:   "
},
{
  "id": "strings-length",
  "level": "1",
  "url": "strings-length.html",
  "type": "Section",
  "number": "20.5",
  "title": "String Length",
  "body": " String Length  strings length C can find the length of a string for you! Of course, you could do so yourself. This means that strings are fundamentally different from general arrays, in that their length can be determined due to the placement of the null character at the end of each string.     Without using strlen() , how could you find the length of a string?    Remember, all strings are terminated by the null character \/0 .    Try your solution in the code window above, then compare it to the length provided when using strlen() to ensure your solution works.    "
},
{
  "id": "investigation-25",
  "level": "2",
  "url": "strings-length.html#investigation-25",
  "type": "Investigate",
  "number": "20.5",
  "title": "",
  "body": "  Without using strlen() , how could you find the length of a string?    Remember, all strings are terminated by the null character \/0 .    Try your solution in the code window above, then compare it to the length provided when using strlen() to ensure your solution works.   "
},
{
  "id": "strings-input",
  "level": "1",
  "url": "strings-input.html",
  "type": "Section",
  "number": "20.6",
  "title": "Reading Strings from Input",
  "body": " Reading Strings from Input  strings read from input format specifiers %s The scanf() function can be used to read a string from the user input using the %s format specifier. By default, reading stops when white space (i.e. a space, return, etc.) is encountered. There are many options to modify this behavior so that the reading stops based on different conditions (if interested: Google).  The below example shows how to read a two words (a first name and a last name) from the user input and store them in corresponding strings.     Why is the ampersand character & missing in front of firstName and lastName in the above scanf() statement?    Remember, a string is really an array of characters (with the null terminator placed at the end). Do you remember what an array variable really stores?.    The variable firstName (and also the variable lastName), without any brackets placed behind it, stores the address of the zeroth element of the array (so the first letter of the name in this case). Since it is already an address there is no need to place an additional & operator in front of it since that would get you the address of the address!    "
},
{
  "id": "investigation-26",
  "level": "2",
  "url": "strings-input.html#investigation-26",
  "type": "Investigate",
  "number": "20.6",
  "title": "",
  "body": "  Why is the ampersand character & missing in front of firstName and lastName in the above scanf() statement?    Remember, a string is really an array of characters (with the null terminator placed at the end). Do you remember what an array variable really stores?.    The variable firstName (and also the variable lastName), without any brackets placed behind it, stores the address of the zeroth element of the array (so the first letter of the name in this case). Since it is already an address there is no need to place an additional & operator in front of it since that would get you the address of the address!   "
},
{
  "id": "strings-print",
  "level": "1",
  "url": "strings-print.html",
  "type": "Section",
  "number": "20.7",
  "title": "Printing to Strings",
  "body": " Printing to Strings  strings sprintf() Suppose you wanted to store a file name in a string (in order to be able to work with the file) and you had the user enter the name (such as \"importantFile\") but you then wanted to add the file extension (such as \".txt\") to this name. Here is a clever way to create such a custom string: You can actually \"print\" to a string using the sprintf() function which basically works exactly the same as printf() ! Here is the exact format:  sprintf(dest, format_string, print_list);  So in the above example you could use something like sprintf(fileName, \"%s.txt\", userEntry); to accomplish the creation of the desired file name.  Usage of sprintf() requires the standard library and with that the inclusion of this line at the top of your code:  #include <stdlib.h>     "
},
{
  "id": "strings-alphabetize",
  "level": "1",
  "url": "strings-alphabetize.html",
  "type": "Section",
  "number": "20.8",
  "title": "Alphabetize Strings",
  "body": " Alphabetize Strings  strings alphabetize Similar to how we can sort numbers, strings can also be sorted (by alphabet.) The C string library provides help for doing so via the strcmp function. This function compares two strings and returns a negative number, zero or a positive number depending on which of the two strings comes first in the alphabet.  Here is how the function works: strcmp compares the two strings character by character. If the first character of two strings is equal, the next character of two strings are compared. This continues until the corresponding characters of the two strings are different or a null character '\\0' is reached. Here is the return value of the function:  strcmp() returns  0 if both strings are identical  a negative integer if the ASCII value of the first unmatched character is less than that of the second  a positive integer if the ASCII value of the first unmatched character is greater than that of the second  So if you compare \"Hello\" with \"hello\", what would strcmp() return? Use the code window below to look at a bunch of examples and really understand the function.   Which strings come first in the alphabet?    "
},
{
  "id": "activity-96",
  "level": "2",
  "url": "strings-alphabetize.html#activity-96",
  "type": "Activity",
  "number": "20.7",
  "title": "",
  "body": " Which strings come first in the alphabet?   "
},
{
  "id": "strings-summary",
  "level": "1",
  "url": "strings-summary.html",
  "type": "Section",
  "number": "20.9",
  "title": "Summary",
  "body": " Summary  Summary:   A string is a null-terminated array of characters  Nothing will prevent you from placing a string that is too long into a string variable. It's your responsibility to pay attention!  The %s format specifier can be used with printf() and scanf() to print or read strings.   The string library provides functionality such as:  strcpy  strcmp  strlen  And many more!     You can also create a string using sprintf() .   "
},
{
  "id": "malloc-intro",
  "level": "1",
  "url": "malloc-intro.html",
  "type": "Section",
  "number": "21.1",
  "title": "<code class=\"code-inline tex2jax_ignore\">malloc()<\/code> - Dynamically Allocating Memory",
  "body": " malloc() - Dynamically Allocating Memory  malloc() Dynamic memory allocation happens at runtime: depending on your needs you can ask for memory, which is then reserved in the so-called heap (as opposed to the stack , where your 'normal' variables are stored).  This can be useful, for example, when you need an array to store data but you don't know until runtime how large this array needs to be.  Recall that memory in the stack is managed for you. The heap is a bit different. Unlike variables in the stack (which only persist for the duration of the function in which they are declared), memory allocated dynamically remains reserved for you until you explicitly free this reservation.  The C-command to ask for (allocate) memory in the heap is called malloc() . This function takes as an argument the amount of space you wish to reserve (in bytes), attempts to find that amount of space in the heap and then returns a pointer to the start of the reserved block of memory. The return data type of the malloc() function is a void * and it is your job to cast this void pointer to the type of pointer ( int * , float * , etc.) that fits your needs.  The prototype for malloc() is thus  void * mallow(int numb_bytes);  The malloc() function can be found in the standard library <stdlib.h> . You therefore need to  #include <std lib.h>  in order to use the function. The following video demonstrates the use of malloc() .    Video Description    malloc() blocks off a given section of a memory for a variable and returns a void * to that memory  NEW SYNTAX: the following line reserves memory for one int and returns the pointer to that memory (which can then be dereferenced)  intptr = (int *) malloc(sizeof(int));     Suppose you wanted to reserve space in memory for one number of type float and then store the memory location in a variable numptr of type float * . Which of the following would be the correct way to do so?   )  numptr = (float *) malloc(sizeof(float));    Correct      numptr = malloc(float *);    Not quite. Try again!      numptr = (float) malloc(sizeof(float *));    Not quite. Try again!      (float *) numptr = malloc (float);    Not quite. Try again!      numptr = (float *) malloc(sizeof(num));    Not quite. Try again!      "
},
{
  "id": "quiz-malloc-1",
  "level": "2",
  "url": "malloc-intro.html#quiz-malloc-1",
  "type": "Reading Question",
  "number": "21.1.1",
  "title": "",
  "body": " Suppose you wanted to reserve space in memory for one number of type float and then store the memory location in a variable numptr of type float * . Which of the following would be the correct way to do so?   )  numptr = (float *) malloc(sizeof(float));    Correct      numptr = malloc(float *);    Not quite. Try again!      numptr = (float) malloc(sizeof(float *));    Not quite. Try again!      (float *) numptr = malloc (float);    Not quite. Try again!      numptr = (float *) malloc(sizeof(num));    Not quite. Try again!    "
},
{
  "id": "malloc-free",
  "level": "1",
  "url": "malloc-free.html",
  "type": "Section",
  "number": "21.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">free()<\/code> - Releasing Dynamically Allocated Memory",
  "body": " free() - Releasing Dynamically Allocated Memory  free() Recall that memory reserved dynamically via malloc() is completely your responsibility. Therefore, when you are done using the memory it is your job to tell the computer that you no longer need it and thus make available this memory for other purposes. The process of releasing memory is called freeing and we will now learn how to release, or free , memory that has been reserved via malloc() in the heap. The function to do so is called free() and it takes as an argument a pointer to the memory block that you'd like to release.  The prototype for free() is  void free(void *ptr);  The free() function also is a part of the standard library <stdlib.h> and you therefore need to  #include <stdlib.h>  (which you probably already did for the use of malloc() .) The following video demonstrates the use of the free() function.    Video Description    If memory has been reserved using malloc() , it must be freed using free() after it is no longer needed  NEW SYNTAX: free(ptr) frees the memory reserved at the pointer \"ptr\"       Given the following code:  #include <stdio.h> #include <stdlib.h> int main(void) { int *a, *b; float *c; a = (int *) malloc(sizeof(int)); *a = 1; b = (int *) malloc(sizeof(int)); *b = 2; free(a); free(b); c = (float *) malloc(sizeof(float)); *c = 3.5; free(c); return 0; }  What would the line  printf(\"a = %d, b = %d, c = %f\\n\", *a, *b, *c);  print to the screen if placed right before the return 0; line?   )  The result is unpredictable and may be different from one system to the next.    Correct      a = 1, b = 2, c = 3.5    Not quite. Try again!      a = 2, b = 2, c = 3.5    Not quite. Try again!      a = 2, b = 3, c = 3.5    Not quite. Try again!      a = 2, b = 3, c = 0.5    Not quite. Try again!      "
},
{
  "id": "quiz-malloc-2",
  "level": "2",
  "url": "malloc-free.html#quiz-malloc-2",
  "type": "Reading Question",
  "number": "21.2.1",
  "title": "",
  "body": " Given the following code:  #include <stdio.h> #include <stdlib.h> int main(void) { int *a, *b; float *c; a = (int *) malloc(sizeof(int)); *a = 1; b = (int *) malloc(sizeof(int)); *b = 2; free(a); free(b); c = (float *) malloc(sizeof(float)); *c = 3.5; free(c); return 0; }  What would the line  printf(\"a = %d, b = %d, c = %f\\n\", *a, *b, *c);  print to the screen if placed right before the return 0; line?   )  The result is unpredictable and may be different from one system to the next.    Correct      a = 1, b = 2, c = 3.5    Not quite. Try again!      a = 2, b = 2, c = 3.5    Not quite. Try again!      a = 2, b = 3, c = 3.5    Not quite. Try again!      a = 2, b = 3, c = 0.5    Not quite. Try again!    "
},
{
  "id": "malloc-array",
  "level": "1",
  "url": "malloc-array.html",
  "type": "Section",
  "number": "21.3",
  "title": "Allocate Memory for Arrays",
  "body": " Allocate Memory for Arrays  malloc() arrays We can extend the use of malloc() beyond single variables and use it to reserve memory for an entire array!    Video Description    By doing the math (multiplying the size of a given datatype with the number of elements of that type you wish to store), the malloc() function can be used to reserve space for entire arrays  NEW SYNTAX: the following line will block off memory for an integer array with five elements  array = (int *) malloc(5*sizeof(int));     Suppose you would like to reserve space in memory for an array of N integers (where N is a variable of type int that holds the number of ints to be stored) and store the resulting location in an integer pointer (an int * ) array that has already been declared. What is the correct way to do so?   )  array = (int *) malloc(N*sizeof(int));    Correct      array = (int *) malloc(N*int);    Not quite. Try again!      N = (int *) malloc(array*sizeof(int));    Not quite. Try again!      (int *) array = N*malloc(sizeof(int));    Not quite. Try again!      "
},
{
  "id": "quiz-malloc-3",
  "level": "2",
  "url": "malloc-array.html#quiz-malloc-3",
  "type": "Reading Question",
  "number": "21.3.1",
  "title": "",
  "body": " Suppose you would like to reserve space in memory for an array of N integers (where N is a variable of type int that holds the number of ints to be stored) and store the resulting location in an integer pointer (an int * ) array that has already been declared. What is the correct way to do so?   )  array = (int *) malloc(N*sizeof(int));    Correct      array = (int *) malloc(N*int);    Not quite. Try again!      N = (int *) malloc(array*sizeof(int));    Not quite. Try again!      (int *) array = N*malloc(sizeof(int));    Not quite. Try again!    "
},
{
  "id": "malloc-practice",
  "level": "1",
  "url": "malloc-practice.html",
  "type": "Section",
  "number": "21.4",
  "title": "Malloc and Free Practice",
  "body": " Malloc and Free Practice  Time to practice! Please pick and solve at least one of the following problems:   Option 1    Write a program that does the following:  In the main function, ask the user to enter a number of integers they wish to store, and then allocate memory for a large enough array to hold all of these numbers. Next, call a function userInput() , to which you pass the array along with the size of the array, in which the user enters the desired integers which are then saved in the array. Next, your main function should call a printArray() function (to which you again pass the array and its size), and which prints out all values the user has entered.  Your main function should thus look as follows:  #include <stdio.h> #include <stdlib.h> \/* prototypes here... *\/ int main (void) { int *numbers; int size; \/* Have user enter size... *\/ numbers = (int *) malloc(...); userInput(size, numbers); printArray(size, numbers); free(numbers); return(0); }   When you are done, please paste your code into the code submission box below:       Option 2    Write a simple C-program with a main function and a function allocateString() that allocates memory for strings. The allocateString() function should be declared as returning a pointer to a char type (namely holding the location of the string), and it takes as argument an integer, representing the number of characters to allocate space for in memory.  Your main function should call allocateString() with an argument large enough to hold the sentence I love programming! (don't forget about needing space for the null terminator), and then copy this sentence into the space pointed to by the returned pointer. Next, you should print the sentence (using the pointer) and then free the pointer.   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-21-4-1-Malloc_Free_Practice_1",
  "level": "2",
  "url": "malloc-practice.html#activity-21-4-1-Malloc_Free_Practice_1",
  "type": "Activity",
  "number": "21.1",
  "title": "",
  "body": "  Write a program that does the following:  In the main function, ask the user to enter a number of integers they wish to store, and then allocate memory for a large enough array to hold all of these numbers. Next, call a function userInput() , to which you pass the array along with the size of the array, in which the user enters the desired integers which are then saved in the array. Next, your main function should call a printArray() function (to which you again pass the array and its size), and which prints out all values the user has entered.  Your main function should thus look as follows:  #include <stdio.h> #include <stdlib.h> \/* prototypes here... *\/ int main (void) { int *numbers; int size; \/* Have user enter size... *\/ numbers = (int *) malloc(...); userInput(size, numbers); printArray(size, numbers); free(numbers); return(0); }   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-21-4-2-Malloc_Free_Practice_2",
  "level": "2",
  "url": "malloc-practice.html#activity-21-4-2-Malloc_Free_Practice_2",
  "type": "Activity",
  "number": "21.2",
  "title": "",
  "body": "  Write a simple C-program with a main function and a function allocateString() that allocates memory for strings. The allocateString() function should be declared as returning a pointer to a char type (namely holding the location of the string), and it takes as argument an integer, representing the number of characters to allocate space for in memory.  Your main function should call allocateString() with an argument large enough to hold the sentence I love programming! (don't forget about needing space for the null terminator), and then copy this sentence into the space pointed to by the returned pointer. Next, you should print the sentence (using the pointer) and then free the pointer.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "malloc-strings",
  "level": "1",
  "url": "malloc-strings.html",
  "type": "Section",
  "number": "21.5",
  "title": "String Practice",
  "body": " String Practice  Have you ever wondered how to store a bunch of names in an array? You'd need an array of strings. But each string on its own is already an array of characters. Yikes! You'd therefore need an array of arrays! This sounds rather complicated but now we actually have all of the tools needed to do so. Before embarking on the array of strings challenge, let's quickly review strings on their own. Please pick and solve at least one of the following problems:   Option 1    Write a C program with a function printString() that takes a string (i.e. a char * ) as an argument and prints the string, with individual characters separated by spaces. Here is an example:  printString(\"chocolate\");  should print  c h o c o l a t e  and  printString(\"I love chocolate!\");  should print  I l o v e c h o c o l a t e !   When you are done, please paste your code into the code submission box below:       Option 2    Write a C program with a function countWords() that takes a string as an input parameter and returns the number of words in the string.  For example,  countWords(\"Today is Wednesday!\");  should return the number 3.   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-21-5-1-String_Practice_1",
  "level": "2",
  "url": "malloc-strings.html#activity-21-5-1-String_Practice_1",
  "type": "Activity",
  "number": "21.3",
  "title": "",
  "body": "  Write a C program with a function printString() that takes a string (i.e. a char * ) as an argument and prints the string, with individual characters separated by spaces. Here is an example:  printString(\"chocolate\");  should print  c h o c o l a t e  and  printString(\"I love chocolate!\");  should print  I l o v e c h o c o l a t e !   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-21-5-2-String_Practice_2",
  "level": "2",
  "url": "malloc-strings.html#activity-21-5-2-String_Practice_2",
  "type": "Activity",
  "number": "21.4",
  "title": "",
  "body": "  Write a C program with a function countWords() that takes a string as an input parameter and returns the number of words in the string.  For example,  countWords(\"Today is Wednesday!\");  should return the number 3.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "malloc-array-strings",
  "level": "1",
  "url": "malloc-array-strings.html",
  "type": "Section",
  "number": "21.6",
  "title": "Arrays of Strings",
  "body": " Arrays of Strings  How do we store a list of names in an array? A name is stored in an array of characters, so we kind of need an array of arrays? We'll talk about such multi-dimensional arrays soon, but for now we'll use a slightly different method: an array of pointers.   Write a C program that reads a list of first names from the file \"names.txt\" (a test file can be accessed in the coding window below if you are using our code tool - if you work on the servers directly, please simply create your own input file \"names.txt\" ). For each name that you read you need to reserve space in memory using malloc() to store the name. To do so, you can either read the name first into a temporary variable, find its length, and then allocate the relevant memory (don't forget about the null terminator), or you may assume that no name has more than 50 characters and allocate that same amount of space for each name read. In addition to allocating space for the name read and placing the name read into that space, you also need to store the pointer to the name in an array of pointers. You may assume that there are no more than 20 names in the file.  When you are done reading all of the names, call a function printNames() , to which you pass the array of pointers along with the number of names you read, and which prints out the list of names. Finally, call a function freeNames() , to which you again pass the array of pointers as well as the number of names stored in it, and which frees the space allocated for each name.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-21-6-1-Array_of_Strings-no-output",
  "level": "2",
  "url": "malloc-array-strings.html#activity-21-6-1-Array_of_Strings-no-output",
  "type": "Activity",
  "number": "21.5",
  "title": "",
  "body": " Write a C program that reads a list of first names from the file \"names.txt\" (a test file can be accessed in the coding window below if you are using our code tool - if you work on the servers directly, please simply create your own input file \"names.txt\" ). For each name that you read you need to reserve space in memory using malloc() to store the name. To do so, you can either read the name first into a temporary variable, find its length, and then allocate the relevant memory (don't forget about the null terminator), or you may assume that no name has more than 50 characters and allocate that same amount of space for each name read. In addition to allocating space for the name read and placing the name read into that space, you also need to store the pointer to the name in an array of pointers. You may assume that there are no more than 20 names in the file.  When you are done reading all of the names, call a function printNames() , to which you pass the array of pointers along with the number of names you read, and which prints out the list of names. Finally, call a function freeNames() , to which you again pass the array of pointers as well as the number of names stored in it, and which frees the space allocated for each name.   When you are done, please paste your code into the code submission box below:   "
},
{
  "id": "malloc-summary",
  "level": "1",
  "url": "malloc-summary.html",
  "type": "Section",
  "number": "21.7",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Using malloc() to dynamically allocate memory  Using free() to release allocated memory  Practice using these new tools to reserve memory for strings and arrays of strings   "
},
{
  "id": "sortsearch-linear",
  "level": "1",
  "url": "sortsearch-linear.html",
  "type": "Section",
  "number": "22.1",
  "title": "Linear Search",
  "body": " Linear Search  There are many reasons for wanting to sort and\/or search lists of data:   Look for a student record in a list of records  Print alphabetically sorted list of names  Sort data values in ascending\/descending order  And many more!   We'll start by introducing a very simple algorithm, called linear search , to search for a specific item in a list of items.    Video Description    search linear Linear search goes through an array element by element and checks if the element matches the search argument  If the element is found, break the while loop by using a flag variable to indicate something has been \"found\"       Quick review question: Which of the following is the correct way to declare and initialize a string?   )  char name[] = \"cool_file_name\";    Correct      char name[50]; name = \"cool_file_name\";    Not quite. Try again!      char name[] = \"cool_file_name\";    Not quite. Try again!      char = \"cool_file_name\"[50];    Not quite. Try again!      More review: Is there anything wrong with the following:  char name[10]; . . . strcpy(name, \"TodayIsMonday\");   )  This will overwrite memory cells that have not been reserved for name.    Correct      It should be strcpy(\"name\", TodayIsMonday);    Not quite. Try again!      It should be strcpy(“TodayIsMonday”, name);    Not quite. Try again!      No, nothing wrong.    Not quite. Try again!      Even more review: What is the result of the following:  strcmp(\"my_apple\", \"my_banana\");  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  a negative number    Correct      the letter 'b'    Not quite. Try again!      a positive number    Not quite. Try again!      zero    Not quite. Try again!      the letter 'a'    Not quite. Try again!      Final review question (I promise!): Suppose a string has been declared as follows:  char food[30];  You want the user to enter their favorite food and store the response in the string food. What is the correct command to do so?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  scanf(\"%s\", &food);    Correct      scanf(\"%s\", food[0]);    Not quite. Try again!      scanf(\"%s\", food);    Not quite. Try again!      scanf(\"%s\", *food);    Not quite. Try again!      "
},
{
  "id": "quiz-sortsearch-1",
  "level": "2",
  "url": "sortsearch-linear.html#quiz-sortsearch-1",
  "type": "Reading Question",
  "number": "22.1.1",
  "title": "",
  "body": " Quick review question: Which of the following is the correct way to declare and initialize a string?   )  char name[] = \"cool_file_name\";    Correct      char name[50]; name = \"cool_file_name\";    Not quite. Try again!      char name[] = \"cool_file_name\";    Not quite. Try again!      char = \"cool_file_name\"[50];    Not quite. Try again!    "
},
{
  "id": "quiz-sortsearch-2",
  "level": "2",
  "url": "sortsearch-linear.html#quiz-sortsearch-2",
  "type": "Reading Question",
  "number": "22.1.2",
  "title": "",
  "body": " More review: Is there anything wrong with the following:  char name[10]; . . . strcpy(name, \"TodayIsMonday\");   )  This will overwrite memory cells that have not been reserved for name.    Correct      It should be strcpy(\"name\", TodayIsMonday);    Not quite. Try again!      It should be strcpy(“TodayIsMonday”, name);    Not quite. Try again!      No, nothing wrong.    Not quite. Try again!    "
},
{
  "id": "quiz-sortsearch-3",
  "level": "2",
  "url": "sortsearch-linear.html#quiz-sortsearch-3",
  "type": "Reading Question",
  "number": "22.1.3",
  "title": "",
  "body": " Even more review: What is the result of the following:  strcmp(\"my_apple\", \"my_banana\");  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  a negative number    Correct      the letter 'b'    Not quite. Try again!      a positive number    Not quite. Try again!      zero    Not quite. Try again!      the letter 'a'    Not quite. Try again!    "
},
{
  "id": "quiz-sortsearch-4",
  "level": "2",
  "url": "sortsearch-linear.html#quiz-sortsearch-4",
  "type": "Reading Question",
  "number": "22.1.4",
  "title": "",
  "body": " Final review question (I promise!): Suppose a string has been declared as follows:  char food[30];  You want the user to enter their favorite food and store the response in the string food. What is the correct command to do so?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  scanf(\"%s\", &food);    Correct      scanf(\"%s\", food[0]);    Not quite. Try again!      scanf(\"%s\", food);    Not quite. Try again!      scanf(\"%s\", *food);    Not quite. Try again!    "
},
{
  "id": "sortsearch-bisection",
  "level": "1",
  "url": "sortsearch-bisection.html",
  "type": "Section",
  "number": "22.2",
  "title": "Bisection Search",
  "body": " Bisection Search  As you have seen, Linear Search (also called sequential search) is a very simple algorithm, for which the data to be searched can be in any order. But the algorithm is not very efficient. Imagine looking for a name in a phone book that hasn't been sorted alphabetically   search bisection If your data is sorted, then there is a much more efficient algorithm called Bisection Search that you can use to look for an item in your list.    Video Description    Requires that the list is in sorted order  Splits list in half, compares which half the element will be in  Continues to halve the list until the item is found       Which of the following is the correct sequence of instructions to swap the values of two variables a and b (you may use an additional variable c if you wish)?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  c=a; a=b; b=c;    Correct      c=b; a=c; b=a;    Not quite. Try again!      a=b; b=c; c=a;    Not quite. Try again!      a=b; b=a;    Not quite. Try again!      "
},
{
  "id": "quiz-sortsearch-5",
  "level": "2",
  "url": "sortsearch-bisection.html#quiz-sortsearch-5",
  "type": "Reading Question",
  "number": "22.2.1",
  "title": "",
  "body": " Which of the following is the correct sequence of instructions to swap the values of two variables a and b (you may use an additional variable c if you wish)?  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.    )  c=a; a=b; b=c;    Correct      c=b; a=c; b=a;    Not quite. Try again!      a=b; b=c; c=a;    Not quite. Try again!      a=b; b=a;    Not quite. Try again!    "
},
{
  "id": "sortsearch-linear-practice",
  "level": "1",
  "url": "sortsearch-linear-practice.html",
  "type": "Section",
  "number": "22.3",
  "title": "Linear Search Practice",
  "body": " Linear Search Practice    You are conducting a linguistic study and are interested in finding words that contain the letter 't' or 'T' in the first half of the word (including the middle letter if there is one). Specifically, if the first half of the word does contain a 't' or a 'T', your program's output should be a 1, if the first half does not contain the letter 't' or 'T', but the second half does, then your program should output a 2. Otherwise (if there is no 't' or 'T' in the word at all), your program's output should be -1. You may assume that the word entered does not have more than 50 letters.  Here are some examples:   Input:  apple  Output: -1  Input:  raincoat  Output: 2  Input:  enter  Output: 1  Input:  Taylor  Output: 1    When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-22-3-1-Linear_Search_Practice",
  "level": "2",
  "url": "sortsearch-linear-practice.html#activity-22-3-1-Linear_Search_Practice",
  "type": "Activity",
  "number": "22.1",
  "title": "",
  "body": "  You are conducting a linguistic study and are interested in finding words that contain the letter 't' or 'T' in the first half of the word (including the middle letter if there is one). Specifically, if the first half of the word does contain a 't' or a 'T', your program's output should be a 1, if the first half does not contain the letter 't' or 'T', but the second half does, then your program should output a 2. Otherwise (if there is no 't' or 'T' in the word at all), your program's output should be -1. You may assume that the word entered does not have more than 50 letters.  Here are some examples:   Input:  apple  Output: -1  Input:  raincoat  Output: 2  Input:  enter  Output: 1  Input:  Taylor  Output: 1    When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "sortsearch-bubble",
  "level": "1",
  "url": "sortsearch-bubble.html",
  "type": "Section",
  "number": "22.4",
  "title": "Bubble Sort",
  "body": " Bubble Sort  sort bubble Have you ever needed to sort a pile of papers into alphabetical order? There are many different ways to do so and you yourself may have a preferred method. But could you teach that method to a computer? A sorting algorithm is just that: it is an algorithm that puts elements of a list in a certain order. Most of the time we'll want to sort data numerically (from smallest to largest or from largest to smallest) or alphabetically. In order to sort small amounts of data efficiency isn't really all that important, but when lists get long then it is important to pay attention to the efficiency of the algorithms. That's why there are many different sorting algorithms that have been invented and we'll just scratch the surface and study some of the simple (and not very efficient) ones.  Most sorting algorithms have names that somewhat refer to how they function. Some of the simple algorithms include the so-called Selection Sort and Insertion Sort , some more efficient algorithms include Quick Sort and Merge Sort . And then there is the Bubble Sort category which is very easy to implement and understand (and not all that efficient). We will learn about Bubble Sort first and then also implement Selection Sort and Insertion Sort in class.    Video Description    Bubble Sort uses two nested loops  Compares neighboring elements and swaps if needed  After the outer loop finishes execution, the list will be sorted     The animation below might help you visualize how bubble sort functions.  ADAMSAPPLET style=\"width:50%; height:150px; margin-left:auto; margin-right:auto;\" data-program=\"sorters\" data-types=\"bub-uno\" data-size=\"20\" data-duplicates=\"2\" data-order=\"319,locked\" ENDADAMSAPPLET    From where does \"Bubble Sort\" get its name?   )  Largest elements bubble gradually to the top    Correct      Named after Edgar D. Bubble    Not quite. Try again!      It was invented by the same person who invented gum    Not quite. Try again!      No reason    Not quite. Try again!      Complete the following C program so that it correctly sorts the given array from smallest to largest using bubble sort. In particular, you need to complete the function bubbleSort() below which handles the sorting. Everything else has been done for you already.   When your program performs correctly you'll be given a keyword to enter in Canvas.    Suppose that you have made the following declarations:  int num[] = {5,3,7,9,2,4,6}; int index[] = {2,3,4,5,6,7,1};  What is index[3] ? Choose one: 1 \/ 2 \/ 3 \/ 4 \/ 5  What is num[index[3]] ? Choose one: 2 \/ 3 \/ 4 \/ 5 \/ 6 \/ 7 \/ 9  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.   Enter your two answers, separated by a comma, i.e.  8, 1    "
},
{
  "id": "quiz-sortsearch-6",
  "level": "2",
  "url": "sortsearch-bubble.html#quiz-sortsearch-6",
  "type": "Reading Question",
  "number": "22.4.1",
  "title": "",
  "body": " From where does \"Bubble Sort\" get its name?   )  Largest elements bubble gradually to the top    Correct      Named after Edgar D. Bubble    Not quite. Try again!      It was invented by the same person who invented gum    Not quite. Try again!      No reason    Not quite. Try again!    "
},
{
  "id": "quiz-sortsearch-7",
  "level": "2",
  "url": "sortsearch-bubble.html#quiz-sortsearch-7",
  "type": "Reading Question",
  "number": "22.4.2",
  "title": "",
  "body": " Complete the following C program so that it correctly sorts the given array from smallest to largest using bubble sort. In particular, you need to complete the function bubbleSort() below which handles the sorting. Everything else has been done for you already.   When your program performs correctly you'll be given a keyword to enter in Canvas.  "
},
{
  "id": "quiz-sortsearch-8",
  "level": "2",
  "url": "sortsearch-bubble.html#quiz-sortsearch-8",
  "type": "Reading Question",
  "number": "22.4.3",
  "title": "",
  "body": " Suppose that you have made the following declarations:  int num[] = {5,3,7,9,2,4,6}; int index[] = {2,3,4,5,6,7,1};  What is index[3] ? Choose one: 1 \/ 2 \/ 3 \/ 4 \/ 5  What is num[index[3]] ? Choose one: 2 \/ 3 \/ 4 \/ 5 \/ 6 \/ 7 \/ 9  Feel free to use the window below to try out some code. Be sure to work the correct answer out \"by hand\" first before verifying your answer using the code window.   Enter your two answers, separated by a comma, i.e.  8, 1  "
},
{
  "id": "sortsearch-selection",
  "level": "1",
  "url": "sortsearch-selection.html",
  "type": "Section",
  "number": "22.5",
  "title": "Selection Sort",
  "body": " Selection Sort  sort selection Selection Sort is one of the simplest sorting techniques. Suppose you wanted to sort from smallest to largest. Here are the steps:   Search through the list for the smallest element.  Swap the smallest element with the first element.  Continue\/repeat with the reduced list (since the first element is already in its correct place).   The following visualization might help more clearly describe this process:  ADAMSAPPLET style=\"width:50%; height:150px; margin-left:auto; margin-right:auto;\" data-program=\"sorters\" data-types=\"sel-uno-bac\" data-size=\"20\" data-duplicates=\"2\" data-order=\"319,locked\" ENDADAMSAPPLET    Please implement the selection sort algorithm to sort the given array of numbers. Use a function to which you pass the unsorted array as well as its number of elements, and which sorts the array 'in place', meaning that the unsorted array is replaced by the sorted array (rather than creating a sorted copy). You can use the given function printArray() to check whether your algorithm performed correctly.   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-22-5-1-Selection_Sort_Practice",
  "level": "2",
  "url": "sortsearch-selection.html#activity-22-5-1-Selection_Sort_Practice",
  "type": "Activity",
  "number": "22.2",
  "title": "",
  "body": "  Please implement the selection sort algorithm to sort the given array of numbers. Use a function to which you pass the unsorted array as well as its number of elements, and which sorts the array 'in place', meaning that the unsorted array is replaced by the sorted array (rather than creating a sorted copy). You can use the given function printArray() to check whether your algorithm performed correctly.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "sortsearch-insertiion",
  "level": "1",
  "url": "sortsearch-insertiion.html",
  "type": "Section",
  "number": "22.6",
  "title": "Insertion Sort",
  "body": " Insertion Sort  sort insertion Insertion Sort is another simple sorting technique that works similarly to how you might sort a set of playing cards in your hand. By going through the list element by element, the list is modified slowly so as to consist of a sorted portion and a remaining unsorted portion. When a new element from the unsorted portion is considered it is inserted (hence the name of the algorithm!) into the correct location amongst the sorted part of the list.  Since room needs to be made in the sorted portion for the element to be inserted, one way to do so is to successively swap the new element with elements from the sorted list, until the correct location has been found.  This is demonstrated in the following code window - feel free to play around!   The following visualization of insertion sort might also help more clearly describe this process:  ADAMSAPPLET style=\"width:50%; height:150px; margin-left:auto; margin-right:auto;\" data-program=\"sorters\" data-types=\"ins-exh\" data-size=\"20\" data-duplicates=\"2\" data-order=\"319,locked\" ENDADAMSAPPLET  We will later look at an implementation of insertion sort that creates a sorted copy of the original list, leaving the original list in place unsorted. In this scenario, insertion sort works by taking elements from the unsorted list one by one and inserting them in their correct position into the new sorted list.  Inserting elements into an array at a particular location is not a very fun process: it may require shifting large numbers of array elements over to make room for the new element. We'll therefore wait on the implementation of this algorithm until we get to linked lists , which make this step much easier.  "
},
{
  "id": "sortsearch-sort-practice",
  "level": "1",
  "url": "sortsearch-sort-practice.html",
  "type": "Section",
  "number": "22.7",
  "title": "Sorting Practice",
  "body": " Sorting Practice  In the problem below you may use any sorting technique you wish to use!   You are still conducting linguistic research! This time, you'd like to find out how many letters occur multiple times in a given word. To do so, you will read a word from the input and then sort the letters of the word alphabetically (by their ASCII codes). Next, you go through the letters of the word and compare a letter with the one following it. If these equal each other, you increase a counter by 1, making sure to next skip ahead far enough so that letters that occur more than twice are not counted again. You may assume that the word you read from the input has no more than 50 letters.  Here are some examples:   Input:  apple  Output: 1  Input:  keeper  Output: 1  Input:  erroneousnesses  Output: 5  Input:  Taylor  Output: 0     "
},
{
  "id": "activity-104",
  "level": "2",
  "url": "sortsearch-sort-practice.html#activity-104",
  "type": "Activity",
  "number": "22.3",
  "title": "",
  "body": " You are still conducting linguistic research! This time, you'd like to find out how many letters occur multiple times in a given word. To do so, you will read a word from the input and then sort the letters of the word alphabetically (by their ASCII codes). Next, you go through the letters of the word and compare a letter with the one following it. If these equal each other, you increase a counter by 1, making sure to next skip ahead far enough so that letters that occur more than twice are not counted again. You may assume that the word you read from the input has no more than 50 letters.  Here are some examples:   Input:  apple  Output: 1  Input:  keeper  Output: 1  Input:  erroneousnesses  Output: 5  Input:  Taylor  Output: 0    "
},
{
  "id": "sortsearch-parallel-arrays",
  "level": "1",
  "url": "sortsearch-parallel-arrays.html",
  "type": "Section",
  "number": "22.8",
  "title": "Sorting Parallel Arrays",
  "body": " Sorting Parallel Arrays  parallel arrays Often it is useful to store related information about a person or an object in several parallel arrays. For example, we might want to store for each student their name, id, age and gpa. We could then have four arrays for these pieces of information, and for a given index, i , name[i] , id[i] , age[i] , gpa[i] all make up one student's record.  If we now wanted to sort these student records by id then we'd have to perform all of the array element swaps simultaneously on all four arrays in order to keep records together. This would not be practical or efficient. Take a look at the below example:   Suppose we are using bubble sort in order to sort these student records by id. While Petra's record is in the correct location, we'll have to swap Alex' and Simon's records during the bubble sort process. In order to keep each student record intact we'd thus not only have to swap id[2] and id[1] but also simultaneously swap name[2] with name[1] , age[2] with age[1] and gpa[2] with gpa[1] . That's a lot of swaps! This will slow down the sorting process quite a bit. It's also super confusing. And imagine you wanted to add in additional information to a student record, such as the student's phone number...  Instead, it is more efficient to sort an array of indices - a so-called sort array - and use this array to address data as well as perform all of the swaps on this sort array only. Take a look:   sort array sort parallel arrays When sorting by id, in the bubble sort algorithm, we now compare id[sort[i]] with id[sort[i+1]] instead of id[i] with id[i+1] . If necessary, rather than swapping the data, we swap sort[i] and sort[i+1] . In the above illustration for example, we simply swapped sort[1] with sort[2] . Now id[sort[1]] = id[2] is Alex' id, and id[sort[2]] = id[1] is Simon's id so that id[sort[0]] , id[sort[1]] and id[sort[2]] are in the correct order with respect to each other without ever changing anything within the arrays that hold the data. The only array that is altered during the sorting process is the array sort .  "
},
{
  "id": "sortsearch-arrays",
  "level": "1",
  "url": "sortsearch-arrays.html",
  "type": "Section",
  "number": "22.9",
  "title": "Sort Arrays",
  "body": " Sort Arrays   Suppose you have declared two arrays:  int numbers[]={5, -1, 8, 4, 0, -10}; int sort[6];  What values should you place in your sort array so the following loop prints out the list of numbers, sorted from smallest to largest?  for (i=0; i<6; i++) { printf(\"%d, \", numbers[sort[i]]); }  Please paste your text submission into the box below, then select Run to submit it:    "
},
{
  "id": "activity-22-9-1-Sort_Arrays-no-output",
  "level": "2",
  "url": "sortsearch-arrays.html#activity-22-9-1-Sort_Arrays-no-output",
  "type": "Activity",
  "number": "22.4",
  "title": "",
  "body": " Suppose you have declared two arrays:  int numbers[]={5, -1, 8, 4, 0, -10}; int sort[6];  What values should you place in your sort array so the following loop prints out the list of numbers, sorted from smallest to largest?  for (i=0; i<6; i++) { printf(\"%d, \", numbers[sort[i]]); }  Please paste your text submission into the box below, then select Run to submit it:   "
},
{
  "id": "sortsearch-implementing",
  "level": "1",
  "url": "sortsearch-implementing.html",
  "type": "Section",
  "number": "22.10",
  "title": "Implementing Sort Arrays",
  "body": " Implementing Sort Arrays   Printing  sort array print When printing out arrays the order of whose elements is given by a sort array, it is important to not only pass the array itself to the printing routine but also include the sort array (how else would the routine be able to know the correct order).    Please write a function printArray() , to which you pass the number of elements in your list to be sorted as well as the list and the sort array. The function should print the list in the order defined by the sort array.   When you are done, please paste your code into the code submission box below:       Sorting  sort array sorting When sorting arrays using a sort array, when your code finds values whose locations should be swapped, instead of swapping the values in the array, swap their respective elements of the sort array.    Please implement the function sortArray() , to which you pass the number of elements in your list to be sorted, the unsorted array as well as a sort array, and which sorts the array, using bubble sort, by making changes only to the sort array.   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-22-10-1-Implementing_Sort_Arrays_Printing",
  "level": "2",
  "url": "sortsearch-implementing.html#activity-22-10-1-Implementing_Sort_Arrays_Printing",
  "type": "Activity",
  "number": "22.5",
  "title": "",
  "body": "  Please write a function printArray() , to which you pass the number of elements in your list to be sorted as well as the list and the sort array. The function should print the list in the order defined by the sort array.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-22-10-2-Implementing_Sort_Arrays_Sorting",
  "level": "2",
  "url": "sortsearch-implementing.html#activity-22-10-2-Implementing_Sort_Arrays_Sorting",
  "type": "Activity",
  "number": "22.6",
  "title": "",
  "body": "  Please implement the function sortArray() , to which you pass the number of elements in your list to be sorted, the unsorted array as well as a sort array, and which sorts the array, using bubble sort, by making changes only to the sort array.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "sortsearch-summary",
  "level": "1",
  "url": "sortsearch-summary.html",
  "type": "Section",
  "number": "22.11",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Linear and bisection search methods  Bubble, selection, and insertion sort methods  Sorting records of data (parallel arrays)  Sort arrays   "
},
{
  "id": "la2-menu",
  "level": "1",
  "url": "la2-menu.html",
  "type": "Section",
  "number": "23.1",
  "title": "LA2: Menu Selection",
  "body": " LA2: Menu Selection  In your second Longer Assignment you'll be asked to implement a menu of choices for the user. In order to help you out we'll give you some sample code that you are welcome to use or modify.  The code below contains various stages of code development. Try to understand each one first by reading through the code and then give it a try by uncommenting the selection you'd like to understand. Note: Only the last version of the presented alternatives functions adequately. Can you figure out why?  The code below needs to be run on the server, not in a code window, in order to function properly.  Using characters as user input can be a bit tricky - make sure you understand what the issues are.  Suppose you wanted to have a menu of choices for the user as seen below and then at some point later in the program present the user with some other choices. Take a look at what happens if we implement this in the most straight-forward way:   "
},
{
  "id": "multiarray-strings",
  "level": "1",
  "url": "multiarray-strings.html",
  "type": "Section",
  "number": "24.1",
  "title": "Arrays of Strings",
  "body": " Arrays of Strings  Recall that in C, a string is a NULL-terminated array of characters. Therefore, if we wanted to store multiple strings in an array, we'd need an array of strings, which is an array of arrays! This is also called a two-dimensional array.  Such an array of strings is declared as follows:  char name[NRECS][STRLEN];  Here, name is the name of the array, NRECS the number of strings to store, and STRLEN a bound on the length of the strings to be stored (remember to leave room for the NULL-terminator).   array of strings  An Array of Strings               P    e    t    r    a    \\0                  A    l    e    x    \\0                          C    h    o    c    o    l    a    t    e    \\0                                                                                          The above sample table has STRLEN=10 and NRECS=5 .  You could #define  NRECS and STRLEN at the top of your program if you wish, so that you could easily change these constants. For example:  #define NRECS 100 #define STRLEN 50 char words[NRECS][STRLEN];  declares an array of strings that can hold 100 strings of maximum length 50 characters (including the NULL-terminator). You could also simply write  char words[100][50];  The following video shows how to work with arrays of strings.    Video Description    To store one word we need a string, which is a one-dimensional array. Thus to store multiple words we need either multiple one-dimensional arrays or one two-dimensional array  Multidimensional arrays can be initialized using loops  NEW SYNTAX: the following line declares an array of strings, with [NRECS] = number of records and [STRLEN] = max. string length   char name[NRECS][STRLEN];      Suppose you have declared an “array of strings” using the command  char name[100][30];  If you wanted to store the name “Taylor” in the topmost position of this array, how would you do so?   )  strcpy(name[0], \"Taylor\");    Correct      name = \"Taylor\";    Not quite. Try again!      name[0] = \"Taylor\";    Not quite. Try again!      strcpy(name[0][0], \"Taylor\");    Not quite. Try again!      "
},
{
  "id": "table-4",
  "level": "2",
  "url": "multiarray-strings.html#table-4",
  "type": "Table",
  "number": "24.1",
  "title": "An Array of Strings",
  "body": " array of strings  An Array of Strings               P    e    t    r    a    \\0                  A    l    e    x    \\0                          C    h    o    c    o    l    a    t    e    \\0                                                                                         "
},
{
  "id": "quiz-multiarray-1",
  "level": "2",
  "url": "multiarray-strings.html#quiz-multiarray-1",
  "type": "Reading Question",
  "number": "24.1.1",
  "title": "",
  "body": " Suppose you have declared an “array of strings” using the command  char name[100][30];  If you wanted to store the name “Taylor” in the topmost position of this array, how would you do so?   )  strcpy(name[0], \"Taylor\");    Correct      name = \"Taylor\";    Not quite. Try again!      name[0] = \"Taylor\";    Not quite. Try again!      strcpy(name[0][0], \"Taylor\");    Not quite. Try again!    "
},
{
  "id": "multiarray-matrices",
  "level": "1",
  "url": "multiarray-matrices.html",
  "type": "Section",
  "number": "24.2",
  "title": "Matrices",
  "body": " Matrices  matrices Just like we can have a 2-dimensional array of characters (or array of strings), it is also possible to have multidimensional arrays of other datatypes. Here is an example of a 2-dimensional array of integers (also known as a matrix):  int matrix[2][3];  This declares (reserves space for) a 2-dimensional array of integers by the name of matrix, which has 2 rows and 3 columns. More generally, the following code could be used to declare a 2-dimensional array of integers with NROWS rows and NCOLS columns:  int numbers[NROWS][NCOLS];  This of course assumes that somewhere in your code you have told the computer what values NROWS and NCOLS take, for example via  #define NROWS 3 #define NCOLS 2  at the top of your code.  The following video illustrates how to work with 2-dimensional arrays.    Video Description    A two-dimensional array of integers is a matrix!  When using scanf() to allow the user to enter values into your array, don't forget about the & !  NEW SYNTAX: the following line reads an integer from the user entry and stores it into the matrix element at location  scanf(\"%d\", &matrix[row][col])     Suppose that integers are stored using 4 bytes, and you are declaring a variable matrix using  int matrix[7][9];  How much space (in bytes) is reserved in memory by this declaration? Please enter just a number, do not enter the word 'bytes'.    "
},
{
  "id": "quiz-multiarray-2",
  "level": "2",
  "url": "multiarray-matrices.html#quiz-multiarray-2",
  "type": "Reading Question",
  "number": "24.2.1",
  "title": "",
  "body": " Suppose that integers are stored using 4 bytes, and you are declaring a variable matrix using  int matrix[7][9];  How much space (in bytes) is reserved in memory by this declaration? Please enter just a number, do not enter the word 'bytes'.  "
},
{
  "id": "multiarray-initialize",
  "level": "1",
  "url": "multiarray-initialize.html",
  "type": "Section",
  "number": "24.3",
  "title": "Initializing Multidimensional Arrays",
  "body": " Initializing Multidimensional Arrays  multidimensional array initialize It is possible to initialize a multidimensional array during declaration time. In fact, there are multiple ways to do so. The following four ways are actually all equivalent and all initialize a 2-dimensional array with the same values:  int matrix1[NROWS][NCOLS] = {{1,2}, {3,4}, {5,6}, {7,8} }; int matrix2[NROWS][NCOLS] = { {1,2}, {3,4}, {5,6}, {7,8}}; int matrix3[][NCOLS] = {{1,2}, {3,4}, {5,6}, {7,8} }; int matrix4[][NCOLS] = {1, 2, 3, 4, 5, 6, 7, 8};  The Codecast below illustrates this further:    Video Description    Multidimensional arrays can be initialized by enclosing values in (nested) curly brackets: {}   i.e. int matrix[4][2] = {{1,2}, {3,4}, {5,6}, {7,8}};       Which of the following is correct?   )  int matrix[][2] = {5, 2, 7, 5, 3, 2, 8, 6};    Correct      int matrix[4][] = {5, 2, 7, 5, 3, 2, 8, 6};    Not quite. Try again!      int matrix = {5, 2, 7, 5, 3, 2, 8, 6};    Not quite. Try again!      int matrix[][] = {5, 2, 7, 5, 3, 2, 8, 6};    Not quite. Try again!      "
},
{
  "id": "quiz-multiarray-3",
  "level": "2",
  "url": "multiarray-initialize.html#quiz-multiarray-3",
  "type": "Reading Question",
  "number": "24.3.1",
  "title": "",
  "body": " Which of the following is correct?   )  int matrix[][2] = {5, 2, 7, 5, 3, 2, 8, 6};    Correct      int matrix[4][] = {5, 2, 7, 5, 3, 2, 8, 6};    Not quite. Try again!      int matrix = {5, 2, 7, 5, 3, 2, 8, 6};    Not quite. Try again!      int matrix[][] = {5, 2, 7, 5, 3, 2, 8, 6};    Not quite. Try again!    "
},
{
  "id": "multiarray-functions",
  "level": "1",
  "url": "multiarray-functions.html",
  "type": "Section",
  "number": "24.4",
  "title": "Passing Multidimensional Arrays to Functions",
  "body": " Passing Multidimensional Arrays to Functions  multidimensional array functions In order to pass a two-dimensional array to a function we need to let the computer know the number of columns in the array so that array addressing can be performed correctly.  Remember, a two-dimensional array is stored row by row, so as long as we know how many elements are stored in each row (that is, the number of columns), we (and also the computer) can find the start of the second row, the start of the third row, etc. The computer can therefore find the element at location [i][j] by going to row i and then counting off to element j of that row.  As you can see in the below code window, if a function is to receive a 2-dimensional array as a parameter then the function definition needs to include the number of columns of the array (but it does not need to be told the number of rows.) Just having this information the computer can perform array addressing correctly.   "
},
{
  "id": "multiarray-practice",
  "level": "1",
  "url": "multiarray-practice.html",
  "type": "Section",
  "number": "24.5",
  "title": "Practice Your Multidimensional Arrays!",
  "body": " Practice Your Multidimensional Arrays!  The program below reads a text, word by word, from the file \"reverseText.txt\" , which is located on our code server. It then stores this text in an array of strings (thus a two-dimensional array of characters) and subsequently prints this text to the screen.    Your first job is to write a function printText() , to which you pass the array of strings as well as the number of words stored in the array, and which prints the text to the screen (thereby making the corresponding lines in the main function redundant: you can delete those lines).  You may notice that the text makes no sense. Your second job, therefore, is to print the text in reverse. You only have to reverse the order of the words, not the characters in an individual word. Please use a function printReverseText() for this purpose.   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-24-5-1-Practice_Multidimensional_Arrays",
  "level": "2",
  "url": "multiarray-practice.html#activity-24-5-1-Practice_Multidimensional_Arrays",
  "type": "Activity",
  "number": "24.1",
  "title": "",
  "body": "  Your first job is to write a function printText() , to which you pass the array of strings as well as the number of words stored in the array, and which prints the text to the screen (thereby making the corresponding lines in the main function redundant: you can delete those lines).  You may notice that the text makes no sense. Your second job, therefore, is to print the text in reverse. You only have to reverse the order of the words, not the characters in an individual word. Please use a function printReverseText() for this purpose.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "multiarray-summary",
  "level": "1",
  "url": "multiarray-summary.html",
  "type": "Section",
  "number": "24.6",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Initializing and using multidimensional arrays  Matrices and multidimensional arrays of various data types  Passing multidimensional arrays to functions   "
},
{
  "id": "structures-intro",
  "level": "1",
  "url": "structures-intro.html",
  "type": "Section",
  "number": "25.1",
  "title": "Intro to Structures",
  "body": " Intro to Structures  Up to this point we have been using the standard data types provided by C:  int, float, double, char, void  C also provides the capability to define your own data types. In particular, we'll be learning about structures .  structures A structure is simply a collection of items of various data types into one single object.  Note that arrays on the other hand have to stick to one data type. Suppose we wanted to store some student data, for example, for each student:  char firstName[50]; char lastName[50]; int birthYear; double aveGrade;  We could simply create four separate arrays: one that holds the first names, one for last names, etc. Structures make this much easier, however. We can store, in one variable, all of the data for one specific student. We can then simply create one array of students to hold all of the data we are interested in.  In the code window below you can see how to define such a struct student data type and how to subsequently use it in your code to declare variables me and you of this data type. You can also see how to initialize such a structure at declaration time and how to access the so-called members of the structure (so firstName , lastName , birthYear , aveGrade ) in your code.   "
},
{
  "id": "p-1882",
  "level": "2",
  "url": "structures-intro.html#p-1882",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "structure "
},
{
  "id": "p-1885",
  "level": "2",
  "url": "structures-intro.html#p-1885",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "members "
},
{
  "id": "structures-typedef",
  "level": "1",
  "url": "structures-typedef.html",
  "type": "Section",
  "number": "25.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">typedef<\/code>",
  "body": " typedef  typedef It is even possible to define a new data type and associate it with our new data structure. The C-command to do so is typedef . The code window below shows the use of typedef in order to assign the name student_t to the more cumbersome student structure struct student . This way we can use the new data type student_t just like any of the C pre-defined data types int, float, double, char, void of which we know so far.  Just to remind you that you are dealing with a data type we'll adopt the custom of always ending such a new data type name with _t as exemplified in the name student_t for our new student record data type.    Alternative Method  You can actually combine the structure declaration and the typedef into one more straight-forward method. The code window below shows you how to do so. The reason for introducing both the more cumbersome and the more straight-forward methods is that we will actually need the more cumbersome method later when we get to the topic of linked lists . For now I recommend that you go with the straight-forward method.    "
},
{
  "id": "structures-frac-calc",
  "level": "1",
  "url": "structures-frac-calc.html",
  "type": "Section",
  "number": "25.3",
  "title": "The Fraction Calculator Using Structures",
  "body": " The Fraction Calculator Using Structures   Define a New Data Type  fraction calculator using structures Remember our fraction calculator? We'll start rewriting it using structures now.    Let's start by defining a new data type fraction_t , designed to store the numerator and denominator of a fraction (as integers). Try implementing this below:   When you are done, please paste your code into the code submission box below:       Declare the Variables    Now that we have our fraction type, let's declare two variables, frac1 and frac2 , of this type, and make them correspond to the fractions and .   When you are done, please paste your code into the code submission box below:       Print the Fractions  Now let's see if we can print out these fractions.    What's the best way to go about that?   When you are done, please paste your code into the code submission box below:       Adding Fractions    Since we are working on a fraction calculator, how would we go about adding these two fractions? Let's store the result in a third variable, result. Can we simply say the following?  result = frac1 + frac2   When you are done, please paste your code into the code submission box below:       Print-Fraction Function  You can see that it would be great to write some functions in order to re-use our code.    Let's try to write a function that prints a fraction.   When you are done, please paste your code into the code submission box below:       Add-Fractions Function    Now let's try our luck with a function that adds two fractions...   When you are done, please paste your code into the code submission box below:       Enter-Fraction Function    Now we need a function that allows the user to enter a fraction. Be sure to prevent the user from entering a denominator of zero!   When you are done, please paste your code into the code submission box below:       Multiplying Fractions  Multiplying two fractions is now easy!    Let's multiply two fractions!   When you are done, please paste your code into the code submission box below:       Additional Steps    What else do we need to make our fraction calculator work?   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-25-3-1-Frac_Calc_Define_Datatype",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-1-Frac_Calc_Define_Datatype",
  "type": "Activity",
  "number": "25.1",
  "title": "",
  "body": "  Let's start by defining a new data type fraction_t , designed to store the numerator and denominator of a fraction (as integers). Try implementing this below:   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-2-Frac_Calc_Declare_Variables",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-2-Frac_Calc_Declare_Variables",
  "type": "Activity",
  "number": "25.2",
  "title": "",
  "body": "  Now that we have our fraction type, let's declare two variables, frac1 and frac2 , of this type, and make them correspond to the fractions and .   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-3--Frac_Calc_Print_Fractions",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-3--Frac_Calc_Print_Fractions",
  "type": "Activity",
  "number": "25.3",
  "title": "",
  "body": "  What's the best way to go about that?   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-4-Frac_Calc_Adding_Fractions",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-4-Frac_Calc_Adding_Fractions",
  "type": "Activity",
  "number": "25.4",
  "title": "",
  "body": "  Since we are working on a fraction calculator, how would we go about adding these two fractions? Let's store the result in a third variable, result. Can we simply say the following?  result = frac1 + frac2   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-5-Frac_Calc_Print_Fraction_Function",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-5-Frac_Calc_Print_Fraction_Function",
  "type": "Activity",
  "number": "25.5",
  "title": "",
  "body": "  Let's try to write a function that prints a fraction.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-6-Frac_Calc_Add_Fractions_Function",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-6-Frac_Calc_Add_Fractions_Function",
  "type": "Activity",
  "number": "25.6",
  "title": "",
  "body": "  Now let's try our luck with a function that adds two fractions...   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-7-Frac_Calc_Enter_Fraction_Function",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-7-Frac_Calc_Enter_Fraction_Function",
  "type": "Activity",
  "number": "25.7",
  "title": "",
  "body": "  Now we need a function that allows the user to enter a fraction. Be sure to prevent the user from entering a denominator of zero!   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-8_Multiplying_Fractions",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-8_Multiplying_Fractions",
  "type": "Activity",
  "number": "25.8",
  "title": "",
  "body": "  Let's multiply two fractions!   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-25-3-9-Frac_Calc_Additional_Steps",
  "level": "2",
  "url": "structures-frac-calc.html#activity-25-3-9-Frac_Calc_Additional_Steps",
  "type": "Activity",
  "number": "25.9",
  "title": "",
  "body": "  What else do we need to make our fraction calculator work?   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "structures-functions",
  "level": "1",
  "url": "structures-functions.html",
  "type": "Section",
  "number": "25.4",
  "title": "Passing Structures to Functions",
  "body": " Passing Structures to Functions   Passing by Value  In the next video we'll learn how to pass structures to functions by value.  structures pass-to-function by value Passing by value means that a copy will be made of the data stored in the structure. We will therefore have access to all of the data stored in the structure variable but we cannot modify it within the function (since all we'd end up doing is modify the copies of the values).    Imagine we declare a structure named student in both the main() function and in a new function, and we then pass the structure from the main() function into our new one by value. If we now change a value within the new function's structure, will it affect the original structure?    No!    Remember when we discussed what not to name your variables in ? Just because we named the structures the same thing doesn't mean they are the same! Soon we'll learn how to pass structures by reference...    We'll work with the following structure example:  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; };  This stores student data (first and last name, birth year and average grade) in a structure.  The following Codecast shows you how to pass a student record to a function in order to print the record. Note that in the video we do not use typedef for the sole reason that sadly, typedef has not (yet) been implemented in the recording software.    Video Description    Structures can be passed to functions  NEW SYNTAX: the following line is a prototype for a function that receives the structure struct student by value and names the received structure var in the function:  void function(struct student var);     Suppose you have declared a structure to hold student data as in the video:  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; };  Suppose furthermore that you are writing a function compareStudents(), to which you'd like to pass two students of type struct student, and which returns the average grade of the student whose average grade is the lower of the two. Which of the following is the correct function prototype for such a function?   )  double compareStudents(struct student stud1, struct student stud2);    Correct      struct student compareStudents(struct student stud1, struct student stud2);    Not quite. Try again!      double compareStudents(stud1, stud2);    Not quite. Try again!      In the same scenario as in the previous question, where you have declared a structure to hold student data via:  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; };  and are writing a function compareStudents() which compares the average grades of the two student records passed to the function, which of the following correctly finds the lower of the two average grades:   )   double lower; if (stud1.aveGrade<stud2.aveGrade) lower = stud1.aveGrade; else lower = stud2.aveGrade;     Correct       double lower; if (aveGrade(stud1)<aveGrade(stud2)) lower = stud1.aveGrade; else lower = stud2.aveGrade;     Not quite. Try again!       double lower; lower = stud1.aveGrade<stud2.aveGrade;     Not quite. Try again!        Passing by Reference  structures pass-to-function by reference If we want to be able to modify a structure variable from within a function we need to pass a pointer to this variable to the function - just as we do for regular variables. In other words, we need to pass the variable to the function \"by reference\". In the next video we'll learn how to do so.    Video Description    Passing a structure pointer follows previously learned methods  The address of the structure is passed to a function, i.e. &variable  Pointers can be dereferenced in a function using *       What is wrong with the following piece of code and how would you fix it?  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; }; int main(void) { struct student me = {\"Petra\", \"Bonfert-Taylor\", 2001, 3.8}; struct student * studentptr = &me; *studentptr.birthYear = 1998; return 0; }   )  The second-to-last line of code should be (*studentptr).birthYear = 1998;    Correct      The second-to-last line of code should be (&studentptr).birthYear = 1998;    Not quite. Try again!      The second-to-last line of code should be (*studentptr.birthYear) = 1998;    Not quite. Try again!      There is nothing wrong with this code.    Not quite. Try again!       "
},
{
  "id": "investigation-27",
  "level": "2",
  "url": "structures-functions.html#investigation-27",
  "type": "Investigate",
  "number": "25.10",
  "title": "",
  "body": "  Imagine we declare a structure named student in both the main() function and in a new function, and we then pass the structure from the main() function into our new one by value. If we now change a value within the new function's structure, will it affect the original structure?    No!    Remember when we discussed what not to name your variables in ? Just because we named the structures the same thing doesn't mean they are the same! Soon we'll learn how to pass structures by reference...   "
},
{
  "id": "quiz-structfunction-1",
  "level": "2",
  "url": "structures-functions.html#quiz-structfunction-1",
  "type": "Reading Question",
  "number": "25.4.1.1",
  "title": "",
  "body": " Suppose you have declared a structure to hold student data as in the video:  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; };  Suppose furthermore that you are writing a function compareStudents(), to which you'd like to pass two students of type struct student, and which returns the average grade of the student whose average grade is the lower of the two. Which of the following is the correct function prototype for such a function?   )  double compareStudents(struct student stud1, struct student stud2);    Correct      struct student compareStudents(struct student stud1, struct student stud2);    Not quite. Try again!      double compareStudents(stud1, stud2);    Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-2",
  "level": "2",
  "url": "structures-functions.html#quiz-structfunction-2",
  "type": "Reading Question",
  "number": "25.4.1.2",
  "title": "",
  "body": " In the same scenario as in the previous question, where you have declared a structure to hold student data via:  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; };  and are writing a function compareStudents() which compares the average grades of the two student records passed to the function, which of the following correctly finds the lower of the two average grades:   )   double lower; if (stud1.aveGrade<stud2.aveGrade) lower = stud1.aveGrade; else lower = stud2.aveGrade;     Correct       double lower; if (aveGrade(stud1)<aveGrade(stud2)) lower = stud1.aveGrade; else lower = stud2.aveGrade;     Not quite. Try again!       double lower; lower = stud1.aveGrade<stud2.aveGrade;     Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-3",
  "level": "2",
  "url": "structures-functions.html#quiz-structfunction-3",
  "type": "Reading Question",
  "number": "25.4.2.1",
  "title": "",
  "body": " What is wrong with the following piece of code and how would you fix it?  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; }; int main(void) { struct student me = {\"Petra\", \"Bonfert-Taylor\", 2001, 3.8}; struct student * studentptr = &me; *studentptr.birthYear = 1998; return 0; }   )  The second-to-last line of code should be (*studentptr).birthYear = 1998;    Correct      The second-to-last line of code should be (&studentptr).birthYear = 1998;    Not quite. Try again!      The second-to-last line of code should be (*studentptr.birthYear) = 1998;    Not quite. Try again!      There is nothing wrong with this code.    Not quite. Try again!    "
},
{
  "id": "structures-pointers",
  "level": "1",
  "url": "structures-pointers.html",
  "type": "Section",
  "number": "25.5",
  "title": "Structures and Pointers",
  "body": " Structures and Pointers  When dealing with a pointer to a structure it can get pretty cumbersome to access a member of the structure being pointed to.  Suppose again that we have declared a structure as before:  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; };  Suppose furthermore that we have a pointer:  struct student * studentptr;  which points to a particular student's record. In order to access a member (for example birthYear) of this student's record via the pointer we first need to dereference the pointer (*studentptr) and then access the member via the direct member selection operator  . :  (*studentptr).birthYear  The parentheses around (*studentptr) are important since without them the computer would attempt to execute the member selection operator first, which would make no sense, given that studentptr is not a structure but rather a pointer to a structure.  The indirect member selection operator  -> combines these steps into one:  studentptr->birthYear  and therefore accomplishes the same thing as the above. Watch the video to find out more:    Video Description    structures pointers Instead of using the syntax (*ptr).birthyear to access the member birthyear of the record pointed to by ptr , one could also use the shorthand notation ptr->birthyear  Instead of using the syntax &(*ptr).record to access the address of the member of a structure (in order to use sanf() , for example), one could also use the shorthand notation &ptr->record  Similarly for storing strings, the same notation works as long as the & is removed (remember that a string is an array of characters whose name already stores the address of the zeroth element)       Now, what is wrong with the following piece of code and how would you fix it?  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; }; int main(void) { struct student me = {\"Petra\", \"Bonfert-Taylor\", 2001, 3.8}; struct student * studentptr = &me; me->birthYear = 1998; return 0; }   )  The second-to-last line of code should be (&me)->birthYear = 1998;    Correct      The second-to-last line of code should be (*me)->birthYear = 1998;    Not quite. Try again!      The second-to-last line of code should be (me)->birthYear = 1998;    Not quite. Try again!      There is nothing wrong with this code.    Not quite. Try again!       Time for some review of multidimensional arrays (this is called interleaved learning - a method of learning that helps you retain better what you have learned!)  Suppose you have written a function that initializes a two-dimensional array as follows:  void initialize_array(int array[][NCOLS]) { int i,j; for (i=0; i<NROWS; i++) for (j=0; j<NCOLS; j++) array[i][j] = i; }  Assume that you also have  #define NROWS 20 #define NCOLS 30  as part of your code.  In your main program you have declared an array matrix as follows:  int matrix[NROWS][NCOLS];  What is the correct function call of the function initialize_array() from within your main function?   )  initialize_array(matrix);    Correct      initialize_array(matrix[NROWS][]);    Not quite. Try again!      initialize_array(matrix[][NCOLS]);    Not quite. Try again!      initialize_array(matrix[NROWS][NCOLS]);    Not quite. Try again!      initialize_array(&matrix);    Not quite. Try again!      Please complete the following program so that the function maxTemp() finds the maximum value stored in the array passed to it. Be sure to enter your prototype at the top of the program and don't forget to insert the correct function call into the main function. Store the value returned by the function maxTemp() in the variable \"maximum\" so that it gets printed out properly in the following line.   When your program performs correctly you'll be given a keyword to enter in Canvas.  If your code appears to perform correctly but you are not given a keyword, please check for any extra spaces or line breaks in your output and remove them.    Which of the following properly defines a structure:   )  struct point { int x; int y; }    Correct      struct point { int x; int y; };    Not quite. Try again!      struct point { int x; int y; }    Not quite. Try again!      struct point int x; int y;    Not quite. Try again!      Which of the following properly declares a variable z (i.e. an instance) of structure point?   )  struct point z;    Correct      struct z point;    Not quite. Try again!      struct point;    Not quite. Try again!      point z;    Not quite. Try again!      Which of the following properly declares a new type “point_t”?   )   typedef struct { int x; int y; } point_t;     Correct       typedef struct point { int x; int y; } point_t;     Not quite. Try again!       typedef struct point { int x; int y; };     Not quite. Try again!      Suppose you have declared a new type “student_t” as follows:  typedef struct { char name[30]; long id; int class; } student_t;  What is the correct way to declare and initialize a variable me of type student_t ?   )  student_t me = {“Petra”, 123456L, 1994};    Correct      me = student_t{“Petra”, 123456L, 1994};    Not quite. Try again!      student_t = {“Petra”, 123456L, 1994} me;    Not quite. Try again!      student_t me; me = {“Petra”, 123456L, 1994};    Not quite. Try again!      As in the previous problem, you have defined a structure to store some student information as follows:  typedef struct { char name[30]; long id; int class; } student_t;  In your main program, you have furthermore declared a variable \"me\" of type student_t and initialized it, for example as follows:  student_t me = {\"Petra\", 123456L, 1994};  You'd now like to print the student record to the screen (i.e. print what is stored in the variable me ). How would you do this?  Feel free to use the following window to try things out. I have already given you a bit of code to make things easier.     Let's continue developing the previous problem. This time we'll practice how to change entries in a structure. Complete the following C program so that the user can enter a new student name, id and class year to be stored in the variable me of type student_t . All you need to do is complete the scanf() and printf() lines.   When your program performs correctly you'll be given a keyword to enter in Canvas.  If your code appears to perform correctly but you are not given a keyword, please check for any extra spaces or line breaks in your output and remove them.    "
},
{
  "id": "p-1947",
  "level": "2",
  "url": "structures-pointers.html#p-1947",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct member selection operator "
},
{
  "id": "p-1949",
  "level": "2",
  "url": "structures-pointers.html#p-1949",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indirect member selection operator "
},
{
  "id": "quiz-structfunction-4",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-4",
  "type": "Reading Question",
  "number": "25.5.1",
  "title": "",
  "body": " Now, what is wrong with the following piece of code and how would you fix it?  struct student{ char firstName[30]; char lastName[30]; int birthYear; double aveGrade; }; int main(void) { struct student me = {\"Petra\", \"Bonfert-Taylor\", 2001, 3.8}; struct student * studentptr = &me; me->birthYear = 1998; return 0; }   )  The second-to-last line of code should be (&me)->birthYear = 1998;    Correct      The second-to-last line of code should be (*me)->birthYear = 1998;    Not quite. Try again!      The second-to-last line of code should be (me)->birthYear = 1998;    Not quite. Try again!      There is nothing wrong with this code.    Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-5",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-5",
  "type": "Reading Question",
  "number": "25.5.2",
  "title": "",
  "body": " Time for some review of multidimensional arrays (this is called interleaved learning - a method of learning that helps you retain better what you have learned!)  Suppose you have written a function that initializes a two-dimensional array as follows:  void initialize_array(int array[][NCOLS]) { int i,j; for (i=0; i<NROWS; i++) for (j=0; j<NCOLS; j++) array[i][j] = i; }  Assume that you also have  #define NROWS 20 #define NCOLS 30  as part of your code.  In your main program you have declared an array matrix as follows:  int matrix[NROWS][NCOLS];  What is the correct function call of the function initialize_array() from within your main function?   )  initialize_array(matrix);    Correct      initialize_array(matrix[NROWS][]);    Not quite. Try again!      initialize_array(matrix[][NCOLS]);    Not quite. Try again!      initialize_array(matrix[NROWS][NCOLS]);    Not quite. Try again!      initialize_array(&matrix);    Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-6",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-6",
  "type": "Reading Question",
  "number": "25.5.3",
  "title": "",
  "body": " Please complete the following program so that the function maxTemp() finds the maximum value stored in the array passed to it. Be sure to enter your prototype at the top of the program and don't forget to insert the correct function call into the main function. Store the value returned by the function maxTemp() in the variable \"maximum\" so that it gets printed out properly in the following line.   When your program performs correctly you'll be given a keyword to enter in Canvas.  If your code appears to perform correctly but you are not given a keyword, please check for any extra spaces or line breaks in your output and remove them.  "
},
{
  "id": "quiz-structfunction-7",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-7",
  "type": "Reading Question",
  "number": "25.5.4",
  "title": "",
  "body": " Which of the following properly defines a structure:   )  struct point { int x; int y; }    Correct      struct point { int x; int y; };    Not quite. Try again!      struct point { int x; int y; }    Not quite. Try again!      struct point int x; int y;    Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-8",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-8",
  "type": "Reading Question",
  "number": "25.5.5",
  "title": "",
  "body": " Which of the following properly declares a variable z (i.e. an instance) of structure point?   )  struct point z;    Correct      struct z point;    Not quite. Try again!      struct point;    Not quite. Try again!      point z;    Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-9",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-9",
  "type": "Reading Question",
  "number": "25.5.6",
  "title": "",
  "body": " Which of the following properly declares a new type “point_t”?   )   typedef struct { int x; int y; } point_t;     Correct       typedef struct point { int x; int y; } point_t;     Not quite. Try again!       typedef struct point { int x; int y; };     Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-10",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-10",
  "type": "Reading Question",
  "number": "25.5.7",
  "title": "",
  "body": " Suppose you have declared a new type “student_t” as follows:  typedef struct { char name[30]; long id; int class; } student_t;  What is the correct way to declare and initialize a variable me of type student_t ?   )  student_t me = {“Petra”, 123456L, 1994};    Correct      me = student_t{“Petra”, 123456L, 1994};    Not quite. Try again!      student_t = {“Petra”, 123456L, 1994} me;    Not quite. Try again!      student_t me; me = {“Petra”, 123456L, 1994};    Not quite. Try again!    "
},
{
  "id": "quiz-structfunction-11",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-11",
  "type": "Reading Question",
  "number": "25.5.8",
  "title": "",
  "body": " As in the previous problem, you have defined a structure to store some student information as follows:  typedef struct { char name[30]; long id; int class; } student_t;  In your main program, you have furthermore declared a variable \"me\" of type student_t and initialized it, for example as follows:  student_t me = {\"Petra\", 123456L, 1994};  You'd now like to print the student record to the screen (i.e. print what is stored in the variable me ). How would you do this?  Feel free to use the following window to try things out. I have already given you a bit of code to make things easier.   "
},
{
  "id": "quiz-structfunction-12",
  "level": "2",
  "url": "structures-pointers.html#quiz-structfunction-12",
  "type": "Reading Question",
  "number": "25.5.9",
  "title": "",
  "body": " Let's continue developing the previous problem. This time we'll practice how to change entries in a structure. Complete the following C program so that the user can enter a new student name, id and class year to be stored in the variable me of type student_t . All you need to do is complete the scanf() and printf() lines.   When your program performs correctly you'll be given a keyword to enter in Canvas.  If your code appears to perform correctly but you are not given a keyword, please check for any extra spaces or line breaks in your output and remove them.  "
},
{
  "id": "structures-summary",
  "level": "1",
  "url": "structures-summary.html",
  "type": "Section",
  "number": "25.6",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   How to declare a new structure  The member selection operator  Using typedef to define a new data type  How to simplify the fraction calculator using structures  Passing structures to functions by value and by reference  The address of a structure and how to work with it efficiently   "
},
{
  "id": "arraystruct-operators",
  "level": "1",
  "url": "arraystruct-operators.html",
  "type": "Section",
  "number": "26.1",
  "title": "Operator Precedence",
  "body": " Operator Precedence  We first introduced operator precedence in . With the introduction of some new operators comes the necessity to discuss precedence of operators. In a command that involves multiple operations and operators, which get executed first? The direct and indirect member selection operators have high precedence as the following table shows. Operators at the top of the table have highest precedence (get executed before those that are below them in the table).  The entry in the Order column indicates how multiple operands are handled with respect to the given operation (remember, the computer can only do one thing at a time...). For example, when comparing two expressions using < , the expression to the left of the less than sign is evaluated before the one on the right. On the other hand, in an assignment statement such as a = b+1; the right-hand side is evaluated first and only then assigned to the variable on the left.   operator precedence  Operator Precedence     Operator    Precedence    Order      (..)   highest  left to right     a[..]  f(..)  .  ->      |  left to right     i++  i--      |  right to left     ++i  --i  sizeof()  !  +  -  &  * (unary)     |  right to left     (int)  (float) (casts)     |  right to left     \/  %      |  left to right     +  - (binary)     |  left to right     <  <=  >=  >      |  left to right     ==  !=      |  left to right     &&      |  left to right     ||    V  left to right     =  +=  -=  *=  \/=  %=   lowest  right to left     "
},
{
  "id": "table-5",
  "level": "2",
  "url": "arraystruct-operators.html#table-5",
  "type": "Table",
  "number": "26.1",
  "title": "Operator Precedence",
  "body": " operator precedence  Operator Precedence     Operator    Precedence    Order      (..)   highest  left to right     a[..]  f(..)  .  ->      |  left to right     i++  i--      |  right to left     ++i  --i  sizeof()  !  +  -  &  * (unary)     |  right to left     (int)  (float) (casts)     |  right to left     \/  %      |  left to right     +  - (binary)     |  left to right     <  <=  >=  >      |  left to right     ==  !=      |  left to right     &&      |  left to right     ||    V  left to right     =  +=  -=  *=  \/=  %=   lowest  right to left    "
},
{
  "id": "arraystruct-structures",
  "level": "1",
  "url": "arraystruct-structures.html",
  "type": "Section",
  "number": "26.2",
  "title": "Arrays of Structures",
  "body": " Arrays of Structures  array structures structures arrays We'll now look at storing multiple structures in an array. As an example you might think of creating a record (structure) for each student in a class, consisting of the student's name, year of birth and GPA. You could then store the information for all students in a class in an array with each array elements being a student structure. You'd thus have an array of structures.  Let's practice! Rather than using student data, in today's class we'd like to store the vertices of a polygon in an array of structures. Each vertex consists of an x- and a y-coordinate. In order to efficiently store these coordinates for a point we'll define a new structure, called point_t , that stores these coordinates for a given point. The code window below already has such a structure defined.    Let's warm up by quickly writing some functions that serve to assign values to a variable of type point_t and print the coordinates of a variable of type point_t .  More specifically:   write a function initializePoint() to which you pass a variable of type point_t (by reference) along with two floats, and that assigns the first float to the x-coordinate and the second float to the y-coordinate of the point.  write a function printPoint() to which you pass a variable of type point_t (by value) and that prints out the coordinates of the variable in the form (x,y).    When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-26-2-1-Array_Structures_Practice",
  "level": "2",
  "url": "arraystruct-structures.html#activity-26-2-1-Array_Structures_Practice",
  "type": "Activity",
  "number": "26.1",
  "title": "",
  "body": "  Let's warm up by quickly writing some functions that serve to assign values to a variable of type point_t and print the coordinates of a variable of type point_t .  More specifically:   write a function initializePoint() to which you pass a variable of type point_t (by reference) along with two floats, and that assigns the first float to the x-coordinate and the second float to the y-coordinate of the point.  write a function printPoint() to which you pass a variable of type point_t (by value) and that prints out the coordinates of the variable in the form (x,y).    When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "arraystruct-triangle",
  "level": "1",
  "url": "arraystruct-triangle.html",
  "type": "Section",
  "number": "26.3",
  "title": "Arrays of Structures: Triangle",
  "body": " Arrays of Structures: Triangle  We can now put multiple points together and store them in an array of points (which is an array of structures). Three points stored together could be viewed as the vertices of a triangle, for example. Four points might give you a quadrilateral, five points a pentagon, etc.   Declare a Triangle    So let’s declare a triangle. To do so, all we need is an array that holds three points, thus an array with three elements of type point_t . Declare a variable triangle with these features.   When you are done, please paste your piece of code into the code submission box below:       Store Vertices    Now store the vertices (0,0), (2,0), (1,3) in the variable triangle, using the function initializePoint() .   When you are done, please paste your code into the code submission box below:       Print Triangle    Write a function printTriangle() to which you pass an array of three points, and which prints out the coordinates of these three points. The function printTriangle() should call the function printPoint() .   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-26-3-1-Array_Structures_Triangle-no-output",
  "level": "2",
  "url": "arraystruct-triangle.html#activity-26-3-1-Array_Structures_Triangle-no-output",
  "type": "Activity",
  "number": "26.2",
  "title": "",
  "body": "  So let’s declare a triangle. To do so, all we need is an array that holds three points, thus an array with three elements of type point_t . Declare a variable triangle with these features.   When you are done, please paste your piece of code into the code submission box below:    "
},
{
  "id": "activity-26-3-2-Array_Structures_Store_Triangle_Vertices",
  "level": "2",
  "url": "arraystruct-triangle.html#activity-26-3-2-Array_Structures_Store_Triangle_Vertices",
  "type": "Activity",
  "number": "26.3",
  "title": "",
  "body": "  Now store the vertices (0,0), (2,0), (1,3) in the variable triangle, using the function initializePoint() .   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-26-3-3-Array_Structures_Print_Triangle",
  "level": "2",
  "url": "arraystruct-triangle.html#activity-26-3-3-Array_Structures_Print_Triangle",
  "type": "Activity",
  "number": "26.4",
  "title": "",
  "body": "  Write a function printTriangle() to which you pass an array of three points, and which prints out the coordinates of these three points. The function printTriangle() should call the function printPoint() .   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "arraystruct-dynamic",
  "level": "1",
  "url": "arraystruct-dynamic.html",
  "type": "Section",
  "number": "26.4",
  "title": "Dynamic Arrays of Structures",
  "body": " Dynamic Arrays of Structures  Why stop at triangles? Suppose we wanted to store polygons with variable numbers of vertices.  Recall that in order to reserve space in memory (for example for an array whose size only becomes known at run-time of your program) we use the function malloc() whose prototype is  void * malloc(size_t size);  Here, size is the total amount of space you need for your data. For example, if you wanted to store 10 structures of type point_t you'd need space in the amount of 10*sizeof(point_t).  Also recall that in order to use malloc() you need to  #include <stdlib.h>    Write a function createPolygon() to which you can pass an integer and that reserves space in memory for an array of points of that size and returns a pointer to that array. Just to be on the safe side, have this function also initialize all coordinates to (0.0,0.0).   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-26-4-1-Dynamic_Array_Structures",
  "level": "2",
  "url": "arraystruct-dynamic.html#activity-26-4-1-Dynamic_Array_Structures",
  "type": "Activity",
  "number": "26.5",
  "title": "",
  "body": "  Write a function createPolygon() to which you can pass an integer and that reserves space in memory for an array of points of that size and returns a pointer to that array. Just to be on the safe side, have this function also initialize all coordinates to (0.0,0.0).   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "arraystruct-pentagon",
  "level": "1",
  "url": "arraystruct-pentagon.html",
  "type": "Section",
  "number": "26.5",
  "title": "Dynamic Arrays of Structures: Pentagon",
  "body": " Dynamic Arrays of Structures: Pentagon   Declare Vertices    Use the function createPolygon to create a pentagon (5 vertices) with vertices (0,0), (1,0), (2,1), (1,3), (0,1).   When you are done, please paste your code into the code submission box below:       Print Pentagon    Finally... Write a function printPoly() to which you pass a polygon and a number (its number of vertices), and which prints out these vertices.   When you are done, please paste your code into the code submission box below:       Don't forget to free()!    One last step, free the allocated memory!   When you are done, please paste your code into the code submission box below:      "
},
{
  "id": "activity-26-5-1-Dynamic_Array_Structures_Pentagon",
  "level": "2",
  "url": "arraystruct-pentagon.html#activity-26-5-1-Dynamic_Array_Structures_Pentagon",
  "type": "Activity",
  "number": "26.6",
  "title": "",
  "body": "  Use the function createPolygon to create a pentagon (5 vertices) with vertices (0,0), (1,0), (2,1), (1,3), (0,1).   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-26-5-2-Dynamic_Array_Structures_Print_Pentagon",
  "level": "2",
  "url": "arraystruct-pentagon.html#activity-26-5-2-Dynamic_Array_Structures_Print_Pentagon",
  "type": "Activity",
  "number": "26.7",
  "title": "",
  "body": "  Finally... Write a function printPoly() to which you pass a polygon and a number (its number of vertices), and which prints out these vertices.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "activity-26-5-3-Dynamic_Array_Structures_Free",
  "level": "2",
  "url": "arraystruct-pentagon.html#activity-26-5-3-Dynamic_Array_Structures_Free",
  "type": "Activity",
  "number": "26.8",
  "title": "",
  "body": "  One last step, free the allocated memory!   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "arraystruct-summary",
  "level": "1",
  "url": "arraystruct-summary.html",
  "type": "Section",
  "number": "26.6",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Operator precedence  Arrays of structures  Dynamically creating arrays of structures  Practice using arrays of structures   "
},
{
  "id": "linkedlists-intro",
  "level": "1",
  "url": "linkedlists-intro.html",
  "type": "Section",
  "number": "27.1",
  "title": "Intro to Linked Lists",
  "body": " Intro to Linked Lists  So far we have used arrays to store multiple items of the same data type. For example, we could use an array of characters to store the characters 'E', 'N', 'G', 'S', '2', '0' as depicted in the illustration below.   Note that this is simply an illustration for the purpose of creating a conceptual understanding. Above the memory cells are the addresses of the memory locations - these are fictitious of course. In reality, memory addresses look a bit more complicated, for example something like 0x7ffcce3fe0a0 (which is just hexadecimal for a pretty large number).  When the elements of our array are stored right next to each other (as they are in the case of an array) then all the computer needs to find all of these elements is the address of the first element (and its datatype). With that information and the knowledge of how much room each element of this datatype takes up, the computer can calculate the address of subsequent elements and thereby access all of them (while it's the programmers job to keep track of the length of the array).  Suppose now that for some reason the elements of the array were not stored right next to each other in memory but rather scattered about as in the following illustration:   Without knowing all of the locations of the stored elements it would be impossible to know what (and where) the elements of the list are. This is where the idea of a linked list comes in. In a linked list it is the job of each element to keep track of the location of the next element in the list. Thus, if you know where the first element is located you can again traverse the entire list by asking the first element for the address of the second, the second element for the address of the third, and so forth. This idea is depicted in the next image:   It is our job to keep track of the start, that is, the address of the first element of the list (in the image it is stored in a variable named start ). Each element knows where the next element is stored, and the last element knows that it is last. This is all the information needed to access the entire list. We'll therefore group together whatever it is we'd like to store along with an additional address field which is there to store the location of the next element. We'll typically use a structure for this purpose as is depicted in the following image:   The following video presents a first example of a linked list. Just as we did previously in class with arrays, we'll be storing coordinates of points in this example, but unlike the arrays we used in class for this purpose, this time around each individual point will be stored at some place assigned to it during run-time, and each point will keep track of the location of the subsequent point in order to maintain the ordering.  linked lists In order to do so, we need to store the address of a point (the next point in the list) as part of (so as a member of) the structure that holds the coordinates of the point. We'll therefore work with the following structure in this example (note that we are switching coordinates to integers just to make the memory view nicer):  struct point{ int x; int y; struct point * next; };    Video Description    The structure that holds the data also includes a pointer to the next element  A list must have a first element (we call it \"start\" here) and you need to remember where this is stored  Once you can access the initial element of the list you can traverse the entire list by going from the first element to the second using the pointer stored in the first element, then from the second to the third using the pointer stored in the second element, all the way to the list's final element (indicated by a NULL pointer in place of the pointer to the next element).  i.e. struct point * start, * ptr; are pointers to the start of the list and the next address in the list       Let's start with a quick review question.  Suppose the following declarations have been made:  typedef struct { int x; int y; } point_t;  and  point_t octagon[8];  How would you assign the value 20 to the y-coordinate of the last point in the array octagon ?   )  octagon[7].y = 20;    Correct      octagon[20].y = 7;    Not quite. Try again!      octagon[20]->y = 7;    Not quite. Try again!      octagon[7]->y = 20;    Not quite. Try again!      Suppose that we have created a linked list of three student records using the structure definition below:  struct student { char name[50]; int birthYear; float gpa; struct student *next; };  Suppose also that the pointer start of type struct student * points to the first student in the list.  How would you print the name and GPA of the first student in the list?   )  printf(\"%s has a gpa of %f.\", start->name, start->gpa);    Correct      printf(\"%s has a gpa of %f.\", *start->name, *start->gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", *start.name, *start.gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", start.name, start.gpa);    Not quite. Try again!      "
},
{
  "id": "p-2060",
  "level": "2",
  "url": "linkedlists-intro.html#p-2060",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linked list "
},
{
  "id": "quiz-linkedlist1-1",
  "level": "2",
  "url": "linkedlists-intro.html#quiz-linkedlist1-1",
  "type": "Reading Question",
  "number": "27.1.1",
  "title": "",
  "body": " Let's start with a quick review question.  Suppose the following declarations have been made:  typedef struct { int x; int y; } point_t;  and  point_t octagon[8];  How would you assign the value 20 to the y-coordinate of the last point in the array octagon ?   )  octagon[7].y = 20;    Correct      octagon[20].y = 7;    Not quite. Try again!      octagon[20]->y = 7;    Not quite. Try again!      octagon[7]->y = 20;    Not quite. Try again!    "
},
{
  "id": "quiz-linkedlist1-2",
  "level": "2",
  "url": "linkedlists-intro.html#quiz-linkedlist1-2",
  "type": "Reading Question",
  "number": "27.1.2",
  "title": "",
  "body": " Suppose that we have created a linked list of three student records using the structure definition below:  struct student { char name[50]; int birthYear; float gpa; struct student *next; };  Suppose also that the pointer start of type struct student * points to the first student in the list.  How would you print the name and GPA of the first student in the list?   )  printf(\"%s has a gpa of %f.\", start->name, start->gpa);    Correct      printf(\"%s has a gpa of %f.\", *start->name, *start->gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", *start.name, *start.gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", start.name, start.gpa);    Not quite. Try again!    "
},
{
  "id": "linkedlists-functions",
  "level": "1",
  "url": "linkedlists-functions.html",
  "type": "Section",
  "number": "27.2",
  "title": "Pass Linked Lists to Functions",
  "body": " Pass Linked Lists to Functions  linked lists functions In the next video we'll see how to use functions in conjunction with linked lists. In particular, we'll enhance the previous example by moving the part that prints the linked list into a function.    Video Description    The start of the linked list is what gets passed to functions  i.e. printPoints(start);       As in the previous question, you have created a linked list of three student records using the structure definition below:  struct student { char name[50]; int birthYear; float gpa; struct student *next; };  Suppose also that the pointer start of type struct student * points to the first student in the list.  How would you print the name and GPA of the second student in the list?   )  printf(\"%s has a gpa of %f.\", start->next->name, start->next->gpa);    Correct      printf(\"%s has a gpa of %f.\", start.next->name, start.next->gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", start.next.name, start.next.gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", start->next.name, start->next.gpa);    Not quite. Try again!      "
},
{
  "id": "quiz-linkedlist1-3",
  "level": "2",
  "url": "linkedlists-functions.html#quiz-linkedlist1-3",
  "type": "Reading Question",
  "number": "27.2.1",
  "title": "",
  "body": " As in the previous question, you have created a linked list of three student records using the structure definition below:  struct student { char name[50]; int birthYear; float gpa; struct student *next; };  Suppose also that the pointer start of type struct student * points to the first student in the list.  How would you print the name and GPA of the second student in the list?   )  printf(\"%s has a gpa of %f.\", start->next->name, start->next->gpa);    Correct      printf(\"%s has a gpa of %f.\", start.next->name, start.next->gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", start.next.name, start.next.gpa);    Not quite. Try again!      printf(\"%s has a gpa of %f.\", start->next.name, start->next.gpa);    Not quite. Try again!    "
},
{
  "id": "linkedlists-autolink",
  "level": "1",
  "url": "linkedlists-autolink.html",
  "type": "Section",
  "number": "27.3",
  "title": "Automate the Linking Process",
  "body": " Automate the Linking Process  linked lists automate We'll continue working with our linked list of points in the next video. This time we'll learn how to automate the linking process between the points with the help of a function.    Video Description    Functions can be used to link one point to another point  Functions can be used to add on (append) a new element to an existing list  Whole lists are created by repeatedly appending a new element to the previous end of the list  i.e. call a function, pass to it the current end of the list and the element to be appended, create the link inside the function and return the new end of the list (which is the element that was just added on)       Given the structure definition from the video,  struct point{ int x; int y; struct point * next; };  what is the return type of the following function:  struct point * append (struct point * end, struct point * newpt) { end->next = newpt; return(end->next); }   )  a pointer to an object of type struct student    Correct      an object of type struct student    Not quite. Try again!      an integer    Not quite. Try again!      a student    Not quite. Try again!      "
},
{
  "id": "quiz-linkedlist1-4",
  "level": "2",
  "url": "linkedlists-autolink.html#quiz-linkedlist1-4",
  "type": "Reading Question",
  "number": "27.3.1",
  "title": "",
  "body": " Given the structure definition from the video,  struct point{ int x; int y; struct point * next; };  what is the return type of the following function:  struct point * append (struct point * end, struct point * newpt) { end->next = newpt; return(end->next); }   )  a pointer to an object of type struct student    Correct      an object of type struct student    Not quite. Try again!      an integer    Not quite. Try again!      a student    Not quite. Try again!    "
},
{
  "id": "linkedlists-create",
  "level": "1",
  "url": "linkedlists-create.html",
  "type": "Section",
  "number": "27.4",
  "title": "Create Linked Lists \"On The Fly\"",
  "body": " Create Linked Lists \"On The Fly\"  linked lists on-the-fly We are ready to put everything together! Rather than simply storing three points that were already known at compile time, we'll now ask the user to enter the number of points they wish to store and then create space in memory at run-time for each such point. Each newly created point (other than the first one, which is the start of the list), is linked to the list by saving its address at the previous element of the list.    Video Description    Linked lists can be created with a for -loop and function  The for -loop asks for the values in each element of the list, the function creates the element, and then the pointers are linked  malloc() is used to allocate memory for each element       You'd like to print all of the names of students whose records are stored in a linked list. As before, each student record is stored as  struct student { char name[50]; int birthYear; float gpa; struct student *next; };  You are given the following function in order to print the names of all students in the list:  void printNames(struct student *start) { while (start->next!=NULL) { printf(\"%s\\n\", start->name); start = start->next; } }  Which of the following is true about the above function?   )  The function doesn't print the name of the last student in the list if the list is nonempty.    Correct      The function is implemented incorrectly because it changes start.    Not quite. Try again!      The function will print a random name when the list is empty.    Not quite. Try again!      Suppose you wanted to delete the third student in a linked list of five student records. Why can’t you just free the space allocated for the third student?   )  By deleting the third student you'd loose access to the remaining students in the list. Instead, you'd need to link the second student to the fourth student in the list (and in order to do so, you need to know where the third student was pointing).    Correct      The compiler won’t let you do that.    Not quite. Try again!      It is impossible to delete a student from a linked list of students. That's why arrays are better than linked lists.    Not quite. Try again!      You need to use the command free instead of simply deleting the student. As long as you use free you are okay.    Not quite. Try again!      "
},
{
  "id": "quiz-linkedlist1-5",
  "level": "2",
  "url": "linkedlists-create.html#quiz-linkedlist1-5",
  "type": "Reading Question",
  "number": "27.4.1",
  "title": "",
  "body": " You'd like to print all of the names of students whose records are stored in a linked list. As before, each student record is stored as  struct student { char name[50]; int birthYear; float gpa; struct student *next; };  You are given the following function in order to print the names of all students in the list:  void printNames(struct student *start) { while (start->next!=NULL) { printf(\"%s\\n\", start->name); start = start->next; } }  Which of the following is true about the above function?   )  The function doesn't print the name of the last student in the list if the list is nonempty.    Correct      The function is implemented incorrectly because it changes start.    Not quite. Try again!      The function will print a random name when the list is empty.    Not quite. Try again!    "
},
{
  "id": "quiz-linkedlist1-6",
  "level": "2",
  "url": "linkedlists-create.html#quiz-linkedlist1-6",
  "type": "Reading Question",
  "number": "27.4.2",
  "title": "",
  "body": " Suppose you wanted to delete the third student in a linked list of five student records. Why can’t you just free the space allocated for the third student?   )  By deleting the third student you'd loose access to the remaining students in the list. Instead, you'd need to link the second student to the fourth student in the list (and in order to do so, you need to know where the third student was pointing).    Correct      The compiler won’t let you do that.    Not quite. Try again!      It is impossible to delete a student from a linked list of students. That's why arrays are better than linked lists.    Not quite. Try again!      You need to use the command free instead of simply deleting the student. As long as you use free you are okay.    Not quite. Try again!    "
},
{
  "id": "linkedlists-large-ints",
  "level": "1",
  "url": "linkedlists-large-ints.html",
  "type": "Section",
  "number": "27.5",
  "title": "Arbitrarily Large Integers",
  "body": " Arbitrarily Large Integers    Recall that the data types int and long int have limits on the size of numbers they can store. Why again is this so?  Please paste your text submission into the box below, then select Run to submit it:     linked lists digits In order to be able to store arbitrarily large integers we'll create a linked list of digits. This will allow us to store as many digits as we'd like (up to the amount of memory available in the computer of course.)    Define a structure struct digit suitable for this purpose.  When you are done, please paste your structure into the code submission box below:     "
},
{
  "id": "activity-27-5-1-Data_Type_Limits-no-output",
  "level": "2",
  "url": "linkedlists-large-ints.html#activity-27-5-1-Data_Type_Limits-no-output",
  "type": "Activity",
  "number": "27.1",
  "title": "",
  "body": "  Recall that the data types int and long int have limits on the size of numbers they can store. Why again is this so?  Please paste your text submission into the box below, then select Run to submit it:    "
},
{
  "id": "activity-27-5-2-Linked_List_Large_Ints-no-output",
  "level": "2",
  "url": "linkedlists-large-ints.html#activity-27-5-2-Linked_List_Large_Ints-no-output",
  "type": "Activity",
  "number": "27.2",
  "title": "",
  "body": "  Define a structure struct digit suitable for this purpose.  When you are done, please paste your structure into the code submission box below:    "
},
{
  "id": "linkedlists-digits",
  "level": "1",
  "url": "linkedlists-digits.html",
  "type": "Section",
  "number": "27.6",
  "title": "Create Digits in Memory",
  "body": " Create Digits in Memory  It's time to create some digits! Remember, each digit can store the actual numerical value to be saved as well as a pointer to the next digit in the number.    Please write the function createDigit() which receives an integer (0-9) as an argument and which creates space in memory for a digit of type digit_t . The function should store the integer passed into it in this newly created digit and then return the address of this digit to the calling function. The function should furthermore initialize the pointer next as the NULL pointer, just to be safe.   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-27-6-1-Linked_List_Create_Digits",
  "level": "2",
  "url": "linkedlists-digits.html#activity-27-6-1-Linked_List_Create_Digits",
  "type": "Activity",
  "number": "27.3",
  "title": "",
  "body": "  Please write the function createDigit() which receives an integer (0-9) as an argument and which creates space in memory for a digit of type digit_t . The function should store the integer passed into it in this newly created digit and then return the address of this digit to the calling function. The function should furthermore initialize the pointer next as the NULL pointer, just to be safe.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "linkedlists-append",
  "level": "1",
  "url": "linkedlists-append.html",
  "type": "Section",
  "number": "27.7",
  "title": "Append Digits to List",
  "body": " Append Digits to List  Now that we can create new digits in memory, the next step is to be able to link digits together into a number (= a linked list of digits). We'll take an iterative approach in which we simply keep adding on digits to the current end of our list of numbers.    Please write the function append() which takes two digit_t pointers as arguments:   a pointer to the current last element of the list  a pointer to the element that is to be appended to the list   Since by appending a new digit the end of the list will change, the function needs to return a pointer to the new last element of the list. Please also print the (three-digit) number stored in the newly created list and next free the space reserved for all digits.   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-27-7-1-Linked_List_Append_To_List",
  "level": "2",
  "url": "linkedlists-append.html#activity-27-7-1-Linked_List_Append_To_List",
  "type": "Activity",
  "number": "27.4",
  "title": "",
  "body": "  Please write the function append() which takes two digit_t pointers as arguments:   a pointer to the current last element of the list  a pointer to the element that is to be appended to the list   Since by appending a new digit the end of the list will change, the function needs to return a pointer to the new last element of the list. Please also print the (three-digit) number stored in the newly created list and next free the space reserved for all digits.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "linkedlists-print",
  "level": "1",
  "url": "linkedlists-print.html",
  "type": "Section",
  "number": "27.8",
  "title": "Function to Print a Number",
  "body": " Function to Print a Number  So far we have only printed a 3-digit number by dereferencing successively the pointers to the three digits. This is not something that could be generalized to an arbitrarily long number and that's why next our goal is to print an arbitrary number using a function to which we only pass a pointer to the first digit of the number.    Let's move the printing of our number into a function. The function should work for arbitrarily long numbers, not just for our 3-digit number. Please write a function printNumber() to which you pass a pointer to the first digit of your number and which prints all of the digits of the number to the screen. The function does not need to return anything.   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-27-8-1-Linked_List_Print_Function",
  "level": "2",
  "url": "linkedlists-print.html#activity-27-8-1-Linked_List_Print_Function",
  "type": "Activity",
  "number": "27.5",
  "title": "",
  "body": "  Let's move the printing of our number into a function. The function should work for arbitrarily long numbers, not just for our 3-digit number. Please write a function printNumber() to which you pass a pointer to the first digit of your number and which prints all of the digits of the number to the screen. The function does not need to return anything.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "linkedlists-free",
  "level": "1",
  "url": "linkedlists-free.html",
  "type": "Section",
  "number": "27.9",
  "title": "Function to Free a Number",
  "body": " Function to Free a Number  Remember: Whenever you reserve space dynamically (at run-time) using a function such as malloc() it is also your responsibility to free the reserved space once you are done using it.    Next, let's move the freeing of all allocated space for a number into a function. The function should again work for arbitrarily long numbers, not just for our 3-digit number. Please write a function freeNumber() to which you pass a pointer to the first digit of your number and which frees the space allocated for all of the digits of the number. The function does not need to return anything.   When you are done, please paste your code into the code submission box below:     "
},
{
  "id": "activity-27-9-1-Linked_List_Free",
  "level": "2",
  "url": "linkedlists-free.html#activity-27-9-1-Linked_List_Free",
  "type": "Activity",
  "number": "27.6",
  "title": "",
  "body": "  Next, let's move the freeing of all allocated space for a number into a function. The function should again work for arbitrarily long numbers, not just for our 3-digit number. Please write a function freeNumber() to which you pass a pointer to the first digit of your number and which frees the space allocated for all of the digits of the number. The function does not need to return anything.   When you are done, please paste your code into the code submission box below:    "
},
{
  "id": "linkedlists-input",
  "level": "1",
  "url": "linkedlists-input.html",
  "type": "Section",
  "number": "27.10",
  "title": "Read a Number from Input",
  "body": " To finish our implementation of arbitrarily large integers using linked lists we'll need a way for the user to enter such a number at run-time of the program.  Read a Number from Input   Here is a function which reads an arbitrarily long integer from the user input and stores it in a linked list of digits.    "
},
{
  "id": "activity-132",
  "level": "2",
  "url": "linkedlists-input.html#activity-132",
  "type": "Activity",
  "number": "27.7",
  "title": "",
  "body": " Here is a function which reads an arbitrarily long integer from the user input and stores it in a linked list of digits.   "
},
{
  "id": "linkedlists-search",
  "level": "1",
  "url": "linkedlists-search.html",
  "type": "Section",
  "number": "27.11",
  "title": "Search a Number for a Digit",
  "body": " Search a Number for a Digit  Now that we can enter, store and free arbitrarily large integers we can also start working with such numbers.   Please write a function searchNumber() which decides whether a given digit can be found in the number. The function should take as inputs a pointer to the beginning of a number-linked-list as well as the digit to be searched for, and it should return a pointer to the first location where the digit was found or else, if the digit was not found, the NULL pointer.    "
},
{
  "id": "activity-133",
  "level": "2",
  "url": "linkedlists-search.html#activity-133",
  "type": "Activity",
  "number": "27.8",
  "title": "",
  "body": " Please write a function searchNumber() which decides whether a given digit can be found in the number. The function should take as inputs a pointer to the beginning of a number-linked-list as well as the digit to be searched for, and it should return a pointer to the first location where the digit was found or else, if the digit was not found, the NULL pointer.   "
},
{
  "id": "linkedlists-reverse",
  "level": "1",
  "url": "linkedlists-reverse.html",
  "type": "Section",
  "number": "27.12",
  "title": "Reverse a Linked List",
  "body": " Reverse a Linked List  linked lists reverse In this video we'll continue working on our arbitrarily long integers and examine how to create a backward copy of one such integer.  Note that the typedef command does not work properly in the environment in which this lecture is recorded, hence its use is avoided for the purpose of the recordings only.    Video Description    A linked list can be reversed by reordering the pointers that connect the list  Check out either the Codecast or printed code for the full and lengthy example!       Given the definition of a linked list of digits as in the video, what does the following function do if called with the address of the first digit of a linked list of digits?  void whatAmIDoing(struct digit * start) { if(start != NULL) { whatAmIDoing(start->next); printf(\"%d\", start->num); } }   )  It prints the entire number stored in the linked list in reverse order.    Correct      It prints every other digit of the number stored in the linked list.    Not quite. Try again!      It prints every other digit of the number stored in the linked list, in reverse order.    Not quite. Try again!      It prints the entire number stored in the linked list.    Not quite. Try again!      It produces an endless loop.    Not quite. Try again!      Given again the definition of a linked list of digits as in the video, the following function reverse() is supposed to reverse a linked list of digits in place, that is, without creating a copy of the list. There is one line missing at the end of the function.  struct digit * reverse(struct digit * start) { struct digit * prev = NULL; struct digit * current = start; struct digit * next; while (current != NULL) { next = current->next; current->next = prev; prev = current; current = next; } \/*ADD LINE HERE*\/ }  What should be added in place of \/*ADD LINE HERE*\/ , so that the function correctly reverses the number?   )  return(prev);    Correct      return(next);    Not quite. Try again!      return(current);    Not quite. Try again!      return(NULL);    Not quite. Try again!      "
},
{
  "id": "quiz-linkedlist2-1",
  "level": "2",
  "url": "linkedlists-reverse.html#quiz-linkedlist2-1",
  "type": "Reading Question",
  "number": "27.12.1",
  "title": "",
  "body": " Given the definition of a linked list of digits as in the video, what does the following function do if called with the address of the first digit of a linked list of digits?  void whatAmIDoing(struct digit * start) { if(start != NULL) { whatAmIDoing(start->next); printf(\"%d\", start->num); } }   )  It prints the entire number stored in the linked list in reverse order.    Correct      It prints every other digit of the number stored in the linked list.    Not quite. Try again!      It prints every other digit of the number stored in the linked list, in reverse order.    Not quite. Try again!      It prints the entire number stored in the linked list.    Not quite. Try again!      It produces an endless loop.    Not quite. Try again!    "
},
{
  "id": "quiz-linkedlist2-2",
  "level": "2",
  "url": "linkedlists-reverse.html#quiz-linkedlist2-2",
  "type": "Reading Question",
  "number": "27.12.2",
  "title": "",
  "body": " Given again the definition of a linked list of digits as in the video, the following function reverse() is supposed to reverse a linked list of digits in place, that is, without creating a copy of the list. There is one line missing at the end of the function.  struct digit * reverse(struct digit * start) { struct digit * prev = NULL; struct digit * current = start; struct digit * next; while (current != NULL) { next = current->next; current->next = prev; prev = current; current = next; } \/*ADD LINE HERE*\/ }  What should be added in place of \/*ADD LINE HERE*\/ , so that the function correctly reverses the number?   )  return(prev);    Correct      return(next);    Not quite. Try again!      return(current);    Not quite. Try again!      return(NULL);    Not quite. Try again!    "
},
{
  "id": "linkedlists-sort",
  "level": "1",
  "url": "linkedlists-sort.html",
  "type": "Section",
  "number": "27.13",
  "title": "Sort Linked Lists",
  "body": " Sort Linked Lists  linked lists sort In this final video on linked lists we'll explore how to create a sorted copy of a linked list, using the insertion sort algorithm.    Video Description    Sort a linked list by successively inserting digits into their new, sorted, locations using functions and while -loops  Check out either the Codecast or printed code for the full and lengthy example!       We'll learn about libraries next! You have already seen some libraries, amongst them the mathematics library math .  Please explore some of the functions in the standard C math library (you'll need to search the internet). In particular, what is the difference between the two functions atan() and atan2() ?   )  Both find the inverse tangent, but atan2() is able to place it into the correct quadrant.    Correct      Both find the inverse tangent, but atan2() squares the result.    Not quite. Try again!      Both find the inverse tangent, but one is in radians, the other in degrees.    Not quite. Try again!      Both find the inverse tangent, but atan2() first multiplies by 2.    Not quite. Try again!      "
},
{
  "id": "p-2179",
  "level": "2",
  "url": "linkedlists-sort.html#p-2179",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "insertion sort "
},
{
  "id": "quiz-linkedlist2-3",
  "level": "2",
  "url": "linkedlists-sort.html#quiz-linkedlist2-3",
  "type": "Reading Question",
  "number": "27.13.1",
  "title": "",
  "body": " We'll learn about libraries next! You have already seen some libraries, amongst them the mathematics library math .  Please explore some of the functions in the standard C math library (you'll need to search the internet). In particular, what is the difference between the two functions atan() and atan2() ?   )  Both find the inverse tangent, but atan2() is able to place it into the correct quadrant.    Correct      Both find the inverse tangent, but atan2() squares the result.    Not quite. Try again!      Both find the inverse tangent, but one is in radians, the other in degrees.    Not quite. Try again!      Both find the inverse tangent, but atan2() first multiplies by 2.    Not quite. Try again!    "
},
{
  "id": "linkedlists-summary",
  "level": "1",
  "url": "linkedlists-summary.html",
  "type": "Section",
  "number": "27.14",
  "title": "Summary",
  "body": " Summary  In this chapter, we covered the following topics:   Linked lists  Passing linked lists to functions  Simplifying and automating the creation of linked lists  Using linked lists to store extremely large numbers  Manipulating linked lists (i.e. search, sort, reverse)   "
},
{
  "id": "libraries-intro",
  "level": "1",
  "url": "libraries-intro.html",
  "type": "Section",
  "number": "28.1",
  "title": "Intro to Libraries",
  "body": " Intro to Libraries  Now that we have created our own data types and functions that allow us to manipulate instances of objects of these new types it is common to package such functions as a library . Take as an example our arbitrarily large integers. In order to allow others to use these numbers in their code it would make sense to hide and package up all the work and messiness that goes into creating such a number. You'd probably even want to provide some additional functionality such as adding, subtracting, multiplying, dividing two such number and then hand all that to a user who just wants to be able to work with really large numbers (but has no interest in how you implemented that functionality). That's where libraries come in.  libraries We have actually already encountered libraries in our work, for example the standard input\/output library stdio , the standard library stdlib and the math library math . Each such library actually comes with two files, one ending in .h (the so-called header file ) and one ending in .o (the so-called object file .  The header file contains all of the prototypes of functions from the library (remember, the compiler needs to know about these prototypes so that it can check whether you are using your functions correctly). That's why we need to #include ... the header files of those libraries whose functions we wish to invoke in our code.  The object file contains the actual library functions in machine language. It's already been translated by the compiler so that when you build your program you don't have to compile the entire library each time around. You can simply link the translated code contained in the library object file to your own code (that's what the linker does.)  So here is an example. Suppose you are writing a C-program coolProgram.c that uses functions from the two libraries stdio and math . In order for the compiler to have access to all of the function prototypes from these libraries, we need to:  #include <stdio.h> #include <math.h>  Once your program compiles without any compiler errors, the compiler produces an object file coolProgram.o , which is your code, translated into machine language. Next, the linker starts its job and finds the object files that contain the input\/output functions and math functions used in your program, namely stdio.o and math.o . These object files contain all of these functions already compiled into machine language. The linker then links (packages) these object files together with the object file coolProgram.o of the program you are writing, and if all goes well, an executable file results.    Which of the following are part of a library?   a header file  an object file  source code   Please paste your text submission into the box below, then select Run to submit it:     "
},
{
  "id": "activity-28-1-1-Library_Parts-no-output",
  "level": "2",
  "url": "libraries-intro.html#activity-28-1-1-Library_Parts-no-output",
  "type": "Activity",
  "number": "28.1",
  "title": "",
  "body": "  Which of the following are part of a library?   a header file  an object file  source code   Please paste your text submission into the box below, then select Run to submit it:    "
},
{
  "id": "libraries-components",
  "level": "1",
  "url": "libraries-components.html",
  "type": "Section",
  "number": "28.2",
  "title": "Library Components",
  "body": " Library Components  libraries components header file object file A library consists of a header file (.h) and an object file (.o) .   For example, for the standard library stdlib , the header file, which you include via  #include <stdlib.h>  contains prototypes for standard functions like:  int abs(int x); void *calloc(size_t nitems, size_t size); void *malloc(size_t size); void free(void *block); int atoi(const char *s);  The actual object file is part of your C distribution. We never get to see the actual source code.   What do you think the function atoi() does?  Please paste your text submission into the box below, then select Run to submit it:     "
},
{
  "id": "activity-28-2-1-ATOI_Function-no-output",
  "level": "2",
  "url": "libraries-components.html#activity-28-2-1-ATOI_Function-no-output",
  "type": "Activity",
  "number": "28.2",
  "title": "",
  "body": " For example, for the standard library stdlib , the header file, which you include via  #include <stdlib.h>  contains prototypes for standard functions like:  int abs(int x); void *calloc(size_t nitems, size_t size); void *malloc(size_t size); void free(void *block); int atoi(const char *s);  The actual object file is part of your C distribution. We never get to see the actual source code.   What do you think the function atoi() does?  Please paste your text submission into the box below, then select Run to submit it:    "
},
{
  "id": "libraries-header",
  "level": "1",
  "url": "libraries-header.html",
  "type": "Section",
  "number": "28.3",
  "title": "Making Our Own Library - Header File",
  "body": " Making Our Own Library - Header File  In order to make our own library we need to provide a header file (.h) and an object file (.o) . Let's look at the example of our arbitrarily long integers.  The header file, arbitraryintegers.h , would contain the structure type definition and function prototypes:  struct digit { int num; struct digit *next; }; typedef struct digit digit_t; digit_t * createDigit(int); digit_t * append(digit_t * end, digit_t * newDigptr); void printNumber(digit_t * start); void freeNumber(digit_t * start); digit_t * readNumber(void); digit_t * searchNumber(digit_t * start, int number); digit_t * insertAtFront(digit_t * start,digit_t * newptr); digit_t * reverseNumber(digit_t * start); digit_t * insertIntoSorted(digit_t *start,digit_t *newDig); digit_t * sortedCopy(digit_t *);  "
},
{
  "id": "libraries-source",
  "level": "1",
  "url": "libraries-source.html",
  "type": "Section",
  "number": "28.4",
  "title": "Making Our Own Library - Source File",
  "body": " Making Our Own Library - Source File  The source file, arbitraryintegers.c , contains the collection of all functions that are to be part of the library (but no main() function!):  #include \"arbitraryintegers.h\" digit_t *createDigit(int dig) { digit_t *ptr; ptr = (digit_t *) malloc(sizeof(digit_t)); ptr->num = dig; return(ptr); } digit_t * append(digit_t * end, digit_t * newDigptr) { end->next = newDigptr; end = end->next; return(end); } void printNumber(digit_t *start) { digit_t * ptr = start; while (ptr!=NULL) { printf(\"%d\", ptr->num); ptr = ptr->next; } printf(\"\\n\"); } . . .  "
},
{
  "id": "libraries-object",
  "level": "1",
  "url": "libraries-object.html",
  "type": "Section",
  "number": "28.5",
  "title": "Making Our Own Library - Object File",
  "body": " Making Our Own Library - Object File  One typically compiles the source code to an object. This object file contains machine language for all of the functions in the source file but is by itself not executable (since it contains no main() function!).  The library then consists of both the header file and the object file. In our example, this would be  arbitraryintegers.h arbitraryintegers.o  We can now use this library in other programs:  #include <stdio.h> #include \"arbitraryintegers.h\" int main(void) { digit_t *myNumber; . . . myNumber = readNumber(); . . . }  Note the use of \" \" for user-defined libraries instead of < > , which is reserved for built-in libraries.  "
},
{
  "id": "libraries-complex",
  "level": "1",
  "url": "libraries-complex.html",
  "type": "Section",
  "number": "28.6",
  "title": "Create A Complex Number Library",
  "body": " Create A Complex Number Library  Let's give this a try! We'll now create our own library, namely a complex number library (note that C does not come with a complex number data type).  A complex number     has a real part x and an imaginary part y. Often, we write z in polar form also as     where is the absolute value (also called magnitude) of the complex number and is the argument (also called phase of the number).  complex numbers Again, C does not provide a built-in complex data type (many other languages do), so we must create our own.    Please declare a new datatype complex_t that stores the real part \"real\" and the imaginary part \"imag\" of a complex number as floats.  When you are done, please paste your datatype into the code submission box below:     "
},
{
  "id": "activity-28-6-1-Libraries_Complex_Numbers-no-output",
  "level": "2",
  "url": "libraries-complex.html#activity-28-6-1-Libraries_Complex_Numbers-no-output",
  "type": "Activity",
  "number": "28.3",
  "title": "",
  "body": "  Please declare a new datatype complex_t that stores the real part \"real\" and the imaginary part \"imag\" of a complex number as floats.  When you are done, please paste your datatype into the code submission box below:    "
},
{
  "id": "libraries-complex-source",
  "level": "1",
  "url": "libraries-complex-source.html",
  "type": "Section",
  "number": "28.7",
  "title": "Complex Number Library Source File",
  "body": " Complex Number Library Source File  Here are the prototypes of the functions we'd like to create:  \/* Create a complex number from real and imaginary parts *\/ complex_t complex(float x, float y); \/* Create a complex number from polar coordinates *\/ complex_t polar(float R, float phi); \/* Extract the real part of a complex number *\/ float real(complex_t z); \/* Extract the imaginary part of a complex number *\/ float imaginary(complex_t z); \/* Finds the complex conjugate *\/ complex_t c_conjugate(complex_t z); \/* add two complex numbers *\/ complex_t add_c(complex_t z1, complex_t z2); \/* Subtract complex numbers *\/ complex_t subtract_c(complex_t z1, complex_t z2); \/* Multiply complex numbers *\/ complex_t multiply_c(complex_t z1, complex_t z2); \/* Divide complex numbers *\/ complex_t divide_c(complex_t z1, complex_t z2); \/* Complex exponential function, using e^(x+iy) = e^x(cos y + i sin y) *\/ complex_t exp_c(complex_t z); \/* Complex logarithm: log(z) = ln(|z|) + i arg(z) *\/ complex_t log_c(complex_t z); \/* complex square root: take square root of length and half the angle *\/ complex_t sqrt_c(complex_t z); \/* Complex absolute value: |z| = (x*x + y*y)^(1\/2) *\/ float abs_c(complex_t z); \/* argument of a complex number *\/ float phase_c(complex_t z); \/* display a complex number to the console *\/ void display_c(complex_t z);  Below is a coding window in which there is room to write all of these functions:   "
},
{
  "id": "libraries-complex-header",
  "level": "1",
  "url": "libraries-complex-header.html",
  "type": "Section",
  "number": "28.8",
  "title": "Complex Number Library Header File",
  "body": " Complex Number Library Header File  The header file for the Complex Number Library needs to contain all of the prototypes of our functions but also constants (such as E ) as well as the definition of the complex number data type. Here are the contents of the file:   "
},
{
  "id": "libraries-complex-assemble",
  "level": "1",
  "url": "libraries-complex-assemble.html",
  "type": "Section",
  "number": "28.9",
  "title": "Assembling the Complex Number Library",
  "body": " Assembling the Complex Number Library  It's time to write all of the functions in the library! With your group, please decide which function you'd like to work on first. In order to make sure that we can get all functions covered (after all, we would like to have a working library by the end of class today), we'll use a google doc in which we keep track of who is working on what. Access to this google doc is at the bottom of this page.   Please visit today's Google Doc at the bottom of the page to sign up for a function you wish to write. We'll also share our code in this Google Doc.  For your convenience, here is a code window for you to test individual functions. Note that you'll have to write your own main() function that tests your code.   Access to our class google doc is provided below. Please make sure that you have turned off smart quotes before pasting any code into the below google doc. Smart quotes are those curly pretty-looking quotation marks that'll get our compiler all bent out of shape. To turn off smart quotes in google:  Open any Google doc.  Click on \"Tools\" in the menu bar.  Select \"Preferences...\"  Uncheck the box \"Use smart quotes\".  Note that this choice will affect all of your future Google documents: whenever you hit the quotation mark key on your keyboard, from now on straight marks will appear. This does not affect already existing smart quotes in existing documents - only newly typed quotes are affected. As soon as you turn smart quotes back on by checking the \"Use smart quotes\" box, smart quotes will be enabled again.    "
},
{
  "id": "activity-137",
  "level": "2",
  "url": "libraries-complex-assemble.html#activity-137",
  "type": "Activity",
  "number": "28.4",
  "title": "",
  "body": " Please visit today's Google Doc at the bottom of the page to sign up for a function you wish to write. We'll also share our code in this Google Doc.  For your convenience, here is a code window for you to test individual functions. Note that you'll have to write your own main() function that tests your code.   Access to our class google doc is provided below. Please make sure that you have turned off smart quotes before pasting any code into the below google doc. Smart quotes are those curly pretty-looking quotation marks that'll get our compiler all bent out of shape. To turn off smart quotes in google:  Open any Google doc.  Click on \"Tools\" in the menu bar.  Select \"Preferences...\"  Uncheck the box \"Use smart quotes\".  Note that this choice will affect all of your future Google documents: whenever you hit the quotation mark key on your keyboard, from now on straight marks will appear. This does not affect already existing smart quotes in existing documents - only newly typed quotes are affected. As soon as you turn smart quotes back on by checking the \"Use smart quotes\" box, smart quotes will be enabled again.   "
},
{
  "id": "libraries-complex-test",
  "level": "1",
  "url": "libraries-complex-test.html",
  "type": "Section",
  "number": "28.10",
  "title": "Testing Our Complex Number Library",
  "body": " Testing Our Complex Number Library  Here is the source code for the complex number library we have just written:   I'll now walk you through all of the required steps to compile the library to an object file and to then use this library in a test program. To make things easier, this is all demonstrated on the next few pages via our Linux server coding windows. But you could just as easily follow all of the described steps by logging onto the server. You'd first have to save the files complexlib.c , complexlib.h and testComplex.c in one directory on the server.   Test Programs   Here is a quick program to test some functionality of our library. You'll have to work on the server in order to compile the library and link it to the test program. I'll walk you through this below. Add more tests here!  \/* Program to test our complex number library * * testComplex.c * * compile this program to an object file using * gcc -c -o testComplex.o testComplex.c * * then link this object file with the complex number library * gcc -o testComplex testComplex.o complexlib.o -lm * *\/ #include <stdio.h> #include \"complexlib.h\" int main(void) { complex_t z,w; z = complex(2,3); w = complex(-4,-6.5); display_c(z); printf(\" + \"); display_c(w); printf(\" = \"); display_c(add_c(z,w)); printf(\"\\n\"); return(0); }     "
},
{
  "id": "activity-138",
  "level": "2",
  "url": "libraries-complex-test.html#activity-138",
  "type": "Activity",
  "number": "28.5",
  "title": "",
  "body": " Here is a quick program to test some functionality of our library. You'll have to work on the server in order to compile the library and link it to the test program. I'll walk you through this below. Add more tests here!  \/* Program to test our complex number library * * testComplex.c * * compile this program to an object file using * gcc -c -o testComplex.o testComplex.c * * then link this object file with the complex number library * gcc -o testComplex testComplex.o complexlib.o -lm * *\/ #include <stdio.h> #include \"complexlib.h\" int main(void) { complex_t z,w; z = complex(2,3); w = complex(-4,-6.5); display_c(z); printf(\" + \"); display_c(w); printf(\" = \"); display_c(add_c(z,w)); printf(\"\\n\"); return(0); }   "
},
{
  "id": "libraries-compile-library",
  "level": "1",
  "url": "libraries-compile-library.html",
  "type": "Section",
  "number": "28.11",
  "title": "Compile the Library to an Object File",
  "body": " Compile the Library to an Object File  In the code window below, inside the workspace folder (which is inside engs20 ), you can find three files:   complexlib.c (our complex number library)  complexlib.h (header file)  testComplex.c (test file, which includes main)    Compile the library to an object file:  gcc -c -o complexlib.o complexlib.c   The -c flag instructs gcc to compile only, without linking and making an executable program.  The -o flag allows to specify the name of the output file \"complexlib.o\".   Note that complexlib.o is not an executable program (it has no main() for starters). It is simply the translation of our library into machine language.    "
},
{
  "id": "activity-139",
  "level": "2",
  "url": "libraries-compile-library.html#activity-139",
  "type": "Activity",
  "number": "28.6",
  "title": "",
  "body": " Compile the library to an object file:  gcc -c -o complexlib.o complexlib.c   The -c flag instructs gcc to compile only, without linking and making an executable program.  The -o flag allows to specify the name of the output file \"complexlib.o\".   Note that complexlib.o is not an executable program (it has no main() for starters). It is simply the translation of our library into machine language.   "
},
{
  "id": "libraries-compile-object",
  "level": "1",
  "url": "libraries-compile-object.html",
  "type": "Section",
  "number": "28.12",
  "title": "Compile to an Object File",
  "body": " Compile to an Object File   Next, compile testComplex.c to an object file:  gcc -c -o testComplex.o testComplex.c  Notice again, that testComplex.o is not an executable file (even though it has a main() function). But it hasn't been linked together with our library yet and thus can't execute any library functions.    "
},
{
  "id": "activity-140",
  "level": "2",
  "url": "libraries-compile-object.html#activity-140",
  "type": "Activity",
  "number": "28.7",
  "title": "",
  "body": " Next, compile testComplex.c to an object file:  gcc -c -o testComplex.o testComplex.c  Notice again, that testComplex.o is not an executable file (even though it has a main() function). But it hasn't been linked together with our library yet and thus can't execute any library functions.   "
},
{
  "id": "libraries-executable",
  "level": "1",
  "url": "libraries-executable.html",
  "type": "Section",
  "number": "28.13",
  "title": "Make an Executable Program",
  "body": " Make an Executable Program   Finally, link it all together and make an executable program:  gcc -o testComplex testComplex.o complexlib.o -lm   Without the -c flag, gcc creates an executable file.  The -o flag specifies the name of the output file \"testComplex\".  All of the object files that are to be linked together are listed.  The -lm flag forces the inclusion of the mathematics library.   Running the executable program:  .\/testComplex   .\/ indicates that the executable is located in the current directory. This is how you typically run programs under Linux. On the engs20 servers you don't have to type this part.     "
},
{
  "id": "activity-141",
  "level": "2",
  "url": "libraries-executable.html#activity-141",
  "type": "Activity",
  "number": "28.8",
  "title": "",
  "body": " Finally, link it all together and make an executable program:  gcc -o testComplex testComplex.o complexlib.o -lm   Without the -c flag, gcc creates an executable file.  The -o flag specifies the name of the output file \"testComplex\".  All of the object files that are to be linked together are listed.  The -lm flag forces the inclusion of the mathematics library.   Running the executable program:  .\/testComplex   .\/ indicates that the executable is located in the current directory. This is how you typically run programs under Linux. On the engs20 servers you don't have to type this part.    "
},
{
  "id": "libraries-summary",
  "level": "1",
  "url": "libraries-summary.html",
  "type": "Section",
  "number": "28.14",
  "title": "Summary",
  "body": " Summary  In this chapter, we learned about the following topics:   Libraries and their components  Library source code  Header and object files  Practice creating our own library for complex numbers   "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "solutions-2",
  "level": "1",
  "url": "solutions-2.html",
  "type": "Appendix",
  "number": "B",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "appendix-1",
  "level": "1",
  "url": "appendix-1.html",
  "type": "Appendix",
  "number": "C",
  "title": "List of Symbols",
  "body": " List of Symbols   "
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

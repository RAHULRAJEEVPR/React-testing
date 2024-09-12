notes

*-----------------------------
TEST DRIVEN DEVELOPMENT

Test driven development is a software development process where you write tests before writing the software code . Once the tests have been written , you then write the code to ensure the tests pass
this process involves three phases

1.Create tests that verify the functionlity of a specific feature
2.write software code that will run the test successfully when re-excuted 
3.Refacor the code optimization while ensuring the tests continue to pass

Also called Red-Green testing as all test go from a red failed state to a gree passed state
------------------------------------


.skip - used to skip a test- we cam be used with test/describe
.only - used to run only specipic test/describe

*..........................
describe - used for grouping of test
syntax
describe(name,fn)
the first argument is the group name
the second argument is the a function that contains the expectations to test
we can have multiple describe in single test file and also we can create nested describes
--------------------------------------

*-------------------------------
File name Conventions

*Files with  .test.js or .test.tsx suffix
*Files with .spec.js or .spec.tsx suffix
*Files iwth .js or .tsx suffic in __tests__ folders.

the recommomented way is always put you tests next to the code they are testing so that relative imports are shorter.
--------------------------------------

we also use the "it" insted of "test" to create test
test.skip == fit
test.only == xit

-------------------------
Code Coverage

A metric that can help you understand how much of your software code is tested
1.statement coverage:how may of the statements in the software code have been executed
2.Branch Coverage: how many of the branches of the control structures (if staement of instance) have excuted
3.function coverage :how many of the functions defined have been called 
4.line coverage: how many of lines of source code have been tested
command - npm run test -- --coverage
-------------

------------------
Assertions

when writing tests, we often need to check that values meet certain conditons
asserions decide if a test passes or fails
--------------------------------
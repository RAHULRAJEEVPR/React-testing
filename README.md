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
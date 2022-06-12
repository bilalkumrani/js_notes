//AMD (asynchronous module defination)
// it is a mechanism for defining modules such that the module and
// its dependencies can be asynchronously loaded.

// why we need AMD?
// - we use <script> tags in our html file - it polutes global space
// - suppose that our <script1> is depend on <script2> and if we change their sequence code will break
// AMD implementation:

// define(moduleID, dependency, factoryFunction)

// moduleID is similar to the folder or the path
// dependeinciy is array of dependencies required by the module
// factoryFunction is a function that returns an objects

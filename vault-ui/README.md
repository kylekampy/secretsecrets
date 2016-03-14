# Typescript-Reactjs project
## Starting development:

### Install tools
1. Install gulp `npm install -g gulp`
1. Install tsd `npm install -g tsd`
1. `npm install`

### Build
To build once `gulp build` or `gulp` *build is the default action*
To monitor the sources and build when a files changes `gulp watch` 

### Adding new type definitions
Type definitions are in the /typings folder.  To add new type definitions to the project use tsd. e.g. `tsd install react-global --save`

### App Directory Structure
The directory structure is based on the following post: http://marmelab.com/blog/2015/12/17/react-directory-structure.html
```
app/
    command/
        Command.js
        Commands.test.js
        CommandActions.js
        CommandActions.test.js
        CommandList.js
        CommandList.test.js
        CommandItem.js
        CommandItem.test.js
        CommandHelper.js
        CommandHelper.test.js
        commandReducer.js
        commandReducer.test.js
    product/
        Product.js
        Product.test.js
        ProductActions.js
        ProductActions.test.js
        ProductList.js
        ProductList.test.js
        ProductItem.js
        ProductItem.test.js
        ProductImage.js
        ProductImage.test.js
        productReducer.js
        productReducer.test.js
```

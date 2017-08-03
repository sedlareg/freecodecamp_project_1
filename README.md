# freecodecamp_project_1
Just a test for react with full inital setup
## Init Project
#### Directories
```
λ mkdir /Projects
λ mkdir freecodecamp_project_1
```
#### GIT and GTM
```
λ cd /Projects/freecodecamp_project_1
λ git init
λ gtm init
λ git remote add origin git@github.com:sedlareg/freecodecamp_project_1.git
λ git branch --set-upstream-to=origin/master master
```
#### YARN
##### Installation
I am using Git-Bash for Windows and MINGW64 so i had to install [**yarn**][1] like this
```
λ curl -o- -L https://yarnpkg.com/install.sh | bash
λ yarn -v
```
##### Init yarn
```
λ yarn init
yarn init v0.27.5
question name (project1):
question version (1.0.0):
question description: freecodecamp react project1
question entry point (index.js):
question repository url: git@github.com:sedlareg/freecodecamp_project_1.git
question author: Geraldes Pereira Ferreira
question license (MIT):
```
#### Basic Packages
Now we are ready to install some basic stuff.
* [**Next.js**][2] - Just to save time in creating a basic react with routing etc.
* [**React**][3]
* [**React-DOM**][4]
```
λ yarn add next react react-dom
``` 
After that we have a package.json what would look like this one:
```
λ cat package.json
{
  "name": "project1",
  "version": "1.0.0",
  "description": "freecodecamp react project1",
  "main": "index.js",
  "repository": "git@github.com:sedlareg/freecodecamp_project_1.git",
  "author": "Geraldes Pereira Ferreira",
  "license": "MIT",
  "dependencies": {
    "next": "^2.4.9",
    "react": "^15.6.1",
    "react-dom": "^15.6.1"
  }
}
```
With a little bit of sed power we add some basic npm scripts to start and build our project
```
λ sed -i '/react-dom/{
  :b
  $!N
  /\}$/!bb
  s/  \}/  \},\n  "scripts\": \{\n    "dev\": \"next\",\n    "build\": \"next build\",\n    "start\": \"next start\"\n  \}/
  }' package.json
```
To test the setup we create a pages folder and an index.js file...
```typescript jsx
export default () => {
  <div>Welcome to next.js!</div>
}
```
...and run the yarn script called "dev"
```
λ yarn run dev
DONE  Compiled successfully in 2977ms
> Ready on http://localhost:3000
```
Now we can open the browser and test if our react app works.

#### Additional Packages
* [**eslint**][5]
* [**prettier**][6]
* [**husk**][7]
* [**lint-staged**][8]

[1]: https://yarnpkg.com/en/
[2]: https://github.com/zeit/next.js/
[3]: https://facebook.github.io/react/
[4]: https://facebook.github.io/react/docs/react-dom.html
[5]: http://eslint.org/
[6]: https://github.com/prettier/prettier
[7]: https://github.com/typicode/husky
[8]: https://github.com/okonet/lint-staged
[9]: https://jaketrent.com/post/format-javascript-with-prettier/
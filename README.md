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
* [**Next.js**][2]
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
[1]: https://yarnpkg.com/en/
[2]: https://github.com/zeit/next.js/
[3]: https://facebook.github.io/react/
[4]: https://facebook.github.io/react/docs/react-dom.html
# freecodecamp_project_1
Just a test for react with full inital setup
## Init Project

#### Directories
```
$> mkdir /Projects
$> mkdir freecodecamp_project_1
```
#### GIT and GTM
```
$> cd /Projects/freecodecamp_project_1
$> git init
$> gtm init
$> git remote add origin git@github.com:sedlareg/freecodecamp_project_1.git
$> git branch --set-upstream-to=origin/master master
```
#### YARN
##### Installation
I am using Git-Bash for Windows and MINGW64 so i had to install [**yarn**][1] like this
```
$> curl -o- -L https://yarnpkg.com/install.sh | bash
$> yarn -v
```
##### Init yarn
```
$> yarn init
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
$> yarn add next react react-dom
``` 
[1]: https://yarnpkg.com/en/
[2]: https://github.com/zeit/next.js/
[3]: https://facebook.github.io/react/
[4]: https://facebook.github.io/react/docs/react-dom.html
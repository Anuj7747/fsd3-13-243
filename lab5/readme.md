#   project setup
1. create two folder frontend and backend 
2. go to frontend 'cd frontend'
    -type npm create vite@latest
    -press y if asked to install 
    -enter'.' in projrct name
    -select react as framework from arrow key 
    -select javascript from varient by arrow key
    -select eslint by arrow key 
    -select yes and press enter
3. setup tailwind in react project 
    -install tailwind by 'npm install tailwindcss @tailwindcss/vite'
    -update vite.config.js with'tailwindcss()'
    -remove all the contains and add '@import "tailwindcss"' top of index.css





In react Style can be added into html by class name and should be   because  class is a predefine keyword in react .    "In React, styles can be added to HTML elements using the className attribute. We use className instead of class because class is a reserved keyword in JavaScript."
when js function return directly html contains, called components 
1. Start with capital letter
2. it must return html 
3. must be closed at the calling time
5. it can be used anywhere and anytimes
window.addEventListener('keydown', ({ key, ctrlKey }) => {
    if ((key === 'e' || key === 'E') && ctrlKey) {
        document.designMode = document.designMode === 'off' ? 'on' : 'off'
    }
})

console.log(`
 ___________________________________________________
/                                                   \\
| Hey there!                                         |
| Nice to see you here :)                            |
|                                                    |
| Try clicking on the website content and            |
| pressing Ctrl/Cmd + 'e' on your keyboard...        |
|                                                    |
| The full source of this website is available on    |
| Github:                                            |
| https://github.com/umcconnell/umcconnell.github.io |                                          
\\                                                   /
 ===================================================
                                                    \\
                                                     \\
                                                        ^__^                             
                                                        (oo)\\_______                   
                                                        (__)\\       )\\/\\             
                                                            ||----w |           
                                                            ||     ||  
                                                            

`)

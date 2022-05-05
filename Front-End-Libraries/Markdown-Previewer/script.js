const projectName = 'markdown-previewer';

marked.setOptions({
    breaks: true
});

const markdownInitialText = `
# This is H1
## This is H2
### This is H3
#### This is H4 and so

**Strong text** or *italicized text* your choice


> Wow a blockquote - it is just check the markup


do you like the organised way
1. First add this
2. Then this
3. This is the last one

or non orgranised way
- This example
- took help
- from others.

<br />

\`console.log(' Hello World!');\`

<br />
Or use tags here, who cares
<br /><br />

but but but always a but
we will write a function to print hello world

\`\`\`\


function printHelloWorld(sayHelloTo='World') {
    console.log('Hello' + sayHello);
}


\`\`\`

I guess I need a horizontal line (rule or whatever)
_______________________________________________

and I can put a link to my profile [r01nx](https://github.com/r01nx) and many more things.
`;

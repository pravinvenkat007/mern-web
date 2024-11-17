import React from 'react';
import { Link } from 'react-router-dom';
export function Skills(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" id='navbar'>
    <a class="navbar-brand" href="#"><img src="/image/logo1.jpeg" id='logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class='nav-link active' to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/About'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/Skills'>Skills</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/Benifets'>Benefits</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/Guide'>Guide</Link>
        </li>
     
      </ul>
    
      <Link to='/Signin'><button class="btn btn-outline-light" > Sign in</button></Link>
    </div>
  </div>
</nav>
<ul class='list'>
  <li><i class="fa-brands fa-html5" id='icon-1'></i><a href="#S-html">html</a></li>
  <li><i class="fa-brands fa-css3-alt" id='icon-2'></i><a href="#S-css">css</a></li>
  <li><i class="fa-brands fa-js" id='icon-3'></i><a href="#S-js">js</a></li>
  <li><i class="fa-brands fa-bootstrap" id='icon-4'></i><a href="#S-boostrap">boostrap</a></li>
  <li><i class="fa-brands fa-envira" id='icon-5'></i><a href="#S-mongod">mongod</a></li>
  <li><i class="fa-brands fa-react" id='icon-6'></i><a href="#S-react">react</a></li>
  <li><i class="fa-brands fa-node-js" id='icon-7'></i><a href="#S-nodejs">node</a></li>
  <li><img src="/image/Express.png" alt="" id='express-list'/><a href="#S-express">express</a></li>
 
</ul>
<section  id='S-html'>

  <hr id='top' />
  <br /><br /><br /><br />
  <div class='container'>
     
        <div class='col-lg-12 col-md-6 col-12'>
        <i class="fa-brands fa-html5" ><h5>HTML</h5></i> 
     
        </div>
        <div class='col-lg-12 col-md-6 col-12'>
        <iframe width="700" height="315" src="https://www.youtube.com/embed/Oes56FoYABc?si=S74xvKsbuE1vS0PY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen id='videoH'></iframe>
        </div>
        <div class='col-lg-12 col-md-6 col-12'>
        <div class='html-text'>
        <ul>
          <h5><b>HTML</b>(Hypertext Markup Language) is a language used to create the structure and content of websites. It is the foundation upon which all websites are built, and every 
            web developer must have a good understanding of HTML to create dynamic and engaging web pages.</h5>
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML was invented by Tim Berners-Lee in 1991.</li>
          <li>HTML is used for creating web pages and web applications.</li>
           <li>It is used to describe the structure of Web pages using markup tags.</li>
         <h5>Markup languages use sets of markup tags to characterize text elements within a document, which gives instructions to the web browsers on how the document should appear.</h5><hr />
         
        </ul>
        
         <h3 class='get'>Getting Started with HTML</h3>
         <h6>Getting started with HTML is easy, all you need is a text editor and a basic understanding of HTML tags and attributes. HTML tags are used to mark up the content of a web page and define its structure. For example</h6> <h5><br /><b>&lt;h1&gt;</b> tag is used for headings, the <br /><b>&lt;p&gt;</b> tag is used for paragraphs, and the <br /><b>&lt;a&gt;</b> tag is used for links.</h5><hr />
        <h3 class='get'>Important HTML Tags</h3>
        <h5>There are several important HTML tags that you should be familiar with as a web developer. Here are some of the most commonly used HTML tags:</h5>
        <ul>
          <li>This tag is the root element of an HTML document and contains all the other HTML elements.</li>
          <li>This tag contains information about the document, such as the title, which is displayed in the browser's tab.</li>
          <li>This tag contains the content of the web page.</li>
          <li>These tags are used for headings, with &lg;h1&gt; being the most important heading and &lg;h6&gt; being the least important.</li>
          <li>This tag is used for paragraphs.</li>
          <li>This tag is used for links.</li>
          <li>These tags are used to create unordered lists.</li>
          <li>These tags are used to create ordered lists.</li>
          <li>This tag is used to embed images in a web page.</li>
        </ul><hr />
        <h3 class='get'>Fundamental of HTML Tags</h3>
        <h5>HTML is written in the form of HTML elements consisting of markup tags. These markup tags are the fundamental characteristic of HTML. Every markup tag is composed of a keyword, surrounded by angle brackets &lt;tagname&gt;content&lt;/tagname&gt;.</h5>
        <ul>
          <li>HTML tags normally come in pairs like &lt;p&gt; and &lt;/p&gt;</li>
          <li>The first tag in a pair is the start tag, the second tag is the end tag.</li>
          <li>The end tag is written like the start tag, but with a slash before the tag name.</li>
        </ul><hr />
        <h3 class='get'>Basic Structure of HTML</h3>
        <h5>Each HTML page consists of a set of tags or elements which are known as the building blocks of web pages. They create a hierarchy that structures the content into sections, paragraphs, headings, and other content blocks.</h5><br />
        <h5 class='get'>Text Formatting in HTML: An Introduction to Formatting Tags</h5>
         <h6>HTML provides several tags for formatting text, such as bold, italic, underline, and more. These tags can be used to apply formatting to text in order to make it stand out or to indicate different types of content.</h6>
        <table>
          <tr>
            <td>&lt;p&gt;</td>
            <td>&lt;strong&gt;	</td>
            <td>&lt;em&gt;</td>
            </tr>
            <tr>
              <td>&lt;u&gt;	</td>
              <td>&lt;sup&gt;</td>
              <td>	&lt;ins&gt;	</td>
            </tr>
            <tr>
              <td>	&lt;small&gt;</td>
              <td>&lt;br&gt;</td>
              <td>&lt;hr&gt;</td>
            </tr>
            <tr>
              <td>&lt;blockquote&gt;</td>
              <td>	&lt;q&gt;	</td>
              <td>
              &lt;pre&gt;</td>
            </tr>
            <tr>
              <td>&lt;code&gt;</td>
              <td>	
              &lt;samp&gt;</td>
              <td>     
              &lt;kbd&gt;</td>
            </tr>
   
           

          
        </table>
        <h5 class='get'>Some common text formatting tags in HTML include:</h5>
        <ul>
          <li>&lt;p&gt;: Defines a paragraph.</li>
          <li>&lt;b&gt; and &lt;strong&gt; : These tags make the text bold. The &lt;b&gt; tag is used to indicate that the text is important, while the &lt;strong&gt; tag is used to indicate that the text has strong importance.</li>
          <li>&lt;i&gt; and &lt;em&gt; : These tags make the text italic. The &lt;i&gt; tag is used to indicate that the text is in an alternate voice or tone, while the &lt;em&gt; tag is used to indicate that the text should be emphasized.</li>
          <li>&lt;u&gt; : This tag underlines the text.</li>
          <li>&lt;s&gt; and &lt;strike&gt; : These tags create a line through the text. The &lt;s&gt; tag is used to indicate that the text is no longer accurate or relevant, while the &lt;strike&gt; tag is used to indicate that the text is no longer relevant.</li>
          <li>&lt;mark&gt; : This tag highlights the text with a yellow background.</li>
          <li>&lt;sub&gt; and &lt;sup&gt; : These tags create subscript and superscript text respectively</li>
          <li>&lt;big&gt; and &lt;small&gt; : These tags increase or decrease the size of the text.</li>
          <li>&lt;del&gt;: Defines deleted text and strikes it through.</li>
          <li>&lt;ins&gt;: Defines inserted text and underlines it.</li>
          <li>&lt;br&gt;: Inserts a line break.</li>
          <li>&lt;hr&gt;: Inserts a horizontal rule.</li>
          <li>&lt;blockquote&gt;: Defines a long quotation.</li>
          <li>&lt;q&gt;: Defines a short quotation.</li>
          <li>&lt;pre&gt;: Defines preformatted text.</li>
          <li>&lt;code&gt;: Defines computer code text.</li>
          <li>&lt;samp&gt;: Defines sample output from a computer program.</li>
          <li>&lt;kbd&gt;: Defines keyboard input text.</li>
          <li>&lt;var&gt;: Defines a variable or placeholder.</li>
        </ul>
        <h6>It is important to keep in mind that these tags have semantic meaning, and it's good practice to use them accordingly. Also, it is better to use CSS to style text, instead of using these tags, as using CSS allows you to have more control over the appearance of text and make it more consistent throughout the website.</h6>
        </div>
        </div>
       
        <div class='col-lg-12 col-md-6 col-12'>
          <div class='html-text'>
       <br />
        <img src="/image/html-structure.png" alt="" width='400px' height='400px' id='html-img'/><br /><br />
        <ul>
          <li>The &lt;html&gt;&lt;/html&gt; tag is the highest level element that encloses every HTML page.</li>
          <li>The &lt;head&gt;&lt;/head&gt; tag holds meta information such as the page's title and charset.</li>
          <li>The &lt;body&gt;&lt;/body&gt; tag encloses all the content that appears on the page.</li>
        </ul><hr />
        <h3 class='get'>Conclusion</h3>
        <h5>HTML is an essential language for web development and is used to create the structure and content of websites. By mastering HTML, you will be able to create dynamic and engaging web pages that will impress your users. Whether you are just starting out or are an experienced web developer, HTML is a must-know language for anyone looking to build websites.</h5>
        <h3>HTML Headings Tags</h3>
        <h4>HTML headings are used to create headings and subheadings within a webpage. They are represented by the &lt;h1&gt; to &lt;h6&gt; tags.      </h4>
        <h4>There are 6 levels of headings in HTML:</h4>
        <ul>
          <li>h1 - used for the main heading of the webpage and is typically the largest in size</li>
          <li>h2 - the second level of headings</li>
          <li>h3 - the third level of headings</li>
          <li>h4 - the fourth level of headings</li>
          <li>h5 - the second smallest level of headings</li>
          <li>h6 - being the most smallest heading size</li>
        </ul>
        <h5>The most common attribute used in heading tags is the "id" attribute, which allows you to create an anchor link that can be used to link to a specific heading on a page. For example:</h5>
        &lt;h1 id="main-title"&gt;welcome on the board&lt;/h1&gt;
        <h4>EXAMPLE</h4>
        <h6 class='heading'>&lt;html&gt;<br />
  &lt;head&gt;<br />
    &lt;title&gt;Heading Tags&lt;/title&gt;<br />
  &lt;/head&gt;<br />
  &lt;body&gt;<br />
    &lt;h1&gt;Heading Level 1&lt;/h1&gt;<br />
    &lt;h2&gt;Heading Level 2&lt;/h2&gt;<br />
    &lt;h3&gt;Heading Level 3&lt;/h3&gt;<br />
    &lt;h4&gt;Heading Level 4&lt;/h4&gt;<br />
    &lt;h5&gt;Heading Level 5&lt;/h5&gt;<br />
    &lt;h6&gt;Heading Level 6&lt;/h6&gt;<br />
  &lt;/body&gt;<br />
&lt;/html&gt;</h6>
<h5 class='get'>Table Tags</h5>
<div class='table'>
&lt;table&gt;	&lt;tr&gt;	&lt;th&gt;	&lt;td&gt;	&lt;thead&gt;
&lt;tbody&gt;	&lt;tfoot&gt;	&lt;colgroup&gt;	&lt;col&gt;	&lt;caption&gt;&lt;/caption&gt;
</div>
<h5 class='get'>In HTML, the following tags are used to create tables:</h5>
<ul>
  <li>&lt;table&gt;: Defines a table</li>
  <li>&lt;tr&gt;: Defines a table row</li>
  <li>&lt;th&gt;: Defines a header cell in a table</li>
  <li>&lt;td&gt;:Defines a regular cell in a table</li>
  <li>&lt;head&gt;: Groups the header content in a table</li>
  <li>&lt;tbody&gt;: Groups the body content in a table</li>
  <li>&lt;tfoot&gt;: Groups the footer content in a table</li>
  <li>&lt;colgroup&gt;: Specifies a group of one or more columns in a table for formatting</li>
  <li>&lt;col&gt;: Specifies column properties for each column within a &lt;colgroup&gt; element.</li>
  <li>&lt;caption&gt;: Defines the caption for a table.</li>
</ul>
<h6>The table tag is used to create tables in HTML. It is an opening tag and must be closed with a closing table tag. The table tag is used in combination with other tags such as tr (table row), th (table header), and td (table data) to create a table.</h6>
<h6>The tr tag is used to create rows in a table, and the th and td tags are used to create cells. The th tag is used for table headers, and the td tag is used for table data. Table headers are typically used to label the columns of a table, and table data is used to populate the cells of a table.</h6>
<h6>The table tag can also be used in combination with other attributes such as border, width, and align to control the appearance of the table. The border attribute can be used to set the width of the border around the table, the width attribute can be used to set the width of the table, and the align attribute can be used to set the alignment of the table.</h6>
<h6>colspan and rowspan are HTML table attributes used to specify the number of columns or rows a table cell should span.</h6>
<ul>
  <li>colspan :is used to specify how many columns a cell should span horizontally</li>
  <li> rowspan : is used to specify how many columns a cell should span vertically</li>
  
</ul>
        </div>
        </div>
        <div class='more'>
        <a href="#top"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div><hr id='top1'/><hr id='S-css'/>
       <br /><br /><br /><br /><br /><br />
  </div>
 


</section>  
{/* section css   */}
<section id='S-css'>
<div class='container'>

  <div class='col-lg-12 col-md-6 col-12'>
  <i class="fa-brands fa-css3-alt" id='css'><h5>CSS</h5></i>
  </div>
  <div class='col-lg-12 col-md-6 col-12'>
  <iframe width="700" height="315" src="https://www.youtube.com/embed/FHkJ5H352hM?si=YcW-ZIjnJHy7kzVt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class='col-lg-12 col-md-6 col-12'>
     <div class='css-text'>
          <h4 class='get'>Cascading Style Sheets (CSS) Tutorial for Beginners</h4>
          <h5>CSS, or Cascading Style Sheets, is a styling language used to add visual style and layout to web documents written in HTML and XHTML. With CSS, web developers can separate the presentation of a web page from its content, making it easier to manage and update the appearance of a website.</h5>
          <h5>CSS works by providing a set of rules that define how HTML elements should be displayed on a web page. These rules include things like font size, color, spacing, and positioning, as well as more complex properties like animations and transitions.</h5>
          <h5>CSS can be added to an HTML document in several ways, including inline styles, embedded styles, and external style sheets. Inline styles are added directly to HTML elements using the "style" attribute, while embedded styles are placed within the "head" section of an HTML document. External style sheets are separate files that contain all of the CSS rules for a website, and are linked to from the HTML document using the "link" tag.</h5>
          <h5>CSS is an essential tool for web development, allowing designers and developers to create visually appealing and user-friendly websites. It is constantly evolving, with new features and capabilities being added with each new version, making it a powerful tool for creating modern, responsive web designs</h5>
          <ul>
            <li>CSS stands for Cascading Style Sheet</li>
            <li>CSS defines how HTML elements are to be displayed</li>
            <li>CSS saves a lot of work</li>
            <li>External Style Sheets are stored in CSS file</li>
          </ul>
          <h5>Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page.</h5>
          <h4 class='get'>CSS Syntax</h4>
          <h6>A CSS rule set consists of a selector and a declaration block.</h6>
          <h6>A CSS declaration always ends with a semicolon, and declaration groups are surrounded by curly braces.</h6>
          <img src="/image/syntax.png" alt="" id='syntax'/>
          <br /><br />
          <iframe width="700" height="315" src="https://www.youtube.com/embed/GqVl3X_YMUQ?si=kPOMNZrm_BU9piDy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <h5 class='get'>Inline Styling in CSS: Applying Styles Directly in HTML</h5>
     <h6>Inline styles are used to apply the unique style rules to an element, by putting the CSS rules directly into the start tag. It can be attached to an element using the style attribute. The style attribute includes a series of CSS property and value pairs</h6>
     <h6>In CSS, inline styling refers to the method of applying styles directly to individual HTML elements using the style attribute. It allows you to define CSS properties and their values directly within the HTML tags, without the need for an external CSS file or internal style sheet. Inline styles are specified within the opening tag of an element using the following syntax:</h6>
     <h6>&lt;tagname style="property: value;"&gt;</h6>
     <h6>Here's an example to Illustrate Inline styling:</h6>
     <h6>	&lt;p style="color:red; text-align:center"&gt;.....&lt;/p&gt;</h6>
     <h6>Some key points to keep in mind regarding inline styles:

</h6>
<ul>
  <li>Inline styles are applied directly to individual elements, allowing for specific element-level customization.</li>
  <li>Inline styles take precedence over external stylesheets and internal styles.</li>
  <li>Inline styles are specified using the style attribute within the opening tag of an HTML element.</li>
  <li>Multiple CSS properties can be defined within the style attribute by separating them with a semicolon.</li>

</ul>
<h5 class='get'>Type of units in CSS</h5>
<h5>Absolute units</h5>
<ul>
  <li>centimeter</li>
  <li>millimeter</li>
  <li>inches</li>
  <li>pixel</li>
  <li>point</li>
  <li>picas</li>
</ul>
     </div>
  </div>

{/* second slide */}

<div class='col-lg-12 col-md-6 col-12'>
  <div class='css-text'>
   <h5 class='get'>Story about CSS</h5>
   <h6>The story of CSS begins in the early days of the web, when websites were simple and consisted mostly of plain text and simple images. As web designers and developers began to experiment with more complex layouts and designs, they quickly realized the limitations of HTML, the markup language used to structure web documents</h6>
   <h6>
   HTML provided only basic styling options, such as bold and italic text, and there was no easy way to control the layout and positioning of page elements. To address this issue, the first version of CSS was introduced in 1996 by Hakon Wium Lie, a researcher at CERN, the European Organization for Nuclear Research.</h6>
   <h6>The original CSS specification, known as CSS1, was designed to provide web developers with a way to separate the presentation of a web page from its content. This separation made it easier to manage and update the appearance of a website, and allowed designers to create more complex layouts and designs using a set of standard styling rules.

</h6>
<h5 class='get'>Understanding CSS Syntax: The Building Blocks of Style</h5>
<h6>CSS syntax is the set of rules and conventions that dictate how CSS code is written and structured. It is essential for creating effective and maintainable stylesheets.</h6>
<ul>
  <li>Selector</li>A selector is an HTML tag at which a style will be applied.
  <li>Property</li>A property is a type of attribute of HTML tag. Put simply, all the HTML attributes are converted into CSS properties.
  <li>Value</li>Values are assigned to properties.
</ul>
<h4 class='get'>Mastering CSS Selectors: A Comprehensive Guide to Targeting HTML Elements</h4>
<h6>CSS selectors are the heart of the Cascading Style Sheets language. Selectors enable web developers to target specific HTML elements on a web page and apply styling to them. By using selectors, developers can create a visual style and layout for their web page, which is separate from the HTML content.</h6>
<h6>There are several types of selectors that can be used in CSS. The simplest selector is the type selector, which targets all instances of a particular HTML element on a page.</h6>
<h6>Universal selectors target all elements on a page, while attribute selectors target elements with a specific attribute or attribute value.</h6>
<h6>In addition to these basic selectors, CSS also provides more advanced selectors, such as pseudo-classes and pseudo-elements. Pseudo-classes target elements based on their state, such as when they are hovered over or clicked. Pseudo-elements, on the other hand, allow developers to style specific parts of an element, such as the first letter or line of a paragraph.</h6>
<ul>
  <li>Element( tagname)</li>
  <li>ID (#)</li>
  <li>Class (.)</li>
</ul>
<h5 class='get'>Id Selector</h5>
<h6>
ID selectors in CSS are used to target a specific HTML element on a web page based on its unique ID attribute. An ID attribute is a unique identifier assigned to an HTML element, and it is used to distinguish that element from other elements on the same page.</h6>
<h6>To select an element using an ID selector, you need to specify the ID name preceded by a hash (#) symbol in the CSS rule.</h6>
<h6>ID selectors have a higher specificity value than element selectors, meaning that they take precedence over styles applied using element selectors. This makes ID selectors useful for targeting specific elements and overriding global styles.</h6>
<ul>
  <li>The id selector uses the id attribute of an HTML element to select a specific element.</li>
  <li>An id should be unique within a page, so the id selector is used if you want to select a single, unique element.</li>
  <li>To select an element with a specific id, write a # character, followed by the id of the element.</li>


</ul>
<h6>It's important to note that ID attributes should be unique on a web page, meaning that they should only be used once per page. Using the same ID attribute for multiple elements can lead to conflicts and unpredictable behavior.

</h6>
<h6>In general, it's best to use ID selectors sparingly and only for elements that require unique styling or functionality. Overusing ID selectors can lead to overly specific and complex stylesheets, which can be difficult to manage and maintain over time.</h6>
   <h5 class='get'>Class Selector</h5>
   <h6>Class selectors in CSS are used to target specific HTML elements based on their class attribute. A class attribute is a way to group similar HTML elements together and apply styles to them collectively.</h6>
   <h6>To select an element using a class selector, you need to specify the class name preceded by a dot (.) symbol in the CSS rule.</h6>
   <ul>
    <li>The class selector selects elements with a specific class attribute.
</li>
    <li>    To select elements with a specific class, write a period(.) character, followed by the name of the class.</li>
   </ul>
   <h6>One of the benefits of using class selectors is that they can be applied to multiple elements on a page, allowing you to create consistent styles for similar elements. You can also combine class selectors with other selectors, such as element selectors or ID selectors, to create more specific styles for individual elements.</h6>
   <h5 class='get'>Universal Selector</h5>
   <h6>
   The Universal Selector in CSS is a selector that matches all elements on a web page. It is denoted by an asterisk (*) and can be used to apply styles to all HTML elements.</h6>
   <h6>Rather than selecting elements of a specific type, the universal selector quite simply matches the name of any element type.</h6>
  <h6>The Universal Selector can also be combined with other selectors to create more specific styles</h6>
  <h6>While the Universal Selector can be a useful tool for applying styles to multiple elements at once, it can also have performance implications if used excessively. Because it matches all elements on a page, it can slow down the rendering of large web pages and cause performance issues on slower devices.</h6>
  <h6>In general, it's best to use the Universal Selector sparingly and only when necessary. Whenever possible, it's better to use more specific selectors to target individual elements or groups of elements. This can help improve the performance and maintainability of your CSS code.</h6>
  <h5 class='get'>Descendant Selector</h5>
  <h6>The Descendant Selector in CSS is a selector that matches an element that is a descendant of another element. It is denoted by a space between two or more selectors, where the first selector represents the ancestor element and the second selector represents the descendant element.

Suppose you want to apply a style rule to a particular element only when it lies inside a particular element.</h6>

<h5 id='css-head'>HTML Iframe Syntax</h5>
<h6>The HTML &lt;iframe&gt; tag specifies an inline frame.</h6>
<h6>An inline frame is used to embed another document within the current HTML document.</h6>
<h5 id='css-head'>Syntax</h5>
<h6>&lt;iframe src="url" title="description"&gt;&lt;/iframe&gt;</h6>
   </div>
</div>

</div>  

<div class='more'>
        <a href="#top1"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div> <hr id='up' /><hr id='S-js'/>
       <br /><br /><br /><br /><br /><br />
</section> 
{/* section js */}
<section id='S-js'>
  
      <div class='container'>
        
            <div class='col-lg-12 col-md-6 col-12'>
            <i class="fa-brands fa-js" id='js'><h5>JAVA SCRIPT</h5></i>
            </div>
            <div class='col-lg-12 col-md-6 col-12'>
            <iframe width="700" height="315" src="https://www.youtube.com/embed/dBUBYz75gdk?si=s2Yz2ejGVA6d9sZt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
    <div class='col-lg-12 col-md-6 col-12'>
       <div class='js-text'>
          <h4 id='css-head'>Javascript Tutorial for Beginners</h4>
          <h6>JavaScript is a dynamic programming language that's used for web development,It is used both on the client-side and server-side that allows you to make web pages interactive.Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.It is an interpreted programming language with object-oriented capabilities</h6>
          <h6>JavaScript was created in May 1995 in 10 days, by Brendan Eich. Eich worked at Netscape and implemented JavaScript for their web browser, Netscape Navigator.Initially, JavaScript’s name changed several times:</h6>
          <ul>
            <li>Its code name was Mocha.</li>
            <li>In the Netscape Navigator 2.0 betas (September 1995), it was called LiveScript.</li>
            <li>In Netscape Navigator 2.0 beta 3 (December 1995), it got its final name, JavaScript.</li>
          </ul>
          <h4 id='css-head'>Why Javascript..?</h4>
          <ul>
            <li>All popular web browsers support JavaScript as they provide built-in execution environments.</li>
            <li>JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.</li>
            <li>JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).</li>
            <li>JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.</li>
            <li>It is a light-weighted and interpreted language.</li>
          </ul>
          <table class="table table-striped table-hover">
            <table>
              <tr>
              
                <th>Date of Published</th>
                <th>Name</th>
                <th>	Description</th>
              </tr>
              <tr>
               	
                <td>June 1997</td>
                <td>ECMAScript 1</td>
                <td>	First version of the standard</td>
              </tr>
              <tr>
             
                <td>June 1998</td>
                <td>ECMAScript 2</td>
                <td>Small update to keep ECMA-262 in sync with the ISO standard.</td>
              </tr>
              <tr>
               
                <td>December 1999</td>
                <td>ECMAScript 3</td>
                <td>	Adds many core features – regular expressions, better string handling, new control statements [do-while, switch], try/catch exception handling</td>
              </tr>
              <tr>
            
                <td>June 2003</td>
                <td>ECMAScript 4</td>
                <td>(abandoned in July 2008): Would have been a massive upgrade (with static typing, modules, namespaces, and more), but ended up being too ambitious and dividing the language’s stewards.</td>
              </tr>
              <tr>
               
                <td>December 2009</td>
                <td>ECMAScript 5</td>
                <td>Brought minor improvements – a few standard library features and strict mode.</td>
              </tr>
              <tr>
               
                <td>June 2011</td>
                <td>ECMAScript 5.1</td>
                <td>	Another small update to keep Ecma and ISO standards in sync</td>
              </tr>
              <tr>
              
                <td>June 2015</td>
                <td>ECMAScript 2015 (ES2015)</td>
                <td>A large update that fulfilled many of the promises of ECMAScript 4. This version is the first one whose official name – ECMAScript 2015</td>
              </tr>
              <tr>
            
                <td>	June 2016</td>
                <td>ECMAScript 2016 (ES2016)</td>
                <td>	First yearly release. The shorter release life cycle resulted in fewer new features compared to the large ES6.</td>
              </tr>
              <tr>
               
                <td>June 2017</td>
                <td>ECMAScript 2017 (ES2017)</td>
                <td>Second yearly release.</td>
              </tr>
              <tr>
              
                <td>	June 2018</td>
                <td>ECMAScript 2018 (ES2018)</td>
                <td>New features include the spread operator and rest parameters (...) for object literals, asynchronous iteration, Promise.prototype.finally and additions to RegExp.</td>
              </tr>
              <tr>
               
                <td>June 2019</td>
                <td>	ECMAScript 2019 (ES2019)	</td>
                <td>Added features include, but are not limited to, Array.prototype.flat, Array.prototype.flatMap, changes to Array.sort and Object.fromEntries</td>
              </tr>
              <tr>
              
                <td>June 2020</td>
                <td>ECMAScript 2020 (ES2020)</td>
                <td>In addition to new functions, this version introduces a BigInt primitive type for arbitrary-sized integers, the nullish coalescing operator, and the globalThis object.</td>
              </tr>
              <tr>
               
                <td>June 2021	</td>
                <td>ECMAScript 2021 (ES2021)	</td>
                <td>This version introduces the replaceAll method for strings,Promise.any,AggregateError,logical assignment operators (??=, &&=, ||=), WeakRef,FinalizationRegistry,separators for numeric literals,Array.prototype.sort</td>
              </tr>
            </table>
            </table>
            <h5 id='css-head'>Getting Started with JavaScript Programming: A Beginner's Guide</h5>
            <h6>In this simple program that prints "Tutor Joe's" on the screen. Since it's a very simple program, this program is often used to introduce a new programming language to beginners.

In JavaScript, you can use the alert() function to display an alert box with a message to the user. The basic syntax for the alert() function is as follows:</h6>
<h6>Source Code</h6>
&lt;!DOCTYPE html&gt;<br />
&lt;html lang="en"&gt;<br />
&lt;head&gt;<br />
  &lt;meta charset="UTF-8"&gt;<br />
  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br />
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br />
  &lt;title&gt;Tutor Joes&lt;/title&gt;<br />
&lt;/head&gt;<br />
&lt;body&gt;<br />
	&lt;script&gt;<br />
		alert("Tutor Joes");<br />
	&lt;/script&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
<h6>This will display an alert box with the message "Tutor Joes" and an OK button that the user must click to close the alert box.You can also use the prompt() function to display an input box and get input from the user.</h6>
            </div>
      </div>
    {/* second slide */}
        <div class='col-lg-12 col-md-6 col-12'>
          <div class='js-text'>
        <h5 id='css-head'>Getting Started with JavaScript Programming: A Beginner's Guide</h5>
        <h6>In this simple program that prints "Tutor Joe's" on the screen. Since it's a very simple program, this program is often used to introduce a new programming language to beginners.</h6>
        <h6>In JavaScript, you can use the alert() function to display an alert box with a message to the user. The basic syntax for the alert() function is as follows:</h6>
        <h6>Source Code</h6>
        &lt;!DOCTYPE html&gt;<br />
&lt;html lang="en"&gt;<br />
&lt;head&gt;<br />
  &lt;meta charset="UTF-8"&gt;<br />
  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br />
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br />
  &lt;title&gt;Tutor Joes&lt;/title&gt;<br />
&lt;/head&gt;<br />
&lt;body&gt;<br />
	&lt;script&gt;<br />
		alert("Tutor Joes");<br />
	&lt;/script&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
<h6>This will display an alert box with the message "Tutor Joes" and an OK button that the user must click to close the alert box.You can also use the prompt() function to display an input box and get input from the user.</h6>
<h5 id='css-head'>Mastering the JavaScript Console: Tips and Tricks for Debugging and Development</h5>
<h6>In javascript, the console is an object which provides access to the browser debugging console. We can open a console in web browser. The console object provides us with several different methods :</h6>
<ul>
  <li>log()</li>
  <li>error()</li>
  <li>warn()</li>
  <li>clear()</li>
  <li>time() and timeEnd() </li>
  <li>table()</li>
  <li>count()</li>
  <li>custom console logs</li>
 
</ul>
<h6>The JavaScript console is a built-in object in the browser that provides access to the browser's developer console. The developer console is a tool that allows developers to view and debug their code, as well as run JavaScript commands directly in the browser. The console object provides a number of methods for logging information to the console, such as console.log(), console.info(), console.warn(), and console.error(). These methods can be used to output data to the console, which can be useful for debugging and understanding the behavior of a JavaScript application. Additionally, the console object also provides methods for measuring performance, such as console.time() and console.timeEnd(), and for grouping and collapsing output in the console using console.group() and console.groupEnd().</h6>
<h5 id='css-head'>Understanding the Differences Between var, let, and const in JavaScript</h5>
<h6>One of the features that came with ES6 is the addition of let and const, which can be used for variable declaration.</h6>
<ul>
  <li>The var keyword is used in all JavaScript code from 1995 to 2015.</li>
  <li>The let and const keywords were added to JavaScript in 2015.</li>
  <li>If you want your code to run in older browser, you must use var.</li>
</ul>
<h6>var <br />

Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on. <br />

Use the reserved keyword var to declare a variable in JavaScript.</h6>
<h6>let
  <ul>
    <li>let cannot be Redeclared.</li>
    <li>let must be Declared before use.</li>
    <li>let have Block Scope.</li>
  </ul>
</h6>
<h6>const
  <ul>
    <li>const cannot be Redeclared.</li>
    <li>const cannot be Reassigned.</li>
    <li>const have Block Scope.</li>
  </ul>
</h6>
<h5 id='css-head'>Exploring the Various Data Types in JavaScript: From Primitives to Objects</h5>
<h6>Data types in JavaScript describe the different types or kinds of data that you will be working with and storing in variables. It's important that you learn each of these data types because otherwise data can get stored in an improper format which will result in issues in your code later on.n JavaScript, data types are used to classify different types of data and define 
  the type of values that a variable can hold. The main data types in JavaScript include:</h6>
  <h6>Primitive data types: These are the basic data types that include numbers, strings, booleans, and special values like null and undefined.</h6>
  <table>
    <th>
    Data Type</th>
    <th>	Description</th>
    <tr>
      <td>String</td>
      <td>	A string is a collection of alphanumeric characters.</td>
    </tr>
    <tr>
      <td>Number</td>
      <td>	Numbers are for numbers. We can't put a letter on here.</td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td>Booleans have two values. True and false.</td>
    </tr>
    <tr>
      <td>Null and Undefined</td>
      <td>null and undefined stand for empty. That means they have no value assigned to them.</td>
    </tr>
    <tr>
      <td>Symbols</td>
      <td>	Symbol is a primitive data type of JavaScript.It's a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.</td>
    </tr>
    <tr>
      <td>Array</td>
      <td>An array is a type of object used for storing multiple values in single variable.</td>
    </tr>
    <tr>
      <td>Object Literals</td>
      <td>	It is a comma-separated list of name-value pairs wrapped in curly braces.</td>
    </tr>
    <tr>
      <td>Date</td>
      <td>	JavaScript does not have a date data type. However, you can use the Date object and its methods to work with dates and times in your applications.</td>
    </tr>
  </table>
        </div>
        </div>
    
  </div>
  
  <div class='more'>
        <a href="#up"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div> <hr id='upboostrap' /><hr id='S-boostrap'/><br /><br /><br /><br /><br /><br />
</section> 
{/* section boostrap */}
<section id='S-boostrap'>
  <div class='container'>
    
      <div class='col-lg-12 col-md-6 col-12'>
      <i class="fa-brands fa-bootstrap" id='boostrap'><h5>BOOSTRAP</h5></i>
      </div>
       <div class='col-lg-12 col-md-6 col-12'>
       <iframe width="700" height="315" src="https://www.youtube.com/embed/9wYsCgkgF_s?si=_ydZdQa3j_KR_y1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>
      
       <div class='col-lg-12 col-md-6 col-12'>
        <div class='boostrap-text'>
        <h5 id='css-head'>What is Bootstrap ?</h5>
        <h6>Bootstrap 5 is the fifth and latest version of the popular front-end framework called Bootstrap, which is used for building responsive and mobile-first web applications. Bootstrap is an open-source toolkit developed by Twitter, and it provides a collection of CSS and JavaScript components that can be easily integrated into web projects to streamline the development process and create modern, visually appealing user interfaces.</h6>
        <h6>Bootstrap 5 comes with several new features and improvements compared to its previous versions, including:</h6>
        <ul>
          <li>Smaller file size: Bootstrap 5 has been optimized for performance, resulting in a smaller file size compared to Bootstrap 4, which makes web pages load faster.</li>
          <li>CSS custom properties: Bootstrap 5 uses CSS custom properties (also known as CSS variables) extensively, which allows for more flexibility and customization in terms of styling.</li>
          <li>New utility classes: Bootstrap 5 introduces new utility classes for spacing, typography, and alignment, making it easier to apply common styles to elements without having to write custom CSS.</li>
          <li>Improved grid system: The grid system in Bootstrap 5 has been enhanced with new features such as vertical alignment and equal-width columns, providing more flexibility in designing responsive layouts.</li>
          <li>Enhanced documentation: Bootstrap 5 comes with updated documentation that is more comprehensive and user-friendly, making it easier for developers to find and use the components they need.</li>
          <li>Dropped jQuery dependency: Bootstrap 5 has removed the dependency on jQuery, a popular JavaScript library, and now relies solely on vanilla JavaScript, making it more lightweight and reducing potential conflicts with other JavaScript libraries.</li>
          <li>New components: Bootstrap 5 introduces new components such as accordion, off-canvas sidebar, floating labels for form inputs, and more, allowing developers to create richer and more interactive web interfaces.</li>
        </ul>
        <h5 id='css-head'>Advantages of Bootstrap</h5>
        <ul>
          <li>Bootstrap is the most popular HTML, CSS, and JavaScript framework</li>
          <li>Bootstrap is completely free to download and use!</li>
          <li>Easy and Highly Customizable</li>
          <li>Very good Responsive Grid System</li>
          <li>Various built-in Components</li>
          <li>Bootstrap Can be Extended in various projects</li>
        </ul>
        <h5 id='css-head'>Previous Bootstrap Version</h5>
        <table class="table table-striped table-hover">
        <table>
          <tr>
            <th>Version</th>
            <th>	Release Date</th>
          </tr>
          <tr>
            <td>Bootstrap 2	</td>
            <td>August 19 2013</td>
          </tr>
          <tr>
            <td>Bootstrap 3	</td>
            <td>	January 31 2012</td>
          </tr>
          <tr>
            <td>Bootstrap 4	</td>
            <td>October 29 2014</td>
          </tr>
          <tr>
            <td>Bootstrap 4	</td>
            <td>	May 5 2021</td>
          </tr>
        </table>
        </table>
        <h5 id='css-head'>What’s new in Bootstrap 5.2X</h5>
        <ul>
          <li>jQuery Removed</li>
          <li>Switched to Vanilla JavaScript</li>
          <li>Custom Font Sizes</li>
          <li>Dropped Support on IE 10, IE 11</li>
          <li>Change in Gutter Width (distance between each column in bootstrap grid).</li>
          <li>New Icon Library</li>
          <li>New Class Updates</li>
        </ul>
        <h5 id='css-head'>What you will need?</h5>
        <ul>
          <li>HTML & CSS</li>
          <li>Window PC / Linux / MAC</li>
          <li>Chrome, Firefox, Opera, Edge or Safari etc.</li>
        </ul>
       </div>
       </div>
      {/* second slide */}
      <div class='col-lg-12 col-md-6 col-12'>
      <div class='boostrap-text'>
       <h5 id='css-head'>Code Editor</h5>
       <ul>
        <li>Notepad++</li>
        <li>Visual Studio Code Editor (Recommended)</li>
        <li>Brackets</li>
        <li>Sublime Text</li>
       </ul>
       <h5 id='css-head'>Compiled CSS and JS</h5>
       <h6>Download ready-to-use compiled code for Bootstrap v5.2 to easily to add into your project, which includes</h6>
       <ul>
        <li>Compiled and minified CSS bundles</li>
        <li>  Compiled and minified JavaScript files</li>
       </ul>
       <h5 id='css-head'>What is CDN?</h5>
       <h6>A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.</h6>
       <h5>CDN links for bootstrap 5.2</h5>
      
           <h4>boostrap css&js</h4> <a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/">link</a>

        
       <h5 id='css-head'>Install Bootstrap Using NPM</h5>
       <h6>Install Bootstrap in your Node.js powered apps with the npm package: </h6>

<h5 id='boos-link'>npm install bootstrap@5.3.2</h5>
<h5 class='css-head'>Using Bootstrap</h5>
<h6>If you can use download Bootstrap 5 from the official Bootstrap website, Once you have downloaded the Bootstrap 5 files, you need to include them in your project. Extract the downloaded file if you have downloaded the pre-compiled files. You will find CSS and JavaScript files that you need to include in your HTML file.</h6>
<h6>For example, you can include the CSS file in the &lt;head&gt; section of your HTML file like this:</h6>
<h5 id='link'>&lt;link href="path/to/bootstrap.min.css" rel="stylesheet"&gt;</h5>
<h5>And include the JavaScript file at the end of your section like this:</h5>
<h5 id='script'>&lt;script src="path/to/bootstrap.min.js"&gt;&lt;/script&gt;</h5>
<h6>The files included and components used in your HTML markup, you have successfully installed Bootstrap 5 in your project and can start building responsive web applications using its features and components.</h6>
<h5 id='css-head'>Responsive Web Design Breakpoints with Bootstrap 5</h5>
<h6>Bootstrap 5 includes a responsive grid system that utilizes breakpoints to create responsive web designs. Breakpoints are specific screen widths at which the layout and appearance of a website or web application can change to adapt to different screen sizes, such as those of desktops, tablets, and smartphones.</h6>
<iframe width="700" height="315" src="https://www.youtube.com/embed/zuYwpGQzDzM?si=v1H06ZMCy5Rp6ucd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
    </div>
   
   <div class='more'>
        <a href="#upboostrap"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div> <hr id='S-mongod' /><hr id='upmongod' /><br /><br /><br /><br /><br /><br />
</section> 
{/* section mongod */}
<section id='S-mongod'>
  <div class='container'>
    
      <div class='col-lg-12 col-md-6 col-12'>
      <i class="fa-brands fa-envira" id='mongod'><h5>MONGOD</h5></i>
      </div>
      <div class='col-lg-12 col-md-6 col-12'>
      <iframe width="700" height="315" src="https://www.youtube.com/embed/o0R__wQIKvg?si=08LV__beay4Li4_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class='col-lg-12 col-md-6 col-12'>
        <div class='mongod-text'>
           <h4>MongoDB Tutorial for Beginners</h4>
           <h5 id='css-head'>What is MongoDb?</h5>
           <h6>MongoDB is a popular open-source, NoSQL database that stores data in a document-oriented format. Unlike traditional relational databases, which store data in tables, MongoDB stores data as JSON-like documents, making it more flexible and scalable. It was developed by MongoDB Inc. and first released in 2009.</h6>
           <h6>MongoDB was created to address the need for a database system that could handle the growing volume of unstructured data being generated by modern web and mobile applications. It was designed to be a high-performance, horizontally scalable database system that could be used for a wide range of applications.</h6>
           <h6>The name "MongoDB" is derived from the word "humongous," which reflects the scalability and flexibility of the database.</h6>
           <h6>Since its release, MongoDB has become one of the most popular NoSQL databases in the world, with a large and active community of developers and users. It is used by companies of all sizes, from startups to large enterprises, and is particularly well-suited for applications that require high performance, scalability, and flexibility.</h6>
           <h6>MongoDB has also evolved over time to include a wide range of features and capabilities, including advanced querying, indexing, and aggregation capabilities, as well as support for geospatial data, full-text search, and graph processing. It also provides enterprise-level security and monitoring features, making it suitable for use in mission-critical applications.</h6>
           <h6>MongoDB is used in a wide variety of applications and industries, including:</h6>
           <ul>
            <li>Web and mobile applications: MongoDB is often used as the primary database for web and mobile applications, where it provides high performance and scalability, as well as support for flexible data models.</li>
            <li>E-commerce: MongoDB is used by many e-commerce sites to store product catalogs, customer data, and order information, as well as to provide real-time analytics and personalized recommendations.</li>
            <li>Social networking: MongoDB is used by social networking sites to store user profiles, activity feeds, and social graphs, as well as to provide real-time analytics and recommendations.</li>
            <li>Gaming: MongoDB is used in the gaming industry to store user data, game progress, and other game-related information, as well as to provide real-time analytics and recommendations.</li>
            <li>Financial services: MongoDB is used in the financial services industry to store and analyze large volumes of data, such as transaction data, customer data, and market data.</li>
            <li>Healthcare: MongoDB is used in the healthcare industry to store and manage patient data, medical records, and other healthcare-related information, as well as to provide real-time analytics and insights.</li>
            <li>Government: MongoDB is used by many government agencies to store and manage large volumes of data, such as census data, weather data, and traffic data, as well as to provide real-time analytics and insights.</li>
           </ul>
           <h6>Overall, MongoDB is a versatile and flexible database system that can be used in a wide range of applications and industries, where it provides high performance, scalability, and flexibility.</h6>
           <h5 id='css-head'>How MongoDB Works</h5>
           <img src="/image/MongoDB-chart1.jpg" alt="no image" class='img-fluid' />
           <h6>MongoDB is a document-oriented, NoSQL database that stores data in a JSON-like format, which is often referred to as BSON (Binary JSON). Unlike traditional relational databases, MongoDB does not use a fixed schema or table structure, but rather stores data in flexible and dynamic documents.</h6>
        </div>
      </div>
       {/* second slide */}
       <div class='col-lg-12 col-md-6 col-12'>
        <div class='mongod-text'>
                       <br />
                       <h6><b>Database :</b>
             In MongoDB, a database is a container for collections. It is where all the data is stored. You can think of a database as a namespace for collections. You can create as many databases as you need, and each database can have one or more collections.</h6>
             
             <h6><b>Collections :</b>
             A collection in MongoDB is a group of related documents. It is similar to a table in a relational database, but without a fixed schema. You can add or remove fields to a collection at any time, without affecting other documents in the collection. A collection can have one or more indexes, which can be used to optimize query performance.</h6>
             
             <h6><b>Documents :</b>
             A document in MongoDB is a JSON-like data structure that represents a single instance of data. It is similar to a row in a relational database, but with a more flexible and dynamic structure. A document can contain any number of fields, which can be of different data types, and can have nested structures.</h6>
             <img src="/image/mongo_works.png" alt="" class='img-fluid'/>
             <h6>Documents in a collection do not have to follow a fixed schema, allowing for more flexibility in data modeling. For example, one document in a collection could have additional fields compared to other documents. This schemaless approach is one of the key features of MongoDB.</h6>
             <h6>To summarize, MongoDB stores data in a JSON-like format, with a flexible and dynamic structure, without a fixed schema. Data is organized into databases, which contain collections of related documents. This document-oriented approach offers greater flexibility and scalability than traditional relational databases, making it popular for web and mobile applications that require high performance and scalability.</h6>
             <h5 id='css-head'>The Powerful Features of MongoDB</h5>
             <h6>Aggregation is a powerful feature in MongoDB that allows you to process and analyze data across multiple documents in a collection. It enables you to perform complex data manipulations, transformations, and calculations on large datasets</h6>
               <img src="/image/download.png" alt="" class='img-fluid'/> 
               <h6>MongoDB is a schema-less database, which means that it does not require a pre-defined schema or structure for the data. Unlike traditional relational databases, where data is stored in tables with pre-defined columns and relationships between tables, MongoDB stores data in flexible and dynamic documents.</h6>     
                     </div>
                     </div>

    </div>
  
    <div class='more'>
        <a href="#upmongod"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div> <hr id='upreact'/><hr id='S-react' /><br /><br /><br /><br /><br /><br />
</section>
{/* section react */}
<section id='S-react'>
  
  <div class='container'>
    
      <div class='col-lg-12 col-md-6 col-12'>
      <i class="fa-brands fa-react" id='react'><h5>REACT</h5></i>
      </div>
      <div class='col-lg-12 col-md-6 col-12'>
      <iframe width="700" height="315" src="https://www.youtube.com/embed/aHE2sxPrfoc?si=ZIw7_AL4dbC9yHCd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      
      <div class='col-lg-12 col-md-6 col-12'>
        <div class="react-text">
        <h5 id='css-head'>Introduction</h5>
        <h6>In the world of web development, React.js has emerged as a powerful and popular JavaScript library for building user interfaces. Developed by Facebook, React.js has gained widespread adoption due to its efficiency, flexibility, and component-based architecture. If you're new to React.js or looking to enhance your skills, this guide will provide you with a detailed overview and practical insights to help you master React.js.</h6>
        <h5 id='css-head'>What is React.js?</h5>
        <h6>React.js is a JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components, which can be composed together to build complex user interfaces efficiently. React.js uses a virtual DOM (Document Object Model) to optimize performance by minimizing the number of updates to the actual DOM, resulting in faster rendering and a smoother user experience.</h6>
        <h5 id='css-head'>Key Features of React.js</h5>
        <ul>
          <li><b>Component-Based Architecture : </b>React.js follows a component-based architecture, where UIs are divided into reusable components. This modular approach makes it easier to manage and maintain large-scale applications.</li>
          <li>
          <b>Virtual DOM : </b>React.js utilizes a virtual DOM to represent the UI in memory. When changes occur, React.js calculates the most efficient way to update the actual DOM, resulting in better performance.</li>
          <li><b>JSX : </b>JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to create and manipulate React elements.</li>
          <li><b>One-Way Data Binding :</b> React.js enforces a unidirectional data flow, where data flows from parent components to child components. This ensures predictable behavior and easier debugging.</li>
          <li><b>Declarative Syntax :</b> React.js promotes a declarative programming style, where developers describe what the UI should look like based on the current state, rather than imperatively defining how to achieve it.</li>
        </ul>
       <h5 id='css-head'>React Hooks</h5>
       <ul>
        <li>useState</li><br />
        <li>useCallback</li><br />
        <li>useEffect</li>
        <br />
        <li>useMemo</li><br />
        <li>Effect Hooks</li>
        <br />
        <li>Other Hooks</li><br />
        <li>State Hooks</li><br />
        <li>useContext</li><br />
        <li>useReducer</li><br />
       </ul>
      </div>
      </div>
      {/* second slide */}
      <div class='col-lg-12 col-md-6 col-12'>
        <div class='react-text'>
          <br />
       <h6>Let’s create a React app using Vite, a build tool that aims to provide a faster and leaner development experience for modern web projects. Here are the steps:</h6>
       <h6>Step 1 : Install Node.js: If you haven’t already, make sure you have Node.js installed. You can download it from the official website.</h6>
       <h6>Step 2 : Open Visual Studio Code and go to terminal. Scaffold Your First Vite Project: Open your terminal and run the following command to create a new React app with Vite:</h6>
       <b>npm create vite@latest hello-world.</b>
       <h5>Replace hello-world with the desired name for your project. This command will generate a new React app with all the necessary configuration and dependencies set up for you.</h5>
       <h6>Step 3 : Select a framework: select the React framework here using the downward arrow key.</h6>
       <h6>Step 4 : Select Variant: choose any variant of your choice using the downward arrow key, i.e: choose JavaScript</h6>
       <h6>Step 5 : Now, switch to hello-world directory and Install Dependencies</h6>
       <h6>cd hello-world <br />
npm install.
</h6>
<h6>Step 6 : Start Server, make sure check your port no on the terminal it may be different for you system.</h6>
<h5 id='css-head'>Project Structure:</h5>
<h6>Once you’ve created your project, you’ll find the following structure</h6>
<img src="/image/structure.jpg" alt="" class='img-fluid'/>
      </div>
      </div>

    </div>
  <div class='more'>
        <a href="#upreact"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div> <hr id='upnode' /><hr id='S-nodejs'/><br /><br /><br /><br /><br /><br />
  </section>  
{/* section nodejs */}
<section id='S-nodejs'>
        <div class='container'>
          
            <div class='col-lg-12 col-md-6 col-12'>
            <i class="fa-brands fa-node-js" id='node'><h5>NODE</h5></i>
            </div>
            <div class='col-lg-12 col-md-6 col-12'>
            <iframe width="700" height="315" src="https://www.youtube.com/embed/hiNqFhkyLgU?si=i6u3CKpFmqtH92jn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class='col-lg-12 col-md-6 col-12'>
              <div class='node-text'>
                <h5 id='css-head'>WHAT IS NODE JS ?</h5>
                <ul>
                  <li>Node.js is a runtime environment for executing JavaScript code outside of a web browser.</li>
                  <li>Node.js also provides a set of built-in modules for working with the file system, networking, cryptography, and other system resources. These modules can be used to build a wide range of applications, from web servers and APIs to command-line tools and desktop applications.</li>

                  <li>It is built on top of the Chrome V8 JavaScript engine, which is also used in the Chrome browser. The V8 engine compiles JavaScript code to native machine code for fast execution. Which was developed by GOOGLE</li>
                  <li>Libuv is a cross-platform library that provides an event loop, asynchronous I/O operations, and other low-level utilities for building network and file system applications. It was originally developed as part of the Node.js project and is now used by many other projects, including the Rust programming language and the Chromium browser.</li>
                </ul>
                <h5 id='css-head'>Features of Node JS</h5>
                <ul>
                  <li>Asynchronous, event-driven I/O model: Node.js uses an event-driven, non-blocking I/O model, which means that it can handle many concurrent connections without blocking the execution of other code. This makes Node.js well-suited for building scalable network applications.</li>
                  <li>Server-side JavaScript: Node.js allows developers to write server-side code in JavaScript, which can make it easier to write and maintain code for both the client and server sides of web applications.</li>
                  <li>Fast execution: Node.js is built on top of the V8 JavaScript engine, which is also used in the Chrome browser. This makes Node.js fast and efficient, with the ability to handle large amounts of I/O and computation.</li>
                  <li>Modular architecture: Node.js has a modular architecture, with a large and active ecosystem of third-party modules that can be installed using the npm package manager. This makes it easy to add new functionality to Node.js applications.</li>
                  <li>Cross-platform: Node.js is cross-platform, which means that it can run on a wide range of operating systems, including Windows, macOS, and Linux.</li>
                  <li>Built-in modules: Node.js provides a set of built-in modules for working with the file system, networking, cryptography, and other system resources. These modules make it easy to perform common tasks without requiring additional dependencies.</li>
                  <li>Large community: Node.js has a large and active community of developers, who contribute to the development of the core Node.js platform, as well as a wide range of third-party modules.</li>
                </ul>
                <h5 id='css-head'>Command Line Arguments in Nodejs
                </h5>
                <iframe width="700" height="315" src="https://www.youtube.com/embed/NXmjXkEckq4?si=KPcgWDf670eGuMwG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <ul>
                <li>The first element of the process.argv array is always the path to the Node.js executable.</li>
                <li>The second element is always the path to the JavaScript file being executed.</li>
                <li>The subsequent elements of the array are any additional command-line arguments passed to the program.</li>
              </ul>
              </div>
              </div>
                {/* second slide */}
                <div class='col-lg-12 col-md-6 col-12'>
                  <br />
                 <div class='node-text'>
                    <h5 id='css-head'>First Web App in Nodejs</h5>
                    <h6>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows JavaScript code to run on the server-side. Node.js also provides built-in modules, such as the http module, which allows you to create a server and handle HTTP requests and responses.</h6>
                    <h6>To create a Node.js server with HTTP, you can use the http.createServer() method, which takes a callback function that gets called every time the server receives an HTTP request</h6>
                    <h6>Here's an example of how to create a simple Node.js server with HTTP:</h6>
                    <h6>In this example, we first import the http module. Then we create a server using the http.createServer() method, which takes a callback function that receives two arguments: a request object and a response object.</h6>
                    <h6>In the callback function, we set the status code and the Content-Type header of the response to indicate that the response will be plain text. We then send the string "Hello World!" as the response body using the res.end() method.</h6>
                    <h6>Finally, we start the server listening on port 3000 using the server.listen() method, which takes a port number and an optional callback function that gets called when the server starts listening.</h6>
                    <h6>When you run this program, you can access the server by opening a web browser and navigating to http://localhost:3000. You should see the message "Hello World!" displayed in the browser.</h6>
                    <h6>This is a very basic example of how to create a Node.js server with HTTP. You can add more functionality to your server by using other modules or by defining your own functions and routes.</h6>
                    <h5 id='css-head'>Why Port 3000 in Nodejs</h5>
                    <h6>Web servers listen for HTTP requests on port 80 and HTTPS requests on port443. You can set a different port, but you must specify it on the URL.</h6>
                    <h5 id='css-head'>Using the standard ports has drawbacks :</h5>
                    <ul>
                      <li>They may be in use by other software, such as other web servers or Skype.</li>
                      <li>Linux and macOS block apps listening on ports below 1000 unless they’re launched by a superuser. This grants your script unlimited rights, where it could do anything such as wiping your OS or posting passwords to Twitter. Remember, you’re running your code as well as hidden code inside Node.js and any modules you’ve installed</li>

                    </ul>
                    <h6>It’s safer to run web applications with standard permissions on a higher port.Live production servers can use a web server such as NGINX to forwardrequests to Node.js.

</h6><iframe width="700" height="315" src="https://www.youtube.com/embed/IUtpkHpaXg0?si=j0kB7DPPT_3RerdF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 <h5 id='css-head'>Type of Modules</h5>
                 <ul>
                  <li>Local modules: </li>
                  <li>Built-in modules:</li>
                  <li>Third-party modules:</li>
                 </ul>
                 </div>
                </div>

</div>
   
<div class='more'>
        <a href="#upnode"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div> <hr id='upexpress'/><hr id='S-express'/><br /><br /><br /><br /><br /><br />   
</section>
{/* section express */}
<section id='S-express'>
       <div class='container'>
        
          <div class='col-lg-12 col-md-6 col-12'>
          {/* <i class="fa-brands fa-fedex" id='express'><h5>EXPRESS</h5></i> */}
          <img src="/image/Express.png" alt="" id='e-icon'/>
        
          </div>
          <div class='col-lg-12 col-md-6 col-12'>
          <iframe width="700" height="315" src="https://www.youtube.com/embed/NsEtMuMjDAc?si=_EBEuCE9iZH_Zlb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div class='col-lg-12 col-md-6 col-12'>
           <div class='express-text'>
               <h5 id='css-head'>Node.js - Express Framework</h5>
               <h6>Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework.</h6>
               <ul>
                <li>Allows to set up middle wares to respond to HTTP Requests.</li>
                <li>Defines a routing table which is used to perform different actions based on HTTP Method and URL.</li>
                <li>Allows to dynamically render HTML Pages based on passing arguments to templates.</li>
               </ul>
               <h6>In this chapter, we will learn how to start developing and using the Express Framework. To start with, you should have the Node and the npm (node package manager) installed. If you don’t already have these, go to the Node setup to install node on your local system. Confirm that node and npm are installed by running the following commands in your terminal.</h6>
               <h5 id='css-head'>node --version <br />
               npm --version</h5>
               <h6>You should get an output similar to the following.</h6>
               <h5 id='css-head'>v5.0.0 <br />
               3.5.2</h5>
               <h6>Now that we have Node and npm set up, let us understand what npm is and how to use it.</h6>
               <h5 id='css-head'>Node Package Manager(npm)</h5>
               <h6>npm is the package manager for node. The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community. npm allows us to access all these packages and install them locally. You can browse through the list of packages available on npm at npmJS.</h6>
               <h5 id='css-head'>How to use npm?</h5>
               <h6>There are two ways to install a package using npm: globally and locally.</h6>
               <ul>
                <li>Globally − This method is generally used to install development tools and CLI based packages. To install a package globally, use the following code.</li><br />
                <b>npm install -g &lt;package-name&gt;</b>
                <li>Locally − This method is generally used to install frameworks and libraries. A locally installed package can be used only within the directory it is installed. To install a package locally, use the same command as above without the -g flag.</li><br />
                <b>npm install &lt;package-name&gt;</b>
               </ul>
               <h6>Whenever we create a project using npm, we need to provide a package.json file, which has all the details about our project. npm makes it easy for us to set up this file. Let us set up our development project.</h6>

           </div>
          </div>
           {/* second slide */}
           <div class='col-lg-12 col-md-6 col-12'>
            <div class='express-text'>
              <br />
            <h5 id='css-head'>How the App Works?</h5>
            <h6>The first line imports Express in our file, we have access to it through the variable Express. We use it to create an application and assign it to var app.</h6>
            <h6>app.get(route, callback)</h6>
            <h6>This function tells what to do when a get request at the given route is called. The callback function has 2 parameters, request(req) and response(res). The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc. Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.</h6>
            <h6>res.send()</h6>
            <h6>This function takes an object as input and it sends this to the requesting client. Here we are sending the string "Hello World!".</h6>
            <h6>app.listen(port, [host], [backlog], [callback])</h6>
            <h6>This function binds and listens for connections on the specified host and port. Port is the only required parameter here.</h6>
            <table class='table table-striped table-hover'>
              <table>
                <tr>
                  <th>S.No.</th>
                  <th>Argument & Description</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>	
port <br />

A port number on which the server should accept incoming requests.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>	
host <br />

Name of the domain. You need to set it when you deploy your apps to the cloud.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>backlog <br />

The maximum number of queued pending connections. The default is 511.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>	
callback <br />

An asynchronous function that is called when the server starts listening for requests.</td>
                </tr>
              </table>
            </table>
            <h6>Web frameworks provide resources such as HTML pages, scripts, images, etc. at different routes.

The following function is used to define routes in an Express application −</h6>
<h6>app.method(path, handler)
</h6>
<h6>This METHOD can be applied to any one of the HTTP verbs – get, set, put, delete. An alternate method also exists, which executes independent of the request type.</h6>
<h6>Path is the route at which the request will run.</h6>
<h6>Handler is a callback function that executes when a matching request type is found on the relevant route. For example,</h6>
           </div>
           </div>

 </div>

<div class='more'>
        <a href="#upexpress"><b class='last'>More the information click above the video</b><i class="fa-solid fa-arrow-up" id='above'></i></a>
       </div> <hr /><hr /><br /><br /><br /> <h1 id='happy'>H&nbsp;&nbsp;a&nbsp;&nbsp;p&nbsp;&nbsp;p&nbsp;&nbsp;y&nbsp;&nbsp; C&nbsp;&nbsp;o&nbsp;&nbsp;d&nbsp;&nbsp;i&nbsp;&nbsp;n&nbsp;&nbsp;g!</h1> <br /><br /><br />
</section>














        </div>
    )
}
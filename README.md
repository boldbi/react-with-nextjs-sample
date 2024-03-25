# Bold BI Embedded Sample in React with Next.js

This project was created using React with Next.js. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

![Dashboard View](https://github.com/boldbi/aspnet-core-sample/assets/91586758/af9a9d3f-3ebc-49dd-9bba-a061932cb9f6)

## Prerequisites
 
 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 > **NOTE:** Node.js v20.9.0 to v20.11.1 are supported

 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

 ## Configuration

  * Please [get](https://github.com/boldbi/react-with-nextjs-sample/tree/master/react-next-js-sample) the React with Next.js sample from GitHub. 

  * To set the following properties in the `.env` file, follow these instructions:
    
    ![EmbedConfig image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/211892af-3ed9-4e9b-936b-08a3beac43ec)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">SERVER_URL</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1)</td>
        </tr>
        <tr>
            <td align="left">DASHBOARD_ID</td>
            <td align="left">Provide the dashboard Id of the dashboard that you want to embed here.</td>
        </tr>
        <tr>
            <td align="left">USER_EMAIL</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboard.</td>
        </tr>
        <tr>
        <td align="left">EMBED_SECRET</td>
            <td align="left">Get your EmbedSecret key from embed tab by enabling <code>Enable embed authentication</code> in the <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a>. </td>
        </tr>   
    </tbody>
    </table>   

## Run a Sample Using Command Line Interface

  1. Open the command line interface and navigate to the specified folder [location](https://github.com/boldbi/react-with-nextjs-sample/tree/master/react-next-js-sample) where the project is located.

  2. To install all dependent packages, use the following command `npm install`.
  
  3. Finally, run the application using the command `npm run dev`. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:3000/). Copy this URL and paste it into your default web browser.
  
 ## Developer IDE

  * [Visual Studio Code](https://code.visualstudio.com/download)

## Run a Sample Using Visual Studio Code

  1. Open the folder [react-nextjs-sample](https://github.com/boldbi/react-with-nextjs-sample/tree/master/react-next-js-sample) in **Visual Studio Code**.

  2. Open the terminal in Visual Studio Code and install all dependent packages using the following command `npm install`.
  
  3. To run the application, use the command `npm run dev` in the terminal. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:3000/). Copy this URL and paste it into your default web browser.
    
      ![dashboard image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/af9a9d3f-3ebc-49dd-9bba-a061932cb9f6)

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best if you considered using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
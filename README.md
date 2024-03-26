# Bold BI Embedded Sample in React with Next.js

This project was created using React with Next.js. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

![reactnextjs_dashboard](https://github.com/boldbi/react-with-nextjs-sample/assets/129487075/2925724b-f2d8-4e4e-ae1f-8046e9c4eee9)

## Prerequisites
 
 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 > **NOTE:** Node.js v20.9.0 to v20.11.1 are supported

 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

 ## Configuration 

  * To set the following properties in the `.env` file, follow these instructions:
    
    ![reactnextjs_env](https://github.com/boldbi/react-with-nextjs-sample/assets/129487075/c997f9b9-bea3-4aa1-afdb-b8c7e5c143e7)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">SERVER_URL</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:50000/bi/site/site1)</td>
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

  1. Open the command line interface and navigate to the specified folder [location](https://github.com/boldbi/react-with-nextjs-sample/tree/master/react-nextjs-sample) where the project is located.

  2. To install all dependent packages, use the following command `npm install`.
  
  3. Finally, run the application using the command `npm run dev`. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:3000/). Copy this URL and paste it into your default web browser.
  
 ## Developer IDE

  * [Visual Studio Code](https://code.visualstudio.com/download)

## Run a Sample Using Visual Studio Code

  1. Open the folder [react-nextjs-sample](https://github.com/boldbi/react-with-nextjs-sample/tree/master/react-nextjs-sample) in **Visual Studio Code**.

  2. Open the terminal in Visual Studio Code and install all dependent packages using the following command `npm install`.
  
  3. To run the application, use the command `npm run dev` in the terminal. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:3000/). Copy this URL and paste it into your default web browser.
    
      ![reactnextjs_dashboard](https://github.com/boldbi/react-with-nextjs-sample/assets/129487075/d1c813b9-49e1-4711-a0e4-98cab18c87b4)

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best if you considered using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).

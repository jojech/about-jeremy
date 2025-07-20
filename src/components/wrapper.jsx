export default function Wrapper({ title, description = "", children, className = "" }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content="software development, web development, cloud architecture, candidate, portfolio"></meta>

        <meta charset="utf-8"></meta>
        <meta name="author" content="Jeremy Johnson"></meta>
        
        {/* MOBILE VIEW */}
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        
        {/* FONTS AND FONTAWESOME */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/0e8ac325b5.js" crossorigin="anonymous"></script>
        
        {/* STYLESHEETS AND SCRIPTS */}
        <link rel="stylesheet" href="/assets/style.css" />
        <script src="/assets/script.js"></script>
      </head>
      <body>
        <div className={"wrapper " + className}>
          {children}
        </div>
      </body>
    </html>
  )
}
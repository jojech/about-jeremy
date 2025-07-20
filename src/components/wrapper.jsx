export default function Wrapper({ title, children, className = "" }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/0e8ac325b5.js" crossorigin="anonymous"></script>
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
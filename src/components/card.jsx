export default function Card({ children, className = "" }) {
  return (
    <div className={"card " + className}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = "" }) {
  return (
    <h2 className={"card__title " + className}>
      {children}
    </h2>
  )
}

export function CardSubTitle({ children, className = "" }) {
  return (
    <h4 className={"card__subtitle " + className}>
      {children}
    </h4>
  )
}
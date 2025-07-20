export default function Avatar({ src = "/assets/avatar_2.jpg", alt = "Avatar", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={"avatar " + className}
      loading="lazy"
    />
  )
}
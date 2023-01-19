const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill('')
        .map((e) => (
          <div className="skeleton shimmer-card"></div>
        ))}
    </div>
  )
}

export default Shimmer
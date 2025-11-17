export default function Heading({ title = 'Tiêu đề mặc định' }) {
  return (
    <h2 className="text-blue-600 font-bold text-3xl uppercase border-b-4 border-orange-400 pb-2">
      {title}
    </h2>
  )
}

interface NavigationProps {
  sections: string[]
  onClick: (i: number) => void
}

function Navigation({ sections, onClick }: NavigationProps) {
  return (
    <nav className="navigation">
      {sections.map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className="px-12 py-2 cursor-pointer text-white"
        >
          {sections[i]}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
